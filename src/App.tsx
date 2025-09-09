import { Heading } from "./components/Heading";

import "./styles/theme.css"
import "./styles/global.css"

export function App() {
  
  return (
    <>
      <Heading attr={123} attr2='String'>Olá Mundo 1</Heading>
      <Heading>Olá Mundo 2</Heading>
      <Heading>Olá Mundo 3</Heading>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ullam nobis distinctio delectus labore. Delectus culpa omnis accusantium veniam aliquid nemo molestias voluptas, nulla necessitatibus a odit dolorem vitae neque.</p>
    </>
  );
}
