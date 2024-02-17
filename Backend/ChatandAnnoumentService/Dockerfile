FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm i
COPY . ./
EXPOSE 7789 
CMD [ "npm", "run","dev" ]