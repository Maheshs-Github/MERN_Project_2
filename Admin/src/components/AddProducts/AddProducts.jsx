import React, { useRef, useState } from "react";
import Styles from "./AddProducts.module.css";
// import "bootstrap/scss/buttons";

const AddProducts = () => {
  const [Image, setImage] = useState(false);

  const name = useRef();
  const category = useRef();
  const image = useRef();
  const old_price = useRef();
  const new_price = useRef();

  const ImageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const AddProduct = async () => {
    let Product = {
      name: name.current.value,
      category: category.current.value,
      image: "",
      old_price: old_price.current.value,
      new_price: new_price.current.value,
    };

    console.log("product Details: (in AddProduct)", Product);

    const formData = new FormData();
    formData.append("product", Image);

    try {
      const uploadRes = await fetch(
        "https://mern-project-2-backend-mcjh.onrender.com/upload",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      const uploadData = await uploadRes.json();
      // console.log("Data 2: ", uploadData);

      if (uploadData.success) {
        Product.image = uploadData.image_url;
        // console.log("Image Upload is Successful");

        // 3. Send to database
        const res = await fetch(
          "https://mern-project-2-backend-mcjh.onrender.com/addproduct",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(Product),
          }
        );

        const dbData = await res.json();
        // console.log("Product Saved:", dbData);
        if (dbData.success) {
          alert("Product Added");
          (name.current.value = ""),
            (category.current.value = ""),
            setImage(false),
            (old_price.current.value = ""),
            (new_price.current.value = "");
        }
      } else {
        console.error("Image upload or Ading Product failed");
      }
    } catch (err) {
      console.error("Error uploading product:", err);
    }
  };
  return (
    <form
      className={Styles.AddBase}
      onSubmit={(e) => {
        e.preventDefault();
        // DetailsHandler(); // collects values from refs and updates ProductDetails
        AddProduct(); // uploads the image and sends to backend
      }}
    >
      <h3>Product Title</h3>
      <input type="text" placeholder="Enter Name" ref={name} />
      <div className={Styles.Price}>
        <div className="P1">
          <h3>Actual Price</h3>
          <input
            type="text"
            placeholder="Enter Original Price"
            ref={old_price}
          />
        </div>

        <div className="P2">
          <h3>Offer Price</h3>
          <input type="text" placeholder="Enter Offer Price" ref={new_price} />
        </div>
      </div>

      <h3>Product Category</h3>
      <select name="Cate" id="Cate" ref={category}>
        <option>Select Option</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kid">Kid</option>
      </select>
      <label htmlFor="File1">
        <img
          src={
            Image ? URL.createObjectURL(Image) : "/Admin_Assets/upload_area.svg"
          }
          // ref={image}
          alt=""
        />
      </label>

      <input
        type="file"
        name="File1"
        id="File1"
        hidden
        ref={image}
        // Both r valid way
        onChange={ImageHandler}
        // onChange={(e) => {
        //   ImageHandler(e);
        // }}
      />
      <button
        className={Styles.btn}
        // onClick={() => {
        //   console.log("Clicked");
        //   DetailsHandler();
        // }}
        onClick={(e) => {
          e.preventDefault(); // prevent form reload
          AddProduct(); // call your async function
        }}
      >
        ADD
      </button>
    </form>
  );
};

export default AddProducts;
