import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../features/filter/filterSlice'

const Search = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearch(input))
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  )
}

export default Search