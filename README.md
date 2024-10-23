# To Do App

## Objetivo
Desenvolver uma aplicação simples de lista de tarefas (todoApp) utilizando HTML, CSS (Tailwind) e JavaScript, com armazenamento de dados no localStorage. O projeto permite a criação, leitura, edição e exclusão de tarefas, além de persistir as informações no localStorage, para que elas não sejam perdidas ao recarregar a página.

## Estrutura do Aplicativo
- A aplicação apresenta uma interface onde o usuário pode adicionar tarefas através de um campo de texto e um botão de registro.
- Cada tarefa adicionada é exibida em uma lista visível na página.

## Funcionalidades
### CRUD
- **Create (Criar)**: O usuário pode adicionar novas tarefas à lista.
- **Read (Ler)**: As tarefas são carregadas automaticamente a partir do localStorage ao abrir a aplicação.
- **Update (Atualizar)**: Cada tarefa pode ser editada. Ao clicar em "Editar", o texto da tarefa pode ser alterado.
- **Delete (Excluir)**: Cada tarefa pode ser excluída, removendo-a da lista e do localStorage.

### Persistência de Dados
- Utiliza o localStorage para salvar as tarefas. As tarefas persistem mesmo após o fechamento ou recarregamento da página.

## Estilização
- A aplicação utiliza o Tailwind CSS para estilização.
- Aplicação de classes da biblioteca Tailwind para garantir responsividade e estética.

## Funcionalidade Extra
- A aplicação permite marcar uma tarefa como "concluída", aplicando uma estilização diferenciada para indicar o status de conclusão.

## Como Executar
1. **Clone o repositório**:
   ```bash
   git clone github.com/glaucobairros/atividade5_maisprati

2. Abra o arquivo **Index.html** em um navegador.
