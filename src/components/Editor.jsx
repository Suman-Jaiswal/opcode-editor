import React, { useState } from 'react'
import OneByteInstruction from '../classes/OneByte';
import ThreeByteInstruction from '../classes/ThreeByte';
import TwoByteInstruction from '../classes/TwoByte';
import { oneByteInstrs, others } from '../instructions/onebyte';
import { threeByteInstrs } from '../instructions/threebyte';
import { twoByteInstrs } from '../instructions/twobyte';

export default function Editor() {

    const [data, setData] = useState("")
    const [result, setResult] = useState("");
    const [compact, setCompact] = useState("");
    const [isCompact, setIsCompact] = useState(false);

    const convert = () => {
        let arr = data.split('\n');
        let res = arr[0];
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
                res += oc.opCode + " ";
            }
            else if (others.filter(o => o.ins === instrset[0]).length) {
                const code = others.filter(o => o.ins === instrset[0])[0].code
                res += code + " ";
            }
            else if (twoByteInstrs.includes(instrset[0])) {
                let oc = new TwoByteInstruction();
                oc.getOpCode(instrset[0]);
                res += oc.opCode + " " + instrset[1] + " ";
            }
            else if (threeByteInstrs.includes(instrset[0])) {
                let oc = new ThreeByteInstruction();
                oc.getOpCode(instrset[0]);
                res += oc.opCode + " " + instrset[1] + " " + instrset[2] + " ";
            }
        }
        setResult(res);
        setCompact(res.split(" ").join(""));
    }

    const myFunction = () => {

        navigator.clipboard.writeText(isCompact ? compact : result);

        window.alert("Copied");
    }

    return (
        <div>
            <div> <b>Editor</b> </div>
            <hr />
            <div>
                <textarea
                    placeholder='Address:
                    Enter code'
                    onChange={(e) => setData(e.target.value)} style={{ padding: 5 }} rows="25" cols="50" />
            </div>
            <div style={{ textAlign: "center" }} >
                <button onClick={convert} >Convert</button>
                <button style={{
                    marginLeft: 10,
                    backgroundColor:
                        isCompact ? 'blue' : "ButtonFace",
                    color: isCompact ? "white" : "black"

                }}
                    onClick={() => setIsCompact(!isCompact)} >Compact</button>
            </div>
            <br />
            <div>
                <textarea rows="3" cols="50" value={isCompact ? compact : result} id="myInput" />

                <div style={{ textAlign: "center" }} >
                    <button onClick={myFunction} >Copy Op Code</button>
                </div>


            </div>
        </div>
    )
}
