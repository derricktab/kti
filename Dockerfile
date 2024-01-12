# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Build the React app
RUN npm run build

# Set the environment variable for serving the app
ENV NODE_ENV production

# Expose the desired port (default is 80)
EXPOSE 80

# Start the app
CMD ["npm", "start"]