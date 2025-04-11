export default function GoodsItemComponent({good, increment, decrement}) {
return (
    <div className="goods__item">
    <div>
        {good.name}
    </div>
    <div className="goods__price">
        Price: {good.price}
    </div>
    <div>
        <button className="button" onClick={decrement}>-</button>{good.count}<button className="button" onClick={increment}>+</button>
    </div>
    </div>
)
}