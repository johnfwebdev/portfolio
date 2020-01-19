# Portfolio - Single Page Application  
A portfolio project with React, Webpack, Docker, and other things.  


Description
====
This project is to show off some of the lessons from setting up a proper environment using npm, react, webpack, docker, jest, and eventually other technologies. Using both production and development evironments with many of these technologies, as well as proper bundling for deployment to a live environment.  

## Getting Started  
Fork Repository  
`git remote add upstream git@github.com:jfasanobc/portfolio.git`  
`npm init:dev`  
`npm run dev`  


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


## List of commands  (Run within root folder)  

***npm init:dev***  
 - This will run all npm installs needed for root folder and both client and server directories for local development setups  

***npm init:prod***  
 - This will run all npm installs needed for deployment in a production environment  

***npm run dev***  
 - This will launch the Webpack dev server to localhost:3000  
 - The dev server has hot modules enabled and editing anything in /src will result in the page refreshing  

***NPMHOST=[example.test] npm run dev***  
 - This is optional, example syntax: `NPMHOST=example.test npm run dev`
 - Including a [hostname] will launch the Webpack dev server with the desired hostname in the browser if wanted.  
 - The inclusion of a hostname implys that your DNS is properly configured for that hostname and the top-level domain. Example, adding the following to your hosts file: `127.0.0.1 example.test`
 - If you would like to control an entire top-level domain such as `.test` on your device, I'd recommend seeing this tutorial for DNSmasq [USE DNSMASQ INSTEAD OF /ETC/HOSTS](https://www.stevenrombauts.be/2018/01/use-dnsmasq-instead-of-etc-hosts/). This is heavyly geared toward macOS, but should work for most UNIX-like systems. Windows has alternatives.

***npm run build***  
 - This will build using webpack and the bundle.js file will be in /public/dist
 - Built from /src directory in both directories, client and server.

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

***July 8, 2019***  
[Resolved Issue #10 PR-11](https://github.com/jfasanobc/testsite.test/pull/11) - Clarified how to use --host flag with npm run dev CLI command in README.  

***July 11, 2019***  
[Fixed Lodash Vulnerability PR-12](https://github.com/jfasanobc/portfolio/pull/12) - Repored vunerability used fixed version of lodas 4.17.14.  
[Restructure for Client/Server PR-13](https://github.com/jfasanobc/portfolio/pull/13) - Restructured folder and project, adding NPM commands that pass through to client and server.  

***July 12, 2019***  
[Updated NPM Scripts for Client/Server PR-14](https://github.com/jfasanobc/portfolio/pull/14) - Fixed npm scripts to work from root directory.  

***July 14, 2019***  
[Included onClick + Test chores PR-15](https://github.com/jfasanobc/portfolio/pull/15) -   Included the ability for the seciton to switch for the nav item that is clicked and updated snapshots.  

***July 15, 2019***  
[Added npm install scripts + Readme instructions PR-16](https://github.com/jfasanobc/portfolio/pull/16) -  Added npm install scripts that will work from root directory for all directories.  
[Included Grunt Bump for versioning tools PR-17](https://github.com/jfasanobc/portfolio/pull/17) -  included Grunt Bump so there is a way to bump versions (patch, minor, major)  

***July 19, 2019***  
[Restructured Client Direcotry PR-20](https://github.com/jfasanobc/portfolio/pull/20) - Restructured Components files/folders and naming conventions for files/folders  

***July 20, 2019***  
[Changed to React-Router PR-21](https://github.com/jfasanobc/portfolio/pull/21) - Made the navigation menu using react-router

***July 27, 2019***  
[Added Contact Form and Express Server POST route PR-22](https://github.com/jfasanobc/portfolio/pull/22)  
 - Contact HTML/React Components  
 - Placeholders for future validation needs on frontend  
 - Backend Node and Express for /contact-form POST  
 - Sequel INSERT for message data table.

 ***January 18, 2020***
 [Fixed basic login modal functionality PR-](https://github.com/jfasanobc/portfolio/pull/27) - Included a login modal with registration form.