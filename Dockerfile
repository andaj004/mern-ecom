# Use the official Node.js image as the base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

RUN npm install

# Copy all backend files into the container
COPY backend/ .

CMD ["node", "server.js"]
