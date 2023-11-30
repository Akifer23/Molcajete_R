var items = document.getElementById('items')
var templateCard= document.getElementById('templateCard').content
var fragment = document.createDocumentFragment()
document.addEventListener('DOMContentLoaded',()=>{

    fetchData()
})

const fetchData = async()=>{
    try{
        const res = await fetch('api.json')
        const data = await res.json()
       
        pintarCards(data)
    }
    catch{
        console.log(error)
    }
}

const pintarCards = data => {
    console.log(data)
    data.forEach(producto =>{
    
    templateCard.querySelector('h5').textContent = producto.title
    templateCard.querySelector('p').textContent = producto.precio
    const clone = templateCard.cloneNode(true)

    fragment.appendChild(clone)
    })

    items.appendChild(fragment)
}