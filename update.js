import React, { useState } from "react";
import axios from "axios";
 
export function Update(){

    const[updated,setUpdated]=useState({productname:"",productprice:"",producttype:"",productdescrip:""})


    const updateUser = () => {
        console.log(updated.productname,updated.productprice,updated.producttype,updated.productdescrip);

        axios.put(`http://localhost:3002/products/${updated.productname}`,{
            productname:updated.productname,productprice:updated.productprice,producttype:updated.producttype,productdescrip:updated.productdescrip
        }).then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        })
        
   
    }
    return(
    <>
        
        <div className="col-7 p-5 bg-primary mx-3">
                    
                    <input type="text" className="form-control" placeholder="Enter update productname" onChange={a => setUpdated({...updated,productname:a.target.value})}/><br/>
                    <input type="text" className="form-control" placeholder="Enter update productprice" onChange={a => setUpdated({...updated,productprice:a.target.value})}/><br/>
                    <input type="text" className="form-control" placeholder="Enter update producttype" onChange={a => setUpdated({...updated,producttype:a.target.value})}/><br/>
                    <textarea type="text" className="form-control" placeholder="Enter update productdescrip" onChange={a => setUpdated({...updated,productdescrip:a.target.value})}></textarea>
                    <br/>
                 <button className="btn btn-success"  onClick={updateUser}>save changes</button>
                </div>
    </>

    );
}