FROM node:16.14.0

WORKDIR /app

COPY package.json package.json

COPY yarn.lock yarn.lock

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
