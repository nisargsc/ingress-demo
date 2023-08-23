FROM node:14

RUN mkdir -p /home/app

COPY ./app /home/app

WORKDIR /home/app

RUN npm install
RUN npm run build

CMD ["npm", "run" , "start"]

