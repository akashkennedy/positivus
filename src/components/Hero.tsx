import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-between lg:items-center my-3 lg:my-8">
      <div className="flex flex-col gap-3 md:gap-6 lg:gap-10 md:w-96 lg:w-[40%]">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Navigating the digital landscape for success
        </h1>
        <Image
          src="/heroImg.png"
          alt="Hero Image"
          height={500}
          width={500}
          className="block lg:hidden md:hidden"
        />
        <p className="text-gray-800 lg:w-96">
          Our marketing agency helps businesses grow and succeed online through
          a range of services including SEO, PPC, social media marketing and
          content Creation
        </p>
        <Button type="filled" className="w-full lg:w-fit">
          Book a consultation
        </Button>
      </div>
      <div>
        <Image
          src="/heroImg.png"
          alt="Hero Image"
          height={500}
          width={500}
          className="hidden lg:block md:block"
        />
      </div>
    </section>
  );
}
