import React from 'react'
import Hero from './Hero'
import Trending from './Trending'
import { useSearch } from '../../SearchContext';
import Movies from './Movies';

function Home() {
  const { setSearch } = useSearch();
  return (<>
    <Hero setSearch={setSearch} />
    <Trending />
    <Movies />
  </>
  )
}

export default Home
