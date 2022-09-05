import React, { useEffect, useState } from 'react'
import TwoByteInstruction from '../classes/TwoByte';

const instructions = [
    'MVI B',
    'MVI C',
    'MVI D',
    'MVI E',
    'MVI H',
    'MVI L',
    'MVI M',
    'MVI A',
    'ADI',
    'ACI',
    'SUI',
    'SBI',
    'ANI',
    'XRI',
    'ORI',
    'CPI',
    'OUT',
    'IN',
]

export default function TwoByteModal() {

    const [instruction, setInstruction] = useState("");
    const [opcode, setOpcode] = useState(null);
    const [mat, setMat] = useState([]);

    useEffect(() => {
        const getOpCode = () => {
            const oc = new TwoByteInstruction();
            oc.getOpCode(instruction);
            setOpcode(oc.opCode);
        }
        if (instruction.length > 0)
            getOpCode();
        else setOpcode(null)
    }, [setOpcode, instruction])

    const printMat = (clear) => {
        if (clear === 0) {
            setMat([]);
            return
        }

        const oc = new TwoByteInstruction();
        let m = oc.printMoveMatrix();
        setMat(m);
    }

    useEffect(() => {
        printMat();
    }, [])

    return (
        <div className='wrapper'>
            <label htmlFor="first">Instruction: </label>
            <select onChange={(e) => setInstruction(e.target.value)} value={instruction} name="first" >
                <option value="" >...</option>
                {
                    instructions.map((r, i) => <option value={r} key={i}>  {r} </option>)
                }
            </select>
            <span style={{ float: "right" }}>Result: {opcode}</span>
            <hr />
            <br />

            {
                mat.map((r, i) =>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                    }} key={i}>
                        {
                            r.map((c, j) =>
                                <div style={{
                                    width: 50,
                                    textAlign: "center",
                                    borderRight: "1px solid grey",
                                    borderBottom: "1px solid grey",
                                    backgroundColor:
                                        (c === opcode) ?
                                            "blue" : (j === 0) &&
                                            "ButtonFace",
                                    color: (c === opcode) ?
                                        "white" : (j === 0) &&
                                        "black",

                                    fontWeight: (j === 0) && "bold",
                                    cursor: "pointer",
                                    fontSize: 10,
                                    padding: 5

                                }}
                                    key={c} >{c}</div>)
                        }

                    </div>
                )
            }

        </div>
    )
}
