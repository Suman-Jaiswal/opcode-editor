class TwoByteInstruction {

    constructor() {
        this.opCode = null;
        this.instructions = [
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
    }

    // methods
    getOpCode(instr = "", data = "") {
        const i = this.instructions.findIndex(el => el === instr);
        if (i === -1 || instr === "") {
            console.log('invalid instruction')
            return
        }
        if (i < 8) {
            this.opCode = 0x06;
            this.opCode += 8 * i;
        }
        else if (i < 16) {
            this.opCode = 0xC6;
            this.opCode += 8 * (i - 8);
        }
        else {
            this.opCode = 0xD3;
            this.opCode += 8 * (i - 16);
        }
        this.opCode = this.opCode.toString(16).toUpperCase();
        if (this.opCode.length === 1) this.opCode = "0" + this.opCode;
        if (data !== "") this.opCode += " " + data;
    }

    printMoveMatrix() {
        let mat = [];
        for (let i = 0; i < this.instructions.length; i++) {
            let arr = [];
            let oc = new TwoByteInstruction()
            oc.getOpCode(this.instructions[i]);
            arr.push(this.instructions[i]);
            arr.push(oc.opCode);
            mat.push(arr);
        }
        return mat;
    }
}

export default TwoByteInstruction;