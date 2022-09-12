import Title from '../components/Title'
export default function textrepeater() {
 return (
  <>
   <Title title="numbers-to-words-converter" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"/>
<br/>
<div className="container p-2">
<h1> Conveting Numbers Into Their Word Form
</h1>
<pr> Enter Number:</pr>
<input className="form-control" id="number" type="text"
  placeholder="Enter Number"/>
<br />



<button  className="btn btn-primary"><i className="fa fa-angle-double-down"></i> Convert Number to Word</button>

<br />
<pr> See Words:</pr><textarea readOnly className="form-control p-2" id="tb" name="tb"
  placeholder="Converted Word Appear Here"> </textarea>
<br/>
<button className="btn btn-primary bt" data-clipboard-target="#tb"><i className="fa fa-clone"></i> Copy Word</button>



<br/>
<h1>What Is Number To Word Converter?</h1>
<p>Hey user, if you are want to convert your number to word then you are on the right website.</p>
<br/>
<h1>How To Use Number to word Converter?</h1>
<p>You type in input box your number and click number to word then you see result below. </p>


</div>
  <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js'></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script src='/js/reverse-text/js.js'></script>
  </>
 )
}