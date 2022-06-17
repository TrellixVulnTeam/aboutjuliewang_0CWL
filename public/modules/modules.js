// NAVBAR 
class myNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
            <nav>
                <a class="btn" href="/about">ABOUT</a>
                <a class="btn" href="/projects">PROJECTS & CASE STUDIES</a>
                <a class="btn" href="/articles">WRITING</a>
            </nav>
            `
    }
}
customElements.define('my-navbar',myNavbar)


class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
        <div class="grid-container">

    <div class="grid-item flex-container grid-item-1">
      <a href="https://www.linkedin.com/in/juliewang-us/" target="_blank"><i class=' flex-item fab fa-linkedin' style='font-size:32px'></i></a> 
      <a href="mailto:juliewang94@gmail.com"><i class="flex-item material-icons" style="font-size:32px">email</i></a>
      <a href="https://github.com/juliewang-online" target="_blank"><i class=' flex-item github fab fa-github' style='font-size:32px'></i></a> 
      <a href="/files/juliewang_resume.pdf" target="_blank"><i class=' flex-item fas fa-file-alt' style='font-size:34px'></i></a> 
    </div>
    
    <div class="grid-item grid-item-2">
      <a href="/" class="btn name-logo">Julie Wang</a>


    </div>
    <div class="grid-item grid-item-3">
      <my-navbar></my-navbar>

    </div>
    `
    }   
}
customElements.define('my-header',myHeader)

