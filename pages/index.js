import Title from '../components/Title'
export default function Home() {
 return (
  <>
   <Title title="Home" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" />

 
 <div className='container'>
    <div className="p-1">
      <textarea className="form-control" rows="5" id="k" placeholder="Enter Your Text"></textarea>
  
    </div>
  <div className="text-center">
    <button className="btn btn-success" id="b"><i className="fa fa-angle-double-down"></i> Convert </button>
  </div>
  <div className="p-1">
    <textarea  className="form-control" rows="5" id="result" placeholder="Your Result Here"></textarea>
  </div>
  <div className="text-center">
    <button className="btn btn-success bt" data-clipboard-target="#result"><i className="fa fa-clone"></i> Copy</button>
  </div>
  </div>








 

  <script src="/js/word.js"></script>
  <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js'></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>

     </>
 )
}