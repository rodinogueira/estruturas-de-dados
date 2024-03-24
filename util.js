// Função para renderizar a árvore
export function renderTree(root, data) {
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