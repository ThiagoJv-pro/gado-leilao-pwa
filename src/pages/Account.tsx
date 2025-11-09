import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Phone, MapPin, Shield, Bell } from "lucide-react";
import { toast } from "sonner";

const Account = () => {
  const handleSave = () => {
    toast.success("Informações atualizadas com sucesso!");
  };

  return (
    <Layout>
      <div className="container px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Minha Conta</h1>
          <p className="text-muted-foreground">Gerencie suas informações pessoais e preferências</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="security">Segurança</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-20 w-20 rounded-full bg-gradient-primary flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">João da Silva</h3>
                  <p className="text-muted-foreground">Membro desde Janeiro 2024</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input id="firstName" defaultValue="João" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input id="lastName" defaultValue="da Silva" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email
                  </Label>
                  <Input id="email" type="email" defaultValue="joao.silva@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Telefone
                  </Label>
                  <Input id="phone" defaultValue="(11) 98765-4321" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Endereço
                  </Label>
                  <Input id="address" defaultValue="São Paulo, SP" />
                </div>

                <Button onClick={handleSave} className="bg-accent hover:bg-accent/90 text-white">
                  Salvar Alterações
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold text-foreground">Segurança</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Senha Atual</Label>
                  <Input id="currentPassword" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">Nova Senha</Label>
                  <Input id="newPassword" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                  <Input id="confirmPassword" type="password" />
                </div>

                <Button onClick={handleSave} className="bg-accent hover:bg-accent/90 text-white">
                  Atualizar Senha
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-4">Autenticação de Dois Fatores</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Adicione uma camada extra de segurança à sua conta
              </p>
              <Button variant="outline">Configurar 2FA</Button>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="h-6 w-6 text-accent" />
                <h3 className="text-xl font-semibold text-foreground">Notificações</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <p className="font-medium text-foreground">Novos leilões</p>
                    <p className="text-sm text-muted-foreground">
                      Receba notificações sobre novos leilões
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5" />
                </div>

                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <p className="font-medium text-foreground">Lances superados</p>
                    <p className="text-sm text-muted-foreground">
                      Alerta quando seu lance for superado
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5" />
                </div>

                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <p className="font-medium text-foreground">Leilões favoritos</p>
                    <p className="text-sm text-muted-foreground">
                      Notificações sobre leilões que você favoritou
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="h-5 w-5" />
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-foreground">Newsletter</p>
                    <p className="text-sm text-muted-foreground">
                      Receba dicas e novidades por email
                    </p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" />
                </div>

                <Button onClick={handleSave} className="bg-accent hover:bg-accent/90 text-white">
                  Salvar Preferências
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Account;
