import { Menu, Gavel, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import logo from '../assets/logo.png';
export const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="sm:flex sm:sticky fixed top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-[#4A3A2B]">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className={'text-[#F5EEDD]'}/>
        </div>

          <div className="flex items-center cursor-pointer " onClick={() => navigate("/")}>
              <img src={logo} className="object-fill h-14 scale-150"/>
          </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-[#F5EEDD]" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-white text-xs">
              3
            </Badge>
          </Button>
          <Button className="hidden sm:flex" variant="ghost" size="icon" onClick={() => navigate("/account")}>
            <User className="h-5 w-5 text-[#F5EEDD]" />
          </Button>
        </div>
      </div>
    </header>
  );
};
