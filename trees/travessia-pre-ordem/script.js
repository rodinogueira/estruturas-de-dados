import { renderTree } from "../../util.js";
import { treeData } from "../../fake-data.js";

// Função para realizar a travessia pré-ordem e piscar os nós visitados
async function preOrderTraversal(root, logsElement) {
    await traverse(root, logsElement);
}

async function traverse(node, logsElement) {
    if (!node) return;
    
    // Mostrar o nó
    node.classList.add('highlight');
    logsElement.innerHTML += `Visitando nó: ${node.querySelector('.value').textContent}<br>`;
    await sleep(1000); // Aguardar 1 segundo
    node.classList.remove('highlight');
    node.classList.add('visited');
    
    // Percorrer os filhos recursivamente
    const children = node.querySelector('.children');
    if (children) {
        for (const child of children.children) {
            await traverse(child, logsElement);
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Renderiza a árvore na div com id "tree"
const treeContainer = document.getElementById('tree');
renderTree(treeContainer, treeData);

// Renderiza logs na div com id "logs"
const logsElement = document.getElementById('logs');

// Realiza a travessia pré-ordem
preOrderTraversal(treeContainer, logsElement);
