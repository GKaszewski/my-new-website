import React from "react";
import { BaseLayout } from "../src/components/baselayout";
import BackgroundVideoComponent from "../src/components/backgroundvideo";
import { TextSection } from "../src/components/textsection";
import { NextSeo } from "next-seo";
import Jobs from "../src/components/jobs";
import Skills from "../src/components/skills";

export default function Home() {
  const aboutMeSection = `
	Hi, my name is Gabriel Kaszewski and I am a Bioinformatics student and self-taught full stack developer. I started coding when I was 11.
	I love solving problems and writing software. Currently I am working as Python Developer at digimonkeys.com.
	I am very passionate about Computer Science.`;

  return (
    <BaseLayout title="Gabriel Kaszewski">
      <NextSeo
        title="Gabriel Kaszewski"
        description="Gabriel Kaszewski's personal website."
        openGraph={{
          title: "Gabriel Kaszewski",
          url: `https://gabrielkaszewski.dev/`,
          description: "Gabriel Kaszewski's personal website",
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
      <Skills />
      <Jobs />
    </BaseLayout>
  );
}
