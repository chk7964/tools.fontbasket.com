import Head from 'next/head'
export default function invisiblecharacter() {
  return (
    <>
    <Head>
      <title>Invisible Text Generator</title>
    </Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />
      <br />
      <div className="container p-2">
        <br />
        <h1>What Is Text Repeater?</h1>
        <p className="text-justify">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>



        <input className="border border-red-500 w-full rounded p-2 mb-2" cols="25" type="number" id="number" inputMode="numeric" placeholder="Enter Repetitions Number"
          autoComplete="off" />

        <br />
        <textarea className="border border-red-500 w-full rounded p-2" id="text1" placeholder="Output Here" autoComplete="off" rows="5"></textarea>
        <br />

        <div className="">


          <button className="bg-green-500 rounded text-white p-2 px-4 m-2" type="button" id="repeatButton1">Repeat (New
            Line)</button>



          <button className="bg-green-500 rounded text-white p-2 px-4 m-2" type="button" id="repeatButton2" >Repeat
            (Same Line)</button>



          <button className="bg-green-500 rounded text-white p-2 px-4 m-2 bt" type="button" data-clipboard-target="#text1">Copy</button>



          <button className="bg-green-500 rounded text-white p-2 px-4 m-2" type="reset" id="reset">Reset</button>
        </div>
        <br />

        <br />
        <h1 className='text-xl font-bold'>What Is Invisible Text Generator?</h1>
        <p className="text-justify">Hey user, if you are want to generate invisible text then you are on the right website. Here you can generate your invisible text unlimited times.</p>
        <br />
        <h1 className='text-xl font-bold'>How To Use Invisible Text Generator?</h1>
        <p className="text-justify">Enter the number in the first box when you want to generate invisible text.</p>
      </div>
      <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js'></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
      <script src='/js/invisible-character/js.js'></script>
    </>
  )
}