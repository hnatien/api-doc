FROM nginx:alpine

# Copy static files to nginx directory
COPY . /usr/share/nginx/html/

# Copy custom nginx config to handle YAML files properly
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
