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
    <div className="w-[308px] h-[374px] bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      {/* Image Section */}
      <div className="w-full h-48 bg-white rounded-2xl p-3">
        <img className="w-full h-full object-cover rounded-2xl justify-center" src={image} alt="Base Img" />
      </div>

      {/* Description Section */}
      <div className="p-3">
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1 min-h-[2rem] text-black text-[20px] font-medium font-poppins leading-tight opacity-85">
            {title}
          </div>
          <div className={`px-2 py-2 text-sm rounded-full font-semibold ${setcompletestatus(completetag)}`}>
            {completetag}
          </div>
        </div>
        <p className="text-black opacity-60 pt-3 justify-center items-center">
          {description.length > 80 ? description.slice(0,70) + "..." : description}
        </p>
        <div className="flex justify-end pr-2">
          <img
            className="w-9 h-9 cursor-pointer"
            src="/assets/icons/arrow.svg"
            alt="Arrow"
            onClick={() => navigate(`/projects/all#${p_id}`)}
          />
        </div>
      </div>

    </div>
  );
}
