import type { NextPage } from "next";

const foo: [string, number] = ["foo", 0];

foo[1].toFixed(2);

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
