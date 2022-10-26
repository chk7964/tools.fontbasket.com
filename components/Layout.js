import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Layout({ children }) {
 return (
  <>
   <Navbar />
   <div className="container mx-auto p-4 shadow-lg m-2 mb-12 rounded bg-slate-300">
   {/* <script async src="https://cse.google.com/cse.js?cx=e2b4020fc8a4042fd">
</script>
<div class="gcse-search"></div> */}
   <main>
    {children}
   </main>
   </div>
   <Footer />
  </>
 )
}