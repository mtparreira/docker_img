db = db.getSiblingDB("banco"); // Cria ou acessa a base de dados

// Cria um usuário para a base de dados
db.createUser({
  user: "usuario",
  pwd: "Teste1@34",
  roles: [{ role: "readWrite", db: "banco" }],
});

// Cria uma coleção de exemplo
db.createCollection("colecao");

// Insere um documento de exemplo
db.colecao.insertOne({ nome: "Exemplo", criacao: new Date() });
