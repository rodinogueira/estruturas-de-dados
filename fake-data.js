// Estrutura da árvore
export const treeData = {
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
                        { value: 22 },
                        { value: 23 }
                    ]
                }
            ]
        }
    ]
};