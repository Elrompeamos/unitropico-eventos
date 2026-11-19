# Imagen de la aplicación: Apache + PHP 8.3
FROM php:8.3-apache

# Extensión para hablar con MySQL
RUN docker-php-ext-install pdo_mysql \
 && a2enmod headers \
 && echo "ServerName localhost" > /etc/apache2/conf-available/servername.conf \
 && a2enconf servername

# Copia solo lo necesario (lo demás lo excluye .dockerignore)
COPY --chown=www-data:www-data . /var/www/html/

EXPOSE 80
