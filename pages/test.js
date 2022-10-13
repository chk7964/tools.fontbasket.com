import Toast from 'awesome-toast-component'

export default function About() {
    const notify = (e) =>  {
      new Toast('Hello world! 👋');
        console.log('Free pizza!');
    }
    return (
     <>
 <div>
        <button onClick={notify}>Notify!</button>
        {/* <ToastContainer /> */}
      </div>   </>
    )
   }