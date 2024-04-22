# Utiliza una imagen base de NGINX
FROM nginx:alpine

# Copia tu archivo HTML al directorio de NGINX
COPY . /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80
