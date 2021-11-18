import type { NextPage } from "next";

const foo = "foo" as const;
let bar = foo;

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
