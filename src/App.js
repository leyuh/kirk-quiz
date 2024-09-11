import './App.css';
import { useState, useEffect } from "react";

import MrRex from "./images/mr-rex.png";
import BatKirk from "./images/bat-kirk.png";
import RobloxKirk from "./images/roblox-kirk.png";
import SpaghettiKirk from "./images/spaghetti-kirk.png";
import CoquetteKirk from "./images/coquette-kirk.png";
import PastorKirk from "./images/pastor-kirk.png";
import MarineKirk from "./images/mr-rex.png";



function App() {

  const [data, setData] = useState({
    subject: "math",
    beverage: "coffee",
    "pass-time": "work-out",
    "describe-yourself": "clammy",
    "food": "spaghetti",
    "color": "black",
    "location": "church"
  })

  const calcScores = (data) => {

    const scores = {
      mrRexScore: 0,
      batKirkScore: 0,
      robloxKirkScore: 0,
      spaghettiKirkScore: 0,
      coquetteKirkScore: 0,
      marineKirkScore: 0,
      pastorKirkScore: 0
    }


    if (data.subject === "bible") {
      scores.pastorKirkScore++;
      scores.mrRexScore++;
    }

    if (data.beverage === "coffee") {
      scores.mrRexScore++;
      scores.marineKirkScore++;
    } else if (data.beverage === "water") {
      scores.marineKirkScore++;
      scores.batKirkScore++;
    } else if (data.beverage === "marinara-sauce") {
      scores.spaghettiKirkScore++;
    } else if (data.beverage === "celsius") {
      scores.coquetteKirkScore++;
    } else if (data.beverage === "mtn-dew") {
      scores.robloxKirkScore++;
    }

    if (data["pass-time"] === "work-out") {
      scores.marineKirkScore++;
      scores.batKirkScore++;
    } else if (data["pass-time"] === "eat") {
      scores.spaghettiKirkScore++;
    } else if (data["pass-time"] === "dress-up") {
      scores.coquetteKirkScore++;
    } else if (data["pass-time"] === "games") {
      scores.robloxKirkScore++;
    } else if (data["pass-time"] === "fight-crime") {
      scores.batKirkScore++;
    }

    if (data["describe-yourself"] === "clammy") {
      scores.mrRexScore++;
      scores.robloxKirkScore++;
    } else if (data["describe-yourself"] === "messy") {
      scores.spaghettiKirkScore++;
    } else if (data["describe-yourself"] === "baddie") {
      scores.coquetteKirkScore++;
      scores.batKirkScore++;
      scores.marineKirkScore++;
    } else if (data["describe-yourself"] === "silly") {
      scores.mrRexScore++;
    } else if (data["describe-yourself"] === "cute") {
      scores.coquetteKirkScore++;
    }

    if (data["food"] === "spaghetti") {
      scores.spaghettiKirkScore++;
    } else if (data["food"] === "cheese") {
      scores.mrRexScore++;
    } else if (data["food"] === "mre") {
      scores.marineKirkScore++;
    } else if (data["food"] === "dino-nuggets") {
      scores.coquetteKirkScore++;
      scores.robloxKirkScore++;
    }

    if (data["color"] === "black") {
      scores.batKirkScore++;
    } else if (data["color"] === "green") {
      scores.mrRexScore++;
      scores.marineKirkScore++;
    } else if (data["color"] === "blue") {
      scores.robloxKirkScore++;
    } else if (data["color"] === "blue") {
      scores.coquetteKirkScore++;
    }

    if (data["location"] === "church") {
      scores.pastorKirkScore += 3;
    } else if (data["location"] === "salon") {
      scores.coquetteKirkScore++;
    } else if (data["location"] === "kitchen") {
      scores.spaghettiKirkScore++;
    } else if (data["location"] === "bootcamp") {
      scores.marineKirkScore++;
    } else if (data["location"] === "cave") {
      scores.batKirkScore++;
      scores.robloxKirkScore++;
    }

    return Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);


  }

  const getResInfo = (res) => {
    if (res === "mrRexScore") return ["mr rex", MrRex];
    if (res === "batKirkScore") return ["bat kirk", BatKirk];
    if (res === "robloxKirkScore") return ["roblox kirk", RobloxKirk];
    if (res === "coquetteKirkScore") return ["coquette kirk", CoquetteKirk];
    if (res === "pastorKirkScore") return ["pastor kirk", PastorKirk];
    if (res === "marineKirkScore") return ["marine corps kirk", MarineKirk];
    if (res === "spaghettiKirkScore") return ["pasgheti kirk", SpaghettiKirk];
  }

  const [res, setRes] = useState(null);
  const [showRes, setShowRes] = useState(false);

  return (
    <div id="app">
      
      <h1>welcome to the kirk quiz</h1>
      <p>find out your kirk identity</p>

      {!showRes && <div id="questions-div">
        <form onSubmit={(e) => {
          e.preventDefault();
          setRes(calcScores(data));
          setShowRes(true);
          console.log(getResInfo(calcScores(data)));
        }}>
          <fieldset>
            <legend>pick a subject:</legend>

            <div>
              <input type="radio" id="math" name="subject" value="math" onChange={(e) => {
                if (e.target.checked) setData(prev => ({...prev, "subject": "math"}))
              }} />
              <label for="math">maths</label>
            </div>
            <div>
              <input type="radio" id="bible" name="subject" value="bible" onChange={(e) => {
                if (e.target.checked) setData(prev => ({...prev, "subject": "bible"}))
              }}  />
              <label for="bible">bibel</label>
            </div>
            <div>
              <input type="radio" id="english" name="subject" value="english" onChange={(e) => {
                if (e.target.checked) setData(prev => ({...prev, "subject": "english"}))
              }}  />
              <label for="english">englihs</label>
            </div>
            <div>
              <input type="radio" id="art" name="subject" value="art" onChange={(e) => {
                if (e.target.checked) setData(prev => ({...prev, "subject": "art"}))
              }}  />
              <label for="art">art</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>pick a bevrage:</legend>

            <div>
              <input type="radio" id="coffee" name="beverage" value="coffee"  onChange={(e) => {
                if (e.target.checked) setData(prev => ({...prev, "beverage": "coffee"}))
              }} />
              <label for="coffee">cofee, black</label>
            </div>
            <div>
              <input type="radio" id="water" name="beverage" value="water" onChange={(e) => {
                if (e.target.checked) setData(prev => ({...prev, "beverage": "water"}))
              }}/>
              <label for="water">water</label>
            </div>
            <div>
              <input type="radio" id="spaghetti-sauce" name="beverage" value="spaghetti-sauce" onChange={(e) => {
                if (e.target.checked) setData(prev => ({...prev, "beverage": "spaghetti-sauce"}))
              }}/>
              <label for="spaghetti-sauce">marnara sauce</label>
            </div>
            <div>
              <input type="radio" id="celsius" name="beverage" value="celsius" onChange={(e) => {
                if (e.target.checked) setData(prev => ({...prev, "beverage": "celsius"}))
              }}/>
              <label for="celsius">celcuis</label>
            </div>
            <div>
              <input type="radio" id="mtn-dew" name="beverage" value="mtn-dew" onChange={(e) => {
                if (e.target.checked) setData(prev => ({...prev, "beverage": "mtn-dew"}))
              }}/>
              <label for="mtn-dew">mtn dew</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>pick a pass time:</legend>

            <div>
              <input type="radio" id="work-out" name="pass-time" value="work-out" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["pass-time"] = "work-out";
                    return copy;
                  })
                }
              }}/>
              <label for="work-out">work out</label>
            </div>
            <div>
              <input type="radio" id="eat" name="pass-time" value="eat" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["pass-time"] = "eat";
                    return copy;
                  })
                }
              }} />
              <label for="eat">eat</label>
            </div>
            <div>
              <input type="radio" id="dress-up" name="pass-time" value="dress-up" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["pass-time"] = "dress-up";
                    return copy;
                  })
                }
              }}/>
              <label for="dress-up">play dress up</label>
            </div>
            <div>
              <input type="radio" id="games" name="pass-time" value="games" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["pass-time"] = "games";
                    return copy;
                  })
                }
              }} />
              <label for="games">play games</label>
            </div>
            <div>
              <input type="radio" id="fight-crime" name="pass-time" value="fight-crime" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["pass-time"] = "fight-crime";
                    return copy;
                  })
                }
              }} />
              <label for="fight-crime">fight crime</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>drescribe yourself:</legend>

            <div>
              <input type="radio" id="clammy" name="describe-yourself" value="clammy" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["describe-yourself"] = "clammy";
                    return copy;
                  })
                }
              }} />
              <label for="clammy">clammy</label>
            </div>
            <div>
              <input type="radio" id="messy" name="describe-yourself" value="messy" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["describe-yourself"] = "messy";
                    return copy;
                  })
                }
              }} />
              <label for="messy">messy</label>
            </div>
            <div>
              <input type="radio" id="baddie" name="describe-yourself" value="baddie" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["describe-yourself"] = "baddie";
                    return copy;
                  })
                }
              }} />
              <label for="baddie">baddie</label>
            </div>
            <div>
              <input type="radio" id="silly" name="describe-yourself" value="silly" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["describe-yourself"] = "silly";
                    return copy;
                  })
                }
              }} />
              <label for="silly">silly</label>
            </div>
            <div>
              <input type="radio" id="cute" name="describe-yourself" value="cute" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["describe-yourself"] = "cute";
                    return copy;
                  })
                }
              }} />
              <label for="cute">cute</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>pcik a food:</legend>

            <div>
              <input type="radio" id="spaghetti" name="food" value="spaghetti" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["food"] = "spaghetti";
                    return copy;
                  })
                }
              }} />
              <label for="spaghetti">spageti</label>
            </div>
            <div>
              <input type="radio" id="cheese" name="food" value="cheese" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["food"] = "cheese";
                    return copy;
                  })
                }
              }} />
              <label for="cheese">cheese</label>
            </div>
            <div>
              <input type="radio" id="mre" name="food" value="mre" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["food"] = "mre";
                    return copy;
                  })
                }
              }}  />
              <label for="mre">mre</label>
            </div>
            <div>
              <input type="radio" id="dino-nuggets" name="food" value="dino-nuggets"  onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["food"] = "dino-nuggets";
                    return copy;
                  })
                }
              }}  />
              <label for="dino-nuggets">dino nuggets</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>pcik your favriote color:</legend>

            <div>
              <input type="radio" id="black" name="color" value="black"  onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["color"] = "black";
                    return copy;
                  })
                }
              }}  />
              <label for="black">black/very, very dark gray</label>
            </div>
            <div>
              <input type="radio" id="green" name="color" value="green" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["color"] = "green";
                    return copy;
                  })
                }
              }}  />
              <label for="green">green</label>
            </div>
            <div>
              <input type="radio" id="blue" name="color" value="blue" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["color"] = "blue";
                    return copy;
                  })
                }
              }}  />
              <label for="blue">blue</label>
            </div>
            <div>
              <input type="radio" id="pink" name="color" value="pink" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["color"] = "pink";
                    return copy;
                  })
                }
              }}  />
              <label for="pink">pink</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>pick a location:</legend>

            <div>
              <input type="radio" id="church" name="location" value="church" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["location"] = "church";
                    return copy;
                  })
                }
              }} />
              <label for="church">cuhrch</label>
            </div>
            <div>
              <input type="radio" id="salon" name="location" value="salon" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["location"] = "salon";
                    return copy;
                  })
                }
              }}/>
              <label for="salon">salon</label>
            </div>
            <div>
              <input type="radio" id="kitchen" name="location" value="kitchen" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["location"] = "kitchen";
                    return copy;
                  })
                }
              }} />
              <label for="kitchen">wherever the pageti is</label>
            </div>
            <div>
              <input type="radio" id="bootcamp" name="location" value="bootcamp" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["location"] = "bootcamp";
                    return copy;
                  })
                }
              }} />
              <label for="bootcamp">bootcamp</label>
            </div>
            <div>
              <input type="radio" id="cave" name="location" value="cave" onChange={(e) => {
                if (e.target.checked) {
                  setData(prev => {
                    let copy = {...prev};
                    copy["location"] = "cave";
                    return copy;
                  })
                }
              }} />
              <label for="cave">my cave</label>
            </div>
          </fieldset>

          <button type="submit">done!</button>

        </form>
      </div>}

      {showRes && <div id="results-div">
        <h1>{getResInfo(res)[0]}</h1>
        <img style={{
          height: "200px",
          width: "200px"
        }} src={getResInfo(res)[1]}/>
      </div>}
    </div>
  );
}

export default App;
