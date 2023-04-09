# Projeto Blogs API

[MEUS COMMITS](https://github.com/HugoRamosC/blogs-api/commits)

## O que foi desenvolvido:

Uma API e um banco de dados para a produção de conteúdo para um blog! Para isso, desenvolvi uma aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts.

 - Desenvolvi endpoints que estão conectados ao banco de dados seguindo os princípios do REST;
 - Trabalhei relação user e post, visto que para fazer um post é necessário usuário e login;
 - Trabalhei a relação de posts para categories e de categories para posts, visto que é necessário a utilização categories para os posts.

## Alguns conteúdos utilizados:

 - ORM - Interface da aplicação com o banco de dados
 - ORM - Associations 1:1 e 1:N
 - ORM - Associations N:N e Transactions
 - JWT (JSON Web Token)


#### Pré-Requisitos do Projeto:
- [x] Rodar o docker com mysql e nodejs

#### Requisitos obrigatórios do Projeto:
- [x] 1 - Crie migrations para as entidades User, Categories, BlogPosts, PostCategories 
- [x] 2 - Crie o modelo 'User' em 'src/database/models/user.js' com as propriedades corretas 
- [x] 3 - Sua aplicação deve ter o endpoint POST /login 
- [x] 4 - Sua aplicação deve ter o endpoint POST /user 
- [x] 5 - Sua aplicação deve ter o endpoint GET /user 
- [x] 6 - Sua aplicação deve ter o endpoint GET /user/:id 
- [x] 7 - Crie o modelo 'Category' em 'src/database/models/category.js' com as propriedades corretas
- [x] 8 - Sua aplicação deve ter o endpoint POST /categories 
- [x] 9 - Sua aplicação deve ter o endpoint GET /categories
- [x] 10 - Crie o modelo 'BlogPost' em 'src/database/models/blogPost.js' com as propriedades e associações corretas 
- [x] 11 - Crie o modelo 'PostCategory' em 'src/database/models/postCategory.js' com as propriedades e associações corretas 
- [x] 12 - Sua aplicação deve ter o endpoint POST /post 
- [x] 13 - Sua aplicação deve ter o endpoint GET /post 
- [x] 14 - Sua aplicação deve ter o endpoint GET /post/:id 
- [x] 15 - Sua aplicação deve ter o endpoint PUT /post/:id 

#### Requisitos bônus do Projeto:
- [x] 16 - Sua aplicação deve ter o endpoint DELETE /post/:id
- [x] 17 - Sua aplicação deve ter o endpoint DELETE /user/me
- [x] 18 - Sua aplicação deve ter o endpoint GET /post/search?q=:searchTerm

