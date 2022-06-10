// NAVBAR 
class myNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
            <nav>
                <a class="btn" href="/about">ABOUT</a>
                <a class="btn" href="/projects">PROJECTS</a>
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
    <div class="grid-item grid-item-1">
      <a href="https://www.linkedin.com/in/juliewang-us/" target="_blank"><i class='fab fa-linkedin' style='font-size:30px'></i></a> <br>
      <a href="mailto:juliewang94@gmail.com"><i class="material-icons" style="font-size:30px">email</i></a><br>
      <a href="/files/juliewang_resume.pdf" target="_blank"><i class='far fa-file-alt' style='font-size:36px'></i></a>
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

