FROM node:alpine
EXPOSE 8075
COPY vuejs_resume /usr/local/app
CMD cd /usr/local/app/ && npm install && cd /usr/local/app/server && npm install && node index.js
