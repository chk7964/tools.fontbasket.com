import Head from 'next/head'
export default function lowercase() {
 return (
  <>
  <Head>
    <title>
    Lower Case Text Converter
    </title>
  </Head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"/>
<br/>
<div className="container p-2" >
    <div className="p-1">
      <textarea className="border border-red-500 w-full rounded p-2" rows="5" id="k" placeholder="Enter Your Text"></textarea>
  
    </div>
  <div className="text-center">
    <button className="bg-green-500 rounded text-white p-2 px-4" id="b">Convert </button>
  </div>
  <div className="p-1">
    <textarea readOnly className="border border-red-500 w-full rounded p-2" rows="5" id="result" placeholder="Enter Your Text"></textarea>
  </div>
  <div className="text-center">
    <button className="bg-green-500 rounded text-white p-2 px-4 bt" data-clipboard-target="#result">Copy</button>
  </div>
  


      
  

    <br/>
    <h1 className='text-xl font-bold'>What Is Lower Case Text Converter?</h1>
    <p className="text-justify">Hey user, if you are want to convert your text in Lower Case letter then you are on the right website here you can convert your text in Lower Case.</p>
  <br/>
  <h1 className='text-xl font-bold'>How To Use  Lower Case Text Converter?</h1>
    <p className="text-justify">First enter your text or paste your text in the first box and click the convert button and see the result below. Now you can copy your text by clicking the copy button.</p>
  
 
  </div>
  <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js' defer ></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" defer ></script>
<script src='/js/lower-case/js.js' defer ></script>
  </>
 )
}