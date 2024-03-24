import { renderTree } from "../../util.js";
import { treeData } from "../../fake-data.js";

// Função para realizar a travessia pós-ordem e piscar os nós visitados
async function postOrderTraversal(node, logsElement) {
    await traverse(node, logsElement);
}

async function traverse(node, logsElement) {
    if (!node) return;

    const children = node.querySelector('.children');
    if (children) {
        for (const child of children.children) {
            await traverse(child, logsElement);
        }
    }

    // Piscar o nó após visitar todos os seus filhos
    node.classList.add('highlight');
    logsElement.innerHTML += `Visitando nó: ${node.querySelector('.value').textContent}<br>`;
    await sleep(1000); // Aguardar 1 segundo
    node.classList.remove('highlight');
    node.classList.add('visited');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Renderiza a árvore na div com id "tree"
const treeContainer = document.getElementById('tree');
renderTree(treeContainer, treeData);

// Renderiza a travessia pós-ordem com logs na div com id "logs"
const logsElement = document.getElementById('logs');
postOrderTraversal(treeContainer, logsElement);
