# TODO App Challenge

Bem-vindo ao desafio de criar um aplicativo TODO com várias camadas de complexidade e persistência de dados. O objetivo deste desafio não é apenas construir um aplicativo de TODO simples, mas explorar diferentes formas de persistir os dados ao longo de várias versões.

## Funcionalidades Básicas

O TODO app deve ter as seguintes funcionalidades:

- **Listar todos**: Exibir todos os TODOs criados.
- **Criar TODO**: Adicionar um novo TODO à lista.
- **Marcar como concluído**: Permitir que um TODO seja marcado como concluído.
- **Deletar TODO**: Remover um TODO da lista.

## Branch da versão

### Versão 5: Persistência no Redis
- **Descrição**: Os dados serão armazenados em um banco de dados Redis. Esta versão introduz o uso de um sistema de cache persistente.

## Como utilizar

- **Instale as dependencias**:
```
npm install
```

- **Suba o container**:
```
docker-compose up -d
```

- **Inicie o frontend**:
```
npm start
```

Foto do Get no Redis:

![image](https://github.com/user-attachments/assets/900d9b66-4536-45f4-90cd-32029d5306ff)

