import { brainwaveSymbol, copymWhiteIcon, copymColoredIcon, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex lg:gap-12">
        <div className="lg:w-1/2">
          <h2 className="h2 mb-4 md:mb-8 text-left anton-regular">
            <span className="text-gray-900">CORA: THE RWA</span>
            <br />
            <span className="text-emerald-600">REVOLUTION</span>
            <br />
            <span className="text-2xl font-medium text-gray-600">
              TOKENIZE ANYTHING. EVERYWHERE.
            </span>
          </h2>

          <ul className="mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img
                    src={check}
                    width={24}
                    alt="check"
                    height={24}
                    className="pointer-events-none select-none"
                  />
                  <h6 className="body-2 ml-5 text-black">{item.title}</h6>
                </div>

                {item.text && (
                  <p className="body-2 mt-3 text-black">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>TOKENIZE NOW</Button>
        </div>

        <div className="lg:w-1/2 mt-4">
          <p className="body-2 mb-4 text-black md:mb-16 lg:mb-32">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-gray-300 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-gray-300 rounded-full">
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={copymColoredIcon}
                  width={64}
                  height={64}
                  alt="brainwave"
                />
              </div>
            </div>

            <ul>
              {collabApps.map((app, i) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    i * 45
                  }`}
                >
                                     <div
                     className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] -rotate-${
                       i * 45
                     } animate-pulse`}
                   >
                     <img
                       src={app.icon}
                       alt={app.title}
                       width={app.height}
                       height={app.height}
                       className="m-auto"
                     />
                   </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
