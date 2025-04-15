import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({p_id,image,title, description,completetag }) {
  const navigate = useNavigate();

  function setcompletestatus(tag){
    if(tag=="Completed"){
        return "bg-[#84FF8870]/45 text-[#06770AC9]/80 "
    }
    if(tag=="Active"){
        return "bg-[#FFE3E3] text-red-600/95"
    }
    if(tag=="Ongoing"){
         return "bg-yellow-300/60 text-yellow-400"
    }
    return "text-white"

  }

  return (
    <div className="w-[21.39vw] h-[25.97vw] bg-white rounded-[1.11vw] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      {/* Image Section */}
      <div className="w-full h-[13.33vw] bg-white rounded-[1.11vw] p-[0.83vw]">
        <img className="w-full h-full object-cover rounded-[1.11vw] justify-center" src={image} alt="Base Img" />
      </div>

      {/* Description Section */}
      <div className="p-[0.83vw]">
        <div className="flex justify-between items-start gap-[0.56vw]">
          <div className="flex-1 text-black text-[1.389vw] font-medium font-poppins leading-tight opacity-85">
            {title}
          </div>
          <div className={`p-[0.56vw] text-[0.972vw] rounded-full font-semibold ${setcompletestatus(completetag)}`}>
            {completetag}
          </div>
        </div>
        <p className="text-black text-[1.11vw] opacity-60 pt-[0.83vw] justify-center items-center">
          {description.length > 80 ? description.slice(0,70) + "..." : description}
        </p>
        <div className="flex justify-end pr-[0.56vw]">
          <img
            className="w-[2.5vw] h-[2.5vw] cursor-pointer"
            src="/assets/icons/arrow.svg"
            alt="Arrow"
            onClick={() => navigate(`/projects/all#${p_id}`)}
          />
        </div>
      </div>

    </div>
  );
}
