import React from 'react'
import { useParams } from 'react-router-dom';

function SearchResult() {

  const { query } = useParams();
  const search = query.replace(/\+/g, ' ');

  return (
    <div>
      <h2>Search Results</h2>
      <p>No results found for: {search}</p>
    </div>
  )
}

export default SearchResult
