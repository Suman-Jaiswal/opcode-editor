import React, { useEffect, useState } from 'react'
import ThreeByteInstruction from '../classes/ThreeByte'

const instructions = [
    'LXI B',
    'LXI D',
    'LXI H',
    'LXI SP',
    'SHLD',
    'STA',
    'LHLD',
    'LDA',
    'JNZ ',
    'JMP ',
    'CNZ ',
    'JZ ',
    'CZ ',
    'CALL ',
    'JNC ',
    'CNC ',
    'JC ',
    'CC ',
    'JPO ',
    'CPO ',
    'JPE ',
    'CPE ',
    'CM ',
    'CP ',
    'CPI ',
    'JM ',
    'JP ',
]

export default function ThreeByteModal() {

    const [instruction, setInstruction] = useState("");
    const [opcode, setOpcode] = useState(null);
    const [mat, setMat] = useState([]);

    useEffect(() => {
        const getOpCode = () => {
            const oc = new ThreeByteInstruction();
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

        const oc = new ThreeByteInstruction();
        let m = oc.printMoveMatrix();

        let m1 = m.filter((x, i) => i < m.length / 2);
        let m2 = m.filter((x, i) => i > m.length / 2);
        let raw = [];
        raw.push(m1);
        raw.push(m2)
        setMat(raw)
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

            <div style={{ display: "flex", gap: 10, justifyContent: "center" }} >
                {
                    mat.map((m, i) =>
                        <div key={i}>
                            {
                                m.map((r, i) =>
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

            </div>


        </div>
    )
}
