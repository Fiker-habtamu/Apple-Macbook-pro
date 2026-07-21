import React from "react";

function ShowCase() {
  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" alt="Mask Logo" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing {""}
                <span className="text-white">
                  M4, the next generation of Apple’s silicon
                </span>
                .M4 powers
              </p>
              <p>
                It drives Apple Interlligence,on ipad pro, so you can write,
                create, and accomplish more with ease. All in a desing that's
                unbelievably thin and light, and powerful.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness, And a next-gen GPU with
                hardware-accelerated ray tracing and advanced shading brings
                console-level graphics to your fingertips.
              </p>
              <p className="text-primary">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>
          <div className="max-w-3xs space-y-14">
            <div className="space-y-3">
              <p>Up to</p>
              <h3>4x FASTER</h3>
              <p>Pro rendering performance that M2</p>
            </div>
            <div className="space-y-3">
              <p>Up to</p>
              <h3>1.5x FASTER</h3>
              <p>CPU performance that  M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowCase;
