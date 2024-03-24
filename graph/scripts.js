class Graph {
    constructor() {
        this.vertices = new Set();
        this.adjList = new Map();
    }

    addVertex(vertex) {
        this.vertices.add(vertex);
        this.adjList.set(vertex, new Set());
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjList.has(vertex1) || !this.adjList.has(vertex2)) {
            throw new Error('One or more vertices not found in the graph');
        }
        this.adjList.get(vertex1).add(vertex2);
        this.adjList.get(vertex2).add(vertex1);
    }
}

const graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log('********* printing graph ***********');

console.log(graph);

const graphContainer = document.getElementById('graph');

const vertexCoordinates = {
    A: { x: 50, y: 50 },
    B: { x: 200, y: 50 },
    C: { x: 350, y: 50 },
    D: { x: 50, y: 200 },
    E: { x: 200, y: 200 },
    F: { x: 350, y: 200 },
    G: { x: 50, y: 350 },
    H: { x: 200, y: 350 },
    I: { x: 350, y: 350 }
};

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
