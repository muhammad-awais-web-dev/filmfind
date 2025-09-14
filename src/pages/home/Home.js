import React from 'react'
import Hero from './Hero'
import Trending from './Trending'

function Home({ setSearch }) {
  return (<>
    <Hero setSearch={setSearch} />
    <Trending />
  </>
  )
}

export default Home
