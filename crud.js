import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export function Crud(){

    const[products,setProducts]=useState([]);
    const[productname,setProductname]=useState("");
    const[productprice,setProductprice]=useState("");
    const[producttype,setProducttype]=useState("");
    const[productdescrip,setProductdescrip]=useState("");

    const[updated,setUpdated]=useState({productname:"",productprice:"",producttype:"",productdescrip:""})
  
    useEffect(()=>{
    loadData();
  },[]);

  //get user from API................................
  const loadData = async () =>{
    const response = await axios.get(' http://localhost:3002/products');
    setProducts(response.data)
  }
// Add user to API.....................................
    const AddProduct = (a) =>{
        axios.post('http://localhost:3002/products',{
            productname,productprice,producttype,productdescrip
        }).then(() => {
            setProductname("");setProductprice("");setProducttype("");setProductdescrip("");
        }).catch((err) => {
            console.log(err);
        })
        window.location.reload()
        
        setTimeout(() => {
            loadData();
            
        },)  
    }
// Deleete user from api.............................................................

const deleteProduct = (productname) => {
    axios.delete(`http://localhost:3002/products/${productname}`);
    setTimeout(() => {
        loadData();
    },500)
    }
// update user to existing API..............................................

   

    return(
        <>
        
    <div className="col-6 mx-auto mt-5 bg-warning p-5">

        
          <input type="string" className="form-control"  placeholder="Product name" value={productname} onChange={a => setProductname(a.target.value)}/> <br/>
        <input type="number" className="form-control"  placeholder="Enter Price" value={productprice} onChange={a => setProductprice(a.target.value)}/>
        <label for="inputState" class="form-label">Category</label>
    <select  id="pcategory" class="form-select" value={producttype}  onChange={a => setProducttype(a.target.value)}>
      <option selected>Choose...</option>
      <option>Vegetables</option>
      <option>Fruits</option>
      <option>Nuts</option>
      <option>Diary</option>
      <option>Creams</option>
      <option>Package Food</option>
      <option>Staples</option>
    </select><br/>
        <textarea className="form-control" placeholder="Descripton" value={productdescrip} onChange={a => setProductdescrip(a.target.value)}></textarea>

        <input type="checkbox" className="form-check-input"/>
            <div className="p-2 d-flex justify-content-around">
            <button className="btn btn-success" onClick={AddProduct}>Add</button>
            </div>

            {products.map(a => (
            <div className=" col-12 bg-light mx-auto p-2" key={a.productname}>

              <div className="bg-primary col-8 mx-auto p-3">
           <h2 className="text-center"> {a.productname} {a.productprice} {a.producttype} {a.productdescrip}</h2> <br/>
                
               
                <div className="d-flex justify-content-around mt-3">
                   <Link className="btn btn-dark" to='/update' >update</Link>
                <button className="btn btn-danger " onClick={() => {deleteProduct(a.productname)}}>Delete</button>
                </div>
            </div>
            </div>
            ))}
    </div>
        </>
    );
}