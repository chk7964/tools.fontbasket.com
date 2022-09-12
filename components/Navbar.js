import Link from 'next/link'
export default function Navbar() {
 return (


  <div>
<div className="header">
  <p><a href="/">Tools Font Basket</a></p>
</div>

<div className="scrollmenu">
  <div className="menu">
  <a href="/">Home</a>
  <a href="/about">About</a>

  <a href="/text-repeater/">Text Repeater</a>
  <a href="/upper-case/">UpperCase Conveter</a>
  <a href="/shuffle-text/">Suffle Text </a>
  <a href="/reverse-text/">Reverse Text Converter</a>
  <a href="/lower-case/">LowerCase Text Converter</a>
  <a href="/invisible-character/">Invisible Text Generator</a>  
  <a href="/numbers-to-words-converter/">Number To Word Converter</a>
  <a href="/capitalize-case">CapitalizeCase Converter</a>
  <a href="/fancy-text">Fancy Text</a>
</div>
</div>
    
  </div>
 )
}