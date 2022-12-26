import React, { useEffect, useState } from "react";
import { useSession, useUser } from "@supabase/auth-helpers-react";

import supabase from "../../utils/supabase-browser";
import CourseInfoItem from "./CourseInfoItem";
// import Image from 'next/image';

const CurseInfo = () => {
  const [url, setURL] = useState("");
  const session = useSession();
  const user = useUser();
  const [progresses, setProgress] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.href.indexOf("watch") > -1) {
      setURL("Topics 📚");
    } else {
      setURL("Lessons 📖");
    }
  }, [url]);

  useEffect(() => {
    getProgress();
  }, [session]);

  const getProgress = async () => {
    try {
      setLoading(true);
      const { data, error, status } = await supabase
        .from("progress")
        .select(`course (name, description, duration), percent`)
        .eq("user", user.id);
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setProgress(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // getTitle();
  return (
    <section className="min-w-[250px]">
      <div className="flex flex-col justify-center gap-6">
        <h1>{url} </h1>
        {loading ? (
          <div>Loading</div>
        ) : progresses?.map((progress) => (
          <CourseInfoItem
            color="bg-secondary"
            width={progress.percent}
            icon={"icon-tag-search.svg"}
            name={progress.course.name}
            description={progress.course.description}
            duration={progress.percent}
          />
        ))}
        {/* <CourseInfoItem
          color='bg-tertiary'
          width={61}
          icon={'icon-tag-docs.svg'}
        />
        <CourseInfoItem
          color='bg-accent-1'
          width={93}
          icon={'icon-tag-settings.svg'}
        />
        <CourseInfoItem
          color='bg-secondary'
          width={33}
          icon={'icon-tag-star.svg'}
        /> */}
      </div>
    </section>
  );
};

export default CurseInfo;
