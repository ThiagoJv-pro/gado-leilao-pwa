import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CattleCard } from "@/components/CattleCard";
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { mockCattle } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useMemo } from "react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const filteredCattle = useMemo(() => {
    return mockCattle.filter((cattle) => {
      const matchesSearch =
        cattle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cattle.breed.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBreed =
        selectedBreed === "all" ||
        cattle.breed.toLowerCase().includes(selectedBreed.toLowerCase());

      const price = Number(cattle.currentBid.replace(/\D/g, ""));
      let matchesPrice = true;
      if (priceRange === "0-8000") matchesPrice = price <= 8000;
      else if (priceRange === "8000-12000") matchesPrice = price > 8000 && price <= 12000;
      else if (priceRange === "12000+") matchesPrice = price > 12000;

      return matchesSearch && matchesBreed && matchesPrice;
    });
  }, [searchTerm, selectedBreed, priceRange]);

  const activeCattle = filteredCattle.filter((c) => c.status === "active");
  const upcomingCattle = filteredCattle.filter((c) => c.status === "upcoming");

  return (
    <Layout>
      <Hero />

      <div className="container px-4 py-8">
        <div className="space-y-6 mb-8">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <FilterBar
            breed={selectedBreed}
            priceRange={priceRange}
            onBreedChange={setSelectedBreed}
            onPriceChange={setPriceRange}
          />
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="active">Ativos ({activeCattle.length})</TabsTrigger>
            <TabsTrigger value="upcoming">Em Breve ({upcomingCattle.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            {activeCattle.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Nenhum leilão ativo encontrado com esses filtros.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCattle.map((cattle) => (
                  <CattleCard key={cattle.id} {...cattle} />
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            {upcomingCattle.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Nenhum leilão futuro encontrado com esses filtros.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingCattle.map((cattle) => (
                  <CattleCard key={cattle.id} {...cattle} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Index;
