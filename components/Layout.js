import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Layout({ children }) {
 return (
  <>
   <Navbar />
   <div className="container mx-auto p-4 shadow-lg m-2 mb-12 rounded bg-slate-300">
   <main>
    {children}
   </main>
   </div>
   <Footer />
  </>
 )
}