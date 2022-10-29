import Script from "next/script";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipboardJS from 'clipboard';

export default function About() {

    const handleClick = () => {
      // document.getElementById("converter").addEventListener("click", convert_to_unicode);
      document.getElementById("converter1").addEventListener("click", Convert_to_Kritidev_010);
      console.log('The link was clicked.');
      
    };
    const reset = () => {
      document.getElementById("legacy_text").value='';
      document.getElementById("unicode_text").value='';
      toast["success"]("Text Is Reset")
    }
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
  return (
  <>
   <ToastContainer />

  <div onClick={handleClick}>
  <Script src="../kruti.js"></Script>
	
	



  <textarea id="unicode_text" className="border border-red-500 w-full rounded p-2"></textarea>


	<div className="text-center">


  <button className="bg-green-500 p-2 m-2 rounded"  id="converter1" name="converter" >Unicode to Krutidev</button>
  </div>




<textarea  id="legacy_text" className="border border-red-500 w-full rounded p-2"></textarea>


<div className=" text-center">
  <button onClick={copy} className="bg-green-500 p-2 m-2 rounded  bt" data-clipboard-target="#legacy_text"> Copy</button>
  <button className="bg-green-500 p-2 m-2 rounded"   name="converter" onClick={reset}>Reset</button>
  </div>
<Script>

</Script>
<h1>Kruti Dev To Unicode Converter</h1>
<p>Kruti Dev to unicode converter is used to convert kruti dev text to unicode text.</p>
<h1>What is Kruti Dev?</h1>
<p>Kruti Dev is a hindi font. Kruti Dev Helps to type in hindi by english keyboard.</p>
<div className="text-center">
<button className="p-2 bg-green-500 "><a href="https://hindi.fontbasket.com/search/label/Kruti%20Dev"> Download Kruti Dev</a></button>
</div>
</div>
</>
)
}

