import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="absolute scale-50 -translate-x-1/2 -translate-y-1/2 lg:scale-90 left-1/2 top-1/2">
      <svg
        width="207"
        height="215"
        viewBox="0 0 207 215"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_ddi_29_51267)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M103.5 195C156.243 195 199 152.243 199 99.5C199 46.7568 156.243 4 103.5 4C50.7568 4 8 46.7568 8 99.5C8 152.243 50.7568 195 103.5 195ZM113.749 164.361C145.142 159.44 169.156 132.274 169.156 99.4995C169.156 66.725 145.142 39.5594 113.749 34.6385C110.745 34.1676 109.243 33.9322 107.65 34.536C106.381 35.0174 105.015 36.1854 104.343 37.3652C103.5 38.8451 103.5 40.6072 103.5 44.1313V154.868C103.5 158.392 103.5 160.154 104.343 161.634C105.015 162.814 106.381 163.982 107.65 164.463C109.243 165.067 110.745 164.831 113.749 164.361Z"
            fill="url(#paint0_linear_29_51267)"
          />
        </g>
        <defs>
          <filter
            id="filter0_ddi_29_51267"
            x="0.694167"
            y="0.969149"
            width="205.612"
            height="213.46"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3.03085" />
            <feGaussianBlur stdDeviation="3.03085" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_29_51267"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="12.1234" />
            <feGaussianBlur stdDeviation="3.65292" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0425422 0 0 0 0 0.0205556 0 0 0 0 0.154167 0 0 0 0.3 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_29_51267"
              result="effect2_dropShadow_29_51267"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_29_51267"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-7.85876" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.48 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect3_innerShadow_29_51267"
            />
          </filter>
          <linearGradient
            id="paint0_linear_29_51267"
            x1="-10.3882"
            y1="-2.45721"
            x2="-10.3882"
            y2="199.827"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0.72" />
          </linearGradient>
        </defs>
      </svg>

      <Image
        src="/logo-black.png"
        alt="/"
        width={75}
        height={75}
        className="absolute top-[9%] left-1/2"
      />
    </div>
  );
}
