import { useState } from "react";
import SearchBox from "./Components/SearchBox";
import SearchResults from "./Components/SearchResults"
import "./styles.css"
import data from "../../data/users.json"

export default function Search(){
    const [isAtTop,setIsAtTop] = useState(false);
    const[userData,setUserData] = useState(data);
    const [results, setResults] = useState([]);


    const handleSearchClick = (searchText) => {
        const searchTextMinus = searchText.toLowerCase();
        setIsAtTop(true);
        if(userData?.length){
            const filterData = userData.filter((value)=>{
                return(
                value.phone.includes(searchText) ||
                value.name.toLowerCase().includes(searchTextMinus) || 
                value.email.includes(searchText) ||
                value.username.toLowerCase().includes(searchTextMinus)
                );
            })
            setResults(filterData);
        }
        
    }

    const handleCloseClick = () => {
        setIsAtTop(false);
        setResults([]);
    }

    console.log(results)

    return(
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox onSearch={handleSearchClick} isSearching={isAtTop} onClose={handleCloseClick} />
            <SearchResults results={results} isSearching={isAtTop} />
        </div>
    );
}