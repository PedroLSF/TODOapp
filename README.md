# TODO App Challenge

Bem-vindo ao desafio de criar um aplicativo TODO com várias camadas de complexidade e persistência de dados. O objetivo deste desafio não é apenas construir um aplicativo de TODO simples, mas explorar diferentes formas de persistir os dados ao longo de várias versões.

## Funcionalidades Básicas

O TODO app deve ter as seguintes funcionalidades:

- **Listar todos**: Exibir todos os TODOs criados.
- **Criar TODO**: Adicionar um novo TODO à lista.
- **Marcar como concluído**: Permitir que um TODO seja marcado como concluído.
- **Deletar TODO**: Remover um TODO da lista.

## Versões do Desafio

### Versão 1: Sem Persistência de Dados
- **Descrição**: Nesta versão, os dados são armazenados apenas na memória. Ao atualizar a página, todos os dados serão perdidos.

### Versão 2: Persistência no Navegador (Local Storage)
- **Descrição**: Os dados serão armazenados no Local Storage do navegador, permitindo que eles sejam mantidos mesmo após a página ser atualizada.

### Versão 3: Persistência numa API em Memória
- **Descrição**: Uma API será usada para armazenar os dados em memória. No entanto, os dados serão perdidos quando a API for reiniciada.

### Versão 4: Persistência em Arquivos na API
- **Descrição**: A API agora irá persistir os dados em arquivos no sistema de arquivos. Os dados são mantidos mesmo após reiniciar a API.

### Versão 5: Persistência no Redis
- **Descrição**: Os dados serão armazenados em um banco de dados Redis. Esta versão introduz o uso de um sistema de cache persistente.

### Versão 6: Persistência no SQLite
- **Descrição**: A API irá persistir os dados em um banco de dados SQLite, um banco de dados leve que armazena dados em um único arquivo.

### Versão 7: Persistência no MySQL
- **Descrição**: Os dados serão persistidos em um banco de dados MySQL, que é um sistema de gerenciamento de banco de dados relacional.

### Versão 8: Persistência Configurável
- **Descrição**: O usuário pode escolher a forma de persistência enviando um parâmetro na requisição. Dependendo do parâmetro, a API escolherá entre Local Storage, Redis, SQLite, MySQL ou arquivos.
