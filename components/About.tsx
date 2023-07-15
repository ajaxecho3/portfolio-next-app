/* eslint-disable @next/next/no-img-element */
import { getAbout } from "@/sanity/sanity.utils";
import React from "react";
import Icon from "./Icons";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { About } from "@/types/About";

type Props = { about: About };

const AboutPage = ({ about }: Props) => {
  const {
    name,
    description,
    experience,
    skills,
    image,
    github,
    linkedin,
    twitter,
  } = about;
  return (
    <section className="h-full min-h-screen max-w-2xl pt-20 md:container md:mx-auto ">
      <div className="flex flex-col items-center  ">
        <div className=" mx-auto rounded-xl px-5  py-5 md:w-3/4">
          <div className=" flex w-full flex-col justify-between md:flex-row md:space-x-5">
            <div className=" relative md:w-1/3">
              <div className=" relative h-96 w-full rounded-lg object-cover object-center">
                <Image
                  className="shadow-3xl rounded-lg object-cover object-center md:object-fill"
                  fill
                  sizes="1000"
                  src={image}
                  alt={name + " photo"}
                  priority
                />
              </div>
              <div className=" py-2 ">
                <h1 className="gradiantText text-start text-3xl font-bold">
                  {name}
                </h1>
                <p className=" gradiantText text-start text-xl font-semibold  ">
                  Front-end Developer
                </p>
                <div className="mt-2 flex flex-col items-start justify-start space-y-2 ">
                  <div className="grid grid-cols-12 gap-2 lg:grid-cols-7">
                    {skills.map((skill) => (
                      <div
                        key={skill._id}
                        className="flex w-full items-center space-x-3 "
                      >
                        <Icon
                          className=" h-8 w-8 rounded-xl bg-white p-1 shadow-xl hover:scale-150"
                          icon={skill.logo}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <div className=" flex flex-col space-y-3">
                <div className="rounded-lg bg-[#f0f0ec] p-2 text-sm shadow-lg">
                  <PortableText value={description} />
                </div>

                <div className="max-w-screen-lg rounded-xl  bg-[#f0f0ec] p-2 px-4 shadow-lg md:px-2">
                  <p className=" text-xl font-extrabold tracking-widest  text-gray-600 ">
                    Experiences
                  </p>

                  <ul className="mt-2 divide-y ">
                    {experience.map(
                      ({
                        name,
                        _id,
                        position,
                        start,
                        current,
                        end,
                        description,
                        image,
                      }) => (
                        <li
                          key={_id}
                          className=" px-1 py-2  duration-150 hover:rounded-xl hover:border-white hover:bg-gray-50 "
                        >
                          <span className="space-y-3">
                            <div className="flex items-center gap-x-3">
                              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border bg-white">
                                <Image
                                  className=" rounded-full "
                                  fill
                                  sizes="500"
                                  src={image}
                                  alt={name + " photo"}
                                  priority
                                />
                              </div>
                              <div>
                                <span className="block text-sm font-medium text-indigo-600">
                                  {name}
                                </span>
                                <h3 className="mt-1 text-base font-semibold text-gray-800">
                                  {position}
                                </h3>
                              </div>
                            </div>
                            <p className="text-gray-600 sm:text-sm">
                              {description}
                            </p>
                            <div className="flex items-center justify-between gap-6 text-sm text-gray-600">
                              <span className="flex items-center gap-2">
                                <svg
                                  className="h-5 w-5 text-gray-500"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6 6V5C6 3.34315 7.34315 2 9 2H11C12.6569 2 14 3.34315 14 5V6H16C17.1046 6 18 6.89543 18 8V11.5708C15.5096 12.4947 12.8149 12.9999 10 12.9999C7.18514 12.9999 4.49037 12.4947 2 11.5707V8C2 6.89543 2.89543 6 4 6H6ZM8 5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6H8V5ZM9 10C9 9.44772 9.44772 9 10 9H10.01C10.5623 9 11.01 9.44772 11.01 10C11.01 10.5523 10.5623 11 10.01 11H10C9.44772 11 9 10.5523 9 10Z"
                                    fill="#9CA3AF"
                                  />
                                  <path
                                    d="M2 13.6923V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V13.6923C15.4872 14.5404 12.7964 14.9999 10 14.9999C7.20363 14.9999 4.51279 14.5404 2 13.6923Z"
                                    fill="#9CA3AF"
                                  />
                                </svg>
                                Full-time
                              </span>
                              <span className="flex items-center gap-2">
                                {/* <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z" fill="#9CA3AF" />
                                </svg>

                                Remote */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="mr-2 h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {start} - {current ? "Present" : end}
                              </span>
                            </div>
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto  flex w-3/4 items-center justify-between">
          <div className="flex items-center space-x-1">
            <Link
              href={github}
              className="mt-2 flex  items-center hover:scale-110 hover:underline"
              replace
            >
              <Icon className=" h-8 w-8 p-1 " icon="ri:github-fill" />
            </Link>
            <Link
              href={linkedin}
              className="mt-2 flex  items-center hover:scale-110 hover:underline"
              replace
            >
              <Icon className=" h-8 w-8 p-1 " icon="ri:linkedin-fill" />
            </Link>
            <Link
              href={twitter}
              className="mt-2 flex  items-center hover:scale-110 hover:underline"
              replace
            >
              <Icon className=" h-8 w-8 p-1 " icon="ri:twitter-fill" />
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <Link
              href={"https://www.fiverr.com/s/qwoqo9"}
              className="mt-2 flex  items-center hover:scale-110 hover:underline"
              replace
            >
              <Icon className=" h-12 w-12 p-1 " icon="simple-icons:fiverr" />
            </Link>
            <Link
              href={"https://www.upwork.com/freelancers/bernardinoo"}
              className="mt-2 flex  items-center hover:scale-110 hover:underline"
              replace
            >
              <Icon className=" h-12 w-12 p-1 " icon="logos:upwork" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
