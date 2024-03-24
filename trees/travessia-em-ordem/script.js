import { renderTree } from "../../util.js";
import { treeData } from "../../fake-data.js";

// Função para realizar a travessia em ordem e piscar os nós visitados
async function inOrderTraversal(node, logsElement) {
    await traverseInOrder(node, logsElement);
}

async function traverseInOrder(node, logsElement) {
    if (!node) return;

    const children = node.querySelector('.children');
    if (children) {
        await traverseInOrder(children.firstElementChild, logsElement); // Visit left child first
    }

    // Piscar o nó após visitar o filho esquerdo
    node.classList.add('highlight');
    logsElement.innerHTML += `Visitando nó: ${node.querySelector('.value').textContent}<br>`;
    await sleep(1000); // Aguardar 1 segundo
    node.classList.remove('highlight');
    node.classList.add('visited');
    
    if (children) {
        for (const child of children.children) {
            if (child !== children.firstElementChild) { // Skip the left child
                await traverseInOrder(child, logsElement);
            }
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Renderiza a árvore na div com id "tree"
const treeContainer = document.getElementById('tree');
renderTree(treeContainer, treeData);

// Renderiza a travessia em-ordem com logs na div com id "logs"
const logsElement = document.getElementById('logs');
inOrderTraversal(treeContainer, logsElement);
