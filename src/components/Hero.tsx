import heroImage from "@/assets/hero-farm.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Fazenda com gado ao entardecer" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
      
      <div className="relative container h-full flex flex-col justify-end pb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-lg">
          Leilão de Gado<br />em Tempo Real
        </h2>
        <p className="text-lg text-foreground/90 mb-6 max-w-md drop-shadow">
          Participe dos melhores leilões agropecuários do Brasil
        </p>
        <div>
          <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-white shadow-elevated">
            Ver Leilões Ativos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
