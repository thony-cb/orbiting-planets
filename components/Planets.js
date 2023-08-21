import Image from "next/image";
import React from "react";
import Logo from "./Logo";

export default function Planets() {
  return (
    <section className="absolute w-full h-full top-2/4">
      <div id="solar-system" className="relative w-full h-screen">
        {/* Logo */}
        <Logo />
        {/* Planet 1 */}
        <div
          id="orbit-div"
          style={{
            transform: "translate(-50%, -50%)",
            width: "var(--width-planet)",
            height: "var(--height-planet)",
          }}
          className="absolute bg-no-repeat bg-contain [--width-planet:500px] [--height-planet:500px] lg:[--width-planet:900px] lg:[--height-planet:900px] rounded-full top-1/2 left-1/2 z-8 "
        >
          <div
            style={{
              width: "var(--width-planet)",
              height: "var(--height-planet)",
            }}
            className="absolute top-0 rounded-full orbit-planet z-8 "
          >
            <div
              id="planet-1 "
              style={{ left: "var(--left-spacing)" }}
              className="relative top-0 lg:[--left-spacing:60%] [--left-spacing:32%]"
            >
              <Image
                src="/planet8.png"
                alt="/"
                width={25}
                height={25}
                style={{
                  transformOrigin: "center center",
                }}
                className="absolute planet"
              />
            </div>
          </div>
        </div>
        {/* Planet 2 */}
        <div
          id="orbit-div"
          style={{
            transform: "translate(-50%, -50%)",
            width: "var(--width-planet)",
            height: "var(--height-planet)",
          }}
          className="absolute bg-no-repeat bg-contain [--width-planet:400px] [--height-planet:400px] lg:[--width-planet:750px] lg:[--height-planet:750px] rounded-full top-1/2 left-1/2 z-8 "
        >
          <div
            style={{
              width: "var(--width-planet)",
              height: "var(--height-planet)",
            }}
            className="absolute top-0 rounded-full orbit-planet z-8 "
          >
            <div
              id="planet-1 "
              style={{ left: "var(--left-spacing)" }}
              className="relative top-0 lg:[--left-spacing:58%] [--left-spacing:20%]"
            >
              <Image
                src="/planet7.png"
                alt="/"
                width={75}
                height={75}
                className="absolute"
              />
              <Image
                src="/planet7-wing.png"
                alt="/"
                width={75}
                height={75}
                style={{
                  transformOrigin: "center center",
                }}
                className="absolute planet"
              />
            </div>
          </div>
        </div>
        {/* Planet 3 */}
        <div
          id="orbit-div"
          style={{
            transform: "translate(-50%, -50%)",
            width: "var(--width-planet)",
            height: "var(--height-planet)",
          }}
          className="absolute bg-no-repeat bg-contain [--width-planet:300px] [--height-planet:300px] lg:[--width-planet:600px] lg:[--height-planet:600px] rounded-full top-1/2 left-1/2 z-8 "
        >
          <div
            style={{
              width: "var(--width-planet)",
              height: "var(--height-planet)",
            }}
            className="absolute top-0 rounded-full orbit-planet z-8 "
          >
            <div
              id="planet-1 "
              style={{ left: "var(--left-spacing)" }}
              className="relative top-0 lg:[--left-spacing:25%] [--left-spacing:15%]"
            >
              <Image
                src="/planet6.png"
                alt="/"
                width={50}
                height={50}
                className="absolute"
              />
              <Image
                src="/planet6-icon.png"
                alt="/"
                width={50}
                height={50}
                style={{
                  transformOrigin: "center center",
                }}
                className="absolute planet"
              />
            </div>
          </div>
        </div>
        {/* Planet 4 */}
        <div
          id="orbit-div"
          style={{
            transform: "translate(-50%, -50%)",
            width: "var(--width-planet)",
            height: "var(--height-planet)",
          }}
          className="absolute bg-no-repeat bg-contain [--width-planet:240px] [--height-planet:240px] lg:[--width-planet:450px] lg:[--height-planet:450px] rounded-full top-1/2 left-1/2 z-8 "
        >
          <div
            style={{
              width: "var(--width-planet)",
              height: "var(--height-planet)",
            }}
            className="absolute top-0 rounded-full orbit-planet z-8 "
          >
            <div
              id="planet-1 "
              style={{ left: "var(--left-spacing)" }}
              className="relative top-0 lg:[--left-spacing:20%] [--left-spacing:70%]"
            >
              <Image
                src="/planet5.png"
                alt="/"
                width={55}
                height={55}
                className="absolute"
              />
              <Image
                src="/planet5-icon.png"
                alt="/"
                width={55}
                height={55}
                style={{
                  transformOrigin: "center center",
                }}
                className="absolute planet"
              />
            </div>
          </div>
        </div>
        {/* Planet 5 */}
        <div
          id="orbit-div"
          style={{
            transform: "translate(-50%, -50%)",
            width: "var(--width-planet)",
            height: "var(--height-planet)",
          }}
          className="absolute bg-no-repeat bg-contain [--width-planet:170px] [--height-planet:170px] lg:[--width-planet:300px] lg:[--height-planet:300px] rounded-full top-1/2 left-1/2 z-8 "
        >
          <div
            style={{
              width: "var(--width-planet)",
              height: "var(--height-planet)",
            }}
            className="absolute top-0 rounded-full orbit-planet z-8 "
          >
            <div
              id="planet-1 "
              style={{ left: "var(--left-spacing)" }}
              className="relative top-0 lg:[--left-spacing:58%] [--left-spacing:15%]"
            >
              <Image
                src="/planet1.png"
                alt="/"
                width={25}
                height={25}
                style={{
                  transformOrigin: "center center",
                }}
                className="absolute planet"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
