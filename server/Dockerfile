# server/Dockerfile
# For running in development mode only
FROM node:18
WORKDIR /app/server
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]