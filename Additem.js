import {useState} from 'react';

const Additem= (props)=>{
    
const [value,setValue]=useState({id:'', item:'', price:'', option:'Electronics'})
    const submitHandler = (event)=>{
     event.preventDefault();
     localStorage.setItem(value.id, JSON.stringify(value));
       props.data(value);
    }

    const idchangeHandler =(event)=>{
        setValue((pre)=>({...pre, id:event.target.value}))
    }

    const itemchangeHandler =(event)=>{
        setValue((pre)=>({...pre, item:event.target.value}))
    }

    const pricechangeHandler =(event)=>{
        setValue((pre)=>({...pre, price:event.target.value}))
    }

    const optionchangeHandler =(event)=>{
        setValue((pre)=>({...pre, option:event.target.value}))
    }

    return <>
    <form onSubmit={submitHandler}>
    <label>Product id</label>
    <input type="number" value={value.id} onChange={idchangeHandler}/>

    <label>Product Name</label>
    <input type="text" value={value.item} onChange={itemchangeHandler} />

    <label>Selling Price</label>
    <input type="number" value={value.price} onChange={pricechangeHandler}/>
    <label>Choose a Category</label>
    <select onChange={optionchangeHandler}>
        <option>Electronics</option>
        <option>Food</option>
        <option>Skincare</option>
    </select>

    <button>Add Product</button>
    </form>
    </>
}

export default Additem;