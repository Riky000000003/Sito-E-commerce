import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Carrello } from "./components/carello";

const CarelloView = () => {
  const { carrello, aggiungi, totale, totaleCarrello } = useContext(Carrello);

  return (
    <div style={styles.container}>
      <h1>Ecco i tuoi prodotti Selezionati</h1>
      <Link to={"/"}>
        <button style={styles.button}>torna home</button>{" "}
      </Link>
      {carrello.map((c) => {
        return (
          <div key={c.id}>
            <p>{c.title}</p>
          </div>
        );
      })}
      <p style={styles.p}>Totale Prezzo:</p>
    </div>
  );
};

const styles = {
  button: {
    position: "absolute",
    left: 10,
    top: 20,
    backgroundColor: "red",
    borderRadius: 20,
    padding: 10,
    fontSize: 16,
    color: "white"
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: "3",
    borderStyle: "solid",
    padding: 20
  },
  p: {
    position: "absolute",
    right: 40,
    bottom: 0,
    fontSize: 20
  }
};

export default CarelloView;
