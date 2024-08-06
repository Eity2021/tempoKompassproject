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
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="9"
        fill="white"
        stroke="#2AC8D1"
        stroke-width="2"
      />
      <rect
        x="7.5"
        y="7.5"
        width="9"
        height="9"
        rx="4.5"
        fill="#2AC8D1"
        stroke="#2AC8D1"
      />
    </svg>
  );
}
const RoundShape = forwardRef(Root);
export default RoundShape;
