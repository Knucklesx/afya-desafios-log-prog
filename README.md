Aqui está um exemplo de README para o repositório do GitHub com as instruções detalhadas e os desafios listados:

---

# Desafios de Lógica de Programação

Bem-vindo ao repositório de desafios de lógica de programação! Este repositório contém uma série de 10 desafios projetados para testar suas habilidades em JavaScript. 

## Instruções para Realização dos Desafios

1. **Clonar o repositório:**
   Para começar, você deve clonar este repositório em sua máquina local. Abra o terminal e execute o seguinte comando:

   ```bash
   git clone [URL do repositório]
   cd [nome do repositório clonado]
   ```

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

5. **Restrições:**
   - Os alunos não devem utilizar ChatGPT ou quaisquer outras IAs para resolver os problemas.
   - O uso de código externo que não seja desenvolvido pelo grupo é proibido.

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