import React, { useState } from "react";
import CourseForm from './CourseForm';
import * as courseApi from "../api/courseApi";


function ManageCoursePage(props){
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: ""
  });

  const handeChange = (event) => {
    const { target } = event;
    // ...course, [target.name]: target.value syntax means, copy of courses object, and second parameter means modify property on the copy [target.name] to target.value
    // So, target.name (maybe title) changes to value

    setCourse({
      ...course, [target.name]: target.value 
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
      console.log(course);
      props.history.push("/courses");
      //toast.success("Course saved.");
    });
  }

  const formIsValid = () => {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0; 
  } 

  return(
    <>
      <h2>Manage Course</h2>
      <CourseForm course={course} onSubmit={handleSubmit} onChange={handeChange} errors={errors} />
    </>
  )
}

export default ManageCoursePage;
