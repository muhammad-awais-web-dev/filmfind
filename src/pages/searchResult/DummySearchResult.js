import React from 'react'
import { useSearch } from '../../SearchContext';

function DummySearchResult() {
  const { search } = useSearch();
  return (
    <div>
      <h2>Search Results</h2>
      <p>No results found for: {search}</p>
    </div>
  )
}

export default DummySearchResult
