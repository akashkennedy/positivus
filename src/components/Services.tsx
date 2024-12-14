import Service from "./Service";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Search Engine Optimization",
      image: "/illustration-1.svg",
      bgColor: "white",
      highlightColor: "primary",
    },
    {
      id: 2,
      title: "Pay-per-click advertising",
      image: "/illustration-2.svg",
      bgColor: "primary",
      highlightColor: "white",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      image: "/illustration-3.svg",
      bgColor: "black",
      highlightColor: "white",
    },
    {
      id: 4,
      title: "Email Marketing",
      image: "/illustration-4.svg",
      bgColor: "cream",
      highlightColor: "primary",
    },

    {
      id: 5,
      title: "Content Creation",
      image: "/illustration-5.svg",
      bgColor: "primary",
      highlightColor: "white",
    },

    {
      id: 6,
      title: "Analytics and Tracking",
      image: "/illustration-6.svg",
      bgColor: "black",
      highlightColor: "primary",
    },
  ];
  return (
    <>
      <div className="flex gap-5 my-10 items-center">
        <h2 className="text-2xl font-semibold bg-primary">Services</h2>
        <p className="w-2/4">
          At our digital Marketing agency, we offer a range of services to help
          businesses grow and suceed online. These services include:
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
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
    </>
  );
}
