import TestimonialCard from "@/components/TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ayesha Rahman",
      text: "The resin necklace I ordered was absolutely stunning! The attention to detail is incredible.",
      rating: 5,
    },
    {
      name: "Fahim Ahmed",
      text: "Perfect anniversary gift! The custom photo frame brought tears to my wife's eyes.",
      rating: 5,
    },
    {
      name: "Nusrat Jahan",
      text: "Exceptional quality and beautiful packaging. Will definitely order again!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg">
            Read the experiences of our happy customers
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
