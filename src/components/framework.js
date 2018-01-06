import React from 'react';

const Framework = ({ framework }) => {

  return (
    <tr>
      <td>{framework.name}</td>
      <td>
        <a href={framework.repo} target="_blank">source code</a>
      </td>
      <td>
        <a href={framework.demo} target="_blank">demo</a>
      </td>
    </tr>
  );
}

export default Framework;
