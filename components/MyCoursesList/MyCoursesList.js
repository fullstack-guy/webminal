import React, { useState, useEffect } from "react";
import { useSession, useUser } from "@supabase/auth-helpers-react";

import CoursesFiltersMenu from "../CoursesFiltersMenu/CoursesFiltersMenu";
import CoursesListItem from "../CoursesList/CoursesListItem";
import supabase from "../../utils/supabase-browser";

const MyCoursesList = () => {
  const session = useSession();
  const user = useUser();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCoursesList();
  }, [session]);
  const getCoursesList = async () => {
    try {
      setLoading(true);
      const { data, error, status } = await supabase
        .from("progress")
        .select(`course (name, description, duration)`)
        .eq('user', user.id);
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setCourses(data);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <CoursesFiltersMenu />
      <div className="flex flex-wrap gap-4 justify-center">
        {loading ? (
          <div>Loading</div>
        ) : (
          courses.length > 0 ? courses.map((course) => (
            <CoursesListItem
              key={course.course.id}
              header={course.course.name}
              paragraph={course.course.description}
              length={course.course.duration}
            />
          )): (
            <div>No Data</div>
          )
        )}
      </div>
    </div>
  );
};

export default MyCoursesList;
