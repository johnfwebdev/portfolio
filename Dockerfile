FROM node:8.15 as public
RUN mkdir /usr/testsite
WORKDIR /usr/testsite
COPY package.json /usr/testsite/package.json
RUN npm install
COPY . /usr/testsite
RUN npm start


FROM nginx:1.15.12-alpine
COPY --from=public /usr/testsite/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]