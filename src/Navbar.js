import React from 'react'
import download from './image/download.png';
import SearchBar from './SearchBar'
import { getPosts } from  './api/axios'
import {useState, useEffect} from 'react'
import ListPage from './ListPage' 

const Navbar = () => {

    const [posts,setPosts]= useState([])
	const[searchResults,setSearchResults]= useState([])
	useEffect(()=>{
		getPosts().then(json=>{
			setPosts(json)
			setSearchResults(json)
		})
	},[])
  return (
    <>
    <div>
        <nav class="navbar background">
            <ul class="nav-list">
                <div class="logo">
                    <img src={download} alt="logo" 
/>
                </div>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/tutorials">Tutorials</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href='/student'>Student</a></li>
            </ul>
            <SearchBar posts={posts} setSearchResults={setSearchResults} />
    
</nav>
</div>	
<ListPage searchResults={searchResults}/> 

</>
  )
}

export default Navbar