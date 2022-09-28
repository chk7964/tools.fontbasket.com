import Head from 'next/head'
export default function numberstowordsconverter() {
 return (
  <>
  <Head>
    <title>Number To Word Converter</title>
  </Head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"/>
<br/>
<div className="container p-2">
<h1> Conveting Numbers Into Their Word Form
</h1>
<pr> Enter Number:</pr>
<input className="border border-red-500 w-full rounded p-2 m-2" id="number" type="text"
  placeholder="Enter Number" />
<br />



<button  className="bg-green-500 rounded text-white p-2 px-4" id="cword"><i className="fa fa-angle-double-down"></i> Convert Number to Word</button>

<br />
<pr> See Words:</pr><textarea className="border border-red-500 w-full rounded p-2" id="tb" name="tb"
  placeholder="Converted Word Appear Here"/>
<button className="bg-green-500 rounded text-white p-2 px-4 bt" data-clipboard-target="#tb"><i className="fa fa-clone"></i> Copy Word</button>



<br/>
<h1 className='text-xl font-bold'>What Is Number To Word Converter?</h1>
<p className='italic'>Hey user, if you want to convert your number to word then you are on the right website. This website is totally free.</p>
<br/>
<h1 className='text-xl font-bold'>How To Use Number to word Converter?</h1>
<p className='italic'>Enter your number or paste your number in the box and click number to word button then you see the result below. </p>


</div>
  <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js'></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script src='/js/numbers-to-words-converter/js.js'></script>
  </>
 )
}