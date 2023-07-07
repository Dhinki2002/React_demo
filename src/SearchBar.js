import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


const SearchBar = ({posts, setSearchResults}) => {
    const handleSubmit = (e) =>  e.preventDefault()
     const handleSearchChange = (e) => {
        if(!e.target.value) return setSearchResults(posts)
        const resultsArray= posts.filter(post=>post.title.includes(e.target.value)||post.body.includes(e.target.value))

        setSearchResults(resultsArray)
     }  
        
  return (
    
    


    <div class="rightNav">
    <header>
        <form className="search" onSubmit={handleSubmit}>
            <input className="search_input"
            type="text"
            id="search"
            onChange={handleSearchChange}/>
            <button className="search_button" type="submit"><FontAwesomeIcon icon ={faMagnifyingGlass}/></button>
        </form>
    </header>
    </div>
  )
}

export default SearchBar