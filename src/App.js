import AddFormComponent from "./components/AddForm/AddFormComponent";
import GoodsListComponent from "./components/GoodsList/GoodsListComponent";

export default function App() {
  return (
    <div className="app content">
      <div className="goods">
        <AddFormComponent />
        <GoodsListComponent />
      </div>
    </div>
  );
}