import { SecondBanner } from "app/components/home/SecondBanner";
import { MainBanner } from "app/components/home/MainBanner";
import { MainProducts } from "app/components/home/MainProducts";
import { ServicesSection } from "app/components/home/ServicesSection";

export default function Home() {
  return (
    <main>
      <MainProducts />
      <MainBanner />
      <ServicesSection />
      <SecondBanner />
    </main>
  );
}
