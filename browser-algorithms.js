/**
 * ALGORITMO 1: NÚMERO É PRIMO
 * 
 * Definição: Um número inteiro positivo n é primo se for divisível apenas por 1 e por n.
 * Por convenção matemática, números menores ou iguais a 1 não são primos.
 */

function isPrimo(n) {
    // Validação para inteiros positivos maiores que 1
    if (!Number.isInteger(n) || n <= 1) {
        return false;
    }
    
    // 2 e 3 são números primos
    if (n <= 3) {
        return true;
    }
    
    // Números pares maiores que 2 ou múltiplos de 3 não são primos
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    
    // Verificação de divisores até a raiz quadrada de n
    // Incremento de 6 em 6 (todo primo > 3 é da forma 6k ± 1)
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    
    return true;
}


/**
 * ALGORITMO 2: SOMATÓRIO
 * 
 * Definição: Soma de um conjunto de números.
 */

function somatorio(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return 0;
    }

    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

// Alternativa funcional usando reduce
function somatorioReduce(numeros) {
    if (!Array.isArray(numeros)) return 0;
    return numeros.reduce((acumulador, atual) => acumulador + atual, 0);
}


/**
 * ALGORITMO 3: FIBONACCI
 * 
 * Definição: Onde N > 1.
 * Os primeiros termos são: 0, 1, 1, 2, 3, 5, 8, 13 …
 * Cada termo, além dos dois primeiros, é derivado da soma de seus dois antecessores mais próximos.
 */

function fibonacci(n) {
    if (n <= 1) {
        throw new Error("O valor de N deve ser estritamente maior que 1 (N > 1).");
    }

    const sequencia = [0, 1];

    for (let i = 2; i < n; i++) {
        const proximoTermo = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximoTermo);
    }

    return sequencia;
}


/**
 * ALGORITMO 4: MÁXIMO DIVISOR COMUM (MDC)
 * 
 * Definição: O máximo divisor comum (mdc) de dois inteiros a, b é o maior número inteiro que divide a e b.
 * Implementado através do clássico Algoritmo de Euclides.
 */

// Abordagem iterativa (Algoritmo de Euclides)
function mdcIterativo(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        const resto = a % b;
        a = b;
        b = resto;
    }

    return a;
}

// Abordagem recursiva
function mdcRecursivo(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b === 0) {
        return a;
    }
    return mdcRecursivo(b, a % b);
}


/**
 * ALGORITMO 5: ORDENAÇÃO (QUICKSORT)
 * 
 * Definição: Algoritmo de ordenação baseado no paradigma Dividir para Conquistar.
 * Escolhe um pivô, particiona os elementos menores à esquerda e maiores à direita,
 * e aplica o processo recursivamente.
 */

// Implementação In-Place (particionamento Lomuto)
function quicksort(arr, inicio = 0, fim = arr.length - 1) {
    if (inicio < fim) {
        const indicePivo = particionar(arr, inicio, fim);
        quicksort(arr, inicio, indicePivo - 1);
        quicksort(arr, indicePivo + 1, fim);
    }
    return arr;
}

function particionar(arr, inicio, fim) {
    const pivo = arr[fim];
    let i = inicio - 1;

    for (let j = inicio; j < fim; j++) {
        if (arr[j] <= pivo) {
            i++;
            // Troca arr[i] e arr[j]
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // Coloca o pivô na posição correta
    const temp = arr[i + 1];
    arr[i + 1] = arr[fim];
    arr[fim] = temp;

    return i + 1;
}


/**
 * ALGORITMO 6: CONTAGEM
 * 
 * Enunciado: Dado um valor de N números de entrada em um conjunto de dados,
 * conte quantos valores inteiros existem, neste conjunto de dados, entre
 * o primeiro dado (inclusive) e N (inclusive).
 * 
 * Exemplo:
 * Se o conjunto for [5, 7.5, 8, 12, 15, 20] e N for 15:
 * - O primeiro dado é 5.
 * - O intervalo considerado é de 5 (inclusive) até 15 (inclusive).
 * - Os valores inteiros neste intervalo são: 5, 8, 12, 15.
 * - Total contado = 4.
 */

function contarInteirosEntrePrimeiroEN(conjunto, N) {
    if (!Array.isArray(conjunto) || conjunto.length === 0) {
        return { total: 0, elementos: [] };
    }

    const primeiroDado = conjunto[0];
    const limiteInferior = Math.min(primeiroDado, N);
    const limiteSuperior = Math.max(primeiroDado, N);

    const elementosEncontrados = [];

    for (let i = 0; i < conjunto.length; i++) {
        const valor = conjunto[i];
        
        // Verifica se é um número inteiro e se está dentro do intervalo [limiteInferior, limiteSuperior]
        if (Number.isInteger(valor) && valor >= limiteInferior && valor <= limiteSuperior) {
            elementosEncontrados.push(valor);
        }
    }

    return {
        primeiroDado,
        N,
        intervalo: `[${limiteInferior}, ${limiteSuperior}]`,
        total: elementosEncontrados.length,
        elementos: elementosEncontrados
    };
}


window.algoritmos={isPrimo,somatorio,fibonacci,mdcIterativo,mdcRecursivo,quicksort,contarInteirosEntrePrimeiroEN};
