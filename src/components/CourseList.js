import React from 'react';
import Course from './Course';

function CourseList(props){
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
          </tr>
        </thead>
        <tbody>
          { props.courses.map( course => {
            return <Course {...course} />;
          })}
        </tbody>
        </table>
  )
}

export default CourseList;
