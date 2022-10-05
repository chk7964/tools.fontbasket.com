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
<button className="bg-green-500 rounded text-white p-2 px-4" id="b"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
  <path strokeLinecap="round" strokelinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
</svg>&nbsp; Convert </button>
</div>
<div className="p-1">
<textarea readOnly className="border border-red-500 w-full rounded p-2" rows="5" id="result" placeholder="Enter Your Text"></textarea>
</div>
<div className="text-center">
<button className="bg-green-500 rounded text-white p-2 px-4 bt" data-clipboard-target="#result"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline">
  <path strokeLinecap="round" strokelinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>&nbsp; Copy</button>
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