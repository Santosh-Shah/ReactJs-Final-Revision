import styles from "./Styles.module.css";
const Item = (props) => {
  let { foodItem } = props;
  return (
    <li className={`${styles["ss-item"]}`}>
      <span className={`${styles["ss-span"]}`}>{foodItem}</span>
    </li>
  );
};

export default Item;

// "list-group-item ss-item"
