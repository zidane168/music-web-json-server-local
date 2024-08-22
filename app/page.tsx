import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import Events from "@/components/events/Events";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Player from "@/components/Player";
 
export default function Home() {
  return (
    <main>   

      <Hero/>
      <Player />
      <Events /> 
     
      <div className="h-[4000px]">  </div>
    </main> 
  )
}
