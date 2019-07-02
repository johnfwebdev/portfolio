# To Be Named  
A portfolio project with React, Webpack, Docker, and other things.  

Description
====
This project is to show of some of the lessons from setting up a proper environment using npm, react, webpack, docker, and a handful of other technologies. Using both production and development evironments with many of these technologies, as well as proper bundling for deployment to a live environment.  

## File/Folder Structure
___/public___ - Is for building purposes and home of index.html  
___/src___ - Home to core code  
 ___- src/components___ - React components  
 ___- src/css___ - CSS  
 ___- src/index.js___ - React app and Webpack Entry Point  
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
***npm run dev --*** ___<hostname>___  
 - including a <hostname> will launch the Webpack dev server with the desired hostname in the browser  
***npm start***  
 - this will build using webpack and the bundle.js file will be in /public/dist
 - built from /src directory  


## Changelog  
### Intial Commits  
Revolve around essential setup and functionality, npm, react, docker, webpack, etc.  

### Newest Commits  

