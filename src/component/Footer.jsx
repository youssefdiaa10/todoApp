import styles from "./footer.module.css";

function Footer({ completedList, totalList }) {
  return (
    <>
      <div className={styles.footer}>
        <span className={styles.item}>Completed List : {completedList}</span>
        <span className={styles.item}>Total List : {totalList}</span>
      </div>
    </>
  );
}

export default Footer;
