import { useEffect, useState } from "react"
import bg from './assets/bg.jpg'
import './Card.css'

export default function Card() {

    const [quote, setQuote] = useState('');

    const URL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

    
    const fetchQuote = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setQuote(data[0]);
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
        </>
    )
}