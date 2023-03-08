import React, { useState } from 'react'

const AddArticle = props => {
	const initialFormState = { id: null, title: '', content: '', author: '', date: '' }
	const [ article, setArticle ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setArticle({ ...article, [name]: value })
	}

	return (
		<div className='sticky-top'>
			<h2 className='alert alert-primary' >Add article</h2>
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!article.title || !article.content) return
				props.AddArticle(article)
				setArticle(initialFormState)
			}}
			>
			<input type="text" name="title" placeholder='Title' value={article.title} onChange={handleInputChange} className='form-control'/> <br />
			<input type="text" name="content" placeholder='Content' value={article.content} onChange={handleInputChange} className='form-control'/> <br />
			<input type="text" name="author" placeholder='Author' value={article.author} onChange={handleInputChange} className='form-control'/> <br />
			<input type="date" name="date" value={article.date} onChange={handleInputChange} className='form-control'/> <br /> 
			<button className='btn btn-primary form-control'>Add new article</button>
		</form>
	</div>
	)
}

export default AddArticle
