import personimg from "../../../../public/assets/Projects_Page/person.png";
import bookimg from "../../../../public/assets/Projects_Page/book.png";
import clockimg from "../../../../public/assets/Projects_Page/clock.png";
import personsimg from "../../../../public/assets/Projects_Page/persons.png";
import img from "../../../../public/assets/Projects_Page/download.jpeg"

export default function ProjectCard({ title, description,completetag }) {
  const data = [
    { label: "Students", value: "100+", img: personimg },
    { label: "Publications", value: "50+", img: bookimg },
    { label: "Duration", value: "10+", img: clockimg },
    { label: "Team Size", value: "5+", img: personsimg },
  ];

  const tags = [
    { tag: "Python" },
    { tag: "JavaScript" }
  ];

  function setcompletestatus(tag){
    if(tag=="Completed"){
        return "bg-[#84FF88] text-green-700 "
    }
    if(tag=="Active"){
        return "bg-red-300 text-[#FF0000]"
    }
    if(tag=="Ongoing"){
         return "bg-yellow-100 text-[#d5c217]"
    }
    return "text-white"

  }

  return (
    <div className="w-[380px] h-[530px] bg-white rounded-lg overflow-hidden p-4">
      {/* Image Section */}
      <div className="h-48 bg-gray-200 rounded-t-2xl ">
        <img className="w-full h-full object-cover rounded-t-2xl" src={img} alt="Base Img" />
      </div>

      {/* Description Section */}
      <div className="p-4">
        <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <div className={`px-2 py-2 text-sm rounded-full font-semibold ${setcompletestatus(completetag)}`}>
                {completetag}
            </div>
        </div>
        <p className="text-gray-600">
          {description.length > 70 ? description.slice(0,70) + "..." : description}
        </p>
      </div>

      {/* Data Section */}
      <div className="p-4 grid grid-cols-2 gap-4 border-b-2 border-b-zinc-400">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <img src={item.img} alt={item.label} className="w-8 h-8 mr-2" />
            <div>
              <div className="text-sm font-medium text-zinc-500">{item.label}</div>
              <div className="text-lg font-bold">{item.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Language Tags */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex space-x-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-200 rounded-full text-sm text-gray-700">
              {tag.tag}
            </span>
          ))}
        </div>
        <div className="text-red-600 font-semibold cursor-pointer">
          View Full Details
        </div>
      </div>
    </div>
  );
}
