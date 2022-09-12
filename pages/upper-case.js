import Title from '../components/Title'
export default function uppercase() {
 return (
  <>
   <Title title="upper-case" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"/>
<br/>
<div className="container p-2" >
    <div className="p-1">
      <textarea className="form-control" rows="5" id="k" placeholder="Enter Your Text"></textarea>
  
    </div>
  <div className="text-center">
    <button className="btn btn-success" id="b"><i className="fa fa-angle-double-down"></i> Convert </button>
  </div>
  <div className="p-1">
    <textarea readonly className="form-control" rows="5" id="result" placeholder="Your Result Here"></textarea>
  </div>
  <div className="text-center">
    <button className="btn btn-success bt" data-clipboard-target="#result"><i className="fa fa-clone"></i> Copy</button>
  </div>
  


      
  

    <br/>
    <h1>What Is Upper Case Text Generator?</h1>
    <p className="text-justify">Hey user, If you want to convert your text in uppercase then you are on the right website. Here you can convert your any type text in Upper Case Text. </p>
  <br/>
  <h1>How To Use Upper Case Text Generator?</h1>
    <p className="text-justify">Here i will tell you how to use this tool. First for you copy your text who want to upper Case convert and paste or type here "Enter Your Text" box. Then you click convert button and see result in </p>
  
 
  </div>
  <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js'></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
<script src='/js/upper-case/js.js'></script>
  </>
 )
}