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
      <circle
        cx="11.7664"
        cy="11.7666"
        r="8.98856"
        stroke="#076F74"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.0181 18.4852L21.5421 22.0001"
        stroke="#076F74"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
const EventSearch = forwardRef(Root);
export default EventSearch;
