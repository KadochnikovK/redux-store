import { useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../../features/cartSlice";

export default function GoodsItemComponent({ good }) {
    const dispatch = useDispatch();

    const handleIncrement = (e) => {
        e.stopPropagation();
        dispatch(increment(good.id));
    };

    const handleDecrement = (e) => {
        e.stopPropagation();
        dispatch(decrement(good.id));
    };

    const handleDoubleClick = () => {
        dispatch(removeItem(good.id));
    };

    return (
        <div className="goods__item" onDoubleClick={handleDoubleClick}>
            <div>
                {good.title}
            </div>
            <div>
                <button 
                    className="button" 
                    onDoubleClick={(e) => e.stopPropagation()} 
                    onClick={handleDecrement}
                >
                    -
                </button>
                {good.count}
                <button 
                    className="button" 
                    onDoubleClick={(e) => e.stopPropagation()} 
                    onClick={handleIncrement}
                >
                    +
                </button>
            </div>
        </div>
    )
}