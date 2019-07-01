FROM node:8.15
COPY /src /public
COPY [
    "package.json",
    "package-lock.json",
    ".babelrc",
    "webpack.*"
]

RUN npm start
EXPOSE 3000