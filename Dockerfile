# Specify the base image
FROM node:alpine

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

# Run the app using serve
CMD ["serve", "-s", "build", "-l", "3000"]
