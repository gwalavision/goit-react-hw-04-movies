import { createUseStyles } from "react-jss";

const Searchbar = ({ onSubmit, onChange, value }) => {
  const useStyles = createUseStyles({
    form: {
      display: "block",
      textAlign: "center",
    },

    visuallyHidden: {
      position: "absolute",
      width: "1px",
      height: "1px",
      margin: "-1px",
      padding: "0",
      overflow: "hidden",
      border: "0",
      clip: "rect(0 0 0 0)",
    },
  });

  const styles = useStyles();

  return (
    <form onSubmit={onSubmit} value={value} className={styles.form}>
      <label htmlFor="1">
        <span className={styles.visuallyHidden}>Enter the film title</span>
        <input type="text" id="1" value={value} onChange={onChange}></input>
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;
