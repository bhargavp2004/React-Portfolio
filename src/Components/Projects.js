import React from 'react';
import hms from '../Images/Hms.png';
import Ebs from '../Images/Ebs.png';
import Ss from '../Images/Ss.png';
import Tms from '../Images/Tms.png';
import Cms from '../Images/Cms.png';
function Projects() {

  const projects = [
    {
      id: 1,
      title: "Hotel Management System",
      description: "A Web application implemented using python based django framework.",
      link : "http://bhargavp2004.pythonanywhere.com/",
      im: hms 
    },
    {
      id: 2,
      title: "Electricity Billing System",
      description: "A web application built using spring boot.",
      link : "http://bhargavp2004.pythonanywhere.com/",
      im: Ebs 
    },
    {
      id: 3,
      title: "Space Shooter",
      description: "A game built using html, css, javascript.",
      link : "https://bhargavp2004.github.io/Space-shooter/",
      im: Ss 
    },
    {
      id: 4,
      title: "Tourism Management System",
      description: "A Web application built using MongoDb, Express, Node and React.",
      link : "http://bhargavp2004.pythonanywhere.com/",
      im: Tms 
    },
    {
      id: 5,
      title: "College Management System",
      description: "A Web application built using .Net Core.",
      link : "http://bhargavp2004.pythonanywhere.com/",
      im: Cms 
    }

  ]
  return (
    <div id="projects" className="w-full min-h-screen md:top-0 gap-4 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-pink-950 from-60%">
      <div>
        <p className='text-white text-4xl mt-8 md:mt-12'> My Projects</p>
      </div>
      <div className="grid h-100 gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 justify-center items-center">
        {

          projects.map(({ id, title, description, link, im }) => (
            <a href={link} key={id} className="text-white border-2 border-blue-950 bg-gray-800 flex flex-col items-center justify-center">
              <div className="text-2xl justify-center"> {title} </div>
              <div className="">
                <img src={im} alt="Hms" />
              </div>
              <div className="text-white text-sm"> {description} </div>
            </a>
          ))
        }

        
      </div>
    </div>
  );
}

export default Projects;
