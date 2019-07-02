# To Be Named #
A portfolio project with React, Webpack, Docker, and other things.

Description
====
This project is to show of some of the lessons from setting up a proper environment using npm, react, webpack, docker, and a handful of other technologies. Using both production and development evironments with many of these technologies, as well as proper bundling for deployment to a live environment.

##File/Folder Structure##
###/public### - Is for building purposes and home of index.html
###/src### - Home to core code
### - src/components### - React components
### - src/css### - CSS
### - src/index.js### - React app and Webpack Entry Point
###.gitignore###
###.babelrc### - Babel presets for ES6
###package.json### - npm scripts for start and dev scripts, and dependencies
###webpack.common.*### - Common bundling for all environments
###webpack.*### - Determine and merget commong and environment bundling rules
###webpack.dev.*### - Development bundling rules(webpack-dev-server)
###webpack.prod.*### - Production bundling rules

##List of commands##
---------------------
###npm run dev###
 - this will launch the Webpack dev server with to localhost 3000
 - the dev server has hot modules enabled and editing anything in /src will result in the page refreshing
###npm run dev -- <hostname>###
 - including a <hostname> will launch the Webpack dev server with the desired hostname in the browser
###npm start###
 - this will build using webpack and the bundle.js file will be in /public/dist
 - built from /src directory


##Changelog##
###Intial Commits###
Revolve around essential setup and functionality, npm, react, docker, webpack, etc.

###Newest Commits###

