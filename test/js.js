class MyHeader extends HTMLElement {
    connectedCallback ( ) {
      this.innerHTML = `
        <header>
          <a href=index.html>
            <img src = # >
          </a>
          <nav>
            <ul>
              <li> <a href=index.html> Home </a>
              <li> <a href=about.html> About </a>
              <li> <a href=contact.html> Contact </a>
            </ul>
          </nav>
        </header>`

    }
}
  customElements.define ('my-header' , MyHeader )