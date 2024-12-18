// Librairies
import { TwitchIcon, YoutubeIcon, TiktokIcon } from "hugeicons-react";

// Components
import Icons from "./components/SocialsIcons/Icons";
import Typewriter from "./components/TypewriterEffect/Typewriter";
import AudioPlayer from "./components/AudioPlayer/Audio";

// Assets files
import BlackerodPic from "./assets/images/blackaerod.png";

function App() {
  return (
    <>
    <AudioPlayer css="opactiy-50" />
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
              color="white"
              css="bg-red-500 rounded-full p-1 animate-pulse"
            />
            <Icons
              href="https://www.twitch.tv/blackaerod94"
              IconComponent={TwitchIcon}
              size={40}
              color="white"
              css="bg-purple-500 rounded-full p-1 animate-pulse"
            />
            <Icons
              href="https://www.tiktok.com/@blackaerod94"
              IconComponent={TiktokIcon}
              size={40}
              color="white"
              css="bg-pink-600 rounded-full p-1 animate-pulse"
            />
          </div>
        </div>

        <p className="text-white font-bold">copyright | jajoudev 2024</p>
      </main>
    </>
  );
}

export default App;