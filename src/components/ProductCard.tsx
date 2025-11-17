import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: any;
  title: string;
  category: string;
  price?: string;
}

const ProductCard = ({ image, title, category, price }: ProductCardProps) => {
  const imageSrc = typeof image === "string" ? image : (image?.src || image);
  
  return (
    <Card className="group overflow-hidden border-border hover:shadow-soft transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground mb-1">{category}</p>
        <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
        {price && <p className="text-primary font-medium">{price}</p>}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
