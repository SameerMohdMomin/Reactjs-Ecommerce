import React from 'react'
import {Contextapi} from './Shop'
import { useContext } from 'react'
import { Link } from "react-router-dom"

const Cart=()=>{

  const {cartdata , userdata}=useContext(Contextapi);
    
  const [cart, setcart]=cartdata;

    console.log(cart)

    const handle=(id)=>{
      const newList = cart.filter((cart) => cart.id !== id);
 
      setcart(newList);
    }
    return(

        <div>
        
        
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
        
                {cart.map(cart1 => (  
        
                            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={`/images/${cart1.image}`} style={{backgroundSize : 'contain'}}/>
                            </a>
                            <div class="mt-4">
                            {/* <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{cart1.category}</h3> */}
                
                                <button className="btn" onClick={(e) => {handle(cart1.id)}}>Remove Item</button>
                            
                            <h2 class="text-gray-900 title-font text-lg font-medium"> {cart1.product} {cart1.category}</h2>
                            <p class="mt-1">Rs: {cart1.price}</p>
                            </div>
                            </div>
          
                    ))}
        
        
        </div>
          </div>
        </section>


        <div>
             
                  <Link to='/'>
                  <button style={{backgroundColor:'green', width:'50%', padding:'20px'}}>Go To Shop</button>
                  </Link> <br />          

                  <button style={{backgroundColor:'green', width:'50%', padding:'20px', marginTop:'40px'}}>Checkout</button>
        </div>
        
    
                </div>
        
            );
        }

export default Cart