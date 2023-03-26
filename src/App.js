import { useState } from "react";
import { DiceBoard } from "./components/DiceBoard";

function App() {
    const [diceValue, setDiceValue] = useState(0);
    const [blockCells, setBlockCells] = useState(false);

    const [blockStatus1, setBlockStatus1] = useState(true);
    const [blockStatus2, setBlockStatus2] = useState(false)

    const [array1, setArray1] = useState(
        [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
    )

    const [array2, setArray2] = useState(
        [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
    );

    const [diceBlock, setDiceBlock] = useState(false);

    function getRandomArbitrary(min, max) {
        if (!diceBlock) {
            setDiceValue('Wait...')
            min = Math.ceil(min);
            max = Math.floor(max);
            let result = Math.floor(Math.random() * (max - min)) + min;
            setBlockCells(false);
            setDiceBlock(true);
            setTimeout(() => setDiceValue(result), 800);

        }

    }

  return (
      <>
        <div className="App">
          <header className="App-header">
              <p>This is my Dice Game!</p>
          </header>
            <body>
                <div className="wrapper">
                    <p> Dice Value: </p>
                    <p className="dice-value"> {diceValue} </p>
                    <button className="roll-dice" onClick={() => getRandomArbitrary(1, 7)}>Show</button>
                    <div className="dice-board-wrapper">
                        <DiceBoard diceValue={diceValue} array={array1}
                                   setArray={setArray1} diceBlock={diceBlock}
                                   setDiceBlock={setDiceBlock} blockCells={blockCells}
                                   setBlockCells={setBlockCells}
                                   blockStatus1={blockStatus1}
                                   setBlockStatus1={setBlockStatus1}
                                   setBlockStatus2={setBlockStatus2}
                                   blockStatus2={blockStatus2}
                        />
                        <DiceBoard diceValue={diceValue} array={array2}
                                   setArray={setArray2} diceBlock={diceBlock}
                                   setDiceBlock={setDiceBlock} blockCells={blockCells}
                                   setBlockCells={setBlockCells}
                                   blockStatus1={blockStatus2}
                                   setBlockStatus1={setBlockStatus2}
                                   blockStatus2={blockStatus1}
                                   setBlockStatus2={setBlockStatus1}
                        />
                    </div>
                </div>
            </body>
        </div>
      </>
  );
}

{/*<div className="dice-board">*/}
{/*    <div className="col">*/}
{/*        <p className="col-count">*/}
{/*            {colOne}*/}
{/*        </p>*/}
{/*        <div id="1" className="dice-card" onClick={() => addDiceValue(diceValue, 0, 0)}>{array2[0][0]}</div>*/}
{/*        <div id="4" className="dice-card" onClick={() => addDiceValue(diceValue, 1, 0)}>{array2[1][0]}</div>*/}
{/*        <div id="7" className="dice-card" onClick={() => addDiceValue(diceValue, 2, 0)}>{array2[2][0]}</div>*/}
{/*    </div>*/}
{/*    <div className="col">*/}
{/*        <p className="col-count">*/}
{/*            {colTwo}*/}
{/*        </p>*/}
{/*        <div id="2" className="dice-card" onClick={() => addDiceValue(diceValue, 0, 1)}>{array2[0][1]}</div>*/}
{/*        <div id="5" className="dice-card" onClick={() => addDiceValue(diceValue, 1, 1)}>{array2[1][1]}</div>*/}
{/*        <div id="8" className="dice-card" onClick={() => addDiceValue(diceValue, 2, 1)}>{array2[2][1]}</div>*/}
{/*    </div>*/}
{/*    <div className="col">*/}
{/*        <p className="col-count">*/}
{/*            {colThree}*/}
{/*        </p>*/}
{/*        <div id="3" className="dice-card" onClick={() => addDiceValue(diceValue, 0, 2)}>{array2[0][2]}</div>*/}
{/*        <div id="6" className="dice-card" onClick={() => addDiceValue(diceValue, 1, 2)}>{array2[1][2]}</div>*/}
{/*        <div id="9" className="dice-card" onClick={() => addDiceValue(diceValue, 2, 2)}>{array2[2][2]}</div>*/}
{/*    </div>*/}
{/*</div>*/}
{/*<div className="score">*/}
{/*    Score: {score}*/}
{/*</div>*/}

export default App;
