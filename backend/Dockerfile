FROM node:14.16.1-alpine3.13
RUN addgroup api && adduser -S -G api api
RUN mkdir -p /api
RUN chown api /api
USER api
WORKDIR /api
COPY package*.json .
RUN npm install --unsafe-perm=true --allow-root
COPY . .
ENV NAME=SUBIN
EXPOSE 5000
CMD ["npm","start"]

