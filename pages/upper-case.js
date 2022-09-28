import Head from 'next/head'
export default function uppercase() {
 return (
  <>
  <Head>
<title>Upper Case Converter</title>
</Head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"/>
<br/>
<div className="container p-2" >
    <div className="p-1">
      <textarea className="border border-red-500 w-full rounded p-2" rows="5" id="k" placeholder="Enter Your Text"></textarea>
  
    </div>
  <div className="text-center">
    <button className="bg-green-500 rounded text-white p-2 px-4" id="b"><i className="fa fa-angle-double-down"></i> Convert </button>
  </div>
  <div className="p-1">
    <textarea readOnly className="border border-red-500 w-full rounded p-2" rows="5" id="result" placeholder="Your Result Here"></textarea>
  </div>
  <div className="text-center">
    <button className="bg-green-500 rounded text-white p-2 px-4 bt" data-clipboard-target="#result"><i className="fa fa-clone"></i> Copy</button>
  </div>
  


      
  

    <br/>
    <h1 className='text-xl font-bold'>What Is Upper Case Text Generator?</h1>
    <p className="italic">Hey user, If you want to convert your text in uppercase then you are on the right website. Here you can convert your any type text in Upper Case Text. </p>
  <br/>
  <h1 className='text-xl font-bold'>How To Use Upper Case Text Generator?</h1>
    <p className="italic">Here i will tell you how to use this tool. First for you copy your text who want to upper Case convert and paste or type here "Enter Your Text" box. Then you click convert button and see result in </p>
  
 
  </div>
  <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js'></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script src='/js/upper-case/js.js'></script>
  </>
 )
}