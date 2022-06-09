// NAVBAR 
class myNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
            <nav>
                <a class="btn" href="/about">ABOUT</a>
                <a class="btn" href="/projects/r&d-credits">PROJECTS</a>
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
      <i href="files/juliewang_resume.pdf" class='fab fa-linkedin' style='font-size:30px'></i><br>
      <i class="material-icons" style="font-size:30px">email</i><br>
      <i class='far fa-file-alt' style='font-size:36px'></i>
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

