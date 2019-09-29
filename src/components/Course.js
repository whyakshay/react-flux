import React from 'react';
import { Link } from 'react-router-dom';

function Course(props){

  return(
    <tr>
      <td>
        <Link to={"/course/" + props.slug }>{props.title}</Link>
      </td>
      <td>
        {props.category}
      </td>
      <td>
        {props.author.id}
      </td>
    </tr>
  )
}

export default Course;
