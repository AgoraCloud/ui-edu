# https://mherman.org/blog/dockerizing-a-react-app/
FROM nginx:stable-alpine
COPY /build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]