import React, { useState, useEffect } from "react";
import CourseForm from './CourseForm';
import * as courseActions from "../actions/courseActions";
import courseStore from "../stores/courseStore";

function ManageCoursePage(props){
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);

    const slug = props.match.params.slug;

    if(courses.length === 0){
      courseActions.loadCourses();
    }else if(slug){
      // useEffect will run second time when course.length dependency changes
      setCourse(courseStore.getCourseBySlug(slug)); 
    }

    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  const onChange = () => {
    setCourses(courseStore.getCourses()); 
  };
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
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses"); 
    });
    //courseApi.saveCourse(course).then(() => {
    //  console.log(course);
    //  props.history.push("/courses");
    //  //toast.success("Course saved.");
    //});
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
