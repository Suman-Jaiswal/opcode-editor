// total = 144 / 189
export const oneByteInstrs = [
    'MOV B',
    'MOV C',
    'MOV D',
    'MOV E',
    'MOV H',
    'MOV L',
    'MOV M',
    'MOV A',
    'ADD B',
    'ADD C',
    'ADD D',
    'ADD E',
    'ADD H',
    'ADD L',
    'ADD M',
    'ADD A',
    'ADC B',
    'ADC C',
    'ADC D',
    'ADC E',
    'ADC H',
    'ADC L',
    'ADC M',
    'ADC A',
    'SUB B',
    'SUB C',
    'SUB D',
    'SUB E',
    'SUB H',
    'SUB L',
    'SUB M',
    'SUB A',
    'SBB B',
    'SBB C',
    'SBB D',
    'SBB E',
    'SBB H',
    'SBB L',
    'SBB M',
    'SBB A',
    'ANA B',
    'ANA C',
    'ANA D',
    'ANA E',
    'ANA H',
    'ANA L',
    'ANA M',
    'ANA A',
    'XRA B',
    'XRA C',
    'XRA D',
    'XRA E',
    'XRA H',
    'XRA L',
    'XRA M',
    'XRA A',
    'ORA B',
    'ORA C',
    'ORA D',
    'ORA E',
    'ORA H',
    'ORA L',
    'ORA M',
    'ORA A',
    'CMP B',
    'CMP C',
    'CMP D',
    'CMP E',
    'CMP H',
    'CMP L',
    'CMP M',
    'CMP A',
    'INR B',
    'INR C',
    'INR D',
    'INR E',
    'INR H',
    'INR L',
    'INR M',
    'INR A',
    'DCR B',
    'DCR C',
    'DCR D',
    'DCR E',
    'DCR H',
    'DCR L',
    'DCR M',
    'DCR A',
]

export const others = [
    {
        ins: "CMA",
        code: '2F'
    },
    {
        ins: "CMC",
        code: '3F'
    },
    {
        ins: "DAA",
        code: '27'
    },
    {
        ins: "DAD B",
        code: '09'
    },
    {
        ins: "DAD D",
        code: '19'
    },
    {
        ins: "DAD H",
        code: '29'
    },
    {
        ins: "DAD SP",
        code: '39'
    },
    {
        ins: "DCX B",
        code: '0B'
    },
    {
        ins: "DCX D",
        code: '1B'
    },
    {
        ins: "DCX H",
        code: '2B'
    },
    {
        ins: "DCX SP",
        code: '3B'
    },
    {
        ins: "DI",
        code: 'F3'
    },
    {
        ins: "EI",
        code: 'FB'
    },
    {
        ins: "HLT",
        code: '76'
    },
    {
        ins: "INX B",
        code: '03'
    },
    {
        ins: "INX D",
        code: '13'
    },
    {
        ins: "INX H",
        code: '23'
    },
    {
        ins: "INX SP",
        code: '33'
    },
    {
        ins: "LDAX B",
        code: '0A'
    },
    {
        ins: "LDAX D",
        code: '1A'
    },
    {
        ins: "NOP",
        code: '00'
    },
    {
        ins: "PCHL",
        code: 'E9'
    },
    {
        ins: "POP B",
        code: 'C1'
    },
    {
        ins: "POP D",
        code: 'D1'
    },
    {
        ins: "POP H",
        code: 'E1'
    },
    {
        ins: "POP PSW",
        code: 'F1'
    },
    {
        ins: "PUSH B",
        code: 'C5'
    },
    {
        ins: "PUSH D",
        code: 'D5'
    },
    {
        ins: "PUSH H",
        code: 'E5'
    },
    {
        ins: "PUSH PSW",
        code: 'F5'
    },
    {
        ins: "RAL",
        code: '17'
    },
    {
        ins: "RAR",
        code: '1F'
    },
    {
        ins: "RC",
        code: 'D8'
    },
    {
        ins: "RET",
        code: 'C9'
    },
    {
        ins: "RIM",
        code: '20'
    },
    {
        ins: "RLC",
        code: '07'
    },
    {
        ins: "RM",
        code: 'F8'
    },
    {
        ins: "RNC",
        code: 'D0'
    },
    {
        ins: "RNZ",
        code: 'C0'
    },
    {
        ins: "RP",
        code: 'F0'
    },
    {
        ins: "RPE",
        code: 'E8'
    },
    {
        ins: "RPO",
        code: 'E0'
    },
    {
        ins: "RRC",
        code: '0F'
    },
    {
        ins: "RST 0",
        code: 'C7'
    },
    {
        ins: "RST 1",
        code: 'CF'
    },
    {
        ins: "RST 2",
        code: 'D7'
    },
    {
        ins: "RST 3",
        code: 'DF'
    },
    {
        ins: "RST 4",
        code: 'E7'
    },
    {
        ins: "RST 5",
        code: 'EF'
    },
    {
        ins: "RST 6",
        code: 'F7'
    },
    {
        ins: "RST 7",
        code: 'FF'
    },
    {
        ins: "RZ",
        code: 'C8'
    },
    {
        ins: "SIM",
        code: '30'
    },
    {
        ins: "SPHL",
        code: 'F9'
    },
    {
        ins: "STAX B",
        code: '02'
    },
    {
        ins: "STAX D",
        code: '12'
    },
    {
        ins: "STC",
        code: '37'
    },
    {
        ins: "XCHG",
        code: 'EB'
    },
    {
        ins: "XTHL",
        code: 'E3'
    }
]