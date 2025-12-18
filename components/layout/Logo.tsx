import { UtensilsCrossed, Heart, PawPrint } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 via-orange-400/30 to-amber-400/30 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
        
        {/* Main logo container */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
          {/* Pet food bowl icon */}
          <div className="relative">
            <UtensilsCrossed className="w-6 h-6 text-white rotate-45" />
            <PawPrint className="w-3 h-3 text-white absolute -bottom-1 -right-1" />
          </div>
          {/* Small heart accent */}
          <div className="absolute -top-1 -right-1">
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
          </div>
        </div>
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 bg-clip-text text-transparent group-hover:from-amber-700 group-hover:via-orange-700 group-hover:to-amber-800 transition-all duration-300">
          Sanan Pets Foods
        </span>
        <span className="text-[10px] text-muted-foreground font-medium leading-none">
          Premium Pet Nutrition
        </span>
      </div>
    </Link>
  );
}


