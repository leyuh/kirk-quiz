import './App.css';
import { useState } from "react";

import MrRex from "./images/mr-rex.png";
import BatKirk from "./images/bat-kirk.png";
import RobloxKirk from "./images/roblox-kirk.png";
import SpaghettiKirk from "./images/spaghetti-kirk.png";

function App() {
  return (
    <div id="app">
      
      <h1>welcome to the kirk quiz</h1>
      <p>find out your kirk identity</p>

      <div id="questions-div">
        <form>
          <fieldset>
            <legend>pick a subject:</legend>

            <div>
              <input type="radio" id="math" name="drone" value="math" checked />
              <label for="math">maths</label>
            </div>
            <div>
              <input type="radio" id="bible" name="drone" value="bible" />
              <label for="bible">bibel</label>
            </div>
            <div>
              <input type="radio" id="english" name="drone" value="english" />
              <label for="english">englihs</label>
            </div>
            <div>
              <input type="radio" id="art" name="drone" value="art" />
              <label for="art">art</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>pick a bevrage:</legend>

            <div>
              <input type="radio" id="coffee" name="drone" value="coffee" checked />
              <label for="coffee">cofee, black</label>
            </div>
            <div>
              <input type="radio" id="water" name="drone" value="water" />
              <label for="water">water</label>
            </div>
            <div>
              <input type="radio" id="spaghetti-sauce" name="drone" value="spaghetti-sauce" />
              <label for="spaghetti-sauce">marnara sauce</label>
            </div>
            <div>
              <input type="radio" id="celsius" name="drone" value="celsius" />
              <label for="celsius">celcuis</label>
            </div>
            <div>
              <input type="radio" id="mtn-dew" name="drone" value="mtn-dew" />
              <label for="mtn-dew">mtn dew</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>pick a pass time:</legend>

            <div>
              <input type="radio" id="work-out" name="drone" value="work-out" checked />
              <label for="work-out">work out</label>
            </div>
            <div>
              <input type="radio" id="eat" name="drone" value="eat" />
              <label for="eat">eat</label>
            </div>
            <div>
              <input type="radio" id="dress-up" name="drone" value="dress-up" />
              <label for="dress-up">play dress up</label>
            </div>
            <div>
              <input type="radio" id="games" name="drone" value="games" />
              <label for="games">play games</label>
            </div>
            <div>
              <input type="radio" id="fight-crime" name="drone" value="fight-crime" />
              <label for="fight-crime">fight crime</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>drescribe yourself:</legend>

            <div>
              <input type="radio" id="clammy" name="drone" value="clammy" checked />
              <label for="clammy">clammy</label>
            </div>
            <div>
              <input type="radio" id="messy" name="drone" value="messy" />
              <label for="messy">messy</label>
            </div>
            <div>
              <input type="radio" id="baddie" name="drone" value="baddie" />
              <label for="baddie">baddie</label>
            </div>
            <div>
              <input type="radio" id="silly" name="drone" value="silly" />
              <label for="silly">silly</label>
            </div>
            <div>
              <input type="radio" id="cute" name="drone" value="cute" />
              <label for="cute">cute</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>pcik a food:</legend>

            <div>
              <input type="radio" id="spaghetti" name="drone" value="spaghetti" checked />
              <label for="spaghetti">spageti</label>
            </div>
            <div>
              <input type="radio" id="cheese" name="drone" value="cheese" />
              <label for="cheese">cheese</label>
            </div>
            <div>
              <input type="radio" id="mre" name="drone" value="mre" />
              <label for="mre">mre</label>
            </div>
            <div>
              <input type="radio" id="dino-nuggets" name="drone" value="dino-nuggets" />
              <label for="dino-nuggets">dino nuggets</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>pcik your favriote color:</legend>

            <div>
              <input type="radio" id="black" name="drone" value="black" checked />
              <label for="black">black/very, very dark gray</label>
            </div>
            <div>
              <input type="radio" id="green" name="drone" value="green" />
              <label for="green">green</label>
            </div>
            <div>
              <input type="radio" id="blue" name="drone" value="blue" />
              <label for="blue">blue</label>
            </div>
            <div>
              <input type="radio" id="pink" name="drone" value="pink" />
              <label for="pink">pink</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>pick a location:</legend>

            <div>
              <input type="radio" id="church" name="drone" value="church" checked />
              <label for="church">cuhrch</label>
            </div>
            <div>
              <input type="radio" id="salon" name="drone" value="salon" />
              <label for="salon">salon</label>
            </div>
            <div>
              <input type="radio" id="kitchen" name="drone" value="kitchen" />
              <label for="kitchen">wherever the pageti is</label>
            </div>
            <div>
              <input type="radio" id="bootcamp" name="drone" value="bootcamp" />
              <label for="bootcamp">bootcamp</label>
            </div>
            <div>
              <input type="radio" id="cave" name="drone" value="cave" />
              <label for="cave">my cave</label>
            </div>
          </fieldset>

        </form>
      </div>
    </div>
  );
}

export default App;
