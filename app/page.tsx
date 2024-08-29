 
import Events from "@/components/events/Events";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Player from "@/components/Player";
 
export default function Home() {
  return (
    <main className="w-full mx-auto">   

      <Header />
      <Hero/>
      <Player />
      <Events />
     
      <div className="h-[4000px]">  </div>
    </main> 
  )
}
