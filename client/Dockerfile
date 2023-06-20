# client/Dockerfile
# For running in development mode only
FROM node:18
WORKDIR /app/client
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]