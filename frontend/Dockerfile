# ---- Build Stage ----
FROM node AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json .

# Install dependencies and build app
RUN npm install
COPY . .
RUN npm run build

# ---- Production Stage ----
FROM nginx:alpine

# Set the working directory in nginx
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build /app/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
