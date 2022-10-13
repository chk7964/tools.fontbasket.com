import React from 'react';

import { ToastContainer, toast } from '@martinadamec/react-toastify';
import '@martinadamec/react-toastify/dist/ReactToastify.css';

export default function About() {
    const notify = (e) =>  {
      toast("Wow so easy !");
        console.log('Free pizza!');
    }
    return (
     <>
 <div>
 
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>   </>
    )
   }