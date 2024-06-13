# Dockerfile for frontend
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


# Expose the application on port 3000
EXPOSE 3000

# Serve the application
CMD ["npm","run", "start"]

