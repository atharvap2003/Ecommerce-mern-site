import React, { useState } from "react";

const productupload = () => {
  const [productname, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("mobile");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  async function formSubmit(e) {
    const data = new FormData();
    data.set("productname", productname);
    data.set("description", description);
    data.set("file", file[0]);
    data.set("category", category);
    data.set("quantity", quantity);
    data.set("price", price);

    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/products/create", {
        method: "POST",
        body: data,
        credentials: "include",
      });
      if(response.ok){
        alert("Product Added Successfully");
        const data = await response.json();
        console.log("Product Data: ",data);
      }
      else{
        alert("Failed to add the Products!!");
        console.error("Failed to add the Products!!");
      }
      console.log(response);
    } catch (error) {
      alert(error)
      console.log("Error: ", error);
    }    
  };

  return (
    <div>
      <form className="flex flex-col m-6" onSubmit={formSubmit}>
        <label>Productname</label>
        <input
          type="text"
          value={productname}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <label>description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label htmlFor="">Image</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files)}
          required
        />
        <label htmlFor="">category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>mobile</option>
          <option>headphone</option>
          <option>computer</option>
          <option>laptop</option>
          <option>charger</option>
          <option>pc</option>
        </select>
        <label>Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit" className="p-2 m-2 w-20 bg-slate-100">Submit</button>
      </form>
    </div>
  );
};

export default productupload;
