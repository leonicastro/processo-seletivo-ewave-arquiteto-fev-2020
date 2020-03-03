# Processo Seletivo Arquiteto de Software - Ewave

Prova de conceito para gerenciar pedidos de um restaurante.  
O foco principal é a automação do tramite de pedidos entre garçom e cozinha

## Funcionalidades

- Seleção de Perfil

  - Garçom
  - Cozinha

- Criação e visualização de comandas (Perfil Garçom)

  - Filtro de comanda por número da mesa

- Criação e visualização de pedidos por comanda (Perfil Garçom)

  - Visualização do situação atual do pedido

- Visualização de pedidos por situação (Perfil Cozinha)  
  Pedidos para cozinha estarão nas situações: Aguardando Recebimento e Recebido

- Movimentação de pedidos  
  O pedido transitará por situações desde a sua criação pelo garçom, preparo pela cozinha, até a entrega para o cliente.

- Alertas de notificação
  - A cozinha receberá um alerta toda vez que um pedido for aberto ou cancelado
  - O garçom receberá um alerta quando a cozinha receber o pedido e quando terminar o preparo.

## Executando o projeto

- Para executar o projeto, você precisará ter o [docker](https://www.docker.com/) instalado.
- Certifique-se também de que as portas `5555`, `5000`, `3010` e `27017` estão liberadas.

#### No seu terminal execute o comando:

```
docker-compose up --build
```

Após a finalização do build, você pode acessar clicando [aqui](http://localhost:5555/) .

## Tecnologias e Frameworks utilizados nos projetos

### Front-end

> Projeto 100% reatitivo com toda responsabilidade de regra de negócio e funcionalidades deixados para o gerenciamento de estado lidar.

- Angular 9
- RxJS
- Ngrx (Gerenciamento de estado)
- ngx-socket-io (Biblioteca Socket.IO para Angular)
- Angular Material Design

### Back-end

> Foi optado por uma implementação simples para fornecer uma API funcional e performática.

- .NET Core 3.1
- Xunit, Moq, FluentAssertions

### Banco de dados

- mongodb

> A escolha de utilização do mongodb coincide com a escolha da implementação do backend simples e performático.  
Com o mongo não houve necessidade de implementação de mapeamentos de ORM, nem de criação de scripts de tabelas, nem migrations. E sem deixar a performance comprometida.

### Realtime

- Javascript
- ExpressJS
- Socket IO

> Foi criado um 'micro service' em NodeJS para comunicação em tempo real com o frontend.
> A escolha dessa tecnologia deve-se a compatibilidade com a biblioteca SocketIO do frontend. E Também a rápida e fácil implementação.

## Features a serem implementadas

### Funcionalidades

- Cadastro de produtos/pratos
- Criar acesso do garçom para vincular a comanda ao garçom.
- Cancelamento de Pedido e Fechamento de comanda
- Adiconar observação ao pedido recusado
- Notificar garçom sobre o andamento do pedido
 

### Front-end

- Testes unitários
- Melhoria de layout e usabilidade

### Back-end

- Implementação de Command Pattern
- Implementação do Publicador de Mensagens com RabbitMQ
