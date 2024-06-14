import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
  "Beton Parlatma"
  , "Beton Silim "
  , "Spor Salonu Zeminleri"
  , "Epoksi Zemin Kaplama"
  , "Dekoratif Zemin Betonu"
  , "Baskı Betonu"
  , "Kauçuk Zemin Kaplama"
  , "Flake Zemin Kaplama"
  , "Mikro Beton"
  , "Taş Halı Modelleri"
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
