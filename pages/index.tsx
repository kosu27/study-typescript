import type { NextPage } from "next";

type Foo = () => void;

const foo1: Foo = () => {
  alert("hello");
};

const foo2 = (): void => {
  alert("hello");
};

function foo(): void {
  alert("hello");
  return;
}

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
