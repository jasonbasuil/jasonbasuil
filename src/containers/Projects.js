import React, {Component} from 'react'

class Projects extends Component {

  render() {
    return(

      <div class='projects-container'>
        <h2> Projects </h2>
        <div class='project'>
          <a href='https://github.com/jasonbasuil/TuneTest'>
            <div class='project-title'>TuneTest</div>
          </a>
          <div class='project-description'>TuneTest is a fun music guessing game that pulls your Top Tracks and
               Top Artists from your Spotify account. Play with your friends with the Search
               feature and test them on their favorite artist's top tracks.
          </div>
            <img src='https://camo.githubusercontent.com/9750571ee64974f053dd54026db836e6a642a2f9/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f395069776e46757637627374424862515a582f67697068792e77656270'/><br/>
            <a class='demo-link' href='https://player.vimeo.com/video/336705911'>Demo</a>
          <div class='project-technologies'>
            React,
            Ruby on Rails,
            Postgresql,
            HTML/CSS/JS,
            Spotify Web API w/ (OAuth 2.0)
          </div>
        </div>
        <div class='project'>
          <a href='https://github.com/jasonbasuil/EventMatchr'>
            <div class='project-title'>EventMatchr</div>
          </a>
          <div class='project-description'>Event Matcher is a web application that allows users to search
               for different events nearby and make purchases through Ticketmaster.
          </div>
          <img src='https://camo.githubusercontent.com/f5996c708ad9875bf22d1a9dc31025fc23281e0f/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f336833754e634b70574649454a6f39716c7a2f67697068792e676966'/><br/>
          <a class='demo-link' href='https://player.vimeo.com/video/336883307'>Demo</a>
          <div class='project-technologies'>
                JavaScript,
                HTML,
                CSS,
                Ruby on Rails,
                Postgresql,
                Ticketmaster Search API
          </div>
        </div>
        <div class='project'>
          <a href='https://github.com/jasonbasuil/CityExplorer'>
            <div class='project-title'>CityExplorer</div>
          </a>
          <div class='project-description'>
            Create new events, search for events to attend, and view all
            the attendees for your events.
          </div>
          <img src='https://camo.githubusercontent.com/64d7d0cf517f54648bb0eb107a28903117a2fe82/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6f79635a54425479444d7244746231566b572f67697068792e676966'/><br/>
          <div class='project-technologies'>
                HTML,
                CSS,
                Ruby,
                Ruby on Rails,
                Bootstrap
          </div>
        </div>

      </div>
    )
  }
}

export default Projects;
