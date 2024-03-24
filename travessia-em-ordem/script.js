// Estrutura da árvore
const treeData = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 4 },
                { value: 5 },
                {
                    value: 6,
                    children: [
                        { value: 10 },
                        { value: 11 }
                    ]
                }
            ]
        },
        {
            value: 3,
            children: [
                { value: 7 },
                { value: 8 },
                {
                    value: 9,
                    children: [
                        { value: 12 },
                        { value: 13 },
                        {
                            value: 14,
                            children: [
                                { value: 15 },
                                { value: 16 }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            value: 17,
            children: [
                { value: 18 },
                { value: 19 },
                {
                    value: 20,
                    children: [
                        { value: 21 },
                        { value: 22 }
                    ]
                }
            ]
        }
    ]
};


// Função para renderizar a árvore
function renderTree(root, data) {
    const node = document.createElement('div');
    node.classList.add('tree-node');
    const valueElement = document.createElement('div');
    valueElement.classList.add('value');
    valueElement.textContent = data.value;
    node.appendChild(valueElement);
    
    if (data.children) {
        const childrenElement = document.createElement('div');
        childrenElement.classList.add('children');
        data.children.forEach(child => {
            renderTree(childrenElement, child);
        });
        node.appendChild(childrenElement);
    }
    
    root.appendChild(node);
}

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
