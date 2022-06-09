// NAVBAR 
class myNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
            <nav>
                <a class="btn" href="/about">ABOUT</a>
                <a class="btn" href="/projects/r&d-credits">PROJECTS</a>
                <a class="btn" href="files/juliewang_resume.pdf" target="_blank">RESUME</a>
                <a class="btn" href="/articles">WRITING</a>
            </nav>
        `
    }

}
customElements.define('my-navbar',myNavbar)