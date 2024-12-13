import Image from "next/image";

interface ServiceProps {
  image: string;
  title: string;
  bgColor: string;
  highlightColor: string;
}

export default function Service({
  image,
  title,
  bgColor,
  highlightColor,
}: ServiceProps) {
  return (
    <div
      className={`bg-${bgColor} flex items-center justify-between h-60 border border-black rounded-xl p-5`}
    >
      <div className="flex flex-col justify-between">
        <h3 className={`text-3xl font-semibold bg-${highlightColor} w-56`}>
          {title}
        </h3>
        <div className="flex gap-2">
          <Image src="/arrow.svg" alt="Arrow" height={20} width={20} />
          <span>Learn More</span>
        </div>
      </div>
      <div>
        <Image
          src={image}
          alt={title}
          height={100}
          width={100}
          className="size-fit"
        />
      </div>
    </div>
  );
}
