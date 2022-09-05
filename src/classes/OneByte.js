import { others } from "../instructions/onebyte";

class OneByteInstruction {

    constructor() {
        this.opCode = null;
        this.registers = ['B', 'C', 'D', 'E', 'H', 'L', 'M', 'A'];
        this.instructions = [
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
        ]
        this.others = others
    }

    // methods
    getOpCode(instr, reg) {
        let i = this.instructions.findIndex(el => el === instr);
        let j = this.registers.findIndex(el => el === reg);
        if (i === -1) {
            let arr = this.others.filter(o => o.ins === instr)
            if (arr.length === 1) {
                this.opCode = arr[0].code;
            }
            return
        }
        if (i === -1 || instr === "" || j === -1) {
            console.log('invalid instruction')
            return
        }
        if (i >= 16) {
            this.opCode += 0x04;
            this.opCode += i - 16 + 8 * j;
        }
        else {
            this.opCode += 0x40;
            this.opCode += i * 8 + j;
        }

        this.opCode = this.opCode.toString(16).toUpperCase();
        if (this.opCode.length === 1) this.opCode = "0" + this.opCode;
    }

    printMoveMatrix() {
        let mat = [];
        let arr = [];
        arr.push('1-Byte');
        for (let i = 0; i < 8; i++) {
            arr.push(this.registers[i]);
        }
        mat.push(arr);

        for (let i = 0; i < 18; i++) {
            let arr = [];
            for (let j = 0; j < 9; j++) {
                if (j === 0) arr.push(this.instructions[i]);
                else {
                    const oc = new OneByteInstruction();
                    oc.getOpCode(this.instructions[i], this.registers[j - 1])
                    arr.push(oc.opCode);
                }
            }
            mat.push(arr);
        }
        return mat;
    }
}

export default OneByteInstruction;