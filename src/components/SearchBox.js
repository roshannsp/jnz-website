import React, { useState } from 'react'

function SearchBox({ search }) {
  const [searchText, setSearchText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    search(searchText)
  }

  const onChange = (e) => {
    setSearchText(e.target.value)
    if (!e.target.value) {
      search('')
    }
  }

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={onSubmit}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={onChange}
      />
      <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchBox
