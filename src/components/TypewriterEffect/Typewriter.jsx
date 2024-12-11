import TypewriterComponent from "typewriter-effect";

function Typewriter() {
  return (
    <div className="font-comic font-extrabold text-3xl">
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
