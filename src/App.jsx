import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./components/Card";

export default function App() {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((json) => setProdotti(json.products));
  }, []);

  return (
    <div className="App" style={styles.pagina}>
      <h1>I NOSTRI PRODOTTI</h1>
      <Link to={"carrello"}>
        {" "}
        <button style={styles.button2}>Vai al tuo Carello</button>{" "}
      </Link>
      <div style={styles.lista}>
        {prodotti?.map((p) => (
          <Card
            titolo={p.title}
            descrizione={p.description}
            immagine={p.thumbnail}
            key={p.id}
            id={p.id}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  pagina: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative"
  },
  lista: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10
  },
  button2: {
    position: "absolute",
    right: 10,
    top: 20,
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 10,
    fontSize: 16,
    color: "white"
  }
};
