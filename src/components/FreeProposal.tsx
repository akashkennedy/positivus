import Image from "next/image";
import Button from "./ui/Button";

export default function FreeProposal() {
  return (
    <section className="flex p-8 md:p-14 justify-between rounded-3xl bg-gray-200 my-10">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl font-bold">Let&apos;s make things happen</h2>
        <p className="md:w-8/12">
          Contact us today to learn about how our digital marketing services can
          help your services can help your business grow and succeed online
        </p>
        <Button type="filled">Get Your Free Proposal</Button>
      </div>
      <Image
        src="/proposal.svg"
        alt="Proposal Image"
        height={300}
        width={300}
        className="hidden md:block"
      />
    </section>
  );
}
