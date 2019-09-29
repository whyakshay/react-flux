import dispatcher from '../appDispatcher';
import * as courseApi form '../api/courseApi';
import actionTypes from '../actionTypes';

export function loadCourses(){

};

// saveCourse Action creator
export function saveCourse(course){
  return courseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: saveCourse
    }) 
  }); 
};

export function deleteCourse(id){

};
