import { useState } from "react";
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState( false )

  return (
    <nav className="bg-slate-900 border-b border-slate-950 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-teal-500">
          J J
        </div>

        {/* Menu Button for mobile */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 bg-teal-600" />}
          </Button>
        </div>

        {/* Links */}
        <div className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#aboutMe" className="text-gray-200 hover:text-teal-500">
            Acerca de Mí
          </a>
          <a href="#experience" className="text-gray-200 hover:text-teal-500">
            Experiencia
          </a>
          <a href="#projects" className="text-gray-200 hover:text-teal-500">
            Proyectos
          </a>
          <a href="#contact" className="text-gray-200 hover:text-teal-500">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};


