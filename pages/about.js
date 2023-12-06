import * as React from 'react'
import Layout from '../components/layout'

export default function About() {
  return (
    <main id="about">
      <section className="flex collapse">
        <div id="about-start">
          <p className="no-top-margin">
            We are a small digital studio based in the lush Pacific Northwest.
          </p>
          <p>	
            Our specialty is working hand in hand with small businesses and agencies to create compelling interactive experiences and storytelling in the digital realm.
          </p>
          <p>
            When not designing, writing, and coding, we can be found exploring the moss-laden forests surrounding Portland and sharing a few gourds of yerba mate.
          </p>
          <ul>
            <li>Our services include:</li>
            <li>front end web development</li>
            <li>user experience</li>
            <li>cms theming and customization</li>
            <li>e-commerce integration</li>
            <li>email marketing</li>
            <li>and web animation</li>
          </ul>
          <p>
            If you're interested in working with us, <a id="contact-us" className="section-link" href="/contact">contact us</a> for a complementary consultation.
          </p>
        </div>
        <img id="beast" className="framed" src="/static/img/beast-redwoods.jpg" alt="ethan and taylor in the redwoods"></img>
      </section>
      <h2>Our team</h2>
      <div className="flex collapse">
        <section className="flex column collapse">
          <div>
            <h3>Taylor Pokoj Law</h3>
            <h4>high priestess of the ministry of sinistry</h4>
            <h4>co-founder // developer</h4>
            <p className="no-bottom-margin">
              <i>Sweet, maybe...passionate, I suppose...but don't ever mistake that for nice.</i>
            </p>
            <p>
              Taylor leverages her experience in the Interactive team at a fast-paced marketing agency to provide clarity to the scope of any project.  She has built and launched many client websites, configured and managed CMSs, coded emails and animated banners, created tools and consulted on technical decisions.  She is our expert on process and technology integration.
            </p>
          </div>
          <div id="profile-1" className="framed img">
          </div>
        </section>
        <section className="flex column collapse reverse">
          <div id="profile-2" className="framed img">
          </div>
          <div>
            <h3>Ethan Law</h3>
            <h4>gourd lord</h4>
            <h4>co-founder // developer</h4>
            <p>
              <i>There's something that doesn't make sense. Let's go and poke it with a stick.</i>
            </p>
            <p>
              Ethan's prior experience has been in designing and building the front end of a large scale web application.  He coded the client facing engine for taking online courses, and designed and built the user interface of a new content management system used to create and edit  courses.  He is our Javascript expert.
            </p>
          </div>
        </section>
      </div>
      <style jsx>{`
        section {
          flex: 1 1 50%;
          justify-content: space-between;
          margin-bottom: 2em;
        }
        section:first-of-type {
          margin-right: 3em;
        }
        section > div.img {
          margin-right: 2em;
          height: 22em;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        p:last-child {
          margin-bottom: 0;
        }
        section > *:first-child {
          margin-bottom: 3em;
        }
        #profile-1 {
          background-image: url('/static/img/ethan-coast.png');
        }
        #profile-2 {
          background-image: url('/static/img/tay-melon.png');
        }
        
        @media only screen and (max-width:800px) {
          main section, main#about section > * {
            margin-right: 0 !important;
          }
          main section > div.img {
            margin: 2em 0;
            width: 100%;
          }
          
          main #profile-1 {
            background-image: url('/static/img/tay-melon.png');
          }
          main #profile-2 {
            background-image: url('/static/img/ethan-coast.png');
          }
        }
        
        div#about-start {
          flex: 0 1 40em;
          margin-right: 3em;
        }
        img#beast {
          height: 33em;
        }
      `}</style>
    </main>
  );
}