import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useUser } from "@supabase/auth-helpers-react";
import { useSession } from "@supabase/auth-helpers-react";

import Layout from "../shared/Layout";
import CircleProgressbar from "../../components/CircleProgressbar/CircleProgressbar";
import Avatar from "../../components/Avatar/Avatar";
import Notifications from "../../components/Notifications/Notifications";
import supabase from "../../utils/supabase-browser";

const profile = () => {
  const user = useUser();
  const session = useSession();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.full_name);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>
          Webminal - Learn and Practise Linux online, Programming online
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <h1 className="pl-8 py-10">profile ✨</h1>
        <div>
          {loading ? (
            <div>Loading</div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="relative">
                <CircleProgressbar />
                <div className="absolute top-[38%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                  <Avatar img={avatarUrl} size={120} withBorder={false} />
                </div>
                <div className="absolute top-[42%] left-[50%] translate-y-[50%] translate-x-[-50%] bg-primary px-2 py-2  text-center rounded-2xl min-w-[80px] border-2 border-white">
                  <h4>Pro</h4>
                </div>
              </div>
              <div className="-mt-[50px]">
                <h3>{username} 💯</h3>
                <p className="paragraph-3 -ml-[8px]">{user.email}</p>
              </div>
            </div>
          )}
          <section className="-mt-[30px]">
            <h3 className="pl-8 pb-4 pt-12">Settings ⚙️</h3>
            <Notifications
              size={40}
              icon={"options-icon-star.svg"}
              header="Achievements"
              text="Learn all the basics that you need to know to get started."
            />
            <Notifications
              size={40}
              icon={"options-icon-notifcations.svg"}
              header="Notifications"
              text="Manage the way we send you all the notifications and alerts."
            />
            <Notifications
              size={40}
              icon={"options-icon-payment.svg"}
              header="Payment Details"
              text="You have 1 card ending 6789 linked to your account."
            />
            <Notifications
              size={40}
              icon={"options-icon-heart.svg"}
              header="Preferences"
              text="Manage all the preferences and permissions."
            />
          </section>
        </div>
      </Layout>
    </>
  );
};

export default profile;
