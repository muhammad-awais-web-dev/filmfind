import React from 'react'
import Hero from './Hero'
import Trending from './Trending'
import Movies from './Movies';
import TV from './TV';

function Home() {
  return (<>
    <Hero/>
    <Trending />
    <Movies />
    <TV />
  </>
  )
}

export default Home
