import { useState } from "react"

export default function AddFormComponent({createGood}) {
    const [newGood, setNewGood] = useState({
        name: '',
        price: ''
    })

    const dropGood = () => {
        setNewGood({
            name: '',
            price: ''
        })
    }
    
    

    return (
        <div className="container">
        <input class="input" type="text" placeholder="Имя продукта" value={newGood.name} onChange={(e) => setNewGood(prev => ({...prev, name: e.target.value}))}/>
        <input class="input" type="number" placeholder="Цена продукта"value={newGood.price} onChange={(e) => setNewGood(prev => ({...prev, price: e.target.value}))}/>
        <button class="main-button" onClick={() => createGood(newGood, dropGood)}>Добавить</button>
        </div>
    )
}