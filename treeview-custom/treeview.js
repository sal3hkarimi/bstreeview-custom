const treeviewWrapper = document.querySelector('.treeview-wrapper')

const parent = (parent) => `<div class="treeitem" data-bs-target=".draft" data-node=${parent.isNode} data-id=${parent.id} aria-controls="draft-local" data-bs-toggle="collapse"
aria-expanded="true">${parent.text}</div>`
const nodeElement = (node) => `<div><div class="collapse draft" id="draft-local">${node.text}</div></div>`



axios.get('db-treeview.json')
    .then(tree => {
        const parentMain = tree.data.parentMain
        parentMain.map((e) => {
            treeviewWrapper.innerHTML += parent(e)

        })
    })

treeviewWrapper.addEventListener('click', (e) => {
    const element = e.target
    if (element.dataset.node) {
        axios.get('db-treeview.json')
            .then(async child => {
                child.data.nodes.map(e => {
                    if (element.dataset.id == e.id) {
                        treeviewWrapper.innerHTML += nodeElement({ text: 'azimkarimi' })
                    }
                })
            })
    }
})

// treeviewWrapper.innerHTML += child({ text: 'azimkarimi' })


