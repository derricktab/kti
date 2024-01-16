# Set the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g serve
RUN npm install --silent

# Copy the app source
COPY . .

# Set the production environment variable
ENV NODE_ENV=production
ENV GENERATE_SOURCEMAP=false

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build"]
