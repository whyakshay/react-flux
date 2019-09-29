import React from 'react';
import Course from './Course';
import * as courseActions from "../actions/courseActions";

function CourseList(props){
  function handleDelete(id){
    courseActions.deleteCourse(id);
  }

  return(
      <table className="table">
        <thead>
          <tr>
            <td>
              Title
            </td>
            <td>
              Category
            </td>
            <td>
              AuthorsId
            </td>
            <td>
              Actions
            </td>
          </tr>
        </thead>
        <tbody>
          { props.courses.map( course => {
            return <Course handleDelete={handleDelete} {...course} />;
          })}
        </tbody>
        </table>
  )
}

export default CourseList;
