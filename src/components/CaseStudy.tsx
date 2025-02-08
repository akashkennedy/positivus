interface CaseStudyProps {
  desc: string;
}

export default function CaseStudy({ desc }: CaseStudyProps) {
  return (
    <div className="flex flex-col gap-3 pr-8 w-1/2 type even:border-r odd:border-r border-gray-500 last-of-type:border-none">
      <p>{desc}</p>
      <a href="#" className="text-primary">
        Learn more &gt;
      </a>
    </div>
  );
}
