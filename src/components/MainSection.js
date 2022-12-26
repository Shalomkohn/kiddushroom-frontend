import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../firebase-configuration';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { getFirestore, getDoc, doc, getDocs, collection } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import babyPic from '../images/test-article-images/babys.jpeg'
import manOnMountain from '../images/first-week-article-pics/man-on-mountain.jpg'
import doughnuts from '../images/first-week-article-pics/doughnuts.jpg'
import menorah from '../images/first-week-article-pics/menorah-3.jpg'
import latke from '../images/first-week-article-pics/latke.png'
import ReactMarkdown from 'react-markdown';

// useFetch for getting data from strapi api - as of now just practice
import useFetch from '../hooks/useFetch';

// const featuredArticles = [
//     {   id: 1,
//         page: 'wellness-article-page',
//         title: 'Overcoming Challenges to Implementing Your Vision: A Kabbalistic Approach',
//         image: `url(${manOnMountain})`,
//         author: 'Adapted by Alexander Kohn',
//         date: 'Dec 1, 2022',
//         article: 'This is an article about overcoming challenges'
//     },
//     {   
//         id: 2,
//         page: 'travel-article-page',
//         title: 'A Hanukkah Evening in New York City',
//         image: `url(${menorah})`,
//         author: 'by Mendel Gurkow',
//         date: 'Dec 1, 2022',
//         article: 'This is all about Hannukah'
//     },
//     {   
//         id: 3,
//         page: 'recipe-page',
//         title: 'Recipe: Delicious Jelly Donuts (Sufganiyot)',
//         image: `url(${doughnuts})`,
//         author: 'by Chefkohn Personal Chef',
//         date: 'Dec 1, 2022',
//         article: 'This is all about 10 Facts about Latke'
//     },
//     {   
//         id: 4,
//         page: 'food-article-page',
//         title: '10 Facts About the Latke and Sufganiyah That You May Not Have Known',
//         image: `url(${latke})`,
//         author: 'by KiddushRoom editors',
//         date: 'Dec 1, 2022',
//         article: 'This is all about 10 Facts about Latke'
//     },
// ]

const MainSection = ({ isAuth, signUserOut }) => {
    // const [ articles, setArticles ] = useState(null)    
    const navigate = useNavigate()
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // const getArticles = async () => {
    //     setLoading(true)
    //     const articlesRef = collection(db, "articles")
    //     const data = await getDocs(articlesRef)
    //     let articlesArray = [];
    //     data.forEach(doc => articlesArray.push(doc.data()))
    //     setArticles(articlesArray)
    //     setLoading(false)
    //     // data.forEach( article => {
    //     //     console.log(article.data())
    //     // })
    // }
    // useEffect(() => {
    //     getArticles()
    // },[])

 

    // console.log(articles)
    
    // response from strapi useFetch
    const { loading, error, data } = useFetch(`${process.env.REACT_APP_FETCH_DATA}/api/articles?populate=thumbnail`)

    {/* displaying strapi content */}
    if (loading) return <p className='loading-sign'>Loading...</p>
    if (error) return <p className='error-sign'>Error :(</p>

  return (
    <>
        <Header isAuth={isAuth}  signUserOut={signUserOut}/>
        <section className="main-section">
            <div className="container"> 
                {
                    
                    data.map( obj => {
                        const articleId = obj.id;
                        const article = obj.attributes;
                        const imageUrl = `${article.thumbnail.data.attributes.url}`
                        return (
                            <div key={articleId} className='featured-article' style={{backgroundImage: `url(${imageUrl})`}}>
                                <div className="heading">
                                    <h4 className='title'>{article.heading}</h4>
                                    <p className='author'>{article.author}</p>
                                </div>
                                <button><Link to='article-page' onClick={(e)=> {
                                        e.preventDefault()
                                        navigate(`/article-page/${articleId}`)
                                    }}>Read <FaArrowRight /></Link>
                                </button>
                            </div>  
                        )
                    })
                }
            </div>
        </section>



        {/* <Header isAuth={isAuth}  signUserOut={signUserOut}/>
        <section className="main-section">
            <div className="container"> 
                {
                    featuredArticles.map( article => {
                        return (
                            <div key={article.id} className='featured-article' style={{backgroundImage: article.image}}>
                                <div className="heading">
                                    <h4 className='title'>{article.title}</h4>
                                    <p className='author'>{article.author}</p>
                                </div>
                                <button><Link to='article-page' onClick={(e)=> {
                                        e.preventDefault()
                                        // navigate(`/article-page/${article.id}`)
                                        navigate(`/${article.page}`)
                                    }}>Read <FaArrowRight /></Link>
                                </button>
                            </div>                    
                        )
                    })
                }
            </div>
        </section> */}
    </>

  )
}

export default MainSection