import styles from "./SubmitButton.module.css";
function SubtmitButton({ text }) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  );
}

export default SubtmitButton;
