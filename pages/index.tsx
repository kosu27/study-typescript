import type { NextPage } from "next";

const foo = (): never => {
  throw new Error("foo");
};

const bar = (bar: "a" | "b") => {
  switch (bar) {
    case "a":
      return;
    case "b":
      bar;
      return;

    default:
      bar;
      break;
  }
};

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
