import { forwardRef } from "react";

function Root(props, ref) {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M17.53 7.77C17.46 7.76 17.39 7.76 17.32 7.77C15.77 7.72 14.54 6.45 14.54 4.89C14.54 3.3 15.83 2 17.43 2C19.02 2 20.32 3.29 20.32 4.89C20.31 6.45 19.08 7.72 17.53 7.77Z"
        fill="#12a9b2"
      />
      <path
        opacity="0.4"
        d="M20.79 14.6999C19.67 15.4499 18.1 15.7299 16.65 15.5399C17.03 14.7199 17.23 13.8099 17.24 12.8499C17.24 11.8499 17.02 10.8999 16.6 10.0699C18.08 9.86992 19.65 10.1499 20.78 10.8999C22.36 11.9399 22.36 13.6499 20.79 14.6999Z"
        fill="#12a9b2"
      />
      <path
        opacity="0.4"
        d="M6.44 7.77C6.51 7.76 6.58 7.76 6.65 7.77C8.2 7.72 9.43 6.45 9.43 4.89C9.43 3.3 8.14 2 6.54 2C4.95 2 3.65 3.29 3.65 4.89C3.66 6.45 4.89 7.72 6.44 7.77Z"
        fill="#12a9b2"
      />
      <path
        opacity="0.4"
        d="M6.55 12.8501C6.55 13.8201 6.76 14.7401 7.14 15.5701C5.73 15.7201 4.26 15.4201 3.18 14.7101C1.6 13.6601 1.6 11.9501 3.18 10.9001C4.25 10.1801 5.76 9.8901 7.18 10.0501C6.77 10.8901 6.55 11.8401 6.55 12.8501Z"
        fill="#12a9b2"
      />
      <path
        d="M12.12 15.87C12.04 15.86 11.95 15.86 11.86 15.87C10.02 15.81 8.55 14.3 8.55 12.44C8.55 10.54 10.08 9 11.99 9C13.89 9 15.43 10.54 15.43 12.44C15.43 14.3 13.97 15.81 12.12 15.87Z"
        fill="#12a9b2"
      />
      <path
        d="M8.87 17.9399C7.36 18.9499 7.36 20.6099 8.87 21.6099C10.59 22.7599 13.41 22.7599 15.13 21.6099C16.64 20.5999 16.64 18.9399 15.13 17.9399C13.42 16.7899 10.6 16.7899 8.87 17.9399Z"
        fill="#12a9b2"
      />
    </svg>
  );
}
const User = forwardRef(Root);
export default User;
