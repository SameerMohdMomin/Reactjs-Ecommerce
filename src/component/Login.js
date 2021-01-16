import React, { useContext, useState } from 'react'
import firebase from 'firebase'
import {Contextapi} from './Shop'

const Login=()=>{

  const {userdata}=useContext(Contextapi);
    const [user,setuser]=userdata;
  // console.log(user)
    const onsubmit=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();


        var firebaseConfig = {
          apiKey: "AIzaSyDYMWUl7fgHElt9ZBuukB_00jIRPd-iliY",
          authDomain: "reactjs-627dc.firebaseapp.com",
          projectId: "reactjs-627dc",
          storageBucket: "reactjs-627dc.appspot.com",
          messagingSenderId: "956440349404",
          appId: "1:956440349404:web:997a0f4025078e3d0a8219",
          measurementId: "G-Q95MNKH9ZQ"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();


        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
        //   /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // var button=<button>logout</button>;
                                    
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          setuser((prev) => [...prev, { user_token : result.user.displayName} ]);
          // console.log(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // var button=<button onClick={onsubmit}>Login / Register</button>;
          // ...x
        });


        
        
    }

    const handlelogout=()=>{
      setuser([])
      console.log(user)
    }

    return(

        <div>     
                  {user[0]?
                  (
                 
                     <button onClick={handlelogout} style={{backgroundColor:'green', width:'50%', padding:'20px', marginTop:'50px'}}>
                     Logout
                     </button>
                  )  
                  :
                  (
                    <button onClick={onsubmit} style={{backgroundColor:'green', width:'50%', padding:'20px', marginTop:'50px'}}>
                    Login With Google
                    </button>
                  )
                }

        </div>

    );
}

export default Login


