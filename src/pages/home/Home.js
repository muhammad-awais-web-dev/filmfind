import React from 'react'
import Hero from './Hero'

function Home() {
  return (<>
    <section style={{ padding: '20px', color: 'var(--text-primary)' }}>
      <h1>Welcome to the Movie App</h1>
    </section>
    <Hero />
  </>
  )
}

export default Home
