import { useRef, useState } from "react";

const Userlist=({electronics,skincare,food, remove})=>{
   
    const deleteHandler = (eachitem)=>{
       remove(eachitem);
       localStorage.removeItem(eachitem.id);
    
    }
    return<>
    <h1>Products</h1>
       <div>Skincare </div>
    
       {
        skincare.map((eachitem,index)=> <li  key={index}>
            {eachitem.item} price is{eachitem.price} and category {eachitem.option}
            <button onClick={()=>deleteHandler(eachitem)} >delete</button>
        </li>)
       }
       <div>


       <div>Electronics </div>
    
    {
     electronics.map((eachitem,index)=> <li key={index}>
          {eachitem.item} price is{eachitem.price} and category {eachitem.option}
         <button onClick={()=>deleteHandler(eachitem)}>delete</button>
     </li>)
    }
       </div>

       <div>
       <div>Food </div>
    
    {
     food.map((eachitem)=> <li key={eachitem.id}>
          {eachitem.item} price is{eachitem.price} and category {eachitem.option}
         <button onClick={()=>{deleteHandler(eachitem)}}>delete</button>
     </li>)
    }
       </div>
    </>
}

export default Userlist;