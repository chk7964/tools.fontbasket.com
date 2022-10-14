import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipboardJS from 'clipboard';
export default function uppercase() {

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

  // const convert = () =>  { 
  //   // let text = document.getElementById("k").value;
  //   // let result = text.toLocaleUpperCase();
  //   // $("#result").html(result); 
  //   console.log("Test");
  // }
 return (
  <>
  <Head>
<title>Upper Case Converter</title>
</Head>
<ToastContainer />


    {/* <div className="p-1">
      <textarea className="border border-red-500 w-full rounded p-2" rows="5" id="k" placeholder="Enter Your Text"></textarea>
  
    </div>
  <div className="text-center">
    <button className="bg-green-500 rounded text-white p-2 px-4" id="b"> Convert </button>
  </div> */}
  {/* <div className="p-1">
    <textarea  className="border border-red-500 w-full rounded p-2" rows="5" id="result" placeholder="Your Result Here"></textarea>
  </div> */}
  <div className="text-center">
    <button onClick={copy} className="bg-green-500 rounded text-white p-2 px-4 bt" data-clipboard-target="#result"> Copy</button>
  </div>
  


      
  

    {/* <br/>
    <h1 className='text-xl font-bold'>What Is Upper Case Text Generator?</h1>
    <p className="italic">Hey user, If you want to convert your text in uppercase then you are on the right website. Here you can convert your any type text in Upper Case Text. </p>
  <br/>
  <h1 className='text-xl font-bold'>How To Use Upper Case Text Generator?</h1>
    <p className="italic">Here i will tell you how to use this tool. First for you copy your text who want to upper Case convert and paste or type here "Enter Your Text" box. Then you click convert button and see result in </p>
   */}
  </>
 )
}