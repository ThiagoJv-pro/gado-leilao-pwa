import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
            <CalendarIcon className="h-8 w-8 text-accent" />
            Calendário de Leilões
          </h1>
          <p className="text-muted-foreground">
            Consulte as datas dos próximos leilões e eventos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Selecione uma Data</CardTitle>
              <CardDescription>
                Escolha um dia para ver os eventos programados
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Eventos do Dia</CardTitle>
              <CardDescription>
                {date ? format(date, "PPPP", { locale: ptBR }) : "Selecione uma data"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {date ? (
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4 py-2">
                    <h3 className="font-semibold text-foreground">Leilão Nelore Premium</h3>
                    <p className="text-sm text-muted-foreground">14:00 - 18:00</p>
                    <p className="text-sm mt-1">45 lotes disponíveis</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4 py-2">
                    <h3 className="font-semibold text-foreground">Leilão Gado Angus</h3>
                    <p className="text-sm text-muted-foreground">19:00 - 22:00</p>
                    <p className="text-sm mt-1">30 lotes disponíveis</p>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  Selecione uma data no calendário para ver os eventos
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;
