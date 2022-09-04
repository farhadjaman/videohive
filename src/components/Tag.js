import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTags, removeTags, } from '../features/filter/filterSlice'

const Tag = ({ tag }) => {
  const { tags } = useSelector(store => store.filters)
  const dispatch = useDispatch()

  const isSelected = tags.includes(tag.title);

  const handleSelect = () => {
    if (isSelected) {
      dispatch(removeTags(tag.title))
    }
    else {
      dispatch(setTags(tag.title))
    }
  }

  const content = isSelected ? <div
    className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    onClick={handleSelect}

  >
    {tag.title}
  </div> :
    <div
      className="bg-blue-100 text-white px-4 py-1 rounded-full cursor-pointer"
      onClick={handleSelect}
    >
      {tag.title}
    </div>
  return (

    content

  )
}

export default Tag