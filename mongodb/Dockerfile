FROM mongo

# Instala o MongoDB Shell (mongosh)
RUN apt-get update && apt-get install -y mongodb-mongosh && rm -rf /var/lib/apt/lists/*

# Configura usuário e senha do MongoDB
ENV MONGO_INITDB_ROOT_USERNAME=usuario
ENV MONGO_INITDB_ROOT_PASSWORD=Teste1@34

# Copia o script de inicialização para o container
COPY init-db.js /docker-entrypoint-initdb.d/

# Copia a configuração inicial
COPY mongod.conf /etc/mongod.conf

# Expõe a porta padrão do MongoDB (27017) para conexões externas
EXPOSE 27017

# Comando para iniciar o MongoDB com autenticação e bind IP liberado
CMD ["mongod", "--config", "/etc/mongod.conf"]
