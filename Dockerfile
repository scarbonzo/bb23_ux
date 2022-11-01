FROM nginx:alpine
COPY dist/bb23_ux /usr/share/nginx/html
COPY nginxconf.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
