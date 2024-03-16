import { SecondBanner } from "app/components/home/SecondBanner";
import { MainBanner } from "app/components/home/MainBanner";
import { MainProducts } from "app/components/home/MainProducts";
import { ServicesSection } from "app/components/home/ServicesSection";
import LogoSection from "app/components/home/LogoSection/LogoSection";

export default function Home() {
  return (
    <main 
    // className="flex min-h-screen flex-col items-center justify-between p-24"
    >


      <MainProducts />
{/* <LogoSection /> */}
      <MainBanner />
      <ServicesSection />
      <SecondBanner />
    </main>
  );
}
