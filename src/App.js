import './App.css';
import Header from './components/Header'
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from 'react'
import ArticlePage from './pages/ArticlePage';
import LoginPage from './pages/LoginPage';
import AuthorPage from './pages/AuthorPage';
import { signOut } from 'firebase/auth'
import { auth } from './firebase-configuration';
import SingleCategoryPage from './pages/SingleCategoryPage'
import Nav from './components/Nav'
import ScrollToTop from "./components/ScrollToTop"

import WellnessArticle from './pages/WellnessArticle';
import TravelArticle from './pages/TravelArticle';
import FoodArticle from './pages/FoodArticle';
import Recipe from './pages/Recipe';


function App() {
  const [isAuth, setIsAuth] = useState(false)

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname ='/login-page'
    })
  }

  return (
    <Router>
      <ScrollToTop />
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<MainSection isAuth={isAuth} signUserOut={signUserOut}/>} />
          <Route path="/article-page/:id" element={<ArticlePage isAuth={isAuth}  signUserOut={signUserOut}/>}/>
          <Route path="/login-page/" element={<LoginPage setIsAuth={setIsAuth}/>} />
          <Route path="/author-page/" element={<AuthorPage isAuth={isAuth}/>} />
          <Route path="/single-category-page/:category/" element={<SingleCategoryPage />} />

          <Route path="/wellness-article-page/" element={<WellnessArticle />} />
          <Route path="/travel-article-page/" element={<TravelArticle />} />
          <Route path="/food-article-page/" element={<FoodArticle />} />
          <Route path="/recipe-article-page/" element={<Recipe />} />
        </Routes>
        <Footer />
      </>
    </Router>

  );
}

export default App;
