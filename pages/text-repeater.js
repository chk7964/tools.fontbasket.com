import Head from 'next/head'
export default function textrepeater() {
  return (
    <>
<Head>
<title>Text Reapeater</title>

</Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />
      <br />
      <div className="container">
        <textarea className="border border-red-500 w-full rounded p-2" id="text" placeholder="Enter Text" autoComplete="off" rows="5"></textarea>
        <div className="d-inline-flex ">
          <div className="p-2">
            <b>WORDS:</b>
            <b id="words">0</b>
          </div>
          <div className="p-2">
            <b>CHARACTERS:</b>
            <b id="characters">0</b>
          </div>
        </div>
        <br />
        <input className="border border-red-500 w-full rounded p-2" cols="25" type="number" id="number" inputMode="numeric" placeholder="Enter Repetitions Number"
          autoComplete="off" />
        <br />
        <div className="m-1">
          <button className=" bg-green-500 rounded text-white p-2 px-4 m-2" type="button" id="repeatButton1"><i className="fa fa-angle-double-down"></i> Repeat (New
            Line)</button>
          <button className="bg-green-500 rounded text-white p-2 px-4" type="button" id="repeatButton2"><i className="fa fa-angle-double-right"></i> Repeat
            (Same Line)</button>
        </div>
        <br />
        <textarea className="border border-red-500 w-full rounded p-2" id="text1" placeholder="Output Here" autoComplete="off" rows="5"></textarea>
        <br />
        <div>
          <button className="bg-green-500 rounded text-white p-2 px-4 bt" type="button" data-clipboard-target="#text1"><i className="fa fa-clone"></i> Copy</button>
          <button className="bg-green-500 rounded text-white p-2 px-4 m-2" type="reset" id="reset"><i className="fa fa-refresh"></i> Reset</button>
        </div>
        <br />

        <br />
        <h1 className='text-xl font-bold'>What Is Text Repeater?</h1>
        <p className="italic">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>
        <br />
        <h1 className='text-xl font-bold'>How To Use Text Repeater?</h1>
        <p className="italic">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>
      </div>

      <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js'></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
      <script src="/js/text-repeater/js.js"></script>

    </>
  )
}