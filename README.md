# aboutjuliewang: a personal website
## About
### Features
* markdown blog
* user authentication & login system 
## Packages 
Yarn package manager 
To install dependencies ```yarn install```
Start server using nodemon ```yarn devStart```

### libraries used:
#### App 
* express: nodejs framework 
* ejs: templating language, view engine [documentation](https://ejs.co/#docs
* mongoose: database - to properly connect, mongodb has to first be installed locally
* method-overide: overrides the method that blog form passes (i.e. overrides GET/POST method with PATCH/DELETE method)
#### Dev Dependencies 
* nodemon: run scripts without restarting server 
* dotenv:
#### Markdown Blog 
* marked: create markdown and turn it into HTML [see documentation](https://marked.js.org/)
* slugify: convert title to URL-friendly slug
* dompurify jsdom: purify html [see documentation](https://www.npmjs.com/package/dompurify)

#### User Authentication & Login System
* bcrypt: cryptography & secure password hashes
* passport
* express-flash 
* express-session:

#### Styles
* swup: page transition animations 
