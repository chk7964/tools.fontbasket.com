import Title from '../components/Title'
export default function textrepeater() {
 return (
  <>
   <Title title="Suffle Text" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"/>
<br/>
   <div classNameName="container p-2">
    <div classNameName="p-1">
      <textarea classNameName="form-control" rows="5" id="k" placeholder="Enter Your Text"></textarea>
  
    </div>
  <div classNameName="text-center">
    <button classNameName="btn btn-success" id="b">Convert </button>
  </div>
  <div classNameName="p-1">
    <textarea readOnly classNameName="form-control" rows="5" id="result" placeholder="Enter Your Text"></textarea>
  </div>
  <div classNameName="text-center">
    <button classNameName="btn btn-success bt" data-clipboard-target="#result">Copy</button>
  </div>
  


  

    <br/>
    <h1>What Is Text Repeater?</h1>
    <p classNameName="text-justify">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>
  <br/>
  <h1>How To Use Text Repeater?</h1>
    <p classNameName="text-justify">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>
  
 
  </div>
  <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js'></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script src='/js/shuffle-text/js.js'></script>
  </>
 )
}