import { useState, useEffect} from 'react';
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase-configuration';

function AuthorPage({ isAuth }) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [contectText, setContentText] = useState('')
    const [subText, setSubText] = useState('')

    const articlesCollectionRef = collection(db, 'articles')
    const createArticle = async () => {
        await addDoc(articlesCollectionRef, {title, contectText, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}})
    }
    
  return (
    <>
        <div>Author Page</div>
        <h2>Create An Article</h2>
        <div className="inputGp">
            <label htmlFor="">Title:</label>
            <input type="text" placeholder='Title...' onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="inputGp">
            <label htmlFor="">Author:</label>
            <input type="text" placeholder='Author...' onChange={e => setAuthor(e.target.value)}/>
        </div>
        <div className="inputGp">
            <label htmlFor="">Content:</label>
            <textarea placeholder='Content...' name="" id="" cols="30" rows="10" onChange={e => setContentText(e.target.value)}></textarea>
        </div>
        <div className="inputGp">
            <label htmlFor="">Sub Text:</label>
            <textarea placeholder='Sub Text...' name="" id="" cols="30" rows="4" onChange={e => setSubText(e.target.value)}></textarea>
        </div>
        <button onClick={createArticle}>Submit Article</button>
    </>

  )
}

export default AuthorPage