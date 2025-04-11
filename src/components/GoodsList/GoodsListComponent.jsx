import { useSelector } from "react-redux";
import GoodsItemComponent from "../GoodsItem/GoodsItemComponent";

export default function GoodsListComponent() {
    const goods = useSelector(state => state.cart.cart);
    
    return (
        <div className="container list">
            {goods.map(good => <GoodsItemComponent key={good.id} good={good} />)}
        </div>
    )
}