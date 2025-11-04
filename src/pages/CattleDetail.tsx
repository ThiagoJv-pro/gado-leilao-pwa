import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, TrendingUp, Heart, Share2, Calendar, Weight, Beef } from "lucide-react";
import { mockCattle } from "@/data/mockData";
import { useState } from "react";
import { toast } from "sonner";

const CattleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [bidAmount, setBidAmount] = useState("");

  const cattle = mockCattle.find((c) => c.id === Number(id));

  if (!cattle) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Animal não encontrado</h2>
          <Button onClick={() => navigate("/")}>Voltar para o início</Button>
        </div>
      </div>
    );
  }

  const handleBid = () => {
    if (!bidAmount || Number(bidAmount) <= Number(cattle.currentBid.replace(/\D/g, ""))) {
      toast.error("O lance deve ser maior que o valor atual");
      return;
    }
    toast.success("Lance enviado com sucesso!");
    setBidAmount("");
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copiado para a área de transferência!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={cattle.image}
                alt={cattle.name}
                className="h-full w-full object-cover"
              />
              <Badge
                className="absolute top-4 right-4"
                variant={cattle.status === "active" ? "default" : "secondary"}
              >
                {cattle.status === "active" ? "Ativo" : cattle.status === "upcoming" ? "Em breve" : "Encerrado"}
              </Badge>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{cattle.name}</h1>
              <p className="text-lg text-muted-foreground">{cattle.breed}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Weight className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Peso</span>
                </div>
                <p className="text-xl font-bold text-foreground">{cattle.weight}</p>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Idade</span>
                </div>
                <p className="text-xl font-bold text-foreground">{cattle.age}</p>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-card border-2 border-accent/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Lance Atual</span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{cattle.timeLeft}</span>
                </div>
              </div>
              <p className="text-4xl font-bold text-accent mb-6">{cattle.currentBid}</p>

              {cattle.status === "active" && (
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Digite seu lance"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground"
                    />
                    <Button onClick={handleBid} className="gap-2 bg-accent hover:bg-accent/90 text-white">
                      <TrendingUp className="h-4 w-4" />
                      Dar Lance
                    </Button>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <Heart
                        className={`h-4 w-4 mr-2 ${isFavorite ? "fill-accent text-accent" : ""}`}
                      />
                      {isFavorite ? "Favoritado" : "Favoritar"}
                    </Button>
                    <Button variant="outline" onClick={handleShare}>
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              )}
            </Card>

            {/* Additional Info */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Beef className="h-5 w-5 text-accent" />
                Informações Adicionais
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Procedência: Fazenda Santa Maria - MS</li>
                <li>• Certificação: PO (Puro de Origem)</li>
                <li>• Vacinação: Completa e em dia</li>
                <li>• Genética: Superior, linhagem premiada</li>
                <li>• Condição: Excelente estado de saúde</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* History Section */}
        <Card className="p-6">
          <h3 className="font-semibold text-foreground mb-4">Histórico de Lances</h3>
          <div className="space-y-3">
            {[
              { user: "João Silva", bid: "R$ 8.500", time: "há 5 minutos" },
              { user: "Maria Santos", bid: "R$ 8.200", time: "há 15 minutos" },
              { user: "Pedro Costa", bid: "R$ 8.000", time: "há 25 minutos" },
            ].map((lance, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-border last:border-0"
              >
                <div>
                  <p className="font-medium text-foreground">{lance.user}</p>
                  <p className="text-sm text-muted-foreground">{lance.time}</p>
                </div>
                <p className="font-bold text-accent">{lance.bid}</p>
              </div>
            ))}
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default CattleDetail;
