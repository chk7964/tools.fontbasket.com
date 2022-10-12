import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipboardJS from 'clipboard';
import $ from "jquery";

export default function reversetext() {
  const copy = () =>  {     

    var clipboard = new ClipboardJS('.bt');

    clipboard.on('success', function (e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
      toast["success"]("Text Is Copied " + e.text)
    
      e.clearSelection();
      clipboard.destroy();
    });
    
    clipboard.on('error', function (e) {
      toast["warning"]("Output Is Empty");
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
      clipboard.destroy();
    });
  }

  const handleClick = (e) =>  {
    
    let str = document.getElementById("k").value;
    //   var string = str.toUpperCase();

      var string = str.split("").reverse().join("");
      $("#result").html(string);  
      console.log(string); 
}
 return (
  <>
  <Head>
    <title>Reverse Text Generator</title>
  </Head>
  <ToastContainer />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"/>
<br/>
    <div className="p-1">
      <textarea className="border border-red-500 w-full rounded p-2" rows="5" id="k" placeholder="Enter Your Text"></textarea>
  
    </div>
  <div className="text-center">
    <button onClick={handleClick} className="bg-green-500 rounded text-white p-2 px-4" id="b"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
</svg>
&nbsp;Convert </button>
  </div>
  <div className="p-1">
    <textarea readOnly className="border border-red-500 w-full rounded p-2" rows="5" id="result" placeholder="Enter Your Text"></textarea>
  </div>
  <div className="text-center">
    <button onClick={copy} className="bg-green-500 rounded text-white p-2 px-4 bt" data-clipboard-target="#result"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 inline">
  <path stroke-linecap="round" strokeLine="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
&nbsp; Copy</button>
  </div>
  


      
  

    <br/>
    <h1 className='text-xl font-bold'>What Is Reverse Text Generator?</h1>
    <p className="text-justify">Hey user, if you want to reverse your letter, emoji, and symbol then you are on the right website here you can reverse your text unlimited times.</p>
  <br/>
  <h1 className='text-xl font-bold'>How To Use Reverse Text Generator?</h1>
    <p className="text-justify">Our tool is simple for using. First enter or paste text symbol and emoji  in the first box then click the generate button and see the result in the box below. Now you can copy your text by clicking the copy button. Reverse text generator is mostly use for fun. </p>

 
  <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js' defer ></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" defer ></script>
{/* <script src='/js/reverse-text/js.js' defer ></script> */}
  </>
 )
}