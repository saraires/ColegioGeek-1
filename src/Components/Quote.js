import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function Quote() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => {
        let data = res.data.quotes;
        let quoteSelected = Math.floor(Math.random() * data.length);
        let aleatorio = data[quoteSelected];

        setQuote(aleatorio);
        console.log(aleatorio);
      });
  }, []);

  return (
    <Container>
      <h4>
        <span>
          <FontAwesomeIcon icon={faQuoteLeft}  />
        </span>
        {" "}{quote.quote}
      </h4>
      <h5>{quote.author}</h5>
    </Container>
  );
}
export default Quote;
