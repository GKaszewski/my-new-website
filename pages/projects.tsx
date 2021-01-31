import { useDispatch, useSelector } from "react-redux";
import ProjectPanel from "../src/components/projectPanel";
import React, { useEffect } from "react";
import fetchProjects from "../src/redux/dispatchers/projects/fetchProjects";
import { Project } from "../src/redux/types";
import Spinner from "../src/components/spinner";
import { BaseLayout } from "../src/components/baselayout";

export default function Projects() {
  const dispatch = useDispatch();
  const { pending, projects, error } = useSelector(
    (state) => state.projectsReducer
  );
  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <BaseLayout title="Gabriel Kaszewski - Projects">
      <span className="m-8" />
      <div className="flex flex-col m-4 gap-4">
        <h1 className="text-5xl text-center font-bold">My projects</h1>
        <Spinner open={pending} />
        {error && (
          <p className="text-red-600 text-xl font-bold">
            Failed fetching projects 😔
          </p>
        )}
        {projects.map((project: Project) => {
          return (
            <ProjectPanel key={`project-${project.name}`} project={project} />
          );
        })}
      </div>
    </BaseLayout>
  );
}
