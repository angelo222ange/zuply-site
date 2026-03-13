import { Header } from "@/components/ui/header";
import { ArcGalleryHero } from "@/components/ui/arc-gallery-hero";
import { LazyComponents } from "@/components/ui/lazy-components";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <ArcGalleryHero />

      <LazyComponents />
    </main>
  );
}
