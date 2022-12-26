import React from 'react'
import Nav from '../components/Nav'
import doughnuts from '../images/first-week-article-pics/doughnuts.jpg'
import { useEffect } from 'react'


function Recipe() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
      <>
          <Nav />
          <div className="article-container">
              <div className="heading"> <p>Delicious Jelly<span> </span>Donuts (<i>Sufganiyot</i>)<i><span> </span></i></p></div>
              <div className="article-details">
                  <div className="author">by Chefkohn Personal Chef</div>
                  <div className="date" >Dec 2, 2022</div>
              </div>
              <figure>
                <img src={doughnuts} alt={'Jelly Doughnuts'}  width='600px'></img>
              </figure>
              <br />
              <article className='content'>
                <p>2 ½ tablespoons dry yeast<span></span></p>
                <p>2 tablespoons sugar<span></span></p>
                <p>½ cup warm water</p>
                <p>1 egg</p>
                <p>¼ cup orange juice</p>
                <p>½ cup almond milk</p>
                <p>2 tablespoon Margarine<span></span></p>
                <p>2 tablespoon oil</p>
                <p>4 ½<span> </span>cups flour<span></span></p>
                <p><span class="s1">⅓</span> cup sugar</p>
                <br />
                <ul>
                    <li class="li3">In a bowl, combine yeast, sugar, warm water, and<span></span>let sit for 5 minutes until bubbly.</li>
                </ul>
                <ul>
                    <li class="li3">Combine all other ingredients and knead dough for about 10 minutes until smooth<span></span></li>
                </ul>
                <ul>
                    <li class="li3">Let rise for 45 minutes.<span></span></li>
                </ul>
                <ul>
                    <li class="li3">Roll out dough ¾<span> </span>inch thick on a floured surface. Cut with a doughnut shaper (or anything round, such as a cup). Put aside and let rise for 20 minutes.<span></span></li>
                </ul>
                <ul>
                    <li class="li3">In a pan or pot, heat 3 inches oil to 365°F, then deep-fry each side until golden brown. (Make sure the pan/pot is covered during the frying in order to fluff up the doughnuts.) Let cool on paper towels.<span></span></li>
                </ul>
                <ul>
                    <li class="li3">Once donuts are completely cool, use a piping bag to fill with your favorite jelly.<span></span>With a sifter, sprinkle confectioner's sugar.<span></span></li>
                </ul>
                <ul>
                    <li class="li3">Eat and enjoy.<span></span></li>
                </ul>
              </article>
              <p className='sub-text'>

              </p>
          </div>
      </>
    )
}

export default Recipe