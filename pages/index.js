export default function Home() {
 return (
  <>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />
<style>


</style>
 <div className='mx-auto'>
 <table className="border-separate border-spacing-2 border border-slate-400 table-auto w-full">
  <thead>
    <tr>
      <th className="">State</th>
      <th className="">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="">Indiana</td>
      <td className="">Indianapolis</td>
    </tr>
    <tr>
      <td className="">Ohio</td>
      <td className="">Columbus</td>
    </tr>
    <tr>
      <td className="">Michigan</td>
      <td className="">Detroit</td>
    </tr>
  </tbody>
</table>
  <h1 className="bg-red-500 m-4 rounded p-4">
      Hello world
    </h1>

    



<div className="bg-gray-100 rounded border border-gray-200 flex items-center justify-between w-auto m-3"><input type="text" placeholder="Email" Value="jack@frontier.com" className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-fit" /> <button className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none">Submit</button></div>

  </div>

     </>
 )
}