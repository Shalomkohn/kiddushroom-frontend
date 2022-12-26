import React from 'react'
import { useState, useEffect } from 'react';
import Nav from '../components/Nav'
import { useNavigate, useParams } from 'react-router-dom';
import manOnMountain from '../images/first-week-article-pics/man-on-mountain.jpg'
import waffle from '../images/test-article-images/waffle.PNG'
import menorah from '../images/first-week-article-pics/menorah-3.jpg'



function WellnessArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <>
          <Nav />
          <div className="article-container">
              <div className="heading"><p class="p1">Overcoming Challenges to Implementing Your Vision: A Kabbalistic Approach</p></div>
              <div className="article-details">
                  <div className="author">Adapted by Alexander Kohn</div>
                  <div className="date" >Dec 2, 2022</div>
              </div>
              <figure>
                <img src={manOnMountain} alt={'A person smiling'}></img>
              </figure>
              <article className='content'>
              <p class="p3">It often happens that a person has an innovative idea - a vision - and is excited about implementing it, only to encounter obstacles along the way that discourage and demoralize him, until he eventually throws his hands up and abandons the idea.<span class="Apple-converted-space"></span></p>
              <p>
              Kabbalah speaks of ten powers, or dynamics, that comprise the inner human persona. “Chochma” is the power that generates ideas, “Binah” the power that develops them. “Chesed” is the excitement and love for the idea that drives you toward implementing it.
              </p>
              <p> When you encounter obstacles to implementing your vision, your idea, some of the excitement wanes; with enough serious obstacles along the way, you may lose your excitement altogether.
              </p>
              <p>
              To see your vision through when you've become discouraged and lost your excitement for it, draw upon your power of “Netzach.” Loosely translated as "Victory," Netzach is the impetus that drives you forward (even when the emotion is lacking), and there are three parts to it: 
              </p>
              <p>
                1&#41; <b>Perseverance:</b> pressing on against overwhelming odds. Think of the end of a long and drawn out sporting event. Both teams are exhausted, but they continue on, determined to see the game through to the end.
                </p>
                <p>
                2&#41; <b>Competition</b>: awakening the desire to implement the vision. Perseverance is essential, but alone it does not ensure victory and achievement. To greatly increase the odds of overcoming the obstacles and implementing the vision, arouse within yourself a spirit of competition; a feeling that this is a challenge I want to overcome. Think of a king who is prepared to exhaust all his resources in order to achieve victory over the enemy. Think of an auction, where people bid far in excess of the actual value of the object due to the spirit of competition that characterizes the event. 
                </p>

                <p>
                3&#41; <b>Inspiration</b>: maximize your odds of accomplishing the goal by reigniting your belief that victory (implementation of your vision) is achievable. Like the football coach who calls his team into the locker room at half-time, give yourself a (mental or verbal) pep-talk that will reintroduce some feeling into the mission. Think of all the people who will stand to gain from the implementation of your vision. Think of its importance and benefits. Remind yourself of the original excitement and enthusiasm by retelling yourself the narrative that has brought you to this point.
                </p>
                <p>
                Finally, it may be prudent to modify your plan in the face of obstacles. Think of a sergeant in the thick of battle who needs to change tactics in the face of unanticipated realities -- e.g., unexpected features of the landscape, enemy positions, etc. Your goal is the same -- to implement your vision. But a change in tactic may the best way to surmount the obstacles and achieve "victory."
                </p>
              </article>
              <p className='sub-text'>
              Adapted by Alexander Kohn from <i>The Sefiros and the Self: A Divine Blueprint for Self-Discovery and Personal Growth</i>by Jacob Feder, a noted teacher and authority on Jewish mysticism.
              </p>
          </div>
      </>
    )
}

export default WellnessArticle