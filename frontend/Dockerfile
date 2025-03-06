# Étape 1 : Build de l'application
FROM node:18 AS build

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers nécessaires
COPY package.json package-lock.json ./
RUN npm install

# Copie du reste des fichiers et build de l’application
COPY . .
RUN npm run build

# Étape 2 : Servir l'application avec Nginx
FROM nginx:alpine

# Suppression des fichiers par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie des fichiers de build vers Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copie de la configuration personnalisée de Nginx
COPY /config/nginx.conf /etc/nginx/conf.d/default.conf

# Exposition du port 80
EXPOSE 80

# Lancement de Nginx
CMD ["nginx", "-g", "daemon off;"]
