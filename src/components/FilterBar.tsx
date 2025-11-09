import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface FilterBarProps {
  breed: string;
  priceRange: string;
  onBreedChange: (value: string) => void;
  onPriceChange: (value: string) => void;
}

export const FilterBar = ({ breed, priceRange, onBreedChange, onPriceChange }: FilterBarProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-card rounded-lg border border-border">
      <div className="space-y-2">
        <Label htmlFor="breed" className="text-sm text-muted-foreground">Raça</Label>
        <Select value={breed} onValueChange={onBreedChange}>
          <SelectTrigger id="breed" className="bg-background">
            <SelectValue placeholder="Todas as raças" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as raças</SelectItem>
            <SelectItem value="nelore">Nelore</SelectItem>
            <SelectItem value="angus">Angus</SelectItem>
            <SelectItem value="brahman">Brahman</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="price" className="text-sm text-muted-foreground">Faixa de Preço</Label>
        <Select value={priceRange} onValueChange={onPriceChange}>
          <SelectTrigger id="price" className="bg-background">
            <SelectValue placeholder="Todos os preços" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os preços</SelectItem>
            <SelectItem value="0-8000">Até R$ 8.000</SelectItem>
            <SelectItem value="8000-12000">R$ 8.000 - R$ 12.000</SelectItem>
            <SelectItem value="12000+">Acima de R$ 12.000</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
