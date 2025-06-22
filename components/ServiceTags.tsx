"use client";

const ServiceTags = () => {
  const services = [
    "Psychology",
    "Mental Health", 
    "Therapy",
    "Self-Improvement",
    "Mindfulness"
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-4 justify-center">
          {services.map((service, index) => (
            <div 
              key={service}
              className="px-6 py-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-full border border-green-200 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <span className="text-sm font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTags;
