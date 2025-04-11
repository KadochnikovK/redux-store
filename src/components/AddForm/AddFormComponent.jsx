import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cartSlice";

export default function AddFormComponent() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleAddItem = () => {
        if (title.trim()) {
            dispatch(addItem(title));
            setTitle('');
        }
    };

    return (
        <div className="container">
            <input 
                className="input" 
                type="text" 
                placeholder="Имя продукта" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />
            <button 
                className="main-button" 
                onClick={handleAddItem}
            >
                Добавить
            </button>
        </div>
    )
}