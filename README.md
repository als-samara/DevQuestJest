# DevQuest - Módulo Jest

Bem-vindo ao repositório dedicado ao aprendizado e prática do módulo Jest do curso de frontend DevQuest. Este repositório contém anotações e exemplos práticos para consolidar o conhecimento adquirido.

## Como usar este repositório

### Pré-requisitos
Certifique-se de ter o Node.js instalado. Você pode verificar a versão atual do Node com o seguinte comando:

```
node -v
```

### Instalação do Jest
Para instalar o Jest em modo de desenvolvedor, execute o seguinte comando:

```
npm install --save-dev jest
```

Em seguida, utilize o comando abaixo para gerar a pasta node_modules:

```
npm install
```

Nota: Não se esqueça de adicionar a pasta node_modules ao seu arquivo .gitignore antes de fazer qualquer commit.

### Configuração do package.json
Configure o seu arquivo package.json conforme a documentação no site do Jest, adicionando os seguintes scripts:

```
"scripts": {
  "test": "jest",
  "watch": "jest --watchAll *.js"
}
```

### Executando os testes
Para rodar os testes, utilize o seguinte comando:

```
npm run test
```
Se preferir usar o modo de observação (watch), execute o seguinte comando para observar os arquivos .js:

```
npm run watch
```
O script watchAll do package.json observa os arquivos .js e executa os testes sempre que houver uma alteração no arquivo de teste (.test.js), proporcionando opções adicionais no terminal.

Nota: Se você estiver usando um repositório Git, considere configurar apenas o modo watch e não watchAll.

### Anatomia do Teste
Os testes seguem a seguinte estrutura básica:

```
it('mensagem do teste', () => {
  expect(true).toBe(true);
});
```

#### Lembre-se do conceito de "Vermelho, Verde e Refatorar":

- Vermelho: Crie o teste para a nova condição/funcionalidade (teste fica vermelho).
- Verde: Modifique o código para que o teste fique verde.
- Refatorar: Após o teste passar, verifique oportunidades de refatoração no código.

<br>
Aproveite o seu aprendizado e bons testes! 🚀