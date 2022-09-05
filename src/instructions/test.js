import { oneByteInstrs } from './onebyte'
import { twoByteInstrs } from './twobyte'
import { threeByteInstrs } from './threebyte'
import { instrs, opcodes } from './all'
import OneByteInstruction from '../classes/OneByte';
import TwoByteInstruction from '../classes/TwoByte';
import ThreeByteInstruction from '../classes/ThreeByte';

function testall() {
    let arr = [];
    for (let i = 0; i < instrs.length; i++) {
        const element = instrs[i];

        if (oneByteInstrs.findIndex(e => e === element) === -1
            && twoByteInstrs.findIndex(e => e === element) === -1
            && threeByteInstrs.findIndex(e => e === element) === -1)
            arr.push({ ins: element, code: opcodes[i] });

    }
    return arr;
}

function test1() {
    let arr = [];
    for (let i = 0; i < oneByteInstrs.length; i++) {
        const element = oneByteInstrs[i];

        if (instrs.findIndex(e => e === element) === -1)
            arr.push(element);

    }
    return arr;
}
function test2() {
    let arr = [];
    for (let i = 0; i < twoByteInstrs.length; i++) {
        const element = twoByteInstrs[i];

        if (instrs.findIndex(e => e === element) === -1)
            arr.push(element);

    }
    return arr;
}
function test3() {
    let arr = [];
    for (let i = 0; i < threeByteInstrs.length; i++) {
        const element = threeByteInstrs[i];

        if (instrs.findIndex(e => e === element) === -1)
            arr.push(element);

    }
    return arr;
}

function testingopcode() {

    for (let i = 0; i < instrs.length; i++) {
        const element = instrs[i];

        let code;
        if (oneByteInstrs.findIndex(e => e === element) !== -1) {
            let arr = element.split(' ');
            let oc = new OneByteInstruction();
            if (element.includes('MOV')) {
                oc.getOpCode(arr[0] + " " + arr[1], arr[2]);
                code = oc.opCode;
            }
            else {
                oc.getOpCode(arr[0], arr[1]);
                code = oc.opCode;
            }
            if (code !== opcodes[i]) {
                console.log("1", element, opcodes[i], "output: ", code);
            }
        }
        else if (twoByteInstrs.findIndex(e => e === element) !== -1) {
            let oc = new TwoByteInstruction();
            oc.getOpCode(element);
            code = oc.opCode;
            if (code !== opcodes[i]) {
                console.log("2", element, opcodes[i], "output: ", code);
            }
        }
        else if (threeByteInstrs.findIndex(e => e === element) !== -1) {
            let oc = new ThreeByteInstruction();
            oc.getOpCode(element);
            code = oc.opCode;
            if (code !== opcodes[i]) {
                console.log("3", element, opcodes[i], "output: ", code);
            }
        }
        else continue
    }

    return "Testing passed successfully :)"
}


function test() {
    test1();
    test2();
    test3();
    testall();
    return testingopcode();

}

test();

