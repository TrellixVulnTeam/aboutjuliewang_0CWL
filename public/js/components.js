// LAYOUT COMPONENTS

class socialMediaContainer_column extends HTMLElement {
  connectedCallback() {
    this.innerHTML =  `
    <aside class="flex-column social-media-container">
     
    <a href="https://www.linkedin.com/in/juliewang-us/" target="_blank" class=""><i class='fab fa-linkedin'></i></a> 
    <a href="mailto:juliewang94@gmail.com" class=""><i class="fas fa-envelope"></i></a>
    <a href="https://github.com/juliewang-online" target="_blank" class=""><i class='my-btn flex-item github fab fa-github'></i></a> 
    <a href="/files/juliewang_resume.pdf" target="_blank" class=""><i class='fas fa-file-alt'></i></a> 
    </aside>
    `
  }       
}
customElements.define('social-media-container-column', socialMediaContainer_column)

class socialMediaContainer_row extends HTMLElement {
  connectedCallback() {
    this.innerHTML =  `
    <aside class="flex-row social-media-container">
      <a href="https://www.linkedin.com/in/juliewang-us/" target="_blank" class=""><i class='fab fa-linkedin'></i></a> 
      <a href="mailto:juliewang94@gmail.com" class=""><i class="fas fa-envelope"></i></a>
      <a href="https://github.com/juliewang-online" target="_blank" class=""><i class='my-btn flex-item github fab fa-github'></i></a> 
      <a href="/files/juliewang_resume.pdf" target="_blank" class=""><i class='fas fa-file-alt'></i></a> 
    </aside>
    `
  }       
}
customElements.define('social-media-container-row', socialMediaContainer_row)

class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML =  `
    <footer class="flex-row">
      <social-media-container-row></social-media-container-row>
      <a class="interal-link" href="/users/login">Login</a>
    </footer>
    `
  }       
}
customElements.define('my-footer', myFooter)

