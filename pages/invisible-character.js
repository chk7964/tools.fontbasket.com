import Title from '../components/Title'
export default function textrepeater() {
 return (
  <>
   <Title title="invisible-character" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"/>
<br/>
<div className="container p-2">
    <br/>
    <h1>What Is Text Repeater?</h1>
    <p className="text-justify">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>



    <input className="form-control border border-primary" cols="25" type="number" id="number" inputmode="numeric" placeholder="Enter Repetitions Number"
      autocomplete="off"/>

    <br/>
    <textarea className="form-control border border-primary" id="text1" placeholder="Output Here" autocomplete="off" rows="5"></textarea>
<br/>






<div className="">

  
    <button className=" btn btn-primary pl-3 pr-3 m-1" type="button" id="repeatButton1">Repeat (New
      Line)</button>



    <button className="btn btn-primary pl-3 pr-3 m-1" type="button" id="repeatButton2" onclick="repeatTextInSameLine()">Repeat
      (Same Line)</button>



    <button className="btn btn-primary pl-3 pr-3 m-1 bt" type="button" data-clipboard-target="#text1">Copy</button>



    <button className="btn btn-success pl-3 pr-3 m-1" type="reset" id="reset" onclick="resetFn()">Reset</button>
</div>
<br/>

    <br/>
    <h1>What Is Text Repeater?</h1>
    <p className="text-justify">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>
  <br/>
  <h1>How To Use Text Repeater?</h1>
    <p className="text-justify">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>
  
    <my-footer></my-footer>
  </div>
  <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js'></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script src='/js/invisible-character/js.js'></script>
  </>
 )
}