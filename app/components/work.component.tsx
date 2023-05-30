"use client";
import { useEffect } from "react";

type Twork = {
  heading: string;
  content: string[];
  logos: string[];
};

const Work = (props: Twork) => {
  const { heading, content, logos } = props;
  useEffect(() => {
    const logos2 = logos.map(async (l) => await import(`./library/${l}.svg`));
    console.log(logos2);
  }, []);

  return (
    <div>
      <h1>{heading}</h1>
      <div>
        {content.map((c, idx) => (
          <div key={idx}>{c}</div>
        ))}
      </div>
      <div>
        {logos.map((l, idx) => {
          // const logoToRender = modules[`./library/${l}.svg`];
          return <img src={`./library/${l}.svg`} alt={l} key={idx} />;
        })}
      </div>
    </div>
  );
};
export default Work;
