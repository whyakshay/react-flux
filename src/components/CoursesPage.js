import React, { useState, useEffect } from 'react';
import courseStore from '../stores/courseStore';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import { loadCourses } from "../actions/courseActions";

function CoursesPage(){
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if(courseStore.getCourses().length === 0){
      loadCourses(); 
    }
    // unmount
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  let onChange = () => {
    setCourses(courseStore.getCourses());
  }

  return (
      <>
        <h2>Courses</h2>   
        <CourseList courses={courses} />
        <Link to="/course" className="btn btn-primary">Add Course</Link>
      </>
   ) 
}

export default CoursesPage;
