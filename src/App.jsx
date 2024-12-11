// Librairies
import { TwitchIcon, YoutubeIcon, TiktokIcon } from "hugeicons-react";

// Components
import Icons from "./components/SocialsIcons/Icons";
import Typewriter from "./components/TypewriterEffect/Typewriter";

// Assets files
import BlackerodPic from "./assets/images/blackaerod.png";
import BadLandMusic from "./assets/audios/bad-land.mp3";

function App() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center flex-col text-white">
        <audio loop autoPlay src={BadLandMusic}></audio>
          <img
            src={BlackerodPic}
            alt="Image of an picture blackaerod"
            className="rounded-full w-1/12 mr-auto ml-auto hover:animate-spin"
          />
          <Typewriter />
          <span className="text-white font-bold font-comic text-xl">
            Il/Lui
          </span>
        <div className="flex flex-row gap-1">
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
      </main>
    </>
  );
}

export default App;
