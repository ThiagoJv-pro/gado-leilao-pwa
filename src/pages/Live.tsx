import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Radio, Users, TrendingUp, Clock } from "lucide-react";
import { mockCattle } from "@/data/mockData";
import { useState } from "react";
import { toast } from "sonner";

const Live = () => {
  const [bidAmount, setBidAmount] = useState("");
  const activeCattle = mockCattle.filter((c) => c.status === "active");
  const currentLot = activeCattle[0];

  const handleBid = () => {
    if (!bidAmount || Number(bidAmount) <= Number(currentLot.currentBid.replace(/\D/g, ""))) {
      toast.error("O lance deve ser maior que o valor atual");
      return;
    }
    toast.success("Lance enviado com sucesso!");
    setBidAmount("");
  };

  return (
    <Layout>
      <div className="container px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="relative">
            <Radio className="h-8 w-8 text-accent animate-pulse" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full animate-ping" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Leilões ao Vivo</h1>
            <p className="text-muted-foreground">Acompanhe e participe em tempo real</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Stream Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <Radio className="h-16 w-16 text-accent mx-auto animate-pulse" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Transmissão ao Vivo</h3>
                    <p className="text-muted-foreground">
                      Leilão em andamento - Lote {currentLot.id}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>142 participantes online</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Current Lot Details */}
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="mb-2">Lote Atual</Badge>
                  <h3 className="text-2xl font-bold text-foreground">{currentLot.name}</h3>
                  <p className="text-muted-foreground">{currentLot.breed}</p>
                </div>
                <img
                  src={currentLot.image}
                  alt={currentLot.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Peso</p>
                  <p className="text-lg font-semibold text-foreground">{currentLot.weight}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Idade</p>
                  <p className="text-lg font-semibold text-foreground">{currentLot.age}</p>
                </div>
              </div>

              <div className="p-4 bg-accent/10 rounded-lg border-2 border-accent/20 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Lance Atual</span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{currentLot.timeLeft}</span>
                  </div>
                </div>
                <p className="text-3xl font-bold text-accent">{currentLot.currentBid}</p>
              </div>

              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Digite seu lance"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-md border border-border bg-background text-foreground"
                />
                <Button onClick={handleBid} size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-white">
                  <TrendingUp className="h-4 w-4" />
                  Dar Lance
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar - Next Lots */}
          <div className="space-y-4">
            <Card className="p-4">
              <h3 className="font-semibold text-foreground mb-4">Próximos Lotes</h3>
              <div className="space-y-3">
                {activeCattle.slice(1).map((cattle) => (
                  <div
                    key={cattle.id}
                    className="flex gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <img
                      src={cattle.image}
                      alt={cattle.name}
                      className="w-16 h-16 rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-foreground truncate">
                        {cattle.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{cattle.breed}</p>
                      <p className="text-sm font-bold text-accent mt-1">{cattle.currentBid}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold text-foreground mb-4">Meus Lances</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Lote #1</span>
                  <span className="font-semibold text-foreground">R$ 8.500</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Lote #3</span>
                  <span className="font-semibold text-foreground">R$ 7.800</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Live;
