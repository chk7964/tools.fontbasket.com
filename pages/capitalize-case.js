import Head from 'next/head'
export default function capitalizecase() {
 return (
  <>
<Head>
<title>Capitalize Case Converter</title>
</Head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"/>

<br/>


<h1 className='text-xl font-bold'>What Is Capitalize Case Converter?</h1>
<p className="text-justify">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>

<div className="p-1">
  <textarea className="border border-red-500 w-full rounded p-2" rows="5" id="k" placeholder="Enter Your Text"></textarea>

</div>
<div className="text-center">
<button className="bg-green-500 rounded text-white p-2 px-4" id="b"><i className="fa fa-angle-double-down"></i> Convert </button>
</div>
<div className="p-1">
<textarea readOnly className="border border-red-500 w-full rounded p-2" rows="5" id="result" placeholder="Enter Your Text"></textarea>
</div>
<div className="text-center">
<button className="bg-green-500 rounded text-white p-2 px-4 bt" data-clipboard-target="#result"><i className="fa fa-clone"></i> Copy</button>
</div>



  


<br/>
<h1 className='text-xl font-bold'>What Is Text Repeater?</h1>
<p className="italic ">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>
<br/>
<h1 className='text-xl font-bold'>How To Use Text Repeater?</h1>
<p className="italic ">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>


  <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js' defer ></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" defer ></script>
<script src='/js/capitalize-case/js.js' defer ></script>
  </>
 )
}