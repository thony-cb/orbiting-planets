import React from "react";

export default function Hero() {
  return (
    <section className="z-10 w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full gap-6">
        <h1 className="text-center text-7xl max-w-prose ">
          Design tools
          <br /> from the future.
        </h1>
        <h2 className="text-center text-white/70">
          Unleash your creativity with Diagram's <br />
          AI-powered design tools.
        </h2>
        <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-full transparentContainer">
          <svg
            className="rotate-180"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          Explore the future
        </button>
      </div>
    </section>
  );
}
