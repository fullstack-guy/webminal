import React, { useState, useEffect, useCallback } from 'react';
import { useSession, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

import CoursesListItem from './CoursesListItem';
import CoursesFiltersMenu from '../CoursesFiltersMenu/CoursesFiltersMenu';
import ConfirmModal from '../ConfirmModal';
import supabase from '../../utils/supabase-browser';
import { getDurationAsMinute } from '../../utils/helpers';

// options - icon - windows.svg;
const CoursesList = () => {
  const session = useSession()
  const router = useRouter()
  const user = useUser()
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState();
  
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
  
  const handleCourseClick = useCallback((course) => () => {
    setSelectedCourse(course)
    setShowModal(true)
  }, [])

  const handleConfirm = useCallback(() => {
    router.push({
      pathname: '/watch',
      query: {
        courseId: selectedCourse?.id,
        userId: user?.id
      },
    })
  }, [selectedCourse, user])

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
              onClick={handleCourseClick(course)}
            />
          ))}
        </div>
      </div>
      <ConfirmModal
        showModal={showModal}
        title={'Confirmation'}
        description={`Are you sure to join in ${selectedCourse?.name} lesson?`}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default CoursesList;
