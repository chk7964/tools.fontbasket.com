import Head from 'next/head'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ClipboardJS from 'clipboard';
// import $ from "jquery";
// import React from 'react';


export default function lowercase() {

 return (
  <>
  <Head>
    <title>
    Lower Case Text Converter
    </title>
  </Head>
  {/* <ToastContainer /> */}
   {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"/> */}
<br/>
    <div className="p-1">
      <textarea className="border border-red-500 w-full rounded p-2" rows="5" id="k" placeholder="Enter Your Text"></textarea>
  
    </div>
  <div className="text-center">
    <button  className="bg-green-500 rounded text-white p-2 px-8" id="b"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
</svg>
&nbsp;Convert </button>
  </div>
  <div className="p-1">
    <textarea readOnly className="border border-red-500 w-full rounded p-2" rows="5" id="result" placeholder="Enter Your Text"></textarea>
  </div>
  <div className="text-center">
    <button  className="bg-green-500 rounded text-white p-2 px-8 bt" data-clipboard-target="#result"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
</svg>

&nbsp;Copy</button>
  </div>
  

    <br/>
    <h1 className='text-xl font-bold'>What Is Lower Case Text Converter?</h1>
    <p className="text-justify">Hey user, if you are want to convert your text in Lower Case letter then you are on the right website here you can convert your text in Lower Case.</p>
  <br/>
  <h1 className='text-xl font-bold'>How To Use  Lower Case Text Converter?</h1>
    <p className="text-justify">First enter your text or paste your text in the first box and click the convert button and see the result below. Now you can copy your text by clicking the copy button.</p>
  
 

  {/* <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js' defer ></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" defer ></script> */}
{/* <script src='/js/lower-case/js.js' defer ></script> */}
  </>
 )
}

