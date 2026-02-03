# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json* ./

RUN npm ci

# Copy source code and config files
COPY . .

# Build the application
RUN npm run build


# Production stage - using nginx for better performance
FROM nginx:alpine

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config for SPA routing
RUN echo 'server { \
    listen 5173; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]