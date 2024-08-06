import { forwardRef } from "react";

function Root(props, ref) {
  return (
    <svg
      width="51"
      height="63"
      viewBox="0 0 51 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="25.5" cy="31.5" rx="25.5" ry="31.5" fill="white" />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M42.5 13.125L36.3385 31.5H29.5172L35.6255 13.125H42.5Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M14.8318 22.1418L18.5989 33.9543L22.3873 22.1418H28.4531L19.0884 49.875H12.9801L15.5022 42.525L8.5 22.1418H14.8318Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M27.2719 38.0625C27.2603 39.2851 27.649 40.4618 28.35 41.3264C29.051 42.191 30.0051 42.6704 30.9964 42.6562C32.0226 42.6704 33.0102 42.1748 33.7368 41.281C34.4634 40.3873 34.868 39.1706 34.8593 37.905C34.8767 36.679 34.4903 35.4967 33.7883 34.6284C33.0863 33.7602 32.1288 33.2801 31.1348 33.2981C30.1094 33.2946 29.1252 33.7954 28.4001 34.6897C27.6751 35.5839 27.269 36.7978 27.2719 38.0625Z"
        fill="black"
      />
    </svg>
  );
}
const PayrollIcon = forwardRef(Root);
export default PayrollIcon;
