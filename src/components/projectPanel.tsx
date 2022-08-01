import React from "react";
import { Project } from "../redux/types";
import ProjectImageCarousel from "./projectimagecarousel";
import ChipComponent from "./chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props {
	project: Project;
}

export default function ProjectPanel(props: Props) {
	return (
		<div className="flex w-full h-full items-center justify-between gap-4">
			<div className="flex flex-col md:w-1/3 gap-4 m-4">
				<div className="prose">
					<h1 className="">{props.project.name}</h1>
					<p className="whitespace-pre-wrap">
						{props.project.description}
					</p>
				</div>
				{props.project.technology && (
					<div className="flex flex-wrap gap-2 sm:justify-center md:justify-start">
						{props.project.technology.map((tech) => {
							return <ChipComponent key={tech} label={tech} />;
						})}
					</div>
				)}
				<div className="flex flex-wrap gap-2 sm:justify-center md:justify-start">
					{props.project.githubUrl && (
						<a
							className="p-2 w-full text-center rounded-xl border border-yellow-400 hover:bg-yellow-400"
							href={props.project.githubUrl}
						>
							<span>
								<FontAwesomeIcon icon={["fab", "github"]} />
							</span>{" "}
							CODE
						</a>
					)}
					{props.project.visitUrl && (
						<a
							className="p-2 w-full text-center rounded-xl border border-yellow-400 hover:bg-yellow-400"
							href={props.project.visitUrl}
						>
							<span>
								<FontAwesomeIcon icon={["fas", "eye"]} />
							</span>{" "}
							LIVE
						</a>
					)}
					{props.project.downloadUrl && (
						<a
							className="p-2 w-full text-center rounded-xl border border-yellow-400 hover:bg-yellow-400"
							href={props.project.downloadUrl}
						>
							<span>
								<FontAwesomeIcon
									icon={["fas", "cloud-download-alt"]}
								/>
							</span>{" "}
							DOWNLOAD
						</a>
					)}
				</div>
				<div className="md:hidden m-2">
					{props.project.thumbnails && (
						<ProjectImageCarousel
							urls={props.project.thumbnails.map(
								(thumbnail) => thumbnail.file
							)}
						/>
					)}
				</div>
			</div>
			<div className="hidden md:flex md:w-1/2 m-2">
				{props.project.thumbnails && (
					<ProjectImageCarousel
						urls={props.project.thumbnails.map(
							(thumbnail) => thumbnail.file
						)}
					/>
				)}
			</div>
		</div>
	);
}
