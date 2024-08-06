import { forwardRef } from "react";

function Root(props, ref) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.87 18.3101H8.87C6.11 18.3101 3.87 16.0701 3.87 13.3101C3.87 10.5501 6.11 8.31006 8.87 8.31006H19.87"
        stroke="#12a9b2"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.57 10.8099L20.13 8.24994L17.57 5.68994"
        stroke="#12a9b2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
const Arrow = forwardRef(Root);
export default Arrow;
