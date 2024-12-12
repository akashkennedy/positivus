import Image from "next/image";

export default function Brands() {
  return (
    <section className="flex justify-between my-20">
      <Image
        src="/amazon.png"
        alt="Amazon"
        height={50}
        width={100}
        className="grayscale hover:grayscale-0 transition cursor-pointer"
      />
      <Image
        src="/dribble.png"
        alt="Dribble"
        height={50}
        width={100}
        className="grayscale hover:grayscale-0 transition cursor-pointer"
      />
      <Image
        src="/hubspot.png"
        alt="Hubspot"
        height={50}
        width={100}
        className="grayscale hover:grayscale-0 transition cursor-pointer"
      />
      <Image
        src="/notion.png"
        alt="Notion"
        height={50}
        width={100}
        className="grayscale hover:grayscale-0 transition cursor-pointer"
      />
      <Image
        src="/netflix.png"
        alt="Netflix"
        height={50}
        width={100}
        className="grayscale hover:grayscale-0 transition cursor-pointer"
      />
      <Image
        src="/zoom.png"
        alt="Zoom"
        height={50}
        width={100}
        className="grayscale hover:grayscale-0 transition cursor-pointer"
      />
    </section>
  );
}
