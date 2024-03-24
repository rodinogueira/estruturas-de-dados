import Graph from '../graph.js'; // Importa a classe Graph do arquivo Graph.js

function breadthFirstSearch(graph, startVertex, endVertex, logsElement) {
    const visited = new Set();
    const predecessors = {};
    const distances = {};
    const queue = [];

    for (const vertex of graph.vertices) {
        distances[vertex] = Infinity;
        predecessors[vertex] = null;
    }

    queue.push(startVertex);
    distances[startVertex] = 0;

    while (queue.length > 0) {
        const currentVertex = queue.shift();
        visited.add(currentVertex);

        if (currentVertex === endVertex) {
            break;
        }

        const neighbors = graph.adjList.get(currentVertex);
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
                predecessors[neighbor] = currentVertex;
                distances[neighbor] = distances[currentVertex] + 1;
            }
        }

        // Pintar o vértice visitado
        const vertexElement = document.querySelector(`.vertex[data-vertex="${currentVertex}"]`);
        vertexElement.classList.add('visited');
    }

    // Reconstruir o caminho mais curto
    const shortestPath = [];
    let currentVertex = endVertex;
    while (currentVertex !== null) {
        shortestPath.unshift(currentVertex);
        currentVertex = predecessors[currentVertex];
    }

    // Mostrar caminho mais curto
    highlightPath(shortestPath);

    // Log do caminho mais curto
    logsElement.innerHTML = `Caminho mais curto encontrado: ${shortestPath.join(' -> ')}`;

    return shortestPath;
}
const graphContainer = document.getElementById('graph');
const logsElement = document.getElementById('logs');

const graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'];

for (const vertex of myVertices) {
    graph.addVertex(vertex);
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
    vertexElement.dataset.vertex = vertex;
    vertexElement.style.left = `${vertexCoordinates[vertex].x}px`;
    vertexElement.style.top = `${vertexCoordinates[vertex].y}px`;
    graphContainer.appendChild(vertexElement);

    const neighbors = graph.adjList.get(vertex);
    for (const neighbor of neighbors) {
        const edgeElement = document.createElement('div');
        edgeElement.classList.add('edge');
        edgeElement.dataset.edge = `${vertex}-${neighbor}`;
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

function highlightPath(path) {
    for (let i = 0; i < path.length - 1; i++) {
        const currentVertex = path[i];
        const nextVertex = path[i + 1];
        const edgeElement = document.querySelector(`.edge[data-edge="${currentVertex}-${nextVertex}"]`);
        edgeElement.classList.add('shortest-path');
        const vertexElement = document.querySelector(`.vertex[data-vertex="${currentVertex}"]`);
        vertexElement.classList.add('shortest-path');
    }
}

function clearHighlight() {
    const edges = document.querySelectorAll('.edge');
    edges.forEach(edge => {
        edge.classList.remove('shortest-path');
    });
    const vertices = document.querySelectorAll('.vertex');
    vertices.forEach(vertex => {
        vertex.classList.remove('visited', 'shortest-path');
    });
}

const startVertex = 'A';
const endVertex = 'V';
const shortestPath = breadthFirstSearch(graph, startVertex, endVertex, logsElement);
console.log('********* shortest path - BFS ***********');
console.log(shortestPath);

// Limpar destaque anterior e destacar o novo caminho mais curto
clearHighlight();
highlightPath(shortestPath);
