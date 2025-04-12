import React from 'react';
import backgroundImage from '/assets/Team/banner.png';
import useScrollFadeIn from '../Hooks/Scroll';
import Team_card from '../components/Cards/Team Card/Team_card';
import teamData from '../Data/TeamData';

function Team() {
  const fadeRef = useScrollFadeIn({ fadeOnly: true, delay: 0.4 });
  const TeamCardRef = useScrollFadeIn({ direction: 'y'}) 


  return (
    <>
      <div
        ref={fadeRef}
        className="mt-[92px] relative z-10 w-full py-24 text-white font-sans"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="z-10 absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/40" />
        <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center gap-4">
          <h1 className="text-white text-8xl font-medium font-['Poppins']">
            OUR TEAM
          </h1>
          <div className="w-[360px] h-0 outline outline-2 outline-white"></div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div ref={TeamCardRef} className="gap-x-20 gap-y-0 pt-10 px-20 grid grid-cols-2 justify-items-center bg-white max-w-7xl mx-auto">
          {teamData.map((member, index) => (
            <Team_card
              key={index}
              image={member.image}
              name={member.name}
              post={member.post}
              mail={member.mail}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;