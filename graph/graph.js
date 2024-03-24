export default class Graph {
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
