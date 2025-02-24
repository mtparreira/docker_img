# Use a imagem oficial do PostgreSQL
FROM postgres:latest

# Instala dependências necessárias para pg_activity
RUN apt-get update && apt-get install -y python3-pip && \
  pip3 install pg_activity psycopg2-binary --break-system-packages

# Define a variável de ambiente para permitir a execução do script
ENV POSTGRES_DB=banco
ENV POSTGRES_USER=usuario
ENV POSTGRES_PASSWORD=Teste1@34

# Cria diretório para persistência de dados e configurações
VOLUME ["/var/lib/postgresql/data"]

# Copia o script de configuração para dentro do container
COPY init.sql /docker-entrypoint-initdb.d/

# Expõe a porta padrão do PostgreSQL
EXPOSE 5432

