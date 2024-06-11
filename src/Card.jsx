import { useEffect, useState } from "react"
import './Card.css'

export default function Card() {

    let savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    console.log(savedQuotes);

    const [quote, setQuote] = useState('');

    const URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

    
    const fetchQuote = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setQuote(data[0]);
    }

    const save = (newQuote) => {
        savedQuotes.push(newQuote);
        console.log(savedQuotes);
        localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
    }
        
    useEffect( () => {
        async function x() {
            const response = await fetch(URL);
            const data = await response.json();
            setQuote(data[0]);
        }
        x();
    }, []);
    
    return (
        <>
            <div className="card">

                <div className="content">

                    <p>"{quote}"</p>

                </div>

            </div>
            
            <button onClick={fetchQuote}>Generate New</button>
            <button onClick={() => {save(quote)}}>Save</button>
            <button><a href="/savedQuotes">Saved Quotes</a></button>
        </>
    )
}