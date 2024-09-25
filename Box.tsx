import { CSSProperties } from "react";

type Boxprops = {
  backgroundColor: "red" | "blue" | "orange" | "green";
  height: string;
  width: string;
  text: string;
};

const Box = (props: Boxprops) => {
  const cssstyle: CSSProperties = {
    backgroundColor: props.backgroundColor,
    width: props.width,
    height: props.height,
  };
  return <div style={cssstyle}>{}props.text</div>;
};
export default Box;
