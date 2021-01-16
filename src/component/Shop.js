import React, { createContext, useState } from 'react'




export const Contextapi=createContext([[],() => {}]);
export const Shop=(props)=>{

    const [cart , setcart]=useState([]);
    const [user,setuser]=useState([]);


    return(
        <div>
            <Contextapi.Provider value={  { cartdata : [cart,setcart], userdata : [user,setuser]} }> 
            
            
                    {props.children}
                
         
                 
                
            </Contextapi.Provider>


            
            
        </div>

    );
}

