import { MacbookScroll } from './components/ui/macbook-scroll';
import { useState } from 'react';


const bentoData = [
  {
    img: "/fish.png",
    title: "Underwater Tech",
    description: "Marine robotics and underwater systems.",
    link: "https://example.com/fish",
    tall: true
  },
  {
    img: "/grid.png",
    title: "Grid Design Challenge",
    description: "A UI/UX event on modern layout techniques.",
    link: "https://example.com/grid",
    tall: true
  },
  {
    img: "/looker.png",
    title: "Looker Analytics",
    description: "Workshop on data analytics with Looker Studio.",
    link: "https://example.com/looker",
    tall: false
  },
  {
    img: "/TE.png",
    title: "Technical Expo",
    description: "Showcasing student innovations across tech.",
    link: "https://example.com/te",
    tall: false
  },
  {
    img: "/uiux.png",
    title: "UI/UX Hackathon",
    description: "Design sprint for Figma and Framer enthusiasts.",
    link: null,
    tall: false
  },
  {
    img: "/uu.png",
    title: "Unusual UX",
    description: "Talk series on breaking UX conventions.",
    link: null,
    tall: false
  },
  {
    img: "/water.png",
    title: "Water Conservation",
    description: "Campaign on sustainable water usage.",
    link: "https://example.com/water",
    tall: true
  },
    {
    img: "/uu.png",
    title: "Unusual UX",
    description: "Talk series on breaking UX conventions.",
    link: null,
    tall: false
  },
    {
    img: "/uu.png",
    title: "Unusual UX",
    description: "Talk series on breaking UX conventions.",
    link: null,
    tall: false
  },
];


function App() {
  return (
    <>
      {/* MacbookScroll Fullscreen Section with Gradient */}
      <div
        style={{
          background: 'linear-gradient(#1a2b3b, #010d18)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}
      >
        <MacbookScroll
          src="/Untitled design.png"
          showGradient={true}
          title={
            <h2 className="text-3xl font-bold text-white">
              <span className="inline-block overflow-hidden border-r-2 border-white whitespace-nowrap animate-typing">
                Computer Society of India - CRCE
              </span>
            </h2>
          }
          badge={
            <span className="bg-white text-black px-2 py-1 rounded-md text-sm">
              Coming Soon
            </span>
          }
        />
      </div>

   
  <div className="bg-[#010d18] min-h-screen py-16 px-4 md:px-24">
      <h2 className="text-3xl text-white font-bold mb-10 text-center">Our Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[16rem] md:auto-rows-[20rem]">
        {bentoData.map((item, idx) => (
          <div
            key={idx}
            className={`group relative overflow-hidden rounded-xl border border-white/20 shadow-lg transition-transform hover:scale-105 ${
              item.tall ? "row-span-2 md:row-span-2" : ""
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-white text-sm mb-2">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  Learn more
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>


    </>
  );
}

export default App;
