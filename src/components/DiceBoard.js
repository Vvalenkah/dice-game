import { useState } from "react";

import { DiceCell } from "./DiceCell";

export function DiceBoard({ diceValue, array, setArray, blockCells,setBlockCells,
                              setDiceBlock, blockStatus1, blockStatus2, setBlockStatus1, setBlockStatus2 }) {

    const [count, setCount] = useState(0);
    const [colOne, setColOne] = useState(0);
    const [colTwo, setColTwo] = useState(0);
    const [colThree, setColThree] = useState(0);
    const [score, setScore] = useState(0);


    function addDiceValue(value, row, col) {
        if (!blockCells && blockStatus1) {
            let arr = array;
            if (arr[row][col] === 0) {
                arr[row][col] = value;
                setScore(score + value);
                setArray(arr)
                setBlockCells(true)
                setColumns()
                setDiceBlock(false);
                setCount(count + 1);
                setBlockStatus1(!blockStatus1);
                setBlockStatus2(!blockStatus2)
                checkWin()
                // checkWin()
            }
        }
    }

    function multiply(value, col, row) {
        switch (row) {
            case 0:
                console.log('first')
                break;
            case 1:
                console.log('second')
                break;
            case 2:
                console.log('third')
                break;
            default:
                console.log('sr7')
        }
    }


    function checkWin() {
        if (count === 8) {
            console.log('Game over')
        }

    }

    function setColumns() {
        setColOne(array[0][0] + array[1][0] + array[2][0]);
        setColTwo(array[0][1] + array[1][1] + array[2][1]);
        setColThree(array[0][2] + array[1][2] + array[2][2]);
    }

    return (
        <>
            <div className="dice-container">
                <div className="dice-board">
                    <div className="col">
                        <p className="col-count">
                            {colOne}
                        </p>
                        <DiceCell array={array} value={diceValue} row="0" col="0" addValue={addDiceValue} />
                        <DiceCell array={array} value={diceValue} row="1" col="0" addValue={addDiceValue} />
                        <DiceCell array={array} value={diceValue} row="2" col="0" addValue={addDiceValue} />
                    </div>
                    <div className="col">
                        <p className="col-count">
                            {colTwo}
                        </p>
                        <DiceCell array={array} value={diceValue} row="0" col="1"
                                  addValue={addDiceValue}
                        />
                        <DiceCell array={array} value={diceValue} row="1" col="1"
                                  addValue={addDiceValue}
                        />
                        <DiceCell array={array} value={diceValue} row="2" col="1"
                                  addValue={addDiceValue}
                        />
                    </div>
                    <div className="col">
                        <p className="col-count">
                            {colThree}
                        </p>
                        <DiceCell array={array} value={diceValue} row="0" col="2"
                                  addValue={addDiceValue}
                        />
                        <DiceCell array={array} value={diceValue} row="1" col="2"
                                  addValue={addDiceValue}
                        />
                        <DiceCell array={array} value={diceValue} row="2" col="2"
                                  addValue={addDiceValue}
                        />
                    </div>
                </div>
                <div className="score">
                    Score: {score}
                </div>
            </div>
        </>
    )
}