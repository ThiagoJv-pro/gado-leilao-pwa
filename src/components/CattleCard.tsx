import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp } from "lucide-react";

interface CattleCardProps {
  id: number;
  image: string;
  name: string;
  breed: string;
  weight: string;
  age: string;
  currentBid: string;
  timeLeft: string;
  status: "active" | "upcoming" | "closed";
}

export const CattleCard = ({
  image,
  name,
  breed,
  weight,
  age,
  currentBid,
  timeLeft,
  status,
}: CattleCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 bg-gradient-card border-border">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge 
          className="absolute top-3 right-3"
          variant={status === "active" ? "default" : "secondary"}
        >
          {status === "active" ? "Ativo" : status === "upcoming" ? "Em breve" : "Encerrado"}
        </Badge>
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-lg text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{breed}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-muted-foreground">Peso:</span>
            <p className="font-semibold text-foreground">{weight}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Idade:</span>
            <p className="font-semibold text-foreground">{age}</p>
          </div>
        </div>
        
        <div className="pt-3 border-t border-border space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Lance Atual</span>
            <span className="text-xl font-bold text-accent">{currentBid}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{timeLeft}</span>
          </div>
          
          {status === "active" && (
            <Button className="w-full gap-2 bg-accent hover:bg-accent/90 text-white">
              <TrendingUp className="h-4 w-4" />
              Dar Lance
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
