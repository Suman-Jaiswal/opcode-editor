class ThreeByteInstruction {

    constructor() {
        this.opCode = null;
        this.opcodes = [
            0x01,
            0x11,
            0x21,
            0x31,
            0x22,
            0x32,
            0x2A,
            0x3A,
            0xC2,
            0xC3,
            0xC4,
            0xCA,
            0xCC,
            0xCD,
            0xD2,
            0xD4,
            0xDA,
            0xDC,
            0xE2,
            0xE4,
            0xEA,
            0xEC,
            0xFC,
            0xF4,
            0xFE,
            0xFA,
            0xF2,
        ];

        this.instructions = [
            'LXI B',
            'LXI D',
            'LXI H',
            'LXI SP',
            'SHLD',
            'STA',
            'LHLD',
            'LDA',
            'JNZ',
            'JMP',
            'CNZ',
            'JZ',
            'CZ',
            'CALL',
            'JNC',
            'CNC',
            'JC',
            'CC',
            'JPO',
            'CPO',
            'JPE',
            'CPE',
            'CM',
            'CP',
            'CPI',
            'JM',
            'JP',
        ]
    }

    // methods
    getOpCode(instr, lower = "", higher = "") {

        const i = this.instructions.findIndex(el => el === instr);
        if (i === -1 || instr === "") {
            console.log('invalid instruction')
            return
        }
        this.opCode = this.opcodes[i];

        this.opCode = this.opCode.toString(16).toUpperCase();

        if (this.opCode.length === 1) this.opCode = "0" + this.opCode;

        if (lower !== "" && higher !== "") {
            this.opCode += " " + lower + " " + higher;
        }
    }

    printMoveMatrix() {
        let mat = [];

        for (let i = 0; i < this.instructions.length; i++) {
            let arr = [];
            let oc = new ThreeByteInstruction()
            oc.getOpCode(this.instructions[i]);
            arr.push(this.instructions[i]);
            arr.push(oc.opCode);
            mat.push(arr);
        }

        return mat;
    }
}

export default ThreeByteInstruction;