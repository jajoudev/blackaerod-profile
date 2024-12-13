import ReactAudioPlayer from "react-audio-player";
import BadLandMusic from "../../assets/audios/bad-land.mp3";

function Audio() {
    <ReactAudioPlayer src={BadLandMusic} autoPlay controls volume={0.5}/>
}

export default Audio;