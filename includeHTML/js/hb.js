class MyHeader extends HTMLElement {
    connectedCallback ( ) {
      this.innerHTML = `
       
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"/>


<div class="header">
  <p>Tools Font Basket</p>
</div>

<div class="scrollmenu">
  <div class="menu">
  <a href="/">Home</a>
  <a href="/text-repeater/">Text Repeater</a>
  <a href="/upper-case/">UpperCase Conveter</a>
  <a href="/shuffle-text/">Suffle Text </a>
  <a href="/reverse-text/">Reverse Text Converter</a>
  <a href="/lower-case/">LowerCase Text Converter</a>
  <a href="/invisible-character/">Invisible Text Generator</a>  
  <a href="/numbers-to-words-converter/">Number To Word Converter</a>

</div>
</div>

<style>
  .header {  
     top: 0;
     width: 100%;
     background-color: red;
     color: white;
     text-align: center;
     font-size: 30px;
     font-weight: bold;

  }

  .header p {
    margin: 0;

  }

  div.scrollmenu {
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu a {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

div.scrollmenu a:hover {
  background-color: #777;
}

.menu{
  margin-left: 100px;

}
@media only screen and (max-width: 600px) {
  .menu {
    margin-left: 0px;
  }
}
  </style>
  `

    }
}
  customElements.define ('my-header' , MyHeader )