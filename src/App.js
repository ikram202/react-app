import React, { useState } from 'react'
import AddArticle from './Components/AddArticle'
import EditArticle from './Components/EditArticle'
import Articles from './Components/Articles'

import './App.css';


const App = () => {
	const articlesData = [
    { id: 1, title: 'Wydad Athletic Club', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum temporibus, illo harum odio deserunt reprehenderit.', author: 'Yahya Jabrane', date:'30-11-2022', img:'' },
		{ id: 2, title: 'FIFA', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero perspiciatis repellat maxime omnis nisi ut? x.' , author: 'Hoalid Regragui', date:'01-12-2022', img:''},
		{ id: 3, title: 'L Opinion', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deserunt repellat, delectus eos sed velit reiciendis facilis qui.', author: 'Ali Baba', date:'03-10-2022', img:'' },
		{ id: 4, title: 'le 360', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, enim?' , author: 'Leila Tazi', date:'02-11-2022', img:''},

	]

	const initialFormState = { id: null, title: '', content: '', author: '', date: '', img:'' }
	const [ articles, setArticles ] = useState(articlesData)
	const [ currentArticle, setCurrentArticle ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	const addArticle = article => {
		article.id = articles.length + 1
		setArticles([ ...articles, article ])
	}

	const deleteArticle = id => {
		setEditing(false)

		setArticles(articles.filter(article => article.id !== id))
	}

	const updateArticle = (id, updateArticle) => {
		setEditing(false)

		setArticles(articles.map(article => (article.id === id ? updateArticle : article)))
	}

	const editRow = article => {
		setEditing(true)

		setCurrentArticle({ id: article.id, title: article.title, content: article.content, author: article.author, date: article.date })
	}



	return (
    <div>
     
   
    <div className='d-flex container gap-5 mt-5'>
				<div>
					{editing ? (
							<EditArticle
								editing={editing}
								setEditing={setEditing}
								currentArticle={currentArticle}
								updateArticle={updateArticle}
                />
					) : (
							<AddArticle AddArticle={addArticle} />
					)}
				</div>
				
        <Articles articles={articles} editRow={editRow} deleteArticle={deleteArticle} />
      </div>
      </div>

	)
}

export default App
