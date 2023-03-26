export function DiceCell({ array, value, row, col, addValue }) {
    return (
        <>
            <div className="dice-card" onClick={() => addValue(value, row, col)}>
                {array[row][col]}
            </div>
        </>
    )
}