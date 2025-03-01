FROM mongo:latest

# Cria e define um volume para persistência de dados
VOLUME ["var/lib/data/db"]

# Define o diretório de trabalho dentro do container
WORKDIR /data/db e

# Configura usuário e senha do MongoDB
ENV MONGO_INITDB_ROOT_USERNAME=usuario
ENV MONGO_INITDB_ROOT_PASSWORD=Teste1@34

# Expõe a porta padrão do MongoDB
EXPOSE 27017

# Comando padrão para iniciar o MongoDB com autenticação
CMD ["mongod", "--auth"]
