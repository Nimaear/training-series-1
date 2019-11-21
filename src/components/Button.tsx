import React from "react";

interface ButtonProps {
  content: string;
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, content }) => {
  console.log("Button is rerendering");

  return <button onClick={onClick}>{content}</button>;
};

// Make sure not to rerender if props don't change
export default React.memo(Button);
