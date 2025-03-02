FROM mongo:latest

# Instala o MongoDB Shell (mongosh)
RUN apt-get update && apt-get install -y mongodb-mongosh && rm -rf /var/lib/apt/lists/*

# Cria e define um volume para persistência de dados
VOLUME ["/data/db"]

# Define o diretório de trabalho dentro do container
WORKDIR /data/db

# Configura usuário e senha do MongoDB
ENV MONGO_INITDB_ROOT_USERNAME=usuario
ENV MONGO_INITDB_ROOT_PASSWORD=Teste1@34

# Copia o script de inicialização para o container
COPY init-db.js /docker-entrypoint-initdb.d/

# Expõe a porta padrão do MongoDB
EXPOSE 27017

# Comando padrão para iniciar o MongoDB com autenticação
CMD ["mongod", "--auth"]
