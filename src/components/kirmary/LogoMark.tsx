import logo from "@/assets/logo.png";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img 
      src={logo} 
      alt="Kirmary Logo" 
      style={{ width: "340px", height: "340px", objectFit: "contain" }} // غير الأرقام دي حسب الحجم اللي يناسب معاك
      className={className} 
      aria-hidden="true" 
    />
  );
}