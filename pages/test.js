import Script from "next/script";
export default function About() {

    const handleClick = () => {
      document.getElementById("converter").addEventListener("click", convert_to_unicode);
      document.getElementById("converter1").addEventListener("click", Convert_to_Kritidev_010);
      console.log('The link was clicked.');
    };
    const reset = () => {
      document.getElementById("legacy_text").value='';
      document.getElementById("unicode_text").value='';
    }

  return (
  <>
  <div onClick={handleClick}>
  <Script src="css.js"></Script>
	<textarea  id="legacy_text" className="border border-red-500 w-full rounded p-2"></textarea>
	



	<div className="flex">
  <button className="bg-green-500 p-4 m-2 rounded"   name="converter" id="converter"  >Krutidev to Unicode</button>

  <button className="bg-green-500 p-4 m-2 rounded"  id="converter1" name="converter" >Unicode to Krutidev</button>

  <button className="bg-green-500 p-4 m-2 rounded"   name="converter" onClick={reset}>Reset</button>
  </div>





<textarea id="unicode_text" className="border border-red-500 w-full rounded p-2"></textarea>


<h1> Kruti Dev To Unicode Converter</h1>
<p>Hello</p>
</div>
</>
)
}

