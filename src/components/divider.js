import { BiRightArrow } from "react-icons/bi";
import Link from "next/link";

const SectionDivider = ({ value1, value2 }) => {
  // console.log(value1);
  return (
    <div className="py-7 flex justify-between items-center gap-7">
      <div className="uppercase font-bold text-[#c2a672] text-2xl">
        {value1}
      </div>
      <div className="flex-grow h-px bg-[#132034] ml-[20px]"></div>
      <Link href={""} className="flex items-center gap-2text-[#132034]">
        {value2} <BiRightArrow />
      </Link>
    </div>
  );
};

export default SectionDivider;
