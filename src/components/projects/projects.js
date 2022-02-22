import React, {useState, useEffect} from "react";

const itemsData = [
  {
    id: 1,
    title: "Ok Movies & TV",
    description: "A webapp of movies and TV shows recommendations.",
    image: "images/okmovies.png",
    link: "https://ok-movies-and-tv.vercel.app/",
    github: "https://github.com/jhonmer-araujo/ok-movies-and-tv",
    type: "Web Apps",
    tech: ["React", "Tailwind CSS", "NextJS", "RESTFul API", "Vercel"],
  },
  {
    id: 2,
    title: "Weather Map",
    description: "A website for weather map",
    image: "images/weather-map.png",
    link: "https://gracious-pike-6fd98f.netlify.app",
    github: "https://github.com/jhonmer-araujo/canada-climate-map",
    type: "Web Apps",
    tech: ["React", "Vanilla CSS", "RESTful API", "Leaflet", "Netlify"],
  },
  {
    id: 3,
    title: "Todo List",
    description: "A website for todo list",
    image: "images/todo-list.png",
    link: "https://happy-wozniak-5d49b1.netlify.app/",
    github: "https://github.com/jhonmer-araujo/scrum-board-drag-n-drop",
    type: "Web Apps",
    tech: ["React", "Typescript", "Vanilla CSS", "Netlify"],
  },
  {
    id: 4,
    title: "DSDTech",
    description: "A website for a softaware company.",
    image: "images/dsdtech.png",
    link: "https://dsdtech.net",
    github: "",
    type: "Websites",
    tech: ["WordPress, Vanilla CSS"],
  },
  {
    id: 5,
    title: "Lasksmi Beauty Center Spa",
    description: "A website for a Beauty Center",
    image: "images/lakshmi.png",
    link: "https://lasksmicenterspa.com",
    github: "",
    type: "Websites",
    tech: ["WordPress", "Vanilla CSS"],
  },
  {
    id: 6,
    title: "DSDColors",
    description: "A website for DSDColors",
    image: "images/dsdcolors.png",
    link: "https://dsdcolors.com",
    github: "",
    type: "Websites",
    tech: ["WordPress", "Woocommerce", "Vanilla CSS"],
  },
  {
    id: 7,
    title: "DingDongBox",
    description: "A website for DingDongBox",
    image: "images/dingdongbox.png",
    link: "https://dingdongbox.net",
    github: "",
    type: "Websites",
    tech: ["WordPress", "Woocommerce", "Vanilla CSS"],
  },
  {
    id: 8,
    title: "HotNews Latinoamérica",
    description: "A website for HotNews Latinoamérica",
    image: "images/hotnewsla.png",
    link: "https://hotnewsla.com",
    github: "",
    type: "Websites",
    tech: ["WordPress", "Vanilla CSS"],
  },
  {
    id: 9,
    title: "Smart Data",
    description: "A website for Smart Data company",
    image: "images/smartdata.png",
    link: "https://smartdata.com.pa",
    github: "",
    type: "Websites",
    tech: ["WordPress", "Vanila CSS"],
  },
  {
    id: 10,
    title: "Qualification calculator Concacaf 2022",
    description: "A website for qualification calculator",
    image: "images/calculator-concacaf.png",
    link: "https://calculadora-concacaf-qatar2022-multimediacorprensa.vercel.app/",
    github: "",
    type: "Web Apps",
    tech: ["React", "NextJS", "Material UI", "Vercel"],
  },
  {
    id: 11,
    title: "Crime Map",
    description: "A web app to track crimes locations and show news about them.",
    image: "images/crime-map.png",
    link: "https://cdn.corprensa.com/mi-diario/mapa-del-crimen-mi-diario",
    github: "",
    type: "Web Apps",
    tech: ["ReactJS", "Vanila CSS", "Leaflet", "RESTful API", ""],
  },
  {
    id: 12,
    title: "La Prensa for iPad",
    description: "A mobile App for iPad exclusive for La Prensa's subscribers",
    image: "images/la-prensa-ipad.png",
    link: "https://apps.apple.com/us/app/la-prensa-para-ipad/id548307317#?platform=ipad",
    github: "",
    type: "Mobile Apps",
    tech: ["React Native", "Firebase"],
  },
  {
    id: 13,
    title: "Club La Prensa",
    description: "A website for Club La Prensa",
    image: "images/club-la-prensa.png",
    link: "https://club.prensa.com",
    github: "",
    type: "Websites",
    tech: ["WordPress", "Vanila CSS", "Javascript"],
  },
  {
    id: 14,
    title: "Martes Financiero",
    description: "A news website for Martes Financiero weekly",
    image: "images/martes-financiero.png",
    link: "https://martesfinanciero.com",
    github: "",
    type: "Websites",
    tech: ["React", "Vanila CSS", "Javascript", "JQuery", "RESTful API", "ARC XP"],
  },
  {
    id: 15,
    title: "La Prensa",
    description: "A news website for La Prensa",
    image: "images/la-prensa.png",
    link: "https://prensa.com",
    github: "",
    type: "Websites",
    tech: ["React", "Vanila CSS", "Javascript", "JQuery", "RESTful API", "ARC XP"],
  },
  {
    id: 16,
    title: "Mi diario",
    description: "A news website for Mi Diario",
    image: "images/mi-diario.png",
    link: "https://midiario.com",
    github: "",
    type: "Websites",
    tech: ["React", "Vanila CSS", "Javascript", "JQuery", "RESTful API", "ARC XP"],
  },
  {
    id: 17,
    title: "Python tutorial",
    description: "A Python technicnal documentation page",
    image: "images/python-tutorial.png",
    link: "https://jhonmer-araujo.github.io/python-technical-documentation-page/",
    github: "",
    type: "Websites",
    tech: ["HTML", "Vanila CSS"],
  }
];

const Projects = () => {
  const [items, setItems] = useState(itemsData);

  useEffect(() => {
    setItems(itemsData);
  }, []);

  const filterSelection = (type) => {
    const newItems = itemsData.filter((item) => item.type === type);
    setItems(newItems);
  };

  return (
    <section id="projects" className="projects">
      <div className="portfolio">
        <h2 className="text-pretitle">Projects</h2>
        <h3>
          Some projects I have done lately. Feel free to check them out.
        </h3>
        <div className="btn-container">
          <button className="btn active" onClick={() => setItems(itemsData)}>Show all</button>
          <button className="btn" onClick={() => filterSelection('Web Apps')}>Web Apps</button>
          <button className="btn" onClick={() => filterSelection('Mobile Apps')}>Mobile Apps</button>
          <button className="btn" onClick={() => filterSelection('Websites')}>Websites</button>
          <button className="btn" onClick={() => filterSelection('Others')}>Others</button>
        </div>
        <div class="row">
          {items.map((item) => (
            <div className={"column " + item.type}>
              <div className="content">
                <img src={item.image} alt="" width={'100%'} />
                <div className="middle">
                  <p><b>{item.title.toUpperCase()}</b></p>
                  <p>{item.description}</p>
                  <span>Techs: </span>
                  {item.tech.map((i) => (
                    <span>{i}, </span>
                  ))}
                  <a href={item.link} target="_blank" rel="noopener noreferrer" id="project-tile">
                    <div className="button">
                      Go to live
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
