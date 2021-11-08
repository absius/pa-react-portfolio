import React from 'react';
import coverImage from '../../assets/images/pat-professional.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage}  style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Patrick Abernathy is a full stack developer with skills in HTML, CSS, Java, C#, and .Net. He is an eager learner and loves to be challenged. Patrick started his career as a developer six years ago and has been growing as a developer and as a person ever since. In his spare time he enjoys playing video games and writing. He also enjoys spending time with his family. Patrick had a kidney transplant in 2014 and decided to change his life for the better by becoming a web developer and switching from driving a forklift full time to developer life.
        </p>
      </div>
    </section>
  );
}

export default About;
