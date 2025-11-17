import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, text, rating }: TestimonialCardProps) => {
  return (
    <Card className="border-border hover:shadow-card transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-primary fill-primary" />
          ))}
        </div>
        <p className="text-muted-foreground mb-4 italic">"{text}"</p>
        <p className="font-display font-semibold">— {name}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
