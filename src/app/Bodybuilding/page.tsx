"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import banner from "public/images/bpdy.png";
import Head from "next/head";
import Giscus from "@giscus/react";

const Page = () => {
  const [traineeName, setTraineeName] = useState("");
  const [traineeComment, setTraineeComment] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Rating handler function
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Comment submit handler function
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/comments", {
        traineeName,
        traineeComment,
        rating,
      });

      setMessage(response.data.message);
      setTraineeName("");
      setTraineeComment("");
      setRating(0);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to submit your comment. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Add Head for Giscus script injection */}
      <Head>
        <script
          src="https://giscus.app/client.js"
          data-repo="Simaziz/ProjectWct"
          data-repo-id="R_kgDONaanCg"
          data-category="Announcements"
          data-category-id="DIC_kwDONaanCs4Cl_Jv"
          data-mapping="pathname"
          data-reactions-enabled="1"
          data-theme="preferred_color_scheme"
          data-lang="en" // Ensure we add the `data-lang` for language support
          async
        ></script>
      </Head>

      {/* Main Section */}
      <section className="relative">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={banner}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 text-white">
          <div className="max-w-xl">
            <h1 className="text-2xl font-bold sm:text-6xl">Bodybuilding</h1>
            <p className="mt-4 max-w-lg sm:text-xl">
              Bodybuilding is the practice of building muscle mass and strength
              through weightlifting and proper nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Trainee Comment Section */}
         {/* Giscus Comment Widget */}
         <div className="mt-12 text-center p-[3rem]">
          <Giscus
            repo="Simaziz/ProjectWct"
            repoId="R_kgDONaanCg"
            category="Announcements"
            categoryId="DIC_kwDONaanCs4Cl_Jv"
            mapping="pathname"
            reactionsEnabled="1"
            theme="preferred_color_scheme"
            inputPosition="bottom"
            lang="en" // Ensuring `lang` is passed here as well for proper language setting
          />
        </div>
    </div>
  );
};

export default Page;
