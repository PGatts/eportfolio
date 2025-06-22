import React from 'react';
import './App.css';

function SouthAfricaTripSummary() {
  return (
    <div className="trip-summary-container">
      <header className="hero-section">
        <h1>My Journey to South Africa</h1>
        {/* Main hero image */}
        <div className="image-placeholder large-placeholder">
          <img src="chapmans-peak.jpeg" alt="South Africa Landscape" className="hero-image" />
          <p className="image-caption">Captivating view from Chapman's Peak Drive</p>
        </div>
        <blockquote>
          "Sometimes you don't quite realise what you have achieved until you look back."
          <cite>- AB de Villiers</cite>
        </blockquote>
      </header>

      <section className="section-block project-description">
        <h2>My Project: Safe Cities Agriculture App</h2>
        <p style={{marginLeft: '20px', marginRight: '20px', }}>
          During my time in South Africa, I had the privilege of developing a mobile/web application designed to connect local farmers, facilitate knowledge sharing, and streamline market access. The goal was to empower small-scale farmers by providing a platform where they could share best practices, find buyers for their produce, access vital agricultural information, and organize tasks on their farms.
        </p>
        <div className="image-gallery">
          <div className="image-placeholder">
            {/* Screenshot of your app's UI */}
            <img src="home-page.jpeg" alt="Home Page" />
            <p className="image-caption">App home page with tabs for all the different features.</p>
          </div>
          <div className="image-placeholder">
            {/* Photo of you working on the project or with team */}
            <img src="marketplace.jpeg" alt="Marketplace" />
            <p className="image-caption">The marketplace page where farmers can buy and sell goods.</p>
          </div>
          <div className="image-placeholder">
            {/* Another app screenshot or a diagram of the architecture */}
            <img src="documents.jpeg" alt="Documents Page" />
            <p className="image-caption">The documents page where famers can share and search informational documents.</p>
          </div>
          <div className="image-placeholder">
            <img src="scheduler.jpeg" alt="Scheduler" />
            <p className="image-caption">The scheduler where farmers can plan tasks for themselves.</p>
          </div>
        </div>
        <div className="reflection-block">
          <h3>Reflections on the Project</h3>
          <p>
            Developing this application was more than just a coding exercise; it was a deep dive into the specific needs and challenges faced by South African farmers. Understanding their daily struggles and aspirations truly shaped the app's features. It was incredibly rewarding to see the potential impact our technology could have on their livelihoods.
          </p>
          <p>
            The team's gratitude everytime we shared our progress was a reminder that I have the capacity to positively impact others with my skills. It reminded me that computer science is so amazing because it allows us to create solutions to any problem.
          </p>
          <p>
            The way the Safe Cities leaders faced challenges we had, such as questions about deployment and funding, taught me the importance of composure, resilience, and perseverance in the face of adversity.
          </p>
        </div>
      </section>

      <hr />

      <section className="section-block skills-achievements">
        <h2>Global Learning, Skills Acquired, and Achievements</h2>
        <div className="content-grid">
          <div className="grid-item">
            <h3>Global Learning</h3>
            <ul>
              <li><strong>Cultural Immersion:</strong> Gained a profound understanding of South African culture, social dynamics, and the agricultural landscape.</li>
              <li><strong>Sustainable Development:</strong> Learned about the nuances of developing sustainable technological solutions in the context of a developing country.</li>
              <li><strong>Cross-Cultural Collaboration:</strong> Experienced firsthand the power and challenges of working with diverse teams from different backgrounds.</li>
            </ul>
          </div>
          <div className="grid-item">
            <h3>Skills Acquired</h3>
            <ul>
              <li><strong>Full-Stack Development:</strong> Enhanced proficiency in React (Native), Node.js, Express.js, and MongoDB for both mobile and web platforms.</li>
              <li><strong>UI/UX Design for Diverse Users:</strong> Developed a keen sense for designing intuitive interfaces accessible to users with varying levels of technological literacy.</li>
              <li><strong>Professional Communication:</strong> Practiced effective communication strategies and requirement gathering with Safe Cities as well as presenting our product to industry professionals.</li>
            </ul>
          </div>
          <div className="grid-item">
            <h3>Key Achievements</h3>
            <ul>
              <li>Successfully launched a beta version of the mobile app and the fully deployed web app.</li>
              <li>Received positive feedback regarding the app's potential to improve communication and market access.</li>
              <li>Established a sustainable framework for continued development and support of the platform by local teams.</li>
            </ul>
          </div>
        </div>
      </section>

      <hr />

      <section className="section-block memorable-experience">
        <h2>Most Memorable Experience</h2>
        <div className="image-placeholder large-placeholder">
          {/* Image related to your most memorable experience */}
          <img src="basketball.jpeg" alt="Most Memorable Moment" />
          <p className="image-caption">This moment truly encapsulated the spirit of my journey.</p>
        </div>
        <div className="reflection-block">
          <p>
            One particular moment that stands out vividly was the visit to Curro High School. We were able to share our projects with the local students and enjoyed a game of basketball afterwards. It was a powerful reminder of the global community we are part of.
          </p>
          <p>
            This experience taught me that, even halfway across the world, we still have a lot in common with people everywhere; from our struggles to the things we enjoy, everyone's life is a different portrait of the same person.
          </p>
        </div>
      </section>

      <hr />

      <section className="section-block highlights-reflections">
        <h2>Highlights and Reflections</h2>
        <div className="image-gallery two-column">
          <div className="image-placeholder">
            {/* Image of a scenic place you visited */}
            <img src="paragliding.jpeg" alt="Scenic View in South Africa" />
            <p className="image-caption">My first time ever paragliding</p>
          </div>
          <div className="image-placeholder">
            {/* Image of a local market or community event */}
            <img src="atv.jpg" alt="Local Market" />
            <p className="image-caption">ATV riding and sandboarding on our free day</p>
          </div>
        </div>
        <div className="reflection-block">
          <p>
            Beyond the project, my time in South Africa was filled with incredible moments. We went on many adventures together and everyone tried something for the first time.
          </p>
          <p>
            The variety of new experiences that I had the opportunity to partake in reminded me about the importance of living in the moment and embracing every opportunity that is presented. To live is to have a unique set of experiences and it is impossible to add to that without embracing the unknown and trying new things.
          </p>
          <p>
            When doing new activities, I always learned something new about a completely unrelated simply because of the new people and places we encountered. For example, the resilience of the Zimbabwans who organized the paragliding service or the variety of native birds and plants we saw in Atlantis.
          </p>
        </div>
      </section>

      <hr />

      <section className="section-block photo-memories">
        <h2>More Photo Memories & Reflections</h2>
        <div className="image-gallery three-column">
          <div className="image-placeholder">
            <img src="smiley.jpeg" alt="Sheep's head smiley" />
            <p className="image-caption">Trying smiley at Marco's African Place</p>
          </div>
          <div className="image-placeholder">
            <img src="ostrich.jpeg" alt="Ostrich" />
            <p className="image-caption">The first of many ostriches we saw</p>
          </div>
          <div className="image-placeholder">
            <img src="lions-head.jpeg" alt="Lion's Head hike" />
            <p className="image-caption">The hike up Lion's Head was unlike any other</p>
          </div>
          <div className="image-placeholder">
            <img src="elephant.jpeg" alt="Elephant selfie" />
            <p className="image-caption">Up close and personal with an elephant</p>
          </div>
          <div className="image-placeholder">
            <img src="farm.jpeg" alt="Farm visit" />
            <p className="image-caption">Visiting the AFC Estate farm gave us extra motivation</p>
          </div>
        </div>
        <div className="reflection-block">
          <p>
            These images represent just a fraction of the incredible experiences and people I encountered. Each one holds a special memory, contributing to the richness of this journey.
          </p>
          <p>
            Trying new and local food is always part of traveling and I got to try many South African dishes such as smiley, springbok, kudu, ostrich, and bunny chow which exposed me to the culture.
          </p>
          <p>
            The visit to the AFC Estate farm was a pivotal point in the trip as it came during a time of rapid development on the app. It served as a great reminder of the people we were working for and their commitment to the farm was a inspiration to us.
          </p>
        </div>
      </section>

      <hr />

      <section className="section-block lessons-advice">
        <h2>Lessons Learned, Advice, and Tips</h2>
        <div className="content-grid two-column">
          <div className="grid-item">
            <h3>Lessons Learned</h3>
            <ul>
              <li><strong>Empathy is Key:</strong> Understanding the user's context and challenges is paramount in developing truly useful technology</li>
              <li><strong>Adaptibility is Crucial:</strong> Being prepared for unexpected challenges and abel to change your plans accordingly, especially in new environments, is crucially important</li>
              <li><strong>Power of Connection:</strong> Building genuine relationships with local communities and stakeholders is invaluable</li>
              <li><strong>Impact of Small Innovations:</strong> Even seemingly small technological advancements can have a significant impact on people's lives</li>
            </ul>
          </div>
          <div className="grid-item">
            <h3>Advice & Tips for Future Travelers/Developers</h3>
            <ul>
              <li><strong>Do Your Research:</strong> Understand the local culture, infrastructure, and specific needs before you arrive</li>
              <li><strong>Engage Locally:</strong> Spend time talking to the people you're trying to help; their insights are gold</li>
              <li><strong>Embrace the Unknown:</strong> The best experiences and insights come from stepping outside your comfort zone</li>
              <li><strong>Leave Room for Exploration:</strong> Don't just focus on work; explore the beauty and diversity of South Africa!</li>
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Param Gattupalli. All rights reserved. | Special thanks to everyone who made this trip possible.</p>
      </footer>
    </div>
  );
}

export default SouthAfricaTripSummary;