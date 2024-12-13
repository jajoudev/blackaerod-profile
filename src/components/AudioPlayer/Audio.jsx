import ReactAudioPlayer from "react-audio-player";
import PropTypes from "prop-types";
import { useState } from "react";
import musicList from "../AudioPlayer/data.js"
function Audio({ css }) {

    const [currentIndex, setCurrentIndex] = useState(0)

    function handleMusicNext() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % musicList.length)
    }


  return (
    <div className="p-5">
      <ReactAudioPlayer
        src={musicList[currentIndex]}
        autoPlay
        controls
        volume={0.5}
        className={css}
        onEnded={handleMusicNext}
      />
    </div>
  );
}

Audio.propTypes = {
  css: PropTypes.string.isRequired,
};

export default Audio;
