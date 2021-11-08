import React from 'react';


function Portfolio() {
 
  return (
    <section>
    <h1 data-testid="h1tag" id="portfolio">Portfolio</h1>
    <div class="projects">



    <div >
        <ul>
            <li class="larger">
                <a class="guard" href="https://password-manager-gadaell.herokuapp.com/" target="_blank">
                    <h3 class="searchtext">Virtual Guardian</h3>
                </a>
            </li>
            <li>
                <a class="birthday" href="https://absius.github.io/tristan-birthday" target="_blank">

                    <h3 class="btext">Tristan's Birthday RSVP</h3>
                </a>
            </li>
            <li>
                <a class="search" href="https://katharinechumble.github.io/miniature-fiesta/" target="_blank">
                    <h3 class="searchtext">Game Search</h3>
                </a>
            </li>
            <li>
                <a class="run" href="https://absius.github.io/run-buddy" target="_blank">
                    <h3 class="runtext">Run Buddy</h3>
                </a>
            </li>
            <li>
                <a class="thank" href="https://absius.github.io/thank-you" target="_blank">
                    <h3 class="thanktext">Thank You</h3>
                </a>
            </li>
        </ul>
    </div>
</div>
</section>
  );
}

export default Portfolio;
