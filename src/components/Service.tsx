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
      className={`bg-${bgColor} shadow flex items-center justify-between h-64 border border-black rounded-3xl p-5`}
    >
      <div className="flex flex-col gap-20">
        <h3 className={`text-3xl font-semibold w-56 `}>
          <span className={`bg-${highlightColor}`}>{title}</span>
        </h3>
        <div className="flex gap-2 cursor-pointer">
          <Image src="/arrow.svg" alt="Arrow" height={20} width={20} />
          <span className={`${bgColor === "black" && "text-white"}`}>
            Learn More
          </span>
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
