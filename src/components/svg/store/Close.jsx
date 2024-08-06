import { forwardRef } from "react";

function Root(props, ref) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.3334 14.9566L41.0434 11.6666L28 24.71L14.9567 11.6666L11.6667 14.9566L24.71 28L11.6667 41.0433L14.9567 44.3333L28 31.29L41.0434 44.3333L44.3334 41.0433L31.29 28L44.3334 14.9566Z"
        fill="white"
      />
    </svg>
  );
}
const Close = forwardRef(Root);
export default Close;
