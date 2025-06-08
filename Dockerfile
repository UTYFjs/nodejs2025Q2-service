FROM node:22-alpine AS base

RUN apk add --no-cache openssl

WORKDIR /app

COPY package*.json ./

RUN npm i && npm cache clean --force

COPY . .

EXPOSE ${PORT}

CMD [ "npm", "run", "start:prisma"]