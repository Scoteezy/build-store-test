import { Work as WorkType } from "@/shared";
import Image from "next/image";
const Work = ({title,img,year,feat,description}: WorkType) => {
  return (
    <div className="flex flex-col flex-center md:flex-row gap-4 pb-4 border-b-[1px] border-b-[#E0E0E0]">
      <Image alt={title} className="md:w-[246px] md:h-[180px] w-[339px] h-[230px] mx-auto" height={230} src={img} width={339}/>
      <div className="w-full">
        <h3 className="text-dark text-[30px] font-bold">{title}</h3>
        <div className="flex gap-7 mt-4">
          <div className="bg-[#142850] rounded-full text-white font-black text-lg px-2 py-1 flex-center leading-[0]">{year}</div>
          <p className="text-light text-lg">{feat}</p>
        </div>
        <p className="text-dark mt-4 text-xl">{description}</p>
      </div>
    </div>
  );
};

export default Work;