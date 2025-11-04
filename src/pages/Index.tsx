import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CattleCard } from "@/components/CattleCard";
import { mockCattle } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const activeCattle = mockCattle.filter(c => c.status === "active");
  const upcomingCattle = mockCattle.filter(c => c.status === "upcoming");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <main className="container px-4 py-8">
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="active">Ativos ({activeCattle.length})</TabsTrigger>
            <TabsTrigger value="upcoming">Em Breve ({upcomingCattle.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCattle.map((cattle) => (
                <CattleCard key={cattle.id} {...cattle} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingCattle.map((cattle) => (
                <CattleCard key={cattle.id} {...cattle} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
