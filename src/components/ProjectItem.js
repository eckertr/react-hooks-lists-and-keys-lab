import React from "react";
import ProjectList from "./ProjectList";
import user from "../data/user"
function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{
technologies.map(technology => <span key={technology}>{technology}</span>)}
       </div>
    </div>
  );
}

export default ProjectItem;

{/*In the `ProjectList` component, a prop of `projects` is being passed down from
the `App` component with an array of objects. For each object in the array,
render one `ProjectItem` component with the correct props. Use the `id` of the
project for the `key` prop.*/}