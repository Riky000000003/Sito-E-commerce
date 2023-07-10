import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Carrello } from "./components/carello";

const Dettaglio = () => {
  const idUrl = useParams();
  const [prodotto, setProdotto] = useState({});
  const { carrello, aggiungi, totale, totaleCarrello } = useContext(Carrello);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${idUrl.id}`)
      .then((res) => res.json())
      .then((json) => setProdotto(json));
  }, [idUrl.id]);

  console.log(prodotto);

  const acquista = (prodotto) => {
    aggiungi(prodotto);
    //totaleCarrello(prezzo);
  };

  return (
    <div style={styles.prodotto}>
      <h1>{prodotto.title}</h1>
      <img src={prodotto.thumbnail} width={"50%"} height={"50%"} />
      <div style={styles.div}>
        <p>{prodotto.description}</p>
        <p>
          {" "}
          <strong>{prodotto.price} €</strong>{" "}
        </p>
      </div>
      <Link to={"/"}>
        <button style={styles.button}>torna home</button>{" "}
      </Link>
      <button onClick={acquista(prodotto)} style={styles.button2}>
        Aggiungi Al carello
      </button>
    </div>
  );
};

const styles = {
  prodotto: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: "3",
    borderStyle: "solid",
    padding: 10,
    flexDirection: "column",
    position: "relative",
    background: "gold",
    borderRadius: 20
  },
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
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "90%",
    padding: 3
  },
  button2: {
    position: "absolute",
    right: 10,
    top: 20,
    backgroundColor: "green",
    borderRadius: 20,
    padding: 10,
    fontSize: 16,
    color: "white"
  }
};

export default Dettaglio;
