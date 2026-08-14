import "./Services.css";

function Services() {
  const services = [
    {
      title: "Fast Delivery",
      description: "We deliver laptops quickly and safely."
    },
    {
      title: "Tested Laptops",
      description: "Every laptop is fully tested before sale."
    },
    {
      title: "Repair Services",
      description: "Professional laptop repair and upgrades."
    },
    {
      title: "Customer Support",
      description: "We're here to help before and after every purchase."
    }
  ];

  return (
    <section className="services">
      <h2>Why Choose BMArvel Laptop Hub?</h2>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;