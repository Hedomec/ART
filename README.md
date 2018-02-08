# ART
Administrador de Trabajos especiales de grado y pasantias

## Antes de iniciar el proyecto

### Necesario para instalar ART
Este projecto esta  desarrolladocon SlimPHP(BACK-END) el cual esta estructurado como API-REST y AngularJS(FRONT-END) Por ello es necesario instalar [Composer](https://getcomposer.org/download/), [NodeJS](https://nodejs.org/es/download/) y la base de datos en MYSQL (De preferencia usar PHPMYADMIN).

Tambien es necesario el software [Gulp](https://gulpjs.com/) para rutinas de contatenamiento y minimalizacion.

Para verificar que tienes instalado NodeJS: 
> $ node --version

Para verificar que tienes instalado Composer:
> $ composer -V

Para verificar que tienes instalado Gulp:
> $ gulp --help

### Instalar librerias con NodeJS
Para instalar las librerias necesarias en NodeJS: 
> $ npm install

### Instalar librerias con Composer
Para instalar las librerias necesarias en Composer:
> $ composer install

### Instalar Gulp
Despues de haber instalado NodeJS, tienes que correr este comando:

Este comando instalara el cliente de gulp globalmente para ser usado en este proyecto y otros mas:
> $ npm install gulp-cli -g

## Iniciando el proyecto

### Instalar la base de datos
> Instalar la base de datos en PHPMYADMIN MYSQL o en tu gestor de base de datos de preferencia

### Correr Gulp para concatenar y minificar 
> $ gulp

### Instalar en servidor
> Al instalar el servidor puedes instalarlo con XAMPP o con tu Servidor Web de prefencia

### XAMPP
> Es necesario instalar XAMPP para hacer pruebas: [XAMPP](https://www.apachefriends.org/es/download.html)

> Colocar el projecto en la carpeta C:\xampp\htdocs

> Ejecutar XAMPP con el servidor PHPMYADMIN y el Servidor Web APACHE.

## Corriendo el projecto

Para correr el projecto en local es necesario ingresar en la siguiente direccion:

> localhost/art

y para hacer pruebas del API-REST

> localhost/art/api
