import type { NextPage } from "next";

const boo: true = true;
const str: "bar" = "bar";
const num: 12 = 12;

function double(x: 12): number {
  return x * 2;
}

double(12);

const Home: NextPage = () => {
  return (
    <div>
      <Component foo />
    </div>
  );
};

const Component = (props: { foo?: true }) => {
  if (props.foo) {
    return <div>a</div>;
  }

  return <div>test</div>;
};

export default Home;
