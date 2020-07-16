// 1 variáveis e constantes
/*
Variáveis são um tipo de dado onde o computador armazena uma informação obtida de algum lugar e com isso a usa para processar contas
uma variável é maleável e pode ter seu valor alterado, Agora uma constante é muito parecida com uma variável porém uma vez inserido um dado nele
seu conteúdo não pode ser alterado.

Exemplo: var a = 1;
             a = 2
         var b = 2;
         var c = b + a;

         const d = 5;

*/

// 2 comandos de decisão

/*
Para os comandos de decisão temos o if else e o operador ternário com  ? :, esses recebem uma condição como parâmetro e se for verdade ou não é executado
uma certa sequencia de comandos conforme escrito.

Exemplo var a = true;
        var b = false;

        if(a)
        {
            document.write("Eu sou executado pois a é true");
        }
        else
        {
            document.write("Eu seria executado se a fosse false");
        }

        b ? document.write("Eu seria executado se b fosse true") : document.write("Eu sou executado pois b é true");

*/

// 3 loops

/*
Para os loops temos para nossa utilização o for e seus variantes como for of e for in, e também temos o while. Utilizamos os loops para repetir uma certa 
sequência de código conforme nossa necessidade.

Exemplo: for(int i = 0; i < 10, i++)
         {
            document.write(`Número ${i}`);
         }
*/

//4 funções

/*
    Escrevemos funções para tornar o código mais limpo e facilitar nossa visualização, além de ser util para executar uma mesma operação que deve ser executada
    diversas vezes ao longo do programa.

    Exemplo: function conta(n)
             {
                 for(int i = 0; i < n, i++)
                {
                    document.write(`Número ${i}`);
                }
            }
            
            conta(10);
*/

// 5 escopos

/*
Para os escopos temos o escopo global onde qualquer um pode acessar os dados daquele escopo e o escopo local onde o acesso ao  dado fica restringido apenas
a uma área local

Exemplo: 
            function conta(n)
             {
                 var a = 0;
                 for(int i = 0; i < n, i++)
                {
                    document.write(`Número ${i}`);
                }
            }
            a variável a é acessível somente dentro de própria função, já fora dela ela seria acessível de qualquer lugar
*/

// 6 inputs e outputs 

/*
São as formas de entradas de dados e saída de dados, com as entradas pegamos informações do usuário e com a saída informamos dados ao usuário

Exemplo: document.write("Olá usuário"); forma de output
         var a = prompt("Digite o seu nome"); forma de input

*/

// 7 array

/*
Forma de se obter vários dados em uma única variável, formando assim uma lista com vários dados para serem acessados.

Exemplo: var a = ["Erick","Weberson","Jean"];
         document.write(a[0]);

*/

// 8 objetos

/*
Lembra um pouco uma array porém em objetos podemos ter diversas características para nossa variável e assim ela se torna específica com coisas somente dela.

Exemplo: var pizza = {
            sabores:['Portuguesa', 'Marguerita'],
            tamanho:'G',
            valor: 60.0,
            bordaRecheada: true,
            complementos:['Ketchup', 'Mostarda']
        };
*/

// 9 Cases

/* 
Temos no mundo da programação diversas convenções na hora de se escrever um código e temos formas diferentes dependendo da linguagem assim 
existe: camelCase, PascalCase, kibab-case, snake_case.

*/

// 10 caminho absoluto e relativo
 
/* Na hora de referenciar um código que está em outro arquivo temos que dizer onde ele deve procurar esse arquivo para utilizar o conteúdo dele
dessa forma podemos escrever todo o caminho até esse arquivo fazendo assim um caminho absoluto, porém de ambos estiverem na mesma pasta podemos omitir parte desse caminho fazendo assim
um caminho relativo.

*/

// 11  Diferença entre os operadores &&, ||, == e !=

/*
Temos formas de tornar nossa comparações mais complexas e para isso os utilizamos para satisfazer ou não diversas condições usamos o && para quando queremos
que todas as condições sejam atendidas, usamos o || para quando queremos que apenas uma condição seja verdade, usamos == quando queremos que ambas as condições
sejam iguais e usamos o != quando queremos que as condições seja diferentes.

*/

// 12 O que é EPER, e para que serve

/*
Entender-Planejar-Executar-Revisar
Eper é uma forma de se preparar melhor para resolver um problema, sendo utilizado para te ajudar a se organizar melhor e desenvolver um problema antes de agir,
tornando seu tempo mais otimizado e o fazendo chegar a solução mais rápido.
*/

// 13 Explique o que é Pilha e Fila, quero exemplos.

/*
Fila e pilha são formas de organizamos a entrada e saida de dados para algum propósito.
Sendo fila o primeiro a entrar é o primeiro a sair e pilha o primeiro a entrar é o último a sair.

Exemplo: para filas podemos imaginar um array que possúi uma ordem e para pilha podemos imaginar um objeto que possúi suas características empilhadas.

*/

// 14 Explique com suas palavras qual a diferença entre html, javascript e css.7°

/*
Para o html é o que vemos na tela e como vamos montar os elementos visuais de uma página com o que o usuário irá interagir.
Para o css temos o que podemos chamar de firulas visuais que é a parte onde se cuida de todos os elementos estéticos para tornar a página mais bonita.
Para o JavaScript temos a parte onde as operações e o contato com o backend é realizado, a parte por detrás dos efeitos visuais.
*/
