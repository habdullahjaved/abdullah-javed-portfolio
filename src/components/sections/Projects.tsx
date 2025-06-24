import ProjectCard from "../cards/ProjectCard";

export default function Projects() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-3">
        <ProjectCard
          title="Luxury Bus Booking"
          description="Responsive, SEO-focused transport booking app built with Next.js."
          image="/images/luxury-art.png"
          logo="/images/logos/luxury-logo.png" // optional
          url="https://luxuryarttransport.com"
        />
        <ProjectCard
          title="Afaq Tours"
          description="Responsive, SEO-focused tour booking app built with Next.js."
          image="/images/afaq-tours.png"
          logo="/images/logos/luxury-logo.png" // optional
          url="https://toursafaq.com"
        />{" "}
        <ProjectCard
          title="Afaq Tours"
          description="Responsive, SEO-focused tour booking app built with Next.js."
          image="/images/afaq-tours.png"
          logo="/images/logos/luxury-logo.png" // optional
          url="https://toursafaq.com"
        />{" "}
        <ProjectCard
          title="Luxury Bus Booking"
          description="Responsive, SEO-focused transport booking app built with Next.js."
          image="/images/luxury-art.png"
          logo="/images/logos/luxury-logo.png" // optional
          url="https://luxuryarttransport.com"
        />{" "}
        <ProjectCard
          title="Luxury Bus Booking"
          description="Responsive, SEO-focused transport booking app built with Next.js."
          image="/images/luxury-art.png"
          logo="/images/logos/luxury-logo.png" // optional
          url="https://luxuryarttransport.com"
        />{" "}
        <ProjectCard
          title="Luxury Bus Booking"
          description="Responsive, SEO-focused transport booking app built with Next.js."
          image="/images/luxury-art.png"
          logo="/images/logos/luxury-logo.png" // optional
          url="https://luxuryarttransport.com"
        />
        {/* Add more ProjectCard components here */}
      </div>
    </section>
  );
}
