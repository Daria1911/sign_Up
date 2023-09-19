/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const CheckCircle = ({ className }) => {
  return (
    <svg
      className={`check-circle ${className}`}
      fill="none"
      height="37"
      viewBox="0 0 37 37"
      width="37"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="#FFA724" height="36" rx="18" width="36" x="0.578125" y="0.257812" />
      <path
        className="path"
        clipRule="evenodd"
        d="M28.3965 12.3399C28.8733 12.7984 28.8733 13.5416 28.3965 14.0001L17.0017 24.9566C16.5249 25.4151 15.7519 25.4151 15.2751 24.9566L8.76383 18.6957C8.28706 18.2373 8.28706 17.494 8.76383 17.0356C9.24061 16.5771 10.0136 16.5771 10.4904 17.0356L16.1384 22.4664L26.6699 12.3399C27.1467 11.8815 27.9197 11.8815 28.3965 12.3399Z"
        fill="#222222"
        fillRule="evenodd"
      />
    </svg>
  );
};
