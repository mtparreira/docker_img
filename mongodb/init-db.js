// Cria ou acessa a base de dados
db = db.getSiblingDB("admin");

// Cria usuário master
db.createUser({
  user: "master",
  pwd: "Teste1234",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    { role: "readWriteAnyDatabase", db: "admin" },
  ],
});

// Cria ou acessa a base de dados
db = db.getSiblingDB("banco");

// Cria uma coleção de exemplo
db.createCollection("colecao");

// Insere um documento de exemplo
db.colecao.insertOne({ nome: "Exemplo", criacao: new Date() });
