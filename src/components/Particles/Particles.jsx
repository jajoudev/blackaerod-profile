import Particles from "@tsparticles/react";
Loa

function Particles() {
    async function loadParticles(main) {
        await loadFull(main)
    }

    return (
        <Particles id="tsparticles" init={loadParticles} />
    )
}

export default Particles