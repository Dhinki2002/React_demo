import React from 'react'

import { getPosts } from '../api/axios'
import {useState, useEffect} from 'react'
import ListPage from '../ListPage' 
import SearchBar from '../SearchBar'
// import Navbar from '../Navbar';

const Home = () => {

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
 <SearchBar posts={posts} setSearchResults={setSearchResults} /> 
<ListPage searchResults={searchResults}/> 

</>
  )
}

export default Home