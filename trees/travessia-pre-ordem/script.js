import { renderTree } from "../../util.js";
import { treeData } from "../../fake-data.js";

// Função para realizar a travessia pré-ordem e piscar os nós visitados
async function preOrderTraversal(root) {
    await traverse(root);
}

async function traverse(node) {
    if (!node) return;
    
    // Mostrar o nó
    node.classList.add('highlight');
    await sleep(1000); // Aguardar 1 segundo
    node.classList.remove('highlight');
    node.classList.add('visited');
    
    // Percorrer os filhos recursivamente
    const children = node.querySelector('.children');
    if (children) {
        for (const child of children.children) {
            await traverse(child);
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Renderiza a árvore na div com id "tree"
const treeContainer = document.getElementById('tree');
renderTree(treeContainer, treeData);

// Realiza a travessia pré-ordem
preOrderTraversal(treeContainer);
