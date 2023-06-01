import React, { useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

const UpdateProduct=()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice] = React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');

    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        getProductDetails();
    },[]);

    const getProductDetails = async()=>{
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct = async ()=>{
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'PUT',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        navigate('/');
    }
    return(
        <div className="product">
            <h1>Update Product</h1>

            <input type = 'text' className="inputBox" placeholder="Enter Product Name"
            value = {name} onChange={(e)=>{setName(e.target.value)}} 
            />
            
            <input type = 'text' className="inputBox" placeholder="Enter Product Price"
            onChange={(e)=>{setPrice(e.target.value)}} value = {price}
            />
            

            <input type = 'text' className="inputBox" placeholder="Enter Product Category"
            onChange={(e)=>{setCategory(e.target.value)}} value = {category}
            />
            

            <input type = 'text' className="inputBox" placeholder="Enter Product Company"
            onChange={(e)=>{setCompany(e.target.value)}} value = {company}
            />
            


            <button type="button" onClick = {updateProduct} className="appButton">Update Product</button>
        </div>
    )
}

export default UpdateProduct;