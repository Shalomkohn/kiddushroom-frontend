import React from 'react'
import { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import { useNavigate, useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc, getDocs, collection } from 'firebase/firestore';
import meSmiling from '../images/test-article-images/me-smiling.jpeg'
import waffle from '../images/test-article-images/waffle.PNG'
import menorah from '../images/first-week-article-pics/menorah-3.jpg'
import { db } from '../firebase-configuration'
import useFetch from '../hooks/useFetch';
import ReactMarkdown from 'react-markdown';


const featuredArticles = [
    {   
        id: '1',
        title: 'Overcoming Challenges to Implementing Your Vision: A Kabbalistic Approach',
        image: meSmiling,
        imageAlt: 'A guy smiling',
        author: 'Jacob Feder',
        date: 'Nov 31, 2022',
        text: 'This is an article about overcoming challenges'
    },
    {   
        id: '2',
        title: 'A Hanukkah Evening in New York City',
        image: menorah,
        imageAlt: 'A menorah',
        author: 'Alex Kohn',
        date: 'Nov 31, 2022',
        text: 'This is all about Hannukah'
    },
    {   
        id: '3',
        title: '10 Facts About the Latke and Sufganiyah That You May Not Have Known',
        image: waffle,
        imageAlt: 'a waffle',
        author: 'Alex Kohn',
        date: 'Nov 31, 2022',
        text: 'This is all about 10 Facts about Latke'
    },
]


function ArticlePage({ isAuth, signUserOut }) {
    // const [data, setData] = useState();
    // const [article, setArticle] = useState(null);
    const { id } = useParams()

    // const docRef = doc(db, 'articles', three)
    
    // useEffect(() => {
    //     const getArticle = async () => {
    //         const data = await getDoc(docRef)
    //         setArticle(data.data())
    //     }
    //     getArticle()
    // },[])

    // const article = featuredArticles.find(article => article.id === id)

    
    const { loading, error, data } = useFetch(`${process.env.REACT_APP_FETCH_DATA}/api/articles/${id}?populate=thumbnail`)

    if (loading) return <p className='loading-sign'>Loading...</p>
    if (error) return <p className='error-sign'>Error :(</p>

    const article = data.attributes;
    const imageUrl = `${article.thumbnail.data.attributes.url}`
    
    return (
        <>
          <div className="article-container">
              <div className="heading">{article.heading}</div>
              <div className="article-details">
                  <div className="author">{article.author}</div>
                  <div className="date">{article.date}</div>
              </div>
              <figure>
                <img className='thumbnail' src={imageUrl} alt={article.imageAlt}  width='700px'></img>
              </figure>
              <article className='content'>
                <ReactMarkdown>{article.content}</ReactMarkdown>
              </article>
              {/* dangerouslySetInnerHTML={{__html: article.content}} */}
              <ReactMarkdown className='sub-text'>{article.biography}</ReactMarkdown>
          </div>
        </>
  
    )
}

export default ArticlePage