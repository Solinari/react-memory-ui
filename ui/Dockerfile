# build environment
FROM node:13

WORKDIR /usr/src/app/ui

COPY package*.json ./

RUN npm ci --silent

RUN npm install react-scripts@4.0.1 -g --silent

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
