import React from 'react'
import Hero from './Hero'
import Trending from './Trending'
import { useSearch } from '../../SearchContext';
import Movies from './Movies';
import TV from './TV';

function Home() {
  const { setSearch } = useSearch();
  return (<>
    <Hero setSearch={setSearch} />
    <Trending />
    <Movies />
    <TV />
  </>
  )
}

export default Home
