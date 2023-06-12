import Image from "next/image";

type Twork = {
  heading: string;
  content: string[];
  logos: string[];
};

const Work = (props: Twork) => {
  const { heading, content, logos } = props;

  return (
    <div>
      <h1>{heading}</h1>
      <div>
        {content.map((c, idx) => (
          <div key={idx}>{c}</div>
        ))}
      </div>
      <div>
        {logos.map((l, _) => {
          return (
            <Image
              src={`/library/${l}.svg`}
              width={64}
              height={64}
              alt={l}
              key={l}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Work;
