## Métodos em vetores JavaScript
<p>Ações disparadas pela <b>interação do usuário</b> na página. Tornando as páginas web interativas e dinâmicas.</p>

---

## Métodos mais utilizados

- ```push()```: adiciona um elemento no fim da lista.

- ```pop()```: remove o último elemento da lista e o retorna.
 
- ```join()```:  aceita um parâmetro, que será o separador inserido entre os elementos. 
  
  
-  ```shift()```: remove o primeiro elemento da lista. Altera os índices do restante do array.
  
-  ```unshift()```: adiciona item no índice 0.

-  ```delete```: recebe o índice do elemento como paràmetro e o deleta. Não altera os índices do restante do array, o elemento indicado se torna "undefined".

- ```splice()```: adiciona múltiplos valores no índice indicado. Recebe 3 parâmetros(índice onde o elemento será adicionado, quantos elementos serão removidos do array (a partir do índice indicado para direita), novos valores).

- ```concat()```: concatena arrays. 

- ```slice()```: fatiar o array. Recebe 3 parâmetros (índice onde começará o fatiamento, posição limite do fatiamento).

- ```sort()```: ordena o array de strings em ordem alfabética.

- ```sort(function(a, b) { return a - b})```: ordena números de forma crescente.

-  ```reverse()```: inverte o array.

- ```includes()```: verifica se o elemento existe no array, retorna um boleano.

-  ```(function maiorNumero(array { return Math.max.apply(null, array);})```: maior número do array.

-  ```(function menorNumero(array { return Math.min.apply(null, array);})```: menor número do array.

- ```...```: desempacota o array (Spread).

- ```filter()```: filtra elementos.



