import React from "react";
import BriefcaseIcon from "../icons/briefcase.svg";
import LocationIcon from "../icons/location.svg";
import ProfileIcon from "../icons/location.svg";

function Services() {
  const services = [
    {
      icon: BriefcaseIcon,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      color: "bg-orange",
    },
    {
      icon: LocationIcon,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      color: "bg-blue",
    },
    {
      icon: ProfileIcon,
      title: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      color: "bg-pink",
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="py-12 px-6 mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 md:flex-row">
          {services.map((items, idx) => (
            <div
              key={idx}
              className="flex flex-col p-8 space-y-4 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <span
                    className={
                      "absolute top-0 left-4 w-3 h-3 rounded-full opacity-50 " +
                      items.color
                    }
                  />
                  <img className="relative" src={items.icon} />
                </div>
                <div className="relative">
                  <span
                    className={
                      "absolute right-0 bottom-1 w-12 h-1.5 opacity-60 " +
                      items.color
                    }
                  />
                  <h2 className="relative text-xl font-display">
                    {items.title}
                  </h2>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-500">
                {items.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
