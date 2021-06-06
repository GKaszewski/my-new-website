import { NextSeo } from "next-seo";
import React from "react";
import { BaseLayout } from "../src/components/baselayout";
import ChipComponent from "../src/components/chip";
import FaqElement from "../src/components/faqelement";
import PictureFrame from "../src/components/pictureframe";
import { TextSection } from "../src/components/textsection";

export default function AboutPage() {
  return (
    <BaseLayout title="Gabriel Kaszewski - About">
      <NextSeo
        title="Gabriel Kaszewski - About"
        description={`I am a ${
          new Date().getFullYear() - 2002
        } years old male. I was born in
        a little town in Poland called Bytów on 27th February 2002. I am 1.71
        meters tall or for you Americans 5'61". I graduated the III High School in Gdańsk where 
        I attendened as a student of bilingual class with advanced Math and Physics. 
        I speak Polish, English and I am learning Spanish. Currently, I am working as Python Developer at digimonkeys.com.`}
        openGraph={{
          title: "Gabriel Kaszewski - About",
          url: `https://gabrielkaszewski.pl/about`,
          description: `I am a ${
            new Date().getFullYear() - 2002
          } years old male. I was born in
          a little town in Poland called Bytów on 27th February 2002. I am 1.71
          meters tall or for you Americans 5'61". I graduated the III High School in Gdańsk where 
          I attendened as a student of bilingual class with advanced Math and Physics. 
          I speak Polish, English and I am learning Spanish. Currently, I am working as Python Developer at digimonkeys.com.`,
          site_name: "Gabriel Kaszewski",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <span className="m-8" />
      <PictureFrame src="/ja.jpg" width={300} height={300} />
      <h1 className="text-3xl font-extrabold">More info about me!</h1>
      <TextSection>
        <p>
        I am a {new Date().getFullYear() - 2002} years old male. I was born in
        a little town in Poland called Bytów on 27th February 2002. I am 1.71
        meters tall or for you Americans 5'61". I graduated the III High School in Gdańsk where 
        I attendened as a student of bilingual class with advanced Math and Physics. 
        I speak Polish, English and I am learning Spanish. Currently, I am working as Python Developer at digimonkeys.com
        </p>
      </TextSection>
      <h1 className="text-3xl font-extrabold">Hobbies</h1>
      <div className="flex flex-wrap gap-4 m-4 md:m-0 md:w-1/2 justify-center items-center">
        <ChipComponent label="Programming" />
        <ChipComponent label="Filmmaking" />
        <ChipComponent label="Working out" />
        <ChipComponent label="Playing ukulele" />
      </div>
      <h1 className="text-3xl font-bold">Interests</h1>
      <div className="flex flex-wrap gap-4 m-4 md:m-0 md:w-1/2 justify-center items-center">
        <ChipComponent label="Computer Science" />
        <ChipComponent label="Sci-Fi books" />
        <ChipComponent label="Politics" />
        <ChipComponent label="Astronomy" />
        <ChipComponent label="Sports" />
        <ChipComponent label="History" />
        <ChipComponent label="Australia" />
      </div>
      <h1 className="text-3xl font-bold">FAQ</h1>
      <div className="flex flex-col gap-2 m-4">
        <FaqElement
          question="How old were you when you started programming?"
          answer="I was 11 years old."
        />
        <FaqElement
          question="How did you learn programming?"
          answer="I read books and practiced a lot."
        />
        <FaqElement
          question="Are you studying Computer Science?"
          answer="Nope, not yet."
        />
        <FaqElement
          question="Which programming language you recommend for a beginner?"
          answer="The language doesn't really matter, just choose whichever you like and learn it."
        />
        <FaqElement
          question="What was your first programming language?"
          answer="I started my programming journey with C++."
        />
      </div>
      <span />
    </BaseLayout>
  );
}
