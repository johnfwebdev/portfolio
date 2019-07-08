# Portfolio - Single Page Application  
A portfolio project with React, Webpack, Docker, and other things.  


Description
====
This project is to show of some of the lessons from setting up a proper environment using npm, react, webpack, docker, and a handful of other technologies. Using both production and development evironments with many of these technologies, as well as proper bundling for deployment to a live environment.  


## File/Folder Structure
___/public___ - Is for building purposes and home of index.html  
  ___- public/assets___ - Primary assets folder publically served when deployed  
    ___- public/assets/img___ - primary images folder  
  ___- index.html___ - Output location for the App.js file to bind to the DOM  
___/src___ - Home to core code  
  ___- src/components___ - React components  
  ___- src/css___ - CSS  
  ___- src/index.js___ - React app and Webpack Entry Point  
___.dockerignore___  
___.gitignore___  
___.babelrc___ - Babel presets for ES6  
___package.json___ - npm scripts for start and dev scripts, and dependencies  
___webpack.common___ - Common bundling for all environments  
___webpack.___ - Determine and merget commong and environment bundling rules  
___webpack.dev.___ - Development bundling rules(webpack-dev-server)  
___webpack.prod.___ - Production bundling rules  


## List of commands  
---------------------  
***npm run dev***  
 - this will launch the Webpack dev server with to localhost 3000  
 - the dev server has hot modules enabled and editing anything in /src will result in the page refreshing  

***npm run dev -- --host [hostname]***  
 - including a [hostname] will launch the Webpack dev server with the desired hostname in the browser  
 - Syntax: `npm run dev -- --host example.test`

***npm start***  
 - this will build using webpack and the bundle.js file will be in /public/dist
 - built from /src directory  

 ***npm test***  
 - Runs Jest testing suites 


## Changelog  
### Intial Commits  
Revolve around essential setup and functionality, npm, react, docker, webpack, etc.  

### Newest Changes  
***July 6, 2019***  
[Added Logo PR-#4](https://github.com/jfasanobc/testsite.test/pull/4) - Added a logo for testing with images and later css around images.  

***July 7, 2019***  
[Added Expanding Nav PR-5](https://github.com/jfasanobc/testsite.test/pull/5) - Added an expanding navigation from existing asset from another much older project. The animation/transitions are pure CSS.  
[Made Nav Dynamic PR-6](https://github.com/jfasanobc/testsite.test/pull/6) - Made the UL and LI elements of the navigation dynamically loaded using ReactJS.  
[Updated Readme PR-7](https://github.com/jfasanobc/testsite.test/pull/7) - Updated README.md with updated documentation and typing mistakes/markdown syntax errors.  
[Added Jest Testing PR-9](https://github.com/jfasanobc/testsite.test/pull/9) - Added Jest testing to project with first initial test on the header component with snapshots included  
