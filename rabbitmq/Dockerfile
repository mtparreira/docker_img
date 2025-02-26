# Usa a imagem oficial do RabbitMQ com o plugin de gerenciamento
FROM rabbitmq:3.12-management

# Define variáveis de ambiente para configuração inicial
ENV RABBITMQ_DEFAULT_USER=usuario \
    RABBITMQ_DEFAULT_PASS=Teste1@34 \
    RABBITMQ_DEFAULT_VHOST=rmqhost

# Expõe as portas padrão do RabbitMQ
EXPOSE 5672 15672

# Garante que o serviço continue rodando
CMD ["rabbitmq-server"]

