import CaseStudy from "./CaseStudy";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      desc: "For a local restaurent we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales",
    },
    {
      id: 2,
      desc: "For a B2B software company, we developed an SEO strategy that resulted in first page ranking for key words and a 200% increase in organic traffic",
    },
    {
      id: 3,
      desc: "For a local restaurent we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in online sales",
    },
  ];
  return (
    <section>
      <div className="flex gap-5 my-10 items-center">
        <h2 className="text-2xl font-semibold bg-primary">Case Studies</h2>
        <p className="w-2/4">
          Explore Real Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="p-10 flex bg-black text-white text-md rounded-3xl gap-10">
        {caseStudies.map((caseStudy) => (
          <CaseStudy desc={caseStudy.desc} key={caseStudy.id} />
        ))}
      </div>
    </section>
  );
}
