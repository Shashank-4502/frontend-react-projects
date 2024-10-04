import React, { useState } from "react";
import styles from "./styles.module.css";
import data from "./data";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleSelection, setMultipleSelection] = useState([]);
  function handleSingleSelection(questionId) {
    console.log(questionId);
    setSelected(questionId === selected ? null : questionId);
  }
  function handleMultipleSelection(questionId) {
    let currentMutiple = [...multipleSelection];
    const currentQuestionIdIndex = currentMutiple.indexOf(questionId);
    if (currentQuestionIdIndex === -1) currentMutiple.push(questionId);
    else currentMutiple.splice(currentQuestionIdIndex, 1);
    setMultipleSelection(currentMutiple);
  }
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        Enable Multiple Selection
      </button>
      <div className={styles.accordian}>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className={styles.item}>
              <div
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className={styles.title}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
                {enableMultipleSelection
                  ? multipleSelection.indexOf(dataItem.id) !== -1 && (
                      <div className={styles.content}>{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className={styles.content}>{dataItem.answer}</div>
                    )}
                {/* {selected === dataItem.id || multipleSelection.indexOf(dataItem.id) !== -1  ? (
                  <div className={styles.content}>{dataItem.answer}</div>
                ) : null} */}
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1>No data found</h1>
          </div>
        )}
      </div>
    </div>
  );
}
