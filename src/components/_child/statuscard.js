import { BsCircleFill } from "react-icons/bs";

const LessonStatusCard = () => {
  return (
    <div className="border border-[#29456e] grid md:grid-cols-2 justify-between p-5">
      <div>
        <div className="flex items-center gap-2 mb-3 font-bold">
          Lesson 1: Introduction <BsCircleFill color="#2edb34" />
        </div>
        <div>Completion: 91% Passed 12/21/2020</div>
      </div>
      {/* <div className="border border-[#132034] font-bold flex items-center justify-center">
        View Lesson
      </div> */}
      <div className="flex items-center justify-end">
        <button className="border border-[#132034] font-bold px-20 py-1">
          View Lesson
        </button>
      </div>
    </div>
  );
};

export default LessonStatusCard;
