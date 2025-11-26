# imagen base
FROM node:22

# espacio de trabajo. Todo lo copiado y los comandos apuntan acá.
WORKDIR /usr/local/app

# COPY DESDE HASTA
# COPY DESDE DESDE DESDE HASTA
# COPY . . -> Copia todo

COPY ./package.json ./package-lock.json ./

# Ejecuta comandos en la creación de la imagen
RUN npm install

COPY ./nest-cli.json ./tsconfig.json ./tsconfig.build.json eslint.config.mjs ./

COPY ./src ./src
COPY ./test ./test

# Configuro el ambiente
ENV MONGODB_URI=mongodb+srv://agus:12345679@cluster0.x2p84dj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01
ENV PORT=3030

# Si quiero levantar para desarrollo
# CMD ["npm", "run", "start:dev"]

RUN npm run build

EXPOSE 3030

# Esto lo ejecuta el container
CMD ["npm", "run", "start:prod"]

# Crear la imagen. No olvidarse del "." que indica la carpeta!
# docker build -t <nombre-imagen> .


# Correr la imagen en un contenedor
# docker run -p <puerto-host>:<puerto-container> <nombre-imagen>