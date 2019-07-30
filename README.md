# ame_starwars
Desafio técnico - Ame Digital

## Objetivo
Queremos criar um jogo com algumas informações da franquia Star Wars, para isso, será necessário desenvolver uma API com os dados dos planetas, para que a equipe de front-end possa criar a aplicação. 

## Requisitos
* A API deve ser REST
* Devem ser obtidos o nome, clima e terreno de cada planeta do banco de dados da aplicação, sendo inserido manualmente
* Para cada planeta também devemos ter a quantidade de aparições em filmes, que podem ser obtidas pela API pública do Star Wars: https://swapi.co/

## Funcionalidades desejadas
* Adicionar um planeta (com nome, clima e terreno)
* Listar planetas
* Buscar por nome
* Buscar por ID
* Remover planeta

## Tecnologias utilizadas
**NodeJs:**
* Express
* Mongoose
* Consign
* Body-parser
* Node-restful
* Request

**MongoDB**

**Postman**

## Instalações
Para executar o projeto, será necessário possuir o NodeJs, MongoDB e o Postman instalados.
* [Baixar NodeJS](https://nodejs.org/en/download/)
* [Baixar MongoDB](https://www.mongodb.com/download-center) 
* [Baixar Postman](https://www.getpostman.com/downloads/)

## Executando o MongoDB
Após a instalação do MongoDB, verifique se foi criado o diretório padrão onde serão armazenadas todas as bases de dados em **C:/data/db**. Caso o diretório não exista, crie-o.
``
C:\>mkdir data
C:\>cd data
C:\data>mkdir db
``

Acesse o diretório /bin no caminho de instalação do MongoDB via prompt de comando. 
Exemplo:
```
cd C:\Program Files\MongoDB\Server\4.0\bin
```

Em seguida, digite o comando "mongod" para iniciar o servidor do MongoDB, onde dbpath é o caminho onde seus dados serão salvos (esta pasta já deve estar criada).
```
C:\Program Files\MongoDB\Server\4.0\bin> mongod --dbpath C:\data\db
```

Uma vez que apareça no prompt “[initandlisten] waiting for connections on port 27017”, está pronto.

Agora abra outro prompt de comando para a execução da aplicação...

## Executando a aplicação
Preferencialmente, crie o diretório e salve o código fonte no caminho c:\ame\api.

Acesse o diretório via prompt de comando:
```
cd c:/ame/api
```

Instale as dependências necessárias executando o comando "npm install --save".
```
C:\ame\api> npm install --save
```

Após a instalção, basta agora iniciar a aplicação com o comando "node app.js".
```
C:\ame\api> node app.js
```

Uma vez que apareça no prompt "Server ON port: 8000", está pronto.

## Consumindo a API
Iremos utilizar o Postman para consumir a API. 
Abra o Postman e digite na barra de endereço a URL "localhost:8000/planet".

Como não possuimos nenhum registro de planeta no banco de dados, o primeiro passo será realizar uma requisição POST para nossa API contendo os atributos name (nome), climate (clima) e terrain (terreno). Conforme requisito, a API deverá utilizar o nome do planeta para consultar a [API pública do Star Wars](https://swapi.co/) e ter a quantidade de aparições em filmes.
![](/img/01.jpg)
<img src="/img/01.jpg">

