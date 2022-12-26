import React, { useState, useEffect } from 'react';
import { useSession } from '@supabase/auth-helpers-react';

import CoursesListItem from './CoursesListItem';
import CoursesFiltersMenu from '../CoursesFiltersMenu/CoursesFiltersMenu';
import supabase from '../../utils/supabase-browser';
import { getDurationAsMinute } from '../../utils/helpers';

// options - icon - windows.svg;
const CoursesList = () => {
  const session = useSession()
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCoursesList()
  }, [session])
  const getCoursesList = async () => {
    try {
      setLoading(true);
      const { data, error, status } = await supabase.from('courses').select(`*`);
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setCourses(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1 className='pl-8 py-10'>Courses List 😉</h1>
      <div className='flex flex-col justify-center items-center'>
        <CoursesFiltersMenu />
        <div className='flex flex-wrap gap-4 justify-center'>
          {loading ? (
            <div>Loading</div>
          ) : 
          courses.map((course) => (
            <CoursesListItem
              key={course.id}
              header={course.name}
              paragraph={course.description}
              length={getDurationAsMinute(course.duration)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesList;
