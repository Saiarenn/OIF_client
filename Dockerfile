# Specify the base image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Install serve to run the production build
RUN npm install -g serve

# Copy the app files
COPY . .

# Build the app for production
RUN npm run build

# Expose the port
EXPOSE 3000

# Specify environment variables that can be overridden at runtime
ENV VITE_APP_API_URL=$VITE_APP_API_URL

# Run the app using serve
CMD ["serve", "-s", "dist", "-l", "3000"]
