import { useState } from "react";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import {
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title={
            <>
              <span className="text-gray-900">Why Choose </span>
              <span className="text-emerald-600">CORA</span>
            </>
          }
          text="Revolutionizing Real-World Asset Investment with AI and Blockchain Technology"
        />

        {/* Original Service Cards - Kept for reference */}
        <div className="relative mt-20">
          {/* Service 2 & 3 */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-gray-300 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="Robot"
                  className="h-full w-full object-cover pointer-events-none select-none"
                  width={630}
                  height={750}
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <div className="bg-green-50 p-4 opacity-90 rounded-2xl mb-6 border border-green-200">
                  <h4 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-4 text-green-800 uppercase anton-regular">
                    <span className="text-gray-900">Cora AI </span>
                    <span className="text-emerald-600">Real Estate Intelligence</span>
                  </h4>
                  <p className="body-2 mb-[3rem] text-green-700">
                    Transform real estate investment with Cora AI's revolutionary predictive analytics. Our advanced AI algorithms deliver precise property valuations, rental yield forecasts, and market trend predictions, powered by cutting-edge machine learning and blockchain technology.
                  </p>
                </div>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-transparent rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-4 text-black uppercase anton-regular">
                  <span className="text-gray-900">Cora AI </span>
                  <span className="text-emerald-600">Predictive Analytics</span>
                </h4>
                <p className="body-2 mb-[2rem] text-black">
                  Harness the power of Cora AI's advanced machine learning algorithms for real-time market predictions, portfolio optimization, and intelligent investment recommendations across multiple asset classes.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((icon, i) => (
                    <li
                      key={i}
                      className={`flex items-center justify-center rounded-2xl ${
                        i === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-gray-800 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          i === 2
                            ? "flex items-center justify-center w-full h-full bg-gray-700 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img
                          src={icon}
                          width={24}
                          height={24}
                          alt={`icon-${i}`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-transparent rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className={`w-full h-full object-cover ${
                    isPlaying && "animate-pulse"
                  } pointer-events-none select-none`}
                  width={520}
                  height={400}
                  alt="Scary Robot"
                />

                <VideoChatMessage isPlaying={isPlaying} />
                <VideoBar isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </Section>
  );
};

export default Services;
