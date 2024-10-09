import { useState } from "react";
import styles from "./styles.module.css";
import { FaStar } from "react-icons/fa";
export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseMove(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave(getCurrentIndex) {
    setHover(rating);
  }
  return (
    <div className={styles.starRating}>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating)
                ? `${styles.active}`
                : `${styles.inactive}`
            }
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}
