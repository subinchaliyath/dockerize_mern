FROM node:14.16.1-alpine3.13
RUN addgroup api && adduser -S -G api api
USER api
WORKDIR /api
COPY package*.json .
RUN npm install
COPY . .
ENV NAME=SUBIN
EXPOSE 3000
CMD ["npm","start"]

