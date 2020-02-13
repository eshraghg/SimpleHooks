import React from "react";
import useResources from "./useResources";

const ResourceList = props => {
  const { resource } = props;
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;

//------------------ALTERNATE WAY----------------

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ResourceList = props => {
//   const [resources, setResources] = useState([]);
//   const { resource } = props;

//   const fetchResource = async resource => {
//     const response = await axios.get(
//       `http://jsonplaceholder.typicode.com/${resource}`
//     );
//     setResources(response.data);
//   };

//   useEffect(() => {
//     fetchResource(resource);
//   }, [resource]);

//   return (
//     <ul>
//       {resources.map(record => (
//         <li key={record.id}>{record.title}</li>
//       ))}
//     </ul>
//   );
// };

// export default ResourceList;
