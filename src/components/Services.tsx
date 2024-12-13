import Service from "./Service";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Search Engine Optimization",
      image: "/illustration-1.svg",
      bgColor: "creamWhite",
      highlightColor: "primary",
    },
    {
      id: 2,
      title: "Pay-per-click advertising",
      image: "/illustration-2.svg",
      bgColor: "primary",
      highlightColor: "creamWhite",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      image: "/illustration-3.svg",
      bgColor: "secondary",
      highlightColor: "creamWhite",
    },
    {
      id: 4,
      title: "Email Marketing",
      image: "/illustration-4.svg",
      bgColor: "creamWhite",
      highlightColor: "primary",
    },

    {
      id: 5,
      title: "Content Creation",
      image: "/illustration-5.svg",
      bgColor: "primary",
      highlightColor: "creamWhite",
    },

    {
      id: 6,
      title: "Analytics and Tracking",
      image: "/illustration-6.svg",
      bgColor: "secondary",
      highlightColor: "primary",
    },
  ];
  return (
    <section className="grid grid-cols-2 gap-10">
      {services.map((service) => (
        <Service
          title={service.title}
          image={service.image}
          key={service.id}
          bgColor={service.bgColor}
          highlightColor={service.highlightColor}
        />
      ))}
    </section>
  );
}
