// Librairies
import { TwitchIcon, YoutubeIcon, TiktokIcon } from "hugeicons-react";

// Components
import Icons from "./components/SocialsIcons/Icons";
import Typewriter from "./components/TypewriterEffect/Typewriter";

// Assets files
import BlackerodPic from "./assets/images/blackaerod.png";
import BadLandMusic from "./assets/audios/bad-land.mp3";
import ParticlesEffect from "./components/Particles/ParticlesEffect";

function App() {
  return (
    <>
    <ParticlesEffect />

      <audio loop autoPlay src={BadLandMusic}></audio>
      <main className="min-h-screen flex items-center justify-center flex-col">
        <div className="backdrop-blur-lg w-2/4 text-center text-white rounded-md p-5">
          <img
            src={BlackerodPic}
            alt="Image of an picture blackaerod"
            className="rounded-full w-32 ml-auto mr-auto"
          />
          <Typewriter />
          <span className=" font-bold font-comic text-xl">Il/Lui</span>
          <div className="flex flex-row gap-1 justify-center items-center">
            <Icons
              href="https://www.youtube.com/channel/UC875nfp85GN3Kei0G0yT4bA"
              IconComponent={YoutubeIcon}
              size={40}
              color="red"
            />
            <Icons
              href="https://www.twitch.tv/blackaerod94"
              IconComponent={TwitchIcon}
              size={40}
              color="purple"
            />
            <Icons
              href="https://www.tiktok.com/@blackaerod94"
              IconComponent={TiktokIcon}
              size={40}
              color="#F62B52"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
