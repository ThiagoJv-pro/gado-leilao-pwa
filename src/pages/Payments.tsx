import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Download, CheckCircle, Clock, AlertCircle } from "lucide-react";

const Payments = () => {
  const pendingPayments = [
    {
      id: 1,
      lot: "Nelore Premium",
      amount: "R$ 8.500,00",
      date: "15/11/2024",
      status: "pending",
    },
    {
      id: 2,
      lot: "Angus Superior",
      amount: "R$ 12.300,00",
      date: "14/11/2024",
      status: "pending",
    },
  ];

  const paidPayments = [
    {
      id: 3,
      lot: "Brahman Elite",
      amount: "R$ 7.800,00",
      date: "10/11/2024",
      status: "paid",
    },
    {
      id: 4,
      lot: "Nelore Campeão",
      amount: "R$ 9.200,00",
      date: "05/11/2024",
      status: "paid",
    },
  ];

  const getStatusBadge = (status: string) => {
    if (status === "pending") {
      return (
        <Badge variant="secondary" className="gap-1">
          <Clock className="h-3 w-3" />
          Pendente
        </Badge>
      );
    }
    if (status === "paid") {
      return (
        <Badge className="gap-1 bg-green-500">
          <CheckCircle className="h-3 w-3" />
          Pago
        </Badge>
      );
    }
    return (
      <Badge variant="destructive" className="gap-1">
        <AlertCircle className="h-3 w-3" />
        Vencido
      </Badge>
    );
  };

  return (
    <Layout>
      <div className="container px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Central de Pagamentos</h1>
          <p className="text-muted-foreground">Gerencie seus pagamentos e histórico de transações</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">Pagamentos Pendentes</span>
            </div>
            <p className="text-3xl font-bold text-foreground">R$ 20.800,00</p>
            <p className="text-sm text-muted-foreground mt-1">2 transações</p>
          </Card>

          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm text-muted-foreground">Total Pago</span>
            </div>
            <p className="text-3xl font-bold text-foreground">R$ 17.000,00</p>
            <p className="text-sm text-muted-foreground mt-1">2 transações</p>
          </Card>

          <Card className="p-6 bg-gradient-card">
            <div className="flex items-center gap-3 mb-2">
              <CreditCard className="h-5 w-5 text-accent" />
              <span className="text-sm text-muted-foreground">Métodos de Pagamento</span>
            </div>
            <p className="text-3xl font-bold text-foreground">2</p>
            <p className="text-sm text-muted-foreground mt-1">cartões cadastrados</p>
          </Card>
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="pending">Pendentes ({pendingPayments.length})</TabsTrigger>
            <TabsTrigger value="history">Histórico</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingPayments.map((payment) => (
              <Card key={payment.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Leilão Arrematado - {payment.lot}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Vencimento: {payment.date}
                    </p>
                  </div>
                  {getStatusBadge(payment.status)}
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Valor Total</p>
                    <p className="text-2xl font-bold text-accent">{payment.amount}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Boleto
                    </Button>
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-white">
                      Pagar Agora
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {paidPayments.map((payment) => (
              <Card key={payment.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Leilão Arrematado - {payment.lot}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Pago em: {payment.date}
                    </p>
                  </div>
                  {getStatusBadge(payment.status)}
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Valor Total</p>
                    <p className="text-2xl font-bold text-foreground">{payment.amount}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Comprovante
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Payment Methods */}
        <Card className="p-6 mt-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">Métodos de Pagamento</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-16 rounded bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">•••• 4532</p>
                  <p className="text-sm text-muted-foreground">Visa - Expira 12/2025</p>
                </div>
              </div>
              <Badge>Principal</Badge>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-16 rounded bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-foreground">•••• 8765</p>
                  <p className="text-sm text-muted-foreground">Mastercard - Expira 08/2026</p>
                </div>
              </div>
            </div>
          </div>

          <Button variant="outline" className="mt-4">
            Adicionar Novo Cartão
          </Button>
        </Card>
      </div>
    </Layout>
  );
};

export default Payments;
