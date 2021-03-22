const divStyle = {
    backgroundColor : "lightGrey",
    padding: "2px 0px",
    margin: "3px 0px",
    width: "100vw",
    borderRadius:"15px"  
}

const pStyle = {
    marginLeft:"15px"
}

export default function SearchResultsItem ({name, email,phone}){
    return(
        <div style={divStyle}>        
            <p style={pStyle}><strong>Name: </strong>{name}</p>
            <p style={pStyle}><strong>Email: </strong>{email}</p>
            <p style={pStyle}><strong>Phone: </strong>{phone}</p>
        </div>
    );
}