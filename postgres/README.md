<!-- Comandos de utilização -->

--[DOCKER]-----------------------------------------------------------------------------------------

sudo docker build -t imgpgsql .

sudo docker run -d --name ctpgsql -p 5432:5432 --rm imgpgsql

sudo docker exec -it ctpgsql bash

sudo docker logs -f ctpgsql

sudo docker rm --force ctpgsql

--[psql]-------------------------------------------------------------------------------------------

psql -h localhost -U usuario -d banco

\l .. lista os bancos de dados
\d .. lista as tabelas do banco de dados
\dv .. lista as views do banco de dados
\di .. lista os índices do banco de dados
\db .. lista as tablespaces
\dg .. lista as roles existentes (usuários ou grupos)
\conninfo .. apresenta informações sobre a conexão atual
\h <comando> .. apresenta detalhes sobre o comando

\q .. sair

--[pg_activity]------------------------------------------------------------------------------------

pg_activity -U usuario -d banco -h localhost
