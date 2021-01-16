import React, { useContext, useState } from 'react'
import {Contextapi} from './Shop'


const Productlist=()=>{

    const {cartdata}=useContext(Contextapi);
    const [cart, setcart]=cartdata;

    const [product , setproducts]=useState([
    {
        id:1,
        name:"Black Shirt",
        image:"1.jpg",
        price:100,
        category:"men",
        discription:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
    },


    {
        id:2,
        name:"White Shirt",
        image:"2.jpg",
        price:100,
        category:"men",
        discription:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
    },



    {
        id:3,
        name:"Stud Hoodie",
        image:"3.jpeg",
        price:100,
        category:"men",
        discription:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
    },



    {
        id:4,
        name:"Black Hoodie",
        image:"4.jpeg",
        price:100,
        category:"men",
        discription:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
    },



    {
        id:5,
        name:"Black Gown",
        image:"5.jpeg",
        price:100,
        category:"men",
        discription:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
    },



    {
        id:6,
        name:"White Gown",
        image:"6.png",
        price:100,
        category:"men",
        discription:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
    },



    {
        id:7,
        name:"Short Top",
        image:"7.jpg",
        price:100,
        category:"men",
        discription:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
    },



    {
        id:8,
        name:"White Short Top",
        image:"8.jpg",
        price:100,
        category:"men",
        discription:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
    },



    {
        id:9,
        name:"Black Shprt Top",
        image:"9.jpg",
        price:100,
        category:"men",
        discription:"What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?"
    }

]);



const handlecart=(e,f,g,h)=>{
        setcart((prev) => [...prev, {product:e , price: f, image: g , id: h} ]);
        console.log(cart);
}


    return(

<div>


<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">

        {product.map(pro => (  

                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={`/images/${pro.image}`} style={{backgroundSize : 'contain'}} />
                    </a>
                    <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{pro.category}</h3>
        
                       
                    
                    <h2 class="text-gray-900 title-font text-lg font-medium">{pro.name}</h2>

                     <button className="btn" onClick={(e) => {handlecart(pro.name,pro.price, pro.image, pro.id)}}>Add To Cart</button>
                    <p class="mt-1">Rs: {pro.price}</p>
                    </div>
                    </div>

                
            ))}


</div>
  </div>
</section>


        </div>

    );
}

export default Productlist