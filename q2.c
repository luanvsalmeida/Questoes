#include <stdio.h>

void verificaFibonacci(int numero) {
    int a = 0, b = 1, proximo;

    // Verifica se o número é 0 ou 1
    if (numero == 0 || numero == 1) {
        printf("%d pertence a sequencia de Fibonacci.\n", numero);
        return;
    }

    // Gera a sequência até o número informado
    while (b < numero) {
        proximo = a + b;
        a = b;
        b = proximo;
    }

    // Verifica se o número pertence à sequência
    if (b == numero) {
        printf("%d pertence a sequencia de Fibonacci.\n", numero);
    } else {
        printf("%d nao pertence a sequencia de Fibonacci.\n", numero);
    }
}

int main() {
    int n;

    // Solicita ao usuário um número
    printf("Insira um numero: ");
    scanf("%d", &n);

    // Chama a função para verificar o número
    verificaFibonacci(n);

    return 0;
}