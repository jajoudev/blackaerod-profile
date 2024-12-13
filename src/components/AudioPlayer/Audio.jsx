import { useState } from "react";
// Import music list
import musicList from "../AudioPlayer/data.js";
// Librairies
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import ReactAudioPlayer from "react-audio-player";
import PropTypes from "prop-types";

function Audio({ css }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextMusic() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % musicList.length);
  }

  function prevMusic() {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % musicList.length);
  }

  return (
    <div className="p-5 flex gap-5">
      <FaArrowAltCircleLeft size={40} onClick={prevMusic} className="animate-bounce mt-4" />
      <ReactAudioPlayer
        src={musicList[currentIndex]}
        autoPlay
        controls
        volume={0.5}
        className={css}
        onEnded={nextMusic}
      />
      <FaArrowAltCircleRight size={40} onClick={nextMusic}  className="animate-bounce mt-4" />
    </div>
  );
}

Audio.propTypes = {
  css: PropTypes.string.isRequired,
};

export default Audio;
