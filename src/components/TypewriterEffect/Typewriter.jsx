import TypewriterComponent from "typewriter-effect";

function Typewriter() {
  return (
    <div className="font-comic font-extrabold text-3xl [text-shadow:0px_0px_43px_rgba(255,174,0,1)]">
        <TypewriterComponent
          options={{
            strings: ["Blackaerod", "@blackaerod94", "blacknakito"],
            autoStart: true,
            loop: true,
          }}
        />
    </div>
  );
}

export default Typewriter;
