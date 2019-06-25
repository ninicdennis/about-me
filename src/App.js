import React from 'react';
import './App.css';

function App() {
  return (
    <div> 
      <header>
        <div className = 'leftSide'> 
          <h1>Dennis Ninic</h1>
          <h2>Helio Training student</h2>
        </div>

          <img src= 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/49811681_2494889387191148_968918362547552256_o.jpg?_nc_cat=108&_nc_oc=AQlXvEFSzFlosnSCh4Xz7EQ0VL6HyuGGuruX4FpW6aW9h1nC5YTnm5vJ99tdxEgXk5w&_nc_ht=scontent-sjc3-1.xx&oh=ae78a86164b39764d9fcb49bb18987bc&oe=5D8BDA8C' alt = "Arcade game is street fighter." className = 'images'></img>

          
      </header>
      <main>
        <div className = 'split'>
        <section>
          <h3>Bio</h3>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et vestibulum massa. Sed varius, ligula ut commodo cursus, elit est ultrices tellus, eu porta nunc lorem quis urna. Etiam in massa efficitur, rhoncus arcu a, pretium tortor. Vestibulum cursus tincidunt volutpat. Nullam accumsan commodo dolor, et dignissim velit fermentum id. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Sed non dui fermentum, faucibus urna a, condimentum orci. Cras et pulvinar metus. Nunc ultricies, lorem aliquet pulvinar eleifend, nunc diam semper nisi, vitae pellentesque elit lectus id ante. 
          </div>
        </section>

        <section>
          <h3>Why Helio Training?</h3>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et vestibulum massa. Sed varius, ligula ut commodo cursus, elit est ultrices tellus, eu porta nunc lorem quis urna. Etiam in massa efficitur, rhoncus arcu a, pretium tortor. Vestibulum cursus tincidunt volutpat. Nullam accumsan commodo dolor, et dignissim velit fermentum id. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Sed non dui fermentum, faucibus urna a, condimentum orci. Cras et pulvinar metus. Nunc ultricies, lorem aliquet pulvinar eleifend, nunc diam semper nisi, vitae pellentesque elit lectus id ante. 
          </div>
        </section>
        </div>

        <details>

              <ul>
              Other information you would want about me:
                <li> <a href = 'https://www.github.com/pupper-bot'> Github </a></li>
                <li> <a href = 'https://www.linkedin.com/'> Linkden</a></li>
                <li> <a href = 'work-experience.js'> Work Experience </a></li>
              </ul>
          </details>
      </main>

    </div>
  );
}

export default App;
