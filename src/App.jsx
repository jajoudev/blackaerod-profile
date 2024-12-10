import { TwitchIcon, YoutubeIcon, TiktokIcon } from "hugeicons-react";
import BlackerodPic from "./assets/images/blackaerod.png";
import Icons from "./components/SocialsIcons/Icons";
import TypewriterComponent from "typewriter-effect";
import BadLandMusic from "./assets/audios/bad-land.mp3"

function App() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center flex-col text-white">
        <figure>
          <figcaption className="hidden">Musique de Blackaerod</figcaption>
          <audio loop autoPlay src={BadLandMusic}></audio>
        </figure>
        <img
          src={BlackerodPic}
          alt="Image of an picture blackaerod"
          className="rounded-full w-1/5"
        />
        <div className="font-comic font-extrabold text-3xl">
          <TypewriterComponent
            options={{
              strings: ["Blackaerod", "@blackaerod94", "blacknakito"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <span className="text-white font-bold font-comic text-xl">Il/Lui</span>
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
