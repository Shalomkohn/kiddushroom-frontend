import React from 'react'
import { useState, useEffect } from 'react';
import { db } from '../firebase-configuration';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { getFirestore, getDoc, doc, getDocs, collection } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../components/Nav'
import ReactMarkdown from 'react-markdown';
// useFetch for getting data from strapi api
import useFetch from '../hooks/useFetch';

const category = 'travel'

const SingleCategoryPage = ({ isAuth, signUserOut }) => {
    const navigate = useNavigate()
    const { category } = useParams()

    const { loading, error, data } = useFetch(`${process.env.REACT_APP_FETCH_DATA}/api/articles?populate=categories,thumbnail&filters[categories][name][$contains]=${category}`)

    if (loading) return <p className='loading-sign'>Loading...</p>
    if (error) return <p className='error-sign'>Error :(</p>

    return (
        <>
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
        </>

  )
}

export default SingleCategoryPage