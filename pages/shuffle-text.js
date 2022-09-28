import Head from 'next/head'
export default function SuffleText() {
 return (
  <>
  <Head>
<title>
Shuffle Text
</title>

  </Head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"/>
<br/>
   <div className="container p-2">
    <div className="p-1">
      <textarea className="form-control" rows="5" id="k" placeholder="Enter Your Text"></textarea>
  
    </div>
  <div className="text-center">
    <button className="btn btn-success" id="b">Convert </button>
  </div>
  <div className="p-1">
    <textarea readOnly className="form-control" rows="5" id="result" placeholder="Enter Your Text"></textarea>
  </div>
  <div className="text-center">
    <button className="btn btn-success bt" data-clipboard-target="#result"><i className="fa fa-clone"></i> Copy</button>
  </div>
  


  

    <br/>
    <h1>What Is Shuffle Text Generator?</h1>
    <p className="text-justify">Hey user, if you are want to shuffle your letters, emoji, and symbol. then you are on the right website here you can shuffle your text unlimited times.</p>
  <br/>
  <h1>How To Use Shuffle Text Generator?</h1>
    <p className="text-justify">Enter Your words in text box then click shuffle text button and see result below box. Now you can copy your text by clicking copy button.</p>
  
 
  </div>
  <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js' defer ></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" defer ></script>
<script src='/js/shuffle-text/js.js' defer ></script>
  </>
 )
}