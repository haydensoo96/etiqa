FROM node:14
WORKDIR /app
COPY package.json .
COPY config/config.json ./config/config.json
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["npm", "start"]