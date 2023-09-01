# Use the official Node.js image as a base
FROM node

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json .

# Install the project dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Command to run the app
CMD ["npm", "start"]
