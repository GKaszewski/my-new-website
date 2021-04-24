import React from "react";
import { Project } from "../redux/types";
import ProjectImageCarousel from "./projectimagecarousel";
import ChipComponent from "./chip";
import { Button } from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props {
  project: Project;
}

export default function ProjectPanel(props: Props) {
  return (
    <div className="flex w-full h-full items-center justify-evenly gap-4">
      <div className="flex flex-col md:w-1/2 justify-evenly gap-4">
        <h3 className="text-3xl">{props.project.name}</h3>
        <h3 className="text-lg whitespace-pre-wrap">
          {props.project.description}
        </h3>
        {props.project.technology && (
          <div className="flex flex-wrap gap-2 sm:justify-center md:justify-start">
            {props.project.technology.map((tech) => {
              return <ChipComponent key={tech} label={tech} />;
            })}
          </div>
        )}
        <div className="flex flex-wrap gap-2 sm:justify-center md:justify-start">
          {props.project.githubUrl && (
              <a className="p-2 w-full text-center rounded-xl border border-yellow-400 hover:bg-yellow-400" href={props.project.githubUrl}>
                <span>
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </span>{" "}
                CODE
              </a>
          )}
          {props.project.visitUrl && (
              <a className="p-2 w-full text-center rounded-xl border border-yellow-400 hover:bg-yellow-400" href={props.project.visitUrl}>
                <span>
                  <FontAwesomeIcon icon={["fas", "eye"]} />
                </span>{" "}
                LIVE
              </a>
          )}
          {props.project.downloadUrl && (
              <a className="p-2 w-full text-center rounded-xl border border-yellow-400 hover:bg-yellow-400" href={props.project.downloadUrl}>
                <span>
                  <FontAwesomeIcon icon={["fas", "cloud-download-alt"]} />
                </span>{" "}
                DOWNLOAD
              </a>
          )}
        </div>
        <div className="md:hidden">
          {props.project.thumbnailUrls && (
            <ProjectImageCarousel urls={props.project.thumbnailUrls} />
          )}
        </div>
      </div>
      <div className="hidden md:flex md:w-1/2">
        {props.project.thumbnailUrls && (
          <ProjectImageCarousel urls={props.project.thumbnailUrls} />
        )}
      </div>
    </div>
  );
}
