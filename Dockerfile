FROM node:14

WORKDIR /usr

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY src ./src

RUN npm run build --prefix src/client

EXPOSE 5000

RUN npm run build

CMD ["npm", "run", "start"] 



