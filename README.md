# Teste de Desenvolvimento Web

## Processamento de temperaturas

Escreva um programa que leia um conjunto de temperaturas na unidade Kelvin (K) e gere as seguintes informações:

O conjunto de temperaturas em ordem crescente;
A mediana das temperaturas;
A média aritmética das temperaturas.

O programa deverá ler inicialmente um número inteiro n, representando a quantidade de valores de temperaturas a serem lidas, 
seguido dos n valores. Em seguida, o programa deve imprimir as informações listadas acima. 
Cada entrada e saída do programa deve estar em uma única linha.
Exemplo de entrada:

3
100
50
300

Exemplo de saída:
	
Temperaturas ordenadas - 50 K, 100 K, 300 K
Mediana - 100 K
Média - 150 K

---

## Sobre o Desenvolvimento
A solução proposta seguiu algumas características como:

- **Funções especialistas** 
- **Introdução a testes e tratamento de exceções**
- **Modularização**

---
## Como Instalar
> 
```
git clone https://github.com/lbarbosadata/teste-pegasus

cd teste-pegasus

> node app
```
---
## Sobre os Módulos

O módulo ``` app.js ``` foi pensado para ser a interface. Utilizando a função ``` main() ``` como *entry point* para o todo.

Portanto, as temperaturas podem ser passadas como argumento para a função `main()`.

---
## Sobre os Testes

Foram realizadas algumas validações em geral, tais como:

1. Validação para uma quantidade (n) que representa uma quantidade diferente das (n) temperaturas a serem lidas.
2. Validação de números negativos (-n) (*Não existe temperatura negativa para Kelvin*) 
3. Validação para uma chamada sem argumento. ()
4. Validação para strings vazias ou em branco. (''), (' ')