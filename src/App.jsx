//Import
import { useState } from 'react';
import Contact from './components/Contact';
import History from './components/History';
import Home from './components/Home';
import Links from './components/Links';
import Staff from './components/Staff';
import Work from './components/Work';

//Data
const homePage = [
  {
  title: "Welcome to Horizon Builders!",
  intro: "Welcome to Horizon Builders, where dreams take shape and structures rise to meet the sky. As a premier construction company, we are dedicated to transforming your vision into reality, one brick at a time. With a team of skilled architects, engineers, and craftsmen, we specialize in delivering bespoke solutions tailored to your unique needs. Whether it's crafting luxurious residential estates, innovative commercial spaces, or sustainable infrastructure, we pride ourselves on our commitment to quality, integrity, and excellence in every project we undertake. From concept to completion, we stand by our clients, ensuring a seamless and rewarding construction experience. At Horizon Builders, the horizon is just the beginning. Let's build your future together.",
}
];

const companyHistory = [
  {
  title: "Company History",
  intro: "Established in 1985 by visionary entrepreneur David Westfield, Horizon Builders emerged as a beacon of innovation and reliability in the construction industry. Inspired by a passion for architectural excellence and a drive to exceed expectations, Westfield set out to create a company that would leave a lasting mark on the skyline. From humble beginnings as a small local firm, Horizon Builders steadily expanded its reach, tackling increasingly ambitious projects with precision and expertise. Over the decades, our commitment to craftsmanship and client satisfaction propelled us to new heights, earning us a reputation as a trusted partner in construction. Today, with a rich legacy of successful ventures behind us, Horizon Builders continues to push boundaries, shaping the future of construction one milestone at a time.",
},
];

const pastWork = [{
  projectName: "SkySpires Tower",
  projectImg: "/images/rsz_construction-site1.jpg",
  projectDesc: "SkySpires Tower is a towering marvel set to redefine the skyline of the bustling metropolis. As the city's latest landmark, this ambitious project combines cutting-edge design with state-of-the-art engineering to create a vertical oasis of urban living. With its sleek glass facade and panoramic views, SkySpires Tower promises residents an unparalleled lifestyle experience amidst the heartbeat of the city.",
},{
  projectName: "EcoHaven Estates",
  projectImg: "/images/rsz_construction-site2.jpg",
  projectDesc: " EcoHaven Estates is a groundbreaking residential development project situated amidst lush greenery and serene landscapes. Designed with sustainability at its core, this eco-friendly community aims to redefine modern living while preserving the natural environment. Featuring innovative green technologies and architectural brilliance, EcoHaven Estates offers residents a harmonious blend of luxury, comfort, and environmental responsibility.",
},{
  projectName: "Harbor Haven Marina",
  projectImg: "/images/rsz_construction-site3.jpg",
  projectDesc: "Harbor Haven Marina is a waterfront development project poised to become the premier destination for maritime enthusiasts and leisure seekers alike. Nestled along the picturesque coastline, this marina community offers a perfect blend of nautical charm and modern amenities. From luxury waterfront residences to vibrant dining and entertainment venues, Harbor Haven Marina sets the stage for a lifestyle of relaxation, recreation, and waterfront living at its finest.",
}];

const staff = [{
  name: "David Westfield",
  position: "Founder/CEO",
  desc: "A visionary leader with over three decades of experience in the construction industry, David Westfield is the driving force behind Horizon Builders. His strategic vision and unwavering commitment to excellence have propelled the company to new heights, establishing it as a trusted name in construction",
},{
  name: "Sarah Johnson",
  position: "Cheif Architect",
  desc: "With a keen eye for design and a passion for innovation, Sarah Johnson leads our talented team of architects. Her creative approach and attention to detail ensure that every project bears the hallmark of architectural brilliance.",
},{
  name: "Michael Rodriguez",
  position: "Chief Engineer",
  desc: "As the mastermind behind the structural integrity of our constructions, Michael Rodriguez brings a wealth of technical expertise to the table. His meticulous planning and innovative solutions guarantee the solidity and durability of our buildings",
},{
  name: "Emily Collins",
  position: "Project Manager",
  desc: "With a knack for organization and a gift for communication, Emily Collins oversees the smooth execution of our projects from start to finish. Her leadership ensures that deadlines are met, budgets are adhered to, and clients are delighted with the results.",
},{
  name: "Jason Thompson",
  position: "Construction Foreman",
  desc: "With his hands-on approach and years of experience in the field, Jason Thompson leads our skilled team of craftsmen with precision and expertise. His commitment to quality craftsmanship ensures that every detail of the construction process is executed flawlessly.",
}];

const contactUs = [
  {
  message: "Thank you for your interest in Horizon Builders. Whether you have a question, need a quote, or want to discuss a potential project, we're here to help. Please feel free to reach out to us using the contact information provided below:",
  address: "Horizon Builders 123 Main Street, Cityville, State 12345, United States",
  phone: "(555) 123-4567",
  email: " info@horizonbuilders.com",
},
];

const links = [{
  title: "Google",
  url: "https://www.google.com/"
},{
  title: "Facebook",
  url: "https://www.facebook.com/"
},{
  title: "LinkedIn",
  url: "https://www.linkedin.com/"
}];

//Component
const App = () => {
  //State Variable
  const [page, setPage] = useState("");

  //Event Handler
  const renderPage = () => {
    if(page === "home"){
      console.log("home page")
      return (homePage.map((element, index)=>{
        return <Home 
          key={index}
          info={element}
        />
      }));
    }

    if(page === "history"){
      return companyHistory.map((element, index)=>{
        return <History 
          key={index}
          info={element}
        />
      })
    }

    if(page === "work"){
      return pastWork.map((element, index)=>{
        return <Work 
        key={index}
        info={element}
        />
      })
    }

    if(page === "staff"){
      return staff.map((element, index)=>{
        return <Staff 
        key={index}
        info={element}
        />
      })
    }

    if(page === "contact"){
      return contactUs.map((element, index)=>{
        return <Contact 
        key={index}
        info={element}
        />
      })
    }

    if(page === "links"){
      return links.map((element, index)=>{
        return <Links 
        key={index}
        info={element}        
        />
      })
    }

  };

    

  return (
    <>
      {/* <nav>
        <button onClick={() => handlePage("home")}>Home</button>
        <button onClick={() => handlePage("history")}>About Us</button>
        <button onClick={() => handlePage("work")}>Past Work</button>
        <button onClick={() => handlePage("staff")}>Staff</button>
        <button onClick={() => handlePage("contact")}>Contact Us</button>
        <button onClick={() => handlePage("links")}>Links</button>
      </nav> */}

    <nav>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage("history")}>About Us</button>
        <button onClick={() => setPage("work")}>Past Work</button>
        <button onClick={() => setPage("staff")}>Staff</button>
        <button onClick={() => setPage("contact")}>Contact Us</button>
        <button onClick={() => setPage("links")}>Links</button>
      </nav>

      <div className='page-container'>
        {renderPage()}
        {/* {homePage.map((element, index)=>{
          return <Home 
            key={index}
            info={element}
          />
        })} */}
      </div>
    </>
  )

}

export default App;
