import SearchResultsItem from "./SearchResultsItem";

export default function SearchResults({results, isSearching}) {
    return(
        <div>
            {!results?.length && isSearching && <p>No results</p>}
            {results?.map((value)=>
                <SearchResultsItem key={value.id} name={value.name} email={value.email} phone={value.phone} />
            )}
        </div>
    );
}