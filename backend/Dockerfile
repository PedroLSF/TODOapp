# Use uma imagem base com Node.js
FROM node:18

# Crie um diretório para o app
WORKDIR /usr/src/app

# Copie o package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código do app
COPY . .

# Exponha a porta em que o app irá rodar
EXPOSE 9000

# Comando para iniciar o app
CMD ["node", "app.js"]