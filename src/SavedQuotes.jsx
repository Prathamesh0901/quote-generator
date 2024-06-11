import { useState } from 'react';
import './SavedQuotes.css'

export default function SavedQuotes() {
    const [quotes, setQuotes] = useState(JSON.parse(localStorage.getItem('savedQuotes')) || []);

    const clear = () => {
        localStorage.setItem('savedQuotes', JSON.stringify([]));
        setQuotes([]);
    }

    return (
        <div className="quotes">
            <h1>Saved Quotes</h1>

            <ul>
                {
                    quotes.map(quote => (
                        <li>{quote}</li>
                    ))
                }
            </ul>

            <button onClick={clear}>Clear List</button>
        </div>
    )
}