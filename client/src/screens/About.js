import React from "react";

function About() {
  return (
    <section className="about">
      <h1 id="about">GTX Mobile Detailing</h1>
      {/* <img
        src={coverImage}
        className="about-gtx-image"
        style={{ width: "100%" }}
        alt="cover"
      /> */}
      <div className="my-2">
        <div></div>
        <span>GTX TEAM PROMISE</span>
        <p>
          We are committed to provide detailed craftsmanship quality services.
          <br />
          Our promise is to give car owners a stress-free experience each every
          time.
          <br />
        </p>
        <span>GTX HIGH-QUALITY PRODUCTS</span>
        <p>
          We use the best products to deliver best detailed Vehicle service.
          <br />
          The Cleaning chemicals and equipments. Upholstery Shampoos, wax,
          window cleaning solutions, etc.
          <br />
          Our customer feel the deferences and condident on their vehicle.
        </p>
      </div>
    </section>
  );
}

export default About;
