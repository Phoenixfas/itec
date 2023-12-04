import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { particleConfig } from "../data/particleConfig";

export default function ParticlesBackground({ color, amount, id }) {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  return (
    <Particles
      id={"tsparticles" + id}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleConfig}
      style={{position: "absolute", top: 0, left: 0, zIndex: 1, width: "100%", height: "100%"}}
    />
  );
}
