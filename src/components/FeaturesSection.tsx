import { Heart, Sparkles, Package } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Heart,
      title: "100% Handmade",
      description: "Every item is carefully crafted by hand with premium materials",
      delay: "0s",
    },
    {
      icon: Sparkles,
      title: "Fully Customizable",
      description: "Personalize your gifts to make them truly unique and special",
      delay: "0.1s",
    },
    {
      icon: Package,
      title: "Premium Quality",
      description: "We ensure the highest quality in every piece we create",
      delay: "0.2s",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 slide-up"
                style={{ animationDelay: feature.delay }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
