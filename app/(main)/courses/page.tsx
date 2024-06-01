import { getCourses, getUserProgress } from "@/db/queries";

import { List } from "./list";

const CoursesPage = async () => {
  const coursesQuery = getCourses();
  const userProgressQuery = getUserProgress();

  const [
    courses,
    userProgress,
  ] = await Promise.all([
    coursesQuery,
    userProgressQuery,
  ]);

  return (
    <div className="h-full max-w-[912px] ">
      <h1 className="text-2xl font-bold text-neutral-700">
        Languages Courses
      </h1>
      <List
        courses={courses}
        activeCourseId={userProgress?.activeCourseId}
      />
    </div>
  );
}

export default CoursesPage;
