import React from 'react'

function DummySearchResult({ search }) {
  return (
    <div>
      <h2>Search Results</h2>
      <p>No results found for: {search}</p>
    </div>
  )
}

export default DummySearchResult
