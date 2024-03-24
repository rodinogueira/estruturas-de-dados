import Graph from '../graph.js';

const graphContainer = document.getElementById('graph');

const graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'];

for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('C', 'G');
graph.addEdge('C', 'H');
graph.addEdge('D', 'I');
graph.addEdge('D', 'J');
graph.addEdge('E', 'K');
graph.addEdge('F', 'L');
graph.addEdge('G', 'M');
graph.addEdge('H', 'N');
graph.addEdge('I', 'O');
graph.addEdge('J', 'P');
graph.addEdge('K', 'Q');
graph.addEdge('L', 'R');
graph.addEdge('M', 'S');
graph.addEdge('N', 'T');
graph.addEdge('O', 'U');
graph.addEdge('P', 'V');
graph.addEdge('Q', 'W');

console.log('********* printing graph ***********');
console.log(graph);

const vertexCoordinates = {
    A: { x: 50, y: 50 },
    B: { x: 150, y: 50 },
    C: { x: 250, y: 50 },
    D: { x: 350, y: 50 },
    E: { x: 50, y: 150 },
    F: { x: 150, y: 150 },
    G: { x: 250, y: 150 },
    H: { x: 350, y: 150 },
    I: { x: 50, y: 250 },
    J: { x: 150, y: 250 },
    K: { x: 250, y: 250 },
    L: { x: 350, y: 250 },
    M: { x: 50, y: 350 },
    N: { x: 150, y: 350 },
    O: { x: 250, y: 350 },
    P: { x: 350, y: 350 },
    Q: { x: 50, y: 450 },
    R: { x: 150, y: 450 },
    S: { x: 250, y: 450 },
    T: { x: 350, y: 450 },
    U: { x: 50, y: 550 },
    V: { x: 150, y: 550 },
    W: { x: 250, y: 550 }
};

console.log('********* printing vertex coordinates ***********');
console.log(vertexCoordinates);


for (const vertex of myVertices) {
    const vertexElement = document.createElement('div');
    vertexElement.classList.add('vertex');
    vertexElement.textContent = vertex;
    vertexElement.dataset.vertex = vertex; // Adiciona o atributo data-vertex
    vertexElement.style.left = `${vertexCoordinates[vertex].x}px`;
    vertexElement.style.top = `${vertexCoordinates[vertex].y}px`;
    graphContainer.appendChild(vertexElement);

    const neighbors = graph.adjList.get(vertex);
    for (const neighbor of neighbors) {
        const edgeElement = document.createElement('div');
        edgeElement.classList.add('edge');
        const vertexCenterX = vertexCoordinates[vertex].x + 20;
        const vertexCenterY = vertexCoordinates[vertex].y + 20;
        const neighborCenterX = vertexCoordinates[neighbor].x + 20;
        const neighborCenterY = vertexCoordinates[neighbor].y + 20;
        edgeElement.style.width = `${Math.sqrt((neighborCenterX - vertexCenterX) ** 2 + (neighborCenterY - vertexCenterY) ** 2)}px`;
        edgeElement.style.height = '2px';
        edgeElement.style.backgroundColor = 'black';
        edgeElement.style.transformOrigin = '0 50%';
        edgeElement.style.transform = `translate(${vertexCenterX}px, ${vertexCenterY}px) rotate(${Math.atan2(neighborCenterY - vertexCenterY, neighborCenterX - vertexCenterX)}rad)`;
        graphContainer.appendChild(edgeElement);
    }
}

// Função para executar a travessia em largura (BFS) no grafo
async function breadthFirstSearch(graph, startVertex, logsElement) {
    const visited = new Set();
    const queue = [startVertex];

    while (queue.length > 0) {
        const vertex = queue.shift();

        if (!visited.has(vertex)) {
            visited.add(vertex);
            logsElement.innerHTML += `Visitando vértice: ${vertex}<br>`;
            const neighbors = graph.adjList.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }

            // Muda a cor do vértice visitado
            const vertexElement = document.querySelector(`.vertex[data-vertex="${vertex}"]`);
            vertexElement.classList.add('highlight');
            await sleep(1000); // Aguarda 1 segundo antes de avançar
            vertexElement.classList.remove('highlight'); // Remove a classe highlight após o atraso
        }
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Renderiza a travessia em largura com logs na div com id "logs"
const logsElement = document.getElementById('logs');
breadthFirstSearch(graph, 'A', logsElement);
