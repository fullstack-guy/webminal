import React, { useState, useEffect, useContext } from "react";
import { useSession, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import Image from "next/image";

import Avatar from "../Avatar/Avatar";
import MenuItem from "./MenuItem";
import Button from "../Button/Button";
import { MainMenuContext } from "../../context/MainMenuContext";
import supabase from "../../utils/supabase-browser";

const OptionMenu = () => {
  const [tempMenuOptions, setTempMenuOptions] = useContext(MainMenuContext);
  const router = useRouter();
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
        .eq("id", user.id)
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

  return session ? (
    <section className="flex flex-col justify-start">
      <div className="default-border p-3  mb-5">
        {loading ? (
          <></>
        ) : (
          <div className="default-container flex items-center gap-2">
            <div className="px-2">
              <Avatar img={avatarUrl} />
            </div>
            <div>
              <h4>{username}</h4>
              <p className="paragraph-4">{user.email}</p>
            </div>
            <div className="pl-3">
              <Image
                src="/images/icons/Go-forward.svg"
                width={16}
                height={16}
                alt="signing with google button"
              />
            </div>
          </div>
        )}
      </div>
      <div className="default-border flex justify-center flex-col  rounded-2xl p-6 mb-5">
        {tempMenuOptions.map((item, index) => {
          const { text, icon, isSelected, url } = item;

          return (
            <MenuItem
              key={text}
              text={text}
              icon={icon}
              isSelected={isSelected}
              url={url}
              onClick={() => {
                const newOptions = tempMenuOptions.map((item) => ({
                  ...item,
                  isSelected: false,
                }));
                const newSelected = {
                  ...tempMenuOptions[index],
                  isSelected: true,
                };

                newOptions[index] = newSelected;
                setTempMenuOptions(newOptions);
                router.push(item.url);
              }}
            />
          );
        })}
      </div>
      <div className="hidden default-border md:flex justify-center flex-col items-center  rounded-2xl p-6">
        <Image
          src="/images/icons/Rounded-corners.svg"
          width={64}
          height={64}
          className="object-contain"
          alt="signing with google button"
        />
        <h1 className="mt-4">Upgrade Plan</h1>
        <p className="paragraph-3 max-w-[280px] text-center mt-6 mb-10">
          Become a <h5 className="inline">Pro</h5> member today and save more
          then <h4 className="inline ">75%</h4>
        </p>

        <Button
          text="Sea deal"
          onClick={() => {
            alert("click");
          }}
        />
        <div className="default-border rounded-2xl min-w-[300px] text-center mt-14 hover-cursor">
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              router.push("/login");
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};

export default OptionMenu;
