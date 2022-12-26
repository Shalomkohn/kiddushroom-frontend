import React from 'react'
import Nav from '../components/Nav'
import latke from '../images/first-week-article-pics/latke.png'
import { useEffect } from 'react'


function FoodArticle() {  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
      <>
          <Nav />
          <div className="article-container">
              <div className="heading"><p class="p1">10 Facts About the <b><i>Latke </i></b>and <b><i>Sufganiyah</i> </b> (donuts) That You May Not Have Known</p></div>
              <div className="article-details">
                  <div className="author">by KiddushRoom editors</div>
                  <div className="date" >Dec 2, 2022</div>
              </div>
              <figure>
                <img src={latke} alt={'A latke'}  width='600px'></img>
              </figure>
              <article className='content'>
                <ul>
                    <li>Why do we eat <i>latkes</i> and <i>sufganiyot</i> on Hanukkah? Because they are traditionally fried in oil, and this commemorates the miracle of Hanukkah, in which a single jug of oil kept the Menorah alight for eight consecutive days.</li>
                </ul>
                <ul>
                    <li>The mention of <i>latkes </i>generally conjures up images of potato batter frying in oil. But did you know that the first <i>latkes</i> were fried in 14th-century Italy with ricotta cheese? Indeed, the original <i>latke</i> did not have a potato base. Instead, it was a cheesy delicacy that continued the longstanding tradition of eating dairy foods on Hanukkah.</li>
                </ul>
                <ul>
                    <li>Why dairy? We eat dairy products on Hanukkah to celebrate a true heroine of the Hanukkah story. Judith was a beautiful widow who plied Holofernes—a high-ranking and greatly feared general in the Seleucid (Greek-Assyrian) army—with large quantities of salty cheese. After consuming the cheese, the parched general turned to Judith for a drink, which she gladly provided in the form of highly potent wine. When the general passed out drunk, Judith took his sword from his side and decapitated him, greatly demoralizing the Seleucid forces.</li>
                </ul>
                <ul>
                    <li>When Jews migrated to eastern Europe, poultry fat, otherwise known as <i>schmaltz, </i>was the most readily available cooking fat. Due to Kosher dietary laws restricting meat and dairy mixing, European Jews could not fry their beloved cheese <i>latkes </i>in <i>schmaltz</i>. Forced to find an alternative to their tasty Hanukkah treat, they used primarily buckwheat and rye to prepare grain-based <i>latkes</i>. However, a series of crop failures in Poland and Ukraine led to potatoes becoming a major staple of the region. Thus began the delicious era of potato <i>latkes</i>.</li>
                </ul>
                <ul>
                    <li><i>Latke </i>is Yiddish for pancake. It is a diminutive of <i>oladka</i>, found in eastern Slavic languages and meaning “small fried pancake.” Ironically, the word traces back to the ancient Greek language, spoken by Israel's Hanukkah adversaries.</li>
                </ul>
                <ul>
                    <li>The Modern Hebrew name for <i>latke</i> is <i>levivah</i>. This seems to be a revival of an ancient biblical term used for small cakes. As the homonym <i>levav</i> means heart, some interpret <i>levivah</i> to mean heart-shaped dumplings.</li>
                </ul>
                <ul>
                    <li><i>Sufganiyot </i>are first mentioned in relation to Hanukkah by Maimonides in the late 12th century. He writes, “It has become customary to make <i>sufganin</i>, known in Arabic as <i>alsfingh… </i>This is an ancient custom, because they are fried in oil, in remembrance of G-d's blessing.” </li>
                </ul>
                <ul>
                    <li>The word <i>sufganiyah</i> is a modern spin-off of the Talmudic word <i>sfogga</i>—spongy dough. It shares a common root with the Hebrew word for sponge—<i>sfog</i>.</li>
                </ul>
                <ul>
                    <li>The modern day <i>sufganiyah</i> was brought to Israel by Polish Jewish immigrants. It is a Kosher version of the Polish donut known as <i>pączki</i>.</li>
                </ul>
                <ul>
                    <li>As mentioned before, both <i>latkes</i> and <i>sufganiyot</i> are fried in oil. Oil is unique in that it thoroughly permeates everything it comes into contact with. This makes oil the perfect metaphor for the Torah's inner / mystical teachings, which seeps deep into the soul of the one who learns them.</li>
                </ul>
              </article>
              <p className='sub-text'>

              </p>
          </div>
      </>
    )
}

export default FoodArticle