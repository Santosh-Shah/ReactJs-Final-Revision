const ErrorMsg = ({ items }) => {
  // let { items } = props;
  // let foodItems = ["Dal", "Bhat", "Tarkari", "Matar", "Milk", "Haluwa"];

  return <>{items.length === 0 && <h3>I am still hungry</h3>}</>;
};

export default ErrorMsg;
