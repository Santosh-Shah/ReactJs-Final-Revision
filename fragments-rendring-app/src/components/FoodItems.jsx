import Item from "./Item";

let FoodItems = ({ items }) => {
  // let foodItems = ["Dal", "Bhat", "Tarkari", "Matar", "Milk", "Haluwa"];
  // let { items } = props;

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} foodItem={item}></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
