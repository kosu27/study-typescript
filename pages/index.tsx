import type { NextPage } from "next";

const boo: boolean = true;
const bar: number = 1;
const baz: string = "hello";
const qux: null = null;

const foo: undefined = undefined;
// nullは現在利用できない型→明示的に使えない状態を強く表したい時
// undefinedは初期化されていない状態の型→暗黙的な状態を表したい時
// 基本的にはnullはNG ＊jsonではundefinedは使えない→nullでないと使えない

const Home: NextPage = () => {
  return <div>test</div>;
};

export default Home;
