import debounce from 'lodash.debounce';
import React, { useContext, useState } from 'react'
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from '../context/CryptoContext';


const SearchInput = ({handleSearch}) => {
    const [ searchText, setSearchText ] = useState("");
    let { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext); 

    let handleInput = (e) => {
        e.preventDefault();
        let query = e.target.value; 
        setSearchText(query);
        handleSearch(query);  //debounceFunc(query)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchText);
    }

    const selectCoin = (coin) => {
        setCoinSearch(coin);
        //empty the searchText and searchData state after making the search call
        setSearchText("");
        setSearchData();
    }

    return (
        <>
            <form 
                className='w-96 relative flex items-center ml-7 font-nunito'>
                <input type='text' name='search'
                    onChange={handleInput}
                    value={searchText}
                    className='w-full rounded bg-gray-200 placeholder:text-gray-100 italic pl-2 required outline-0 border-transparent focus:border-cyan'
                    placeholder='Search...' />
                <button type='submit' className='absolute right-1 cursor-pointer'>
                    <img src={searchIcon} className='w-full h-auto' alt='search' />
                </button>
            </form>

            {searchText.length > 0 ?
                <ul className='absolute top-11 right-0 w-full h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md'>
                    {
                        searchData ?  //check if there is search data to display
                        searchData.map((coin) => {
                            return <li 
                                        onClick={() => selectCoin(coin.id)} 
                                        className='flex items-center ml-4 my-2 cursor-pointer' 
                                        key={coin.id}>
                                <img className="w-[1rem] h-[1rem] mx-1.5" src={coin.thumb} alt={coin.name} />
                                <span>{coin.name}</span>
                            </li>
                            
                        })
                        : <h2>Please wait...</h2>
                    }
                </ul>

                : null}
        </>
    );
};

const Search = () => {
    let { getSearchResult } = useContext(CryptoContext);

    //wait for 2 seconds to deliver search result info 
    const debounceFunc = debounce(function(val) {
        getSearchResult(val);
    },2000);

    return (
        <div className='relative'>
            <SearchInput handleSearch={debounceFunc} />
        </div>
        
    )
}

export default Search