
import { Description } from "app/components/home/Description/Description";
import { Hero } from "app/components/home/Hero";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Hero />
      {children}
    </div>
  )
}