import React from "react";
import { useNavigate } from "react-router-dom";

const AddProduct=()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');
    const [error,setError] = React.useState('false');

    const navigate = useNavigate();

    const addProduct = async ()=>{

        if (!name || !price || !category || !company){
            setError(true);
            return false;
        }
        console.warn(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product",{
            method : "post",
            body : JSON.stringify({name,price,category,userId,company}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if(result){
            navigate('/');
        }
    }
    return(
        <div className="product">
            <h1>Add Product</h1>

            <input type = 'text' className="inputBox" placeholder="Enter Product Name"
            onChange={(e)=>setName(e.target.value)} value = {name}
            />
            {error && !name && <span className="error">Enter valid Name</span>}
            <input type = 'text' className="inputBox" placeholder="Enter Product Price"
            onChange={(e)=>setPrice(e.target.value)} value = {price}
            />
            {error && !price && <span className="error">Enter valid Price</span>}

            <input type = 'text' className="inputBox" placeholder="Enter Product Category"
            onChange={(e)=>setCategory(e.target.value)} value = {category}
            />
            {error && !category && <span className="error">Enter valid category</span>}

            <input type = 'text' className="inputBox" placeholder="Enter Product Company"
            onChange={(e)=>setCompany(e.target.value)} value = {company}
            />
            {error && !company && <span className="error">Enter valid Company</span>}


            <button type="button" onClick = {addProduct} className="appButton">Add Product</button>
        </div>
    )
}

export default AddProduct;