# Desafios de Lógica de Programação

Bem-vindo ao repositório de desafios de lógica de programação! Este repositório contém uma série de 10 desafios projetados para testar suas habilidades em JavaScript. 

## Instruções para Realização dos Desafios

1. **Faça FORK do repositório:**
   Para começar, você deve clonar este repositório em sua máquina local. Abra o terminal e execute o seguinte comando:

2. **Criar uma branch:**
   Crie uma branch seguindo a convenção: `desafio-logica-afya-[nome-do-grupo]`. Substitua `[nome-do-grupo]` pelo nome do seu grupo.

   ```bash
   git checkout -b desafio-logica-afya-[nome-do-grupo]
   ```

3. **Resolver os desafios:**
   Complete os desafios na sua branch. Você tem 1 hora e meia para resolver todos os desafios.

4. **Push das mudanças:**
   Após concluir os desafios, faça o push das suas mudanças para o repositório.

   ```bash
   git add .
   git commit -m "Resolução dos desafios de lógica de programação"
   git push origin desafio-logica-afya-[nome-do-grupo]
   ```

   sob hipótese alguma os alunos deverão fazer merge dos seus pushs, sob pena de 
   inviabilizar o presente repositório para os demais.

5. **Restrições:**
   - Os alunos não devem utilizar ChatGPT ou quaisquer outras IAs para resolver os problemas.
   - O uso de código externo que não seja desenvolvido pelo grupo é proibido.

## Executando os Testes

Para garantir que suas soluções estão corretas, você pode rodar os testes unitários usando o Jest. Siga os passos abaixo para executar os testes:

1. **Instalar dependências:**
   Certifique-se de ter o Jest instalado. Caso não tenha, instale as dependências do projeto, incluindo o Jest, utilizando o npm:

   ```bash
   npm install
   ```

2. **Rodar os testes:**
   Após instalar as dependências, você pode rodar todos os testes com o comando:

   ```bash
   npm test
   ```

   Este comando executará todos os testes localizados na pasta `__tests__` e verificará se as funções dos desafios estão funcionando corretamente.

## Lista de Desafios

### Desafio 1: Inverter um array
**Descrição:** Crie uma função que inverte os elementos de um array.

```javascript
function reverseArray(arr) {
  // Seu código aqui
}

// Exemplo de uso:
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
```

### Desafio 2: Remover o último elemento
**Descrição:** Crie uma função que remove o último elemento de um array e retorna o array modificado.

```javascript
function removeLastElement(arr) {
  // Seu código aqui
}

// Exemplo de uso:
console.log(removeLastElement([1, 2, 3, 4, 5])); // [1, 2, 3, 4]
```

### Desafio 3: Adicionar um elemento ao final
**Descrição:** Crie uma função que adiciona um elemento ao final de um array e retorna o array modificado.

```javascript
function addElementToEnd(arr, element) {
  // Seu código aqui
}

// Exemplo de uso:
console.log(addElementToEnd([1, 2, 3, 4], 5)); // [1, 2, 3, 4, 5]
```

### Desafio 4: Dobrar os valores
**Descrição:** Crie uma função que recebe um array de números e retorna um novo array com cada valor dobrado.

```javascript
function doubleValues(arr) {
  // Seu código aqui
}

// Exemplo de uso:
console.log(doubleValues([1, 2, 3, 4])); // [2, 4, 6, 8]
```

### Desafio 5: Filtrar valores pares
**Descrição:** Crie uma função que recebe um array de números e retorna um novo array apenas com os números pares.

```javascript
function filterEvenNumbers(arr) {
  // Seu código aqui
}

// Exemplo de uso:
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
```

### Desafio 6: Soma dos valores
**Descrição:** Crie uma função que recebe um array de números e retorna a soma de todos os valores.

```javascript
function sumValues(arr) {
  // Seu código aqui
}

// Exemplo de uso:
console.log(sumValues([1, 2, 3, 4])); // 10
```

### Desafio 7: Encontrar o maior valor
**Descrição:** Crie uma função que recebe um array de números e retorna o maior valor presente no array.

```javascript
function findMaxValue(arr) {
  // Seu código aqui
}

// Exemplo de uso:
console.log(findMaxValue([1, 2, 3, 4, 5])); // 5
```

### Desafio 8: Contar ocorrências
**Descrição:** Crie uma função que recebe um array e um valor, e retorna o número de ocorrências desse valor no array.

```javascript
function countOccurrences(arr, value) {
  // Seu código aqui
}

// Exemplo de uso:
console.log(countOccurrences([1, 2, 2, 3, 4, 2], 2)); // 3
```

### Desafio 9: Remover duplicatas
**Descrição:** Crie uma função que recebe um array e retorna um novo array sem elementos duplicados.

```javascript
function removeDuplicates(arr) {
  // Seu código aqui
}

// Exemplo de uso:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```

### Desafio 10: Agrupar por propriedade
**Descrição:** Crie uma função que recebe um array de objetos e uma chave, e retorna um objeto que agrupa os elementos do array pela chave especificada.

```javascript
function groupBy(arr, key) {
  // Seu código aqui
}

// Exemplo de uso:
const data = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 }
];
console.log(groupBy(data, 'age'));
// { '25': [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 25 }], '30': [{ name: 'Charlie', age: 30 }] }
```

---

Boa sorte com os desafios!

---
