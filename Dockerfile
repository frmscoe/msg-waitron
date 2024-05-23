# SPDX-License-Identifier: Apache-2.0
FROM node:8-alpine

WORKDIR /app

ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install 
RUN npm build 
COPY . /app  
EXPOSE 3000 
EXPOSE 50051
EXPOSE 8080

ENV port=3000 

CMD ["npm", "run", "start:prod"]