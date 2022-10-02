import Head from 'next/head'
export default function numberstowordsconverter() {
 return (
  <>
  <Head>
    <title>Number To Word Converter</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"/>
  </Head>
   
<br/>
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
<button className="bg-green-500 rounded text-white p-2 px-4 bt" data-clipboard-target="#tb"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
</svg>
&nbsp; Copy Word</button>



<br/>
<h1 className='text-xl font-bold'>What Is Number To Word Converter?</h1>
<p className='italic'>Hey user, if you want to convert your number to word then you are on the right website. This website is totally free.</p>
<br/>
<h1 className='text-xl font-bold'>How To Use Number to word Converter?</h1>
<p className='italic'>Enter your number or paste your number in the box and click number to word button then you see the result below. </p>



  <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js' defer ></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" defer ></script>
<script src='/js/numbers-to-words-converter/js.js' defer ></script>
  </>
 )
}