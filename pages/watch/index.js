import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import Layout from "../shared/Layout";
import CoursesList from "../../components/CoursesList/CoursesList";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import supabase from "../../utils/supabase-browser";
import { getDurationAsMinute } from "../../utils/helpers";

const watch = () => {
  const router = useRouter();
  const { courseId, userId } = router.query;
  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState();

  useEffect(() => {
    getCourseWithProgress();
  }, [courseId, userId]);

  const getCourseWithProgress = async () => {
    try {
      setLoading(true);
      const { data, error, status } = await supabase
        .from("progress")
        .select(`course (name, description, duration), percent, id`)
        .match({
          user: userId,
          course: courseId,
        })
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setCourseData(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextClick = useCallback(() => {
    console.log('Next clicked')
    // will be implemented
  }, [])

  return (
    <>
      <Head>
        <title>
          Webminal - Learn and Practise Linux online, Programming online
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div className="flex flex-col items-center gap-4 p-4 mt-7">
            <div>
              <Image
                src="/images/temp-video.png"
                className="object-contain"
                width={490}
                height={304}
                alt={"temp"}
              />
            </div>

            <p className="paragraph-4 w-[100%]">
              {getDurationAsMinute(courseData?.course?.duration)}
            </p>
            <h1>{courseData?.course?.name}</h1>
            <p>{courseData?.course?.description}</p>
            <div className="w-[100%]">
              <ProgressBar width={courseData?.percent} color={"bg-secondary"} />
            </div>
            <div className="flex flex-row-reverse w-full">
              <button className="default-border rounded-2xl text-center mt-14 hover-cursor hover:bg-secondary" onClick={handleNextClick}>Next</button>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default watch;
