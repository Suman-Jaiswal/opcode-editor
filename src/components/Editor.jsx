import React, { useState } from 'react'
import OneByteInstruction from '../classes/OneByte';
import ThreeByteInstruction from '../classes/ThreeByte';
import TwoByteInstruction from '../classes/TwoByte';
import { oneByteInstrs, others } from '../instructions/onebyte';
import { threeByteInstrs } from '../instructions/threebyte';
import { twoByteInstrs } from '../instructions/twobyte';

export default function Editor() {

    const [data, setData] = useState("")
    const [name, setName] = useState("")
    const [result, setResult] = useState("");
    const [compact, setCompact] = useState("");
    const [isCompact, setIsCompact] = useState(false);
    const [programs, setPrograms] = useState(localStorage.getItem('programs') ?
        localStorage.getItem('programs') : [])

    const convert = () => {

        if (name === "" || data === "") return
        
        console.log("run");
        localStorage.setItem('programs', [...programs, { name, data }])
        setPrograms(p => [...p, { name, data }])

        let arr = data.split('\n');
        let addr = parseInt(arr[0], 16);
        let res = "";
        for (let i = 1; i < arr.length; i++) {
            const element = arr[i];
            let instrset = element.split(', ');

            if (oneByteInstrs.includes(instrset[0])) {
                let oc = new OneByteInstruction();
                if (instrset[0].includes('MOV')) {
                    oc.getOpCode(instrset[0], instrset[1]);
                }
                else {
                    oc.getOpCode(instrset[0].split(' ')[0], instrset[0].split(' ')[1]);

                }
                res += addr.toString(16).toUpperCase() + ": " + oc.opCode + "\n";
                addr++;
            }
            else if (others.filter(o => o.ins === instrset[0]).length) {
                const code = others.filter(o => o.ins === instrset[0])[0].code
                res += addr.toString(16).toUpperCase() + ": " + code + "\n";
                addr++;
            }
            else if (twoByteInstrs.includes(instrset[0])) {
                let oc = new TwoByteInstruction();
                oc.getOpCode(instrset[0]);
                res += addr.toString(16).toUpperCase() + ": " + oc.opCode + " " + instrset[1] + "\n";
                addr += 2;
            }
            else if (threeByteInstrs.includes(instrset[0])) {
                let oc = new ThreeByteInstruction();
                oc.getOpCode(instrset[0]);
                res += addr.toString(16).toUpperCase() + ": " + oc.opCode + " " + instrset[1] + " " + instrset[2] + "\n";
                addr += 3;
            }
        }
        setResult(res);
        let raw = res.split("\n");
        let str = arr[0];
        for (let i = 0; i < raw.length - 1; i++) {
            let el = raw[i];
            str += el.split(":")[1];
        }
        setCompact(str.split(" ").join(""));
    }

    const myFunction = () => {

        navigator.clipboard.writeText(isCompact ? compact : result);

        window.alert("Copied");
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }} >
                <b>Editor</b>
                <select
                    onChange={(e) => { setData(programs.filter(p => p.name === e.target.value)[0].data) }}>
                    <option>Saved Programs</option>
                    {
                        programs.map(p => <option>{p.name}</option>)
                    }
                </select>
                <button onClick={() => {
                    localStorage.setItem('programs', [])
                    setPrograms([])
                }}
                    style={{ color: 'white', backgroundColor: "red" }}>Delete all programs</button>
            </div>
            <hr />
            <div style={{ display: " flex", justifyContent: "space-around" }} >
                <div>
                    <p style={{ textAlign: "center" }} >Pneumonics</p>

                    <div>
                        <textarea required value={data}
                            placeholder='<Start_Address>:
                    <INSTR 1>
                    <INSTR 2>
                    <INSTR 3>
                    ....'
                            onChange={(e) => setData(e.target.value)} style={{ padding: 5 }} rows="30" cols="25" />
                    </div>
                    <div style={{ textAlign: "center", width: "80%" }} >
                        <input value={name}
                            required onChange={(e) => setName(e.target.value)} type="name" placeholder='Enter filename' />
                        <button onClick={convert} >Save & Convert</button>
                    </div>

                    <hr />
                </div>
                <div>
                    <p style={{ textAlign: "center" }}>Op Code</p>
                    <textarea rows="30" cols="25" style={{ padding: 5 }} value={isCompact ? compact : result} id="myInput" />

                    <div style={{ textAlign: "center" }} >
                        <button style={{
                            marginRight: 10,
                            backgroundColor:
                                isCompact ? 'blue' : "ButtonFace",
                            color: isCompact ? "white" : "black"

                        }}
                            onClick={() => setIsCompact(!isCompact)} >Compact</button>
                        <button onClick={myFunction} >Copy</button>
                    </div>

                    <hr />
                </div>
            </div>
        </div>
    )
}
