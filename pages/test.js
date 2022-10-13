
import React, { isValidElement, useRef, useLayoutEffect, useEffect, cloneElement, useReducer, useState, forwardRef } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function About() {
    const notify = (e) =>  {
//  toast("Wow so easy!");
        console.log('Free pizza!');
    }
    return (
     <>
 <div>
        <button onClick={notify}>Notify!</button>
        {/* <ToastContainer /> */}
      </div>   </>
    )
   }