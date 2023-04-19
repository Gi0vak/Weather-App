import './index.css';
import Loupe from "../../../assets/pictures/Loupe.svg"
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(inputValue);
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="search-bar"
            action="submit">
            <input
                className="input-search"
                type="text"
                placeholder="Rechercher une ville"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                className="button-search"
                type="submit">
                <img
                    src={Loupe}
                    className="loupe"
                    alt="loupe" />
            </button>
        </form >

    )


}
export default SearchBar;

