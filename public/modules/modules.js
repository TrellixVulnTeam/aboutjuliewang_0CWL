// LAYOUT COMPONENTS

class socialMediaContainer_column extends HTMLElement {
  connectedCallback() {
    this.innerHTML =  `
    <aside class="my-container flex-container flex-column my-btn-group grid-item-2 social-media-container">
     
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
    <aside class="flex-container flex-row my-btn-group grid-item-2 social-media-container">
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
    <footer class="my-container flex-container flex-row">
      <span>Julie Wang</span>
      <social-media-container-row></social-media-container-row>
      <a class="my-btn" href="/users/login">Login</a>
    </footer>
    `
  }       
}
customElements.define('my-footer', myFooter)

class featuredArticles extends HTMLElement {
  connectedCallback() {
    this.innerHTML =  `
    <section class="flex-column featured-articles ">
    <h1 class="w3-center">FEATURED ARTICLES</h1>
    <section class="flex-container articles-container">
      <div class="small-box"> Project 1 Box </div>
      <div class="small-box"> Project 1 Box </div>
      <div class="small-box"> Project 1 Box </div>
    </section>
    </section>
    `
  }       
}
customElements.define('featured-articles', featuredArticles)