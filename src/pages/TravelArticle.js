import React from 'react'
import { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import { useNavigate, useParams } from 'react-router-dom';
import waffle from '../images/test-article-images/waffle.PNG'
import menorah from '../images/first-week-article-pics/menorah-3.jpg'
import chanukahOnIce from '../images/first-week-article-pics/chanukah-on-ice.jpg'
import eatingDougnuts from '../images/first-week-article-pics/eating-doughnuts.jpg'
import blakelyHotel from '../images/first-week-article-pics/blakely.jpg'
import oneHotel from '../images/first-week-article-pics/1-hotel.jpg'
import abaita from '../images/first-week-article-pics/abaita.jpg'
import mitzvahTanks from '../images/first-week-article-pics/mitzvah-tanks.jpg'


function WellnessArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <>
          <Nav />
          <div className="article-container">
              <div className="heading"><p>A Hanukkah Evening in New York City</p></div>
              <div className="article-details">
                  <div className="author">by Mendel Gurkow</div>
                  <div className="date" >Dec 2, 2022</div>
              </div>
              <figure>
                <img src={menorah} alt={'A giant menorah in times square manhattan'}  width='600px'></img>
                <figcaption>Largest Menorah in the world</figcaption>
              </figure>
              <article className='content'>
              <p class="p3">Not for nothing is NYC called the city that never sleeps. Walk through the streets at any hour, and you will notice a city pulsing with energy. What better place to spend Hanukkah—the festival of lights—than the city known for lighting up the night?<span class="Apple-converted-space"></span>
              </p>
              <p>Start your journey at the corner of E 59th Street and 5th Avenue (near the southeast entrance of Central Park), where you will find the largest Menorah in the world. Standing at a record 36 feet tall, the 59th Street Menorah was first erected in 1973 by Chabad's Rabbi Shmuel Butman and has lit up the streets of Manhattan every Hanukkah since. Weighing roughly 4,000 pounds, this unbelievable Menorah was designed by renowned Israeli artist Yaakov Agam. Every night at sundown, join hundreds of New Yorkers as Rabbi Butman, accompanied by well known dignitaries, rises into the Manhattan sky in a cherry picker to light this beautiful candelabra.</p>
              <p>
              While Hanukkah in Manhattan is always fun, planning your visit for Monday December 19th affords you the opportunity to join the biggest Hanukkah party in NYC! That is when the 14th annual Hanukkah on Ice NYC will take place in Wollman Rink from 6-9 PM. Tucked away in the south-eastern tip of Central Park, just a short stroll away from the giant Menorah, a visit to this beautiful venue can easily fit into your schedule. Skate under the stars while enjoying live entertainment and complimentary Kosher food—including Hanukkah classics like latkes and doughnuts—for a fun and unique Hanukkah experience. This event also features a hand carved ice Menorah! A true piece of art crafted by Bill Bywater, it will be lit at the height of the festivities.
              </p>
              <figure>
                <img src={chanukahOnIce} alt={'Ice scating on hanukkah'}  width='600px'></img>
                <figcaption>Chanukkah on Ice</figcaption>
              </figure>
              <figure>
                <img src={eatingDougnuts} alt={'Eating doughnuts on hanukkah'}  width='600px'></img>
                <figcaption>Eating doughnuts at Chanukkah on Ice</figcaption>
              </figure>
              <p>Somewhere in between a Hanukkah party and a visit to the giant Menorah you might be lucky enough to catch a glimpse of the world-famous Mitzvah tanks. These repurposed mobile homes with signs wishing everyone a happy Hanukkah and speakers blaring Jewish music are designed to bring the joy of the holiday to the streets of Manhattan. Every night of Hanukkah you can find them parked in places like Times Square, Union Square, and other locations with major foot traffic such as the above-mentioned Menorah lighting on 59th and 5th. Forgot your personal Menorah at home? No worries. Jump onto a Mitzvah tank to receive your complimentary Menorah and free jelly donut. While you are at it, you might even be pulled in for a quick festive Hanukkah dance.</p>
              <figure>
                <img src={mitzvahTanks} alt={'Mitzvah tanks'}  width='600px'></img>
                <figcaption>A Mitzvah tank parade driving through a busy street</figcaption>
              </figure>
              <p>
                Latkes and donuts are great, but if you're still hungry New York has some of the best Kosher options in the world. How about a cozy spot with some warm Italian food? Stop by Abaita, a Kosher dairy restaurant at 49th and Lexington. Enjoy a variety of pasta and pizzas, and choose from a wonderful selection of Kosher wines. Prefer a wonderful night out at one of the best Kosher steakhouses in the world? Try Reserve Cut. The first Kosher restaurant in the US to employ a Michelin-star chef! Enjoy tantalizing dishes like the Bone Marrow Crusted Veal Chop and the Wagyu Short Rib Steam Buns for an authentic Kosher Michelin experience.
              </p>
              <figure>
                <img src={abaita} alt={'Abaita hotel'}  width='600px'></img>
                <figcaption>Abaita - Kosher Dairy restaurant</figcaption>
              </figure>
              <p>After an exciting day in NYC, it's time to bed down for the night. New York has plenty of great Hotel options. The Blakely is an affordable old-school four-star Hotel in Midtown West, just south of Central Park. Large clean rooms, friendly staff, affordable pricing, and an excellent location makes the Blakely a real hidden gem in a relatively expensive city.<p>
              <figure>
                <img src={oneHotel} alt={'1 Hotel'}  width='600px'></img>
                <figcaption>The 1 Hotel near 6th and 58th</figcaption>
              </figure>
                </p> If you want to go more upscale, just walk a few blocks over to the 1 Hotel near 6th and 58th. Near Central Park, it is in an excellent location. Enjoy fresh fruit in the Hotel lobby and appreciate the nature-inspired design of this beautiful Hotel. With a perpetually smiling staff and large clean rooms, the 1 Hotel does hospitality right. From full-scale amenities to the yoga mat in the closet, staying at the 1 Hotel is an overall wonderful experience.</p>
              Happy Hanukkah!
              </article>
              <p className='sub-text'>Mendel Gurkow is a writer and researcher and part of the KiddushRoom team.</p>
          </div>
      </>
    )
}

export default WellnessArticle