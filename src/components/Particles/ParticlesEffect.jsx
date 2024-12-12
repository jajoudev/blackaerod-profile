import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesEffect() {
  return (
    <div>
        <Particles options={{
            background: {
                color: "red",
            },
            fps_limit: 60,
            
        }}/>
    </div>
  )
}

export default ParticlesEffect;
