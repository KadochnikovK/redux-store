import { useCallback } from "react"

export default function GoodsItemComponent({ good, increment, decrement, deleteGood }) {

    const wrapperFunction = useCallback((event, func) => {
        event.stopPropagation()
        func()
    }, [])
    return (
        <div className="goods__item" onDoubleClick={deleteGood}>
            <div>
                {good.name}
            </div>
            <div className="goods__price">
                Price: {good.price}
            </div>
            <div>
                <button className="button" onDoubleClick={(e) => e.stopPropagation()} onClick={(e) => wrapperFunction(e, decrement)}>-</button>{good.count}<button className="button" onDoubleClick={(e) => e.stopPropagation()} onClick={(e) => wrapperFunction(e, increment)}>+</button>
            </div>
        </div>
    )
}