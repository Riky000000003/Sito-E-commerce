import { createContext, useState } from "react";

export const Carrello = createContext();

const useCarrello = () => {
  const [carrello, setCarrello] = useState([]);

  const [totale, setTotale] = useState(0);

  const aggiungi = (prodotto) => {
    setCarrello([prodotto, ...carrello]);
  };

  const totaleCarrello = (prezzo) => {
    setTotale(totale + prezzo);
  };

  return { carrello, aggiungi, totale, totaleCarrello };
};

const CarrelloContex = ({ children }) => {
  const { carrello, aggiungi, totale, totaleCarrello } = useCarrello();

  return (
    <Carrello.Provider value={{ carrello, aggiungi, totale, totaleCarrello }}>
      {children}
    </Carrello.Provider>
  );
};

export default CarrelloContex;
