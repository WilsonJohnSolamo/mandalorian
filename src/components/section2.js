import CourseComplete from "./_child/coursecomplete";
import LessonStatusCard from "./_child/statuscard";

const Section2 = () => {
  return (
    <div>
      <CourseComplete />
      Lessons
      <div className="flex flex-col gap-2">
        <LessonStatusCard />
        <LessonStatusCard />
        <LessonStatusCard />
        <LessonStatusCard />
        <LessonStatusCard />
      </div>
    </div>
  );
};

export default Section2;
