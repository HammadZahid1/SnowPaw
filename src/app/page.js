import Stage from "@/components/Scene/Stage";
import Particles from "@/components/Effects/Particles";
import Cat from "@/components/Cat/CatObject";

export default function Home() {
  return (
    <main>
      <Stage>
        <Particles />
        <Cat />
      </Stage>
    </main>
  );
}
