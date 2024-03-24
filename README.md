"# estruturas-de-dados" 

Árvore, no contexto da programação, engenharia de software e ciência da computação, é uma das mais importantes estruturas de dados não lineares.[1] Herda as características das topologia em árvore. Conceptualmente diferente das listas, em que os dados se encontram numa sequência, nas árvores os dados estão dispostos de forma hierárquica,[2] seus elementos se encontram "acima" ou "abaixo" de outros elementos da árvore.[1]

São estruturas eficientes e simples em relação ao tratamento computacional, diferentemente dos grafos.[3] Há inúmeros problemas no mundo real que podem ser modelados e resolvidos através das árvores. Estruturas de pastas de um sistema operacional, interfaces gráficas, bancos de dados e sites da Internet são exemplos de aplicações de árvores.[1]

Uma árvore é formada por um conjunto de elementos que armazenam informações chamados nodos ou nós.[2][4] Toda a árvore possui o elemento chamado raiz, que possui ligações para outros elementos denominados ramos ou filhos. Estes ramos podem estar ligados a outros elementos que também podem possuir outros ramos. O elemento que não possui ramos é conhecido como nó folha, nó terminal ou nó externo.[2]

Uma terminologia muito utilizada nas estruturas de árvores tem origem das árvores genealógicas. O relacionamento entre nodos é descrito com os termos "pai" (ou "mãe") para os antecessores diretos de um nodo, "filhos" (ou "filhas") para os descendentes diretos e "irmãos" (ou "irmãs") para todos os nodos com mesmo pai.[1][2]

Definições básicas
Definição formal de árvore
Formalmente, definimos uma árvore 
�
{\displaystyle T} como um conjunto finito de zero ou mais nodos tal que[3]:
se o número de nodos = 
0
{\displaystyle 0}, temos uma árvore vazia, ou
se o número de nodos > 
0
{\displaystyle 0}
existe um nó especialmente denominado raiz de 
�
{\displaystyle T}
os nós restantes formam 
�
≥
0
{\displaystyle m\geq 0} conjuntos disjuntos 
�
1
,
�
2
,
.
.
.
,
�
�
{\displaystyle p_{1},p_{2},...,p_{m}}, cada um desses conjuntos é uma árvore em si, chamada subárvore da raiz de 
�
{\displaystyle T}, ou simplesmente subárvore.
O número máximo de filhos em um nodo é chamado ordem da árvore. Uma árvore binária é aquela de ordem 2, i.e., em que cada elemento possui no máximo 2 filhos.

Representação

Diferentes representações de uma árvore: a) hierárquica, b) diagrama de barras, c) diagrama de inclusão, d) aninhamento e e) numeração por níveis
Há diversas formas de representação de uma árvore: hierárquica, diagrama de inclusão, diagrama de barras, numeração por níveis, por aninhamento.

A hierárquica é parecida com um organograma de uma empresa, linhas unem dois nodos e indicam o relacionamento lógico entre eles. Tradicionalmente desenha-se a raiz na parte superior e todos os nodos subordinados na parte inferior, mas o contrário também é possível.[4] Na figura acima, o item (a) é um exemplo desta representação.

Diagrama de inclusão, um círculo representa cada nodo e seus nodos descendentes são inseridos dentro do círculo de seus pais. Também conhecida como diagrama de Venn, é muito utilizada na representação de conjuntos.[3] O item (c) da figura ao lado mostra a árvore do item (a) usando diagrama de inclusão.

Em um diagrama de barras, linhas são usadas para mostrar a hierarquia dos nodos. A raiz possui a linha de maior tamanho e os nodos irmãos possuem linhas de tamanhos iguais. Método bastante utilizado na criação de índices de livros.[3] É similar à indentação usada em linguagens de programação.[2] O item (b) da imagem ao lado indica como seria a árvore do item (a) usando essa representação.

Usando numeração por níveis o nodo raiz recebe o número um e todos os nodos seguintes recebem uma numeração sequencial, sempre antecedidos pela numeração de seus nodos superiores.[3] Item (e) da figura à direita representa a árvore (a) com representação por níveis.

Na representação por aninhamento, também conhecida por "representação por parênteses aninhados", a sucessão de parênteses reproduz as relações entre os nodos, aninhando um nodo filho ao seu pai.[2] Como exemplo temos o item (d) da imagem ao lado representando a árvore (a).

Algoritmos
Uma das operações importantes consiste em percorrer cada elemento da árvore uma única vez. Esse percurso, também chamado de travessia da árvore, pode ser feito em pré-ordem (os filhos de um nó são processados após o nó) ou em pós-ordem (os filhos são processados antes do nó). Em árvores binárias é possível ainda fazer uma travessia em-ordem, em que se processa o filho à esquerda, o nó, e finalmente o filho à direita.

O algoritmo abaixo descreve uma travessia pré-ordem: PercursoPreordem(nó): Processa nó Para cada filho de nó (se houver) Executa recursivamente PercursoPreordem(filho)

Outra operação utilizada nas árvores de pesquisa é a travessia da raiz até uma das folhas. Essa operação tem um custo computacional proporcional ao número de níveis da árvore. O pior caso é a travessia de todos os elementos até a folha de nível mais baixo. Árvores balanceadas apresentam o melhor pior caso possível, para um certo número de nós. O pior caso apresenta-se na árvore degenerada em que cada nó possui exatamente um filho, e a árvore tem o mesmo número de níveis que de nós, assemelhando-se a uma lista ligada.

Referências
 Goodrich, Michael T.; Tamassia, Roberto (2013). Estruturas de Dados e Algoritmos em Java 5ª ed. Porto Alegre: Bookman. ISBN 978-85-8260-018-4
 Edelweiss, Nina; Galante, Renata (2009). Estruturas de Dados. Col: Série Livros Didáticos Informática UFRGS. 18. Porto Alegre: Bookman. ISBN 978-85-7780-381-1
 Szwarcfiter, Jayme Luiz; Markenzon, Lilian (2014). Estruturas de Dados e seus Algoritmos 3ª ed. Rio de Janeiro: LTC. ISBN 978-85-216-1750-1
 Celes, Waldemar; Cerqueira, Renato; Rangel, José L. (2004). Introdução a estruturas de dados: com técnicas de programação em C. Rio de Janeiro: Elsevier. ISBN 85-352-1228-0
Ver também
Árvore binária
Árvore de busca binária
Árvore AVL
Árvore ordenada
Árvore rubro-negra
Árvore 2-3
Árvore 2-3-4
Árvore B
Árvore B+
Árvore hiperbólica
Topologia em árvore