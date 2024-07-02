import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Website Developer",
          "Full Stack Developer",
          "Software Developer",
          "Mobile App Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
