import { useState } from "react";
import "./style.css"


export default function SearchBox({onSearch, onClose, isSearching}){
    const [searchText,setSearchText] = useState("");

    const handleCloseClick = () => {
        onClose();
        setSearchText("");
    }



    return(
        <div className="searchBox">
            <h1 className="searchBoxTitle">Buscador de personal</h1>
            <div className="searchBoxButtons">
                <label>
                    <input className="searchBoxInput" value={searchText} onChange={({target: {value}}) => setSearchText(value)} />
                </label>

                <button onClick={() => onSearch(searchText)} className="searchBoxButton" disabled={!searchText.length} >Buscar</button>

                {isSearching && <button onClick={handleCloseClick} className="searchBoxButton">Cerrar</button>}
            </div>
        </div>
    )
}


