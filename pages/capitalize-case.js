import Title from '../components/Title'
export default function textrepeater() {
 return (
  <>
   <Title title="upper-case" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"/>
<br/>
<div className="container p-2">

<h1>What Is Text Repeater?</h1>
<p className="text-justify">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>

<div className="p-1">
  <textarea className="form-control" rows="5" id="k" placeholder="Enter Your Text"></textarea>

</div>
<div className="text-center">
<button className="btn btn-success" id="b"><i className="fa fa-angle-double-down"></i> Convert </button>
</div>
<div className="p-1">
<textarea readOnly className="form-control" rows="5" id="result" placeholder="Enter Your Text"></textarea>
</div>
<div className="text-center">
<button className="btn btn-success bt" data-clipboard-target="#result"><i className="fa fa-clone"></i> Copy</button>
</div>



  


<br/>
<h1>What Is Text Repeater?</h1>
<p className="text-justify">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>
<br/>
<h1>How To Use Text Repeater?</h1>
<p className="text-justify">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>


</div>
  <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js'></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script src='/js/capitalize-case/js.js'></script>
  </>
 )
}