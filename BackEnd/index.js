const express = require("express");
const app = express();
const Port = process.env.PORT || 4000;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
const { type } = require("os");
require("dotenv").config();

app.use(express.json());
app.use(cors());

//
//
// Mongoose DB connection

// mongoose.connect(
//   "mongodb+srv://maheshmane9075:Mahesh%40Studies25@cluster0.vthxc5z.mongodb.net/MERN_Project2?retryWrites=true&w=majority&appName=Cluster0/"
// );
mongoose.connect(process.env.MONGO_URI);

//
//
// To take the images
app.use("/images", express.static("uploads/images"));

const Stroage = multer.diskStorage({
  destination: "./uploads/images",
  filename: (req, file, cb) => {
    // return cb(
    //   null,
    //   `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    // );

    // We can write it as
    return cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage: Stroage });

app.post("/upload", upload.single("product"), (req, res) => {
  const protocol = req.protocol;
  const host = req.get("host"); // e.g. example.onrender.com
  const imageUrl = `${protocol}://${host}/images/${req.file.filename}`;
  res.json({
    success: 1,
    image_url: imageUrl,
  });
});

//
//
// Schema to create the Products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  avaliable: {
    type: Boolean,
    default: true,
  },
});

//
// User Schema and Model for User
const UserRecord = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

//
// MiddleWares
// MiddleWare to validate the User Sign Up
const ValidateSignUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Plz Fill All the Fields(i.e Name,Email & Password)",
    });
  }
  const isUserExist = await UserRecord.findOne({ email: email });

  if (isUserExist) {
    return res.status(409).json({
      success: false,
      message: "Email Already Exists",
    });
  }
  next();
};

// const ValidateLogin = async (req, res, next) => {
//   const { email, password } = req.body;
//   const ULValidate = await User.findOne({ email: email, password: password });
//   if (ULValidate) {
//     return res.status(200).json({
//       success: true,
//       message: "Credential are matched",
//     });
//   } else {
//     return res.status(400).json({
//       success: false,
//       message: "Credentials Do not match",
//     });
//   }
//   next();
// };

//
//
// routes
app.get("/", (req, res) => {
  res.send("Hello There, We able Successfully SetUp and Run the Project");
});

//
//
// Sign UP EndPoint
app.post("/signup", ValidateSignUp, async (req, res) => {
  try {
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const UserRecord1 = new UserRecord({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
    });
    console.log(UserRecord1);
    await UserRecord1.save();
    console.log("Saved");
    // res.json({
    //   success: true,
    //   name: req.body.name,
    // });

    const Data = {
      user: {
        id: UserRecord1._id,
      },
    };

    // const token = jwt.sign(Data, "secret_ecom");
    const token = jwt.sign(Data, process.env.JWT_SECRET || "secret_ecom");

    res.json({
      success: true,
      token,
      name: req.body.name,
      message: "Account Creation Successful",
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const ULValidate = await UserRecord.findOne({
    email: email,
    password: password,
  });
  console.log("Login Ans: ", ULValidate);
  if (ULValidate) {
    const Data = {
      user: {
        id: ULValidate._id,
      },
    };
    console.log("ID from Mongo: ", Data.user.id);

    const token = jwt.sign(Data, "secret_ecom");

    return res.status(200).json({
      success: true,
      token,
      message: "Credential are matched",
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "Credentials Do not match",
    });
  }
});

app.post("/addProduct", async (req, res) => {
  let Products = await Product.find({});
  let id;
  if (Products.length > 0) {
    let last_product_array = Products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  // console.log("Id: ", id);
  const ProductItem = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(ProductItem);
  await ProductItem.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//
//
// Remove Product Route
app.post("/removeProduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Deleted");
  res.json({
    success: true,
    id: req.body.id,
  });
});

//
// MiddleWare for fetch user
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).json({ error: "Access denied, no token provided" });
  }

  try {
    const verified = jwt.verify(token, "secret_ecom");
    const userId = verified.user.id;
    const { itemId } = req.body;

    req.user = { id: verified.user.id };

    if (req.body && req.body.itemId) {
      console.log(`User: ${verified.user.id} added Item: ${req.body.itemId}`);
    } else {
      console.log(`User: ${verified.user.id} authenticated`);
    }

    // res.json({
    //   success: true,
    //   message: "Item added to cart",
    //   id: verified.user.id,
    // });
    req.user.id = verified.user.id;
    next();
  } catch (err) {
    console.error("JWT Verification failed:", err);
    res.status(400).json({ error: "Invalid token" });
  }
};

app.post("/addToCart", fetchUser, async (req, res) => {
  try {
    const itemId = req.body.itemId;
    // console.log("Id: ", req.body.itemId);
    // console.log(": ", req.body);

    const userData = await UserRecord.findOne({ _id: req.user.id });

    // Ensure cartData is initialized and item exists
    if (!userData.cartData[itemId]) {
      userData.cartData[itemId] = 1;
    } else {
      userData.cartData[itemId] += 1;
    }

    await UserRecord.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );

    res.json({
      success: true,
      message: `Item ${itemId} added to cart`,
      cartData: userData.cartData,
    });
  } catch (err) {
    console.error("Error in /addToCart:", err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

//
// remove Cart Items
app.post("/removeFromCart", fetchUser, async (req, res) => {
  try {
    const itemId = req.body.itemId;
    console.log("Id: ", req.body.itemId);
    // console.log(": ", req.body);

    const userData = await UserRecord.findOne({ _id: req.user.id });

    // Ensure cartData is initialized and item exists
    if (!userData.cartData[itemId]) {
      userData.cartData[itemId] = 1;
    } else {
      userData.cartData[itemId] -= 1;
    }

    await UserRecord.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );

    res.json({
      success: true,
      message: `Item ${itemId} added to cart`,
      cartData: userData.cartData,
    });
  } catch (err) {
    console.error("Error in /addToCart:", err);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
});

//
//

//
// get Cart Data
app.post("/getCart", fetchUser, async (req, res) => {
  const userData = await UserRecord.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});

//
//
// All Products Route
app.get("/getAllProducts", async (req, res) => {
  const Ans = await Product.find({});
  // console.log(`All Produvts are: ${Ans}`);
  res.send(Ans);
});

//
// get New Collections endPoints
app.get("/getNewCollection", async (req, res) => {
  let Products = await Product.find({});
  // let NewCollection = Products.slice(1).slice(-8);
  let ShuffleData = Products.sort(() => 0.5 - Math.random());
  let NewCollection = ShuffleData.slice(0, 8);
  // console.log("New Collection is Fectched");
  res.send(NewCollection);
});

app.get("/getPopular", async (req, res) => {
  let WomenProducts = await Product.find({ category: "women" });

  let ShuffleData = WomenProducts.sort(() => 0.5 - Math.random());
  let Products = ShuffleData.slice(0, 4);
  // console.log("Data: ", ShuffleData);
  res.send(Products);
});

app.listen(Port, () => console.log(`Listening from the Port ${Port}`));
