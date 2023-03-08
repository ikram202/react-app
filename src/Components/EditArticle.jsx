import React, { useState, useEffect } from 'react'

const EditArticle = props => {
  const [ article, setArticle ] = useState(props.currentArticle)

  useEffect(
    () => {
      setArticle(props.currentArticle)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setArticle({ ...article, [name]: value })
  }

  return (
    <div className='sticky-top'>
      <h2 className='alert alert-warning' >Edit article</h2>
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateArticle(article.id, article)
      }}
    >
      <input type="text" name="title" value={article.title} onChange={handleInputChange} className='form-control'/>
      <input type="text" name="content" value={article.content} onChange={handleInputChange} className='form-control'/>
      <input type="text" name="author" value={article.author} onChange={handleInputChange} className='form-control'/>
      <input type="date" name="date" value={article.date} onChange={handleInputChange} className='form-control'/>
      <button className='btn btn-primary form-control d-block mb-2'>Update article</button>
      <button onClick={() => props.setEditing(false)} className="btn btn-danger form-control">
        Cancel
      </button>
      
    </form>
    </div>

  )
}

export default EditArticle
