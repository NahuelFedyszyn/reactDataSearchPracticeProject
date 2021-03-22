import { useState, useEffect } from "react";
import SearchBox from "./Components/SearchBox";
import axios from "axios";
import SearchResults from "./Components/SearchResults"
import "./styles.css"
import data from "../../data/users.json"

export default function Search(){
    const [isAtTop,setIsAtTop] = useState(false);
    const[userData,setUserData] = useState([]);
    const [results, setResults] = useState([]);
    
    //Aqui se produce una llamada a la API
    useEffect(()=>{
        try{
            const getUsers = async () =>{
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                console.log(response);
                //const response = await fetch("https://jsonplaceholder.typicode.com/users");
                //const data = await response.json();
                setUserData(response.data);
            }
            getUsers().catch(null)
        }
        catch(err){
            console.error(err);
        }
    },[]);

    //Hasta aqui la llamada a la API

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