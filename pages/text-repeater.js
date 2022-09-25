export default function textrepeater() {
  return (
    <>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />
      <br />
      <div className="container">
        <textarea className="form-control border border-primary" id="text" placeholder="Enter Text" autoComplete="off" rows="5"></textarea>
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
        <input className="form-control border border-primary" cols="25" type="number" id="number" inputMode="numeric" placeholder="Enter Repetitions Number"
          autoComplete="off" />
        <br />
        <div className="m-1">
          <button className=" btn btn-primary pl-3 pr-3 m-1" type="button" id="repeatButton1"><i className="fa fa-angle-double-down"></i> Repeat (New
            Line)</button>
          <button className="btn btn-primary pl-3 pr-3 m-1" type="button" id="repeatButton2"><i className="fa fa-angle-double-right"></i> Repeat
            (Same Line)</button>
        </div>
        <br />
        <textarea className="form-control border border-primary" id="text1" placeholder="Output Here" autoComplete="off" rows="5"></textarea>
        <br />
        <div>
          <button className="btn btn-primary pl-3 pr-3 m-1 bt" type="button" data-clipboard-target="#text1"><i className="fa fa-clone"></i> Copy</button>
          <button className="btn btn-success pl-3 pr-3 m-1" type="reset" id="reset"><i className="fa fa-refresh"></i> Reset</button>
        </div>
        <br />

        <br />
        <h1>What Is Text Repeater?</h1>
        <p className="text-justify">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>
        <br />
        <h1>How To Use Text Repeater?</h1>
        <p className="text-justify">Hey user, if you are want to repeat letter, emoji, and symbol. then you are on the right website here you can repeat your text unlimited times.</p>
      </div>

      <script src='https://unpkg.com/clipboard@2.0.11/dist/clipboard.min.js'></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
      <script src="/js/text-repeater/js.js"></script>

    </>
  )
}