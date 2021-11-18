import type { NextPage } from "next";

const foo: unknown = "foo";

if (typeof foo === "string") {
  foo.substr(2);
}

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
