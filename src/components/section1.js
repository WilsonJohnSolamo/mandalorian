import Image from "next/image";
import Link from "next/link";
import CourseInfo from "./_child/courseinfo";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import CourseImg from "../../public/images/lesson3.png";

const Section1 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="flex flex-col gap-2">
        <Image src={""} height={100} width={200} alt="Course Picture"></Image>
        <h3 className="uppercase font-bold text-[#132034] text-2xl">
          Economics of Leadership
        </h3>
        <div className="flex items-center gap-1">
          <AiOutlineClockCircle /> Duration
          <span className="font-bold">2h 00m</span>
        </div>
        <div className="flex items-center gap-1 font-bold whitespace-nowrap">
          <BsCircleFill color="#2edb34" /> Completed 12/01/2021
        </div>
      </div>
      <div className="flex flex-col gap-7 mt-3">
        <CourseInfo />
        <CourseInfo />
      </div>
    </div>
  );
};

export default Section1;
