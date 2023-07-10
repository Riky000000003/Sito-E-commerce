import { Link } from "react-router-dom";

const Card = ({ titolo, descrizione, immagine, id }) => {
  return (
    <div style={styles.contain}>
      <div style={styles.contenuti}>
        <img src={immagine} alt="Immagine Prodotto" style={styles.img} />
        <h1>{titolo}</h1>
        <p>{descrizione}</p>
        <Link to={`products/${id}`}>
          {" "}
          <button style={styles.button}>Dettagli</button>{" "}
        </Link>
      </div>
    </div>
  );
};

const styles = {
  contain: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: "3",
    borderColor: "black",
    borderStyle: "solid",
    padding: 10,
    margin: 5,
    width: "45%",
    height: "45%",
    borderRadius: 20,
    backgroundColor: "gold"
  },
  contenuti: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    postion: "relative"
  },
  img: {
    width: "35%",
    height: "35%"
  },
  button: {
    backgroundColor: "green",
    color: "white",
    borderRadius: 20,
    padding: 10,
    fontSize: 16
  }
};

export default Card;
