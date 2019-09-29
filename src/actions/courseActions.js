import dispatcher from '../appDispatcher';
import * as courseApi from '../api/courseApi';
import actionTypes from './actionTypes';

export function loadCourses(){
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses
    });
  });
};

// saveCourse Action creator
export function saveCourse(course){
  return courseApi.saveCourse(course).then((savedCourse) => {
    console.log(savedCourse);
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse
    }) 
  }); 
};

export function deleteCourse(id){
  return courseApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      courseId: id
    });
  });
};
