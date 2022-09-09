import { useEffect, useState } from 'react';
import OneByteInstruction from '../classes/OneByte';
import { others } from '../instructions/onebyte';

const columns = ['B', 'C', 'D', 'E', 'H', 'L', 'M', 'A'];
const rows = [
    'MOV B',
    'MOV C',
    'MOV D',
    'MOV E',
    'MOV H',
    'MOV L',
    'MOV M',
    'MOV A',
    'ADD',
    'ADC',
    'SUB',
    'SBB',
    'ANA',
    'XRA',
    'ORA',
    'CMP',
    'INR',
    'DCR',
    'MVI',
]

export default function OneByteModal() {

    const [opcode, setOpcode] = useState(null);
    const [row, setRow] = useState("");
    const [col, setCol] = useState("");
    const [mat, setMat] = useState([]);



    useEffect(() => {
        const getOpCode = () => {
            const oc = new OneByteInstruction();
            oc.getOpCode(row, col);
            setOpcode(oc.opCode);
        }
        if (row.length > 0 && col.length > 0)
            getOpCode();
        else setOpcode(null)
    }, [setOpcode, row, col])


    const printMat = (clear) => {
        if (clear === 0) {
            setMat([]);
            return
        }

        const oc = new OneByteInstruction();
        let m = oc.printMoveMatrix();
        setMat(m);
    }

    useEffect(() => {
        printMat();
    }, [])


    const handleClick = (i, j, c) => {
        console.log(c === row)
        if (i === 0 && j === 0) return
        if (j === 0) {
            setRow(c);
        }
        else if (i === 0) {
            setCol(c);
        }
        else {
            setRow(mat[i][0]);
            setCol(mat[0][j]);
            setOpcode(mat[i][j]);
        }

    }

    return (
        <div className='wrapper'>

            <label htmlFor="first">1st Parameter: </label>
            <select onChange={(e) => setRow(e.target.value)} value={row} name="first" >
                <option value="" >...</option>
                {
                    rows.map((r, i) => <option key={r}>  {r} </option>)
                }
            </select>
            <span style={{ float: "right" }}>Result: {opcode}</span>
            <hr />
            <label required htmlFor="second">2nd Parameter: </label>
            <select onChange={(e) => setCol(e.target.value)} value={col} name="second" >
                <option value="" >...</option>
                {
                    columns.map(r => <option key={r}> {r} </option>)
                }
            </select>
            <hr />
            <br />
            <div style={{ display: "flex" }}>
                <div>
                    {
                        mat.map((r, i) =>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                                borderBottom: i === 0 || i === 8 ? "1px solid grey" : "1px dotted grey"
                            }} key={i}>
                                {
                                    r.map((c, j) =>
                                        <div style={{
                                            width: 50,
                                            textAlign: "center",
                                            borderRight: j === 0 ? "1px solid grey" : "1px dotted grey",
                                            backgroundColor:
                                                (j === 0 && c === row) || (i === 0 && c === col) || (c === opcode) ?
                                                    "blue" : (j === 0 || i === 0) &&
                                                    "ButtonFace",
                                            color: (j === 0 && c === row) || (i === 0 && c === col) || (c === opcode) ?
                                                "white" : (j === 0 || i === 0) &&
                                                "black",

                                            fontWeight: (j === 0 && i === 0) && "bold",
                                            cursor: "pointer",
                                            fontSize: 10,
                                            padding: 5

                                        }}
                                            onClick={() => handleClick(i, j, c)}
                                            key={c} >{c}</div>
                                    )
                                }

                            </div>
                        )
                    }
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", width: 380, marginLeft: 20 }}>
                    {
                        others.map((o, i) =>
                            <div key={i} style={{
                                display: "flex",
                                justifyContent: "space-evenly",
                            }}>
                                <div style={{
                                    width: 50,
                                    textAlign: "center",
                                    cursor: "pointer",
                                    fontSize: 10,
                                    padding: 5,
                                    backgroundColor: "ButtonFace",
                                    borderLeft: "1px solid grey",
                                    borderBottom: "1px solid grey",

                                }} >{o.ins}</div>
                                <div style={{
                                    width: 50,
                                    textAlign: "center",
                                    cursor: "pointer",
                                    fontSize: 10,
                                    padding: 5,
                                    borderBottom: "1px dotted grey",

                                }} >{o.code}</div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}
