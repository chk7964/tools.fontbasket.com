import Head from 'next/head'
export default function reversetext() {
 return (
  <>
  <Head>
    <title>Reverse Text Generator</title>
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
    <button className="bg-green-500 rounded text-white p-2 px-4 bt" data-clipboard-target="#result"><i className="fa fa-clone"></i> Copy</button>
  </div>
  


      
  

    <br/>
    <h1 className='text-xl font-bold'>What Is Reverse Text Generator?</h1>
    <p className="text-justify">Hey user, if you want to reverse your letter, emoji, and symbol then you are on the right website here you can reverse your text unlimited times.</p>
  <br/>
  <h1 className='text-xl font-bold'>How To Use Reverse Text Generator?</h1>
    <p className="text-justify">Our tool is simple for using. First enter or paste text symbol and emoji  in the first box then click the generate button and see the result in the box below. Now you can copy your text by clicking the copy button. Reverse text generator is mostly use for fun. </p>

 
  </div>
  <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js' defer ></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" defer ></script>
<script src='/js/reverse-text/js.js' defer ></script>
  </>
 )
}