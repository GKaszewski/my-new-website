import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchSkills from "../src/redux/dispatchers/skills/fetchSkills";
import { Skill } from "../src/redux/types";
import SkillComponent from "../src/components/skillcomponent";
import { BaseLayout } from "../src/components/baselayout";
import Spinner from "../src/components/spinner";
import BackgroundVideoComponent from "../src/components/backgroundvideo";
import { TextSection } from "../src/components/textsection";
import fetchJobs from "../src/redux/dispatchers/job/fetchJobs";
import JobComponent from "../src/components/job";
import { NextSeo } from "next-seo";

export default function Home() {
  const dispatch = useDispatch();
  const {
    pending: skills_pending,
    skills,
    error: skills_error,
  } = useSelector((state) => state.skillsReducer);
  const {
    pending: jobs_pending,
    jobs,
    error: jobs_error,
  } = useSelector((state) => state.jobsReducer);
  useEffect(() => {
    dispatch(fetchSkills());
    dispatch(fetchJobs());
  }, []);

  const aboutMeSection = `
	Hi, my name is Gabriel Kaszewski and I am a High School graduate and self-taught full stack developer. I started coding when I was 11.
	I love solving problems and I hope that I'll work in one of FAANG companies in the future. Currently I am working as Python Developer at digimonkeys.com.
	I am very passionate about Computer Science and I'm planning on studying it.`;

  return (
    <BaseLayout title="Gabriel Kaszewski">
      <NextSeo
        title="Gabriel Kaszewski"
        description="Gabriel Kaszewski's personal website."
        openGraph={{
          title: "Gabriel Kaszewski",
          url: `https://gabrielkaszewski.pl/`,
          description: "Gabriel Kaszewski's personal website",
          site_name: "Gabriel Kaszewski",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div className="w-full">
        <BackgroundVideoComponent
          source="/test.webm"
          text="Full-stack Developer"
        />
      </div>
      <h3 className="text-5xl font-bold mt-4 mb-2 tracking-tight">Who am I?</h3>
      <TextSection>
        <p>{aboutMeSection}</p>
      </TextSection>
      <h3 className="text-5xl font-bold mt-4 mb-2 tracking-tight">Skills</h3>
      <div className="flex flex-wrap w-1/2 gap-4 justify-center">
        <Spinner open={skills_pending} />
        {skills_error && (
          <p className="text-red-600 text-xl font-bold">
            Failed fetching skills 😔
          </p>
        )}
        {skills.map((skill: Skill, i) => {
          return <SkillComponent key={`${skill}-${i}`} skill={skill} />;
        })}
      </div>
      <h3 className="text-5xl font-bold mt-4 mb-2 tracking-tight">
        Experience
      </h3>
      <Spinner open={jobs_pending} />
      <div className="flex flex-wrap w-1/2 gap-4 justify-center m-4">
        {jobs_error && (
          <p className="text-red-600 text-xl font-bold">
            Failed fetching jobs 😔
          </p>
        )}
        {jobs.map((job, i) => {
          return <JobComponent key={`${job}-${i}`} job={job} />;
        })}
      </div>
    </BaseLayout>
  );
}
