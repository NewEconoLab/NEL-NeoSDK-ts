
module ThinNeo {
    export enum OpCode {
        // Constants
        PUSH0 = 0x00, // An empty array of bytes is pushed onto the stack.
        PUSHF = PUSH0,
        PUSHBYTES1 = 0x01, // 0x01-0x4B The next opcode bytes is data to be pushed onto the stack
        /// <summary>
        /// Push 2 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES2 = 0x02,
        /// <summary>
        /// Push 3 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES3 = 0x03,
        /// <summary>
        /// Push 4 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES4 = 0x04,
        /// <summary>
        /// Push 5 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES5 = 0x05,
        /// <summary>
        /// Push 6 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES6 = 0x06,
        /// <summary>
        /// Push 7 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES7 = 0x07,
        /// <summary>
        /// Push 8 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES8 = 0x08,
        /// <summary>
        /// Push 9 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES9 = 0x09,
        /// <summary>
        /// Push 10 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES10 = 0x0A,
        /// <summary>
        /// Push 11 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES11 = 0x0B,
        /// <summary>
        /// Push 12 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES12 = 0x0C,
        /// <summary>
        /// Push 13 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES13 = 0x0D,
        /// <summary>
        /// Push 14 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES14 = 0x0E,
        /// <summary>
        /// Push 15 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES15 = 0x0F,
        /// <summary>
        /// Push 16 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES16 = 0x10,
        /// <summary>
        /// Push 17 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES17 = 0x11,
        /// <summary>
        /// Push 18 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES18 = 0x12,
        /// <summary>
        /// Push 19 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES19 = 0x13,
        /// <summary>
        /// Push 20 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES20 = 0x14,
        /// <summary>
        /// Push 21 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES21 = 0x15,
        /// <summary>
        /// Push 22 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES22 = 0x16,
        /// <summary>
        /// Push 23 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES23 = 0x17,
        /// <summary>
        /// Push 24 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES24 = 0x18,
        /// <summary>
        /// Push 25 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES25 = 0x19,
        /// <summary>
        /// Push 26 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES26 = 0x1A,
        /// <summary>
        /// Push 27 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES27 = 0x1B,
        /// <summary>
        /// Push 28 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES28 = 0x1C,
        /// <summary>
        /// Push 29 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES29 = 0x1D,
        /// <summary>
        /// Push 30 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES30 = 0x1E,
        /// <summary>
        /// Push 31 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES31 = 0x1F,
        /// <summary>
        /// Push 32 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES32 = 0x20,
        /// <summary>
        /// Push 33 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES33 = 0x21,
        /// <summary>
        /// Push 34 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES34 = 0x22,
        /// <summary>
        /// Push 35 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES35 = 0x23,
        /// <summary>
        /// Push 36 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES36 = 0x24,
        /// <summary>
        /// Push 37 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES37 = 0x25,
        /// <summary>
        /// Push 38 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES38 = 0x26,
        /// <summary>
        /// Push 39 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES39 = 0x27,
        /// <summary>
        /// Push 40 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES40 = 0x28,
        /// <summary>
        /// Push 41 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES41 = 0x29,
        /// <summary>
        /// Push 42 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES42 = 0x2A,
        /// <summary>
        /// Push 43 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES43 = 0x2B,
        /// <summary>
        /// Push 44 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES44 = 0x2C,
        /// <summary>
        /// Push 45 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES45 = 0x2D,
        /// <summary>
        /// Push 46 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES46 = 0x2E,
        /// <summary>
        /// Push 47 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES47 = 0x2F,
        /// <summary>
        /// Push 48 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES48 = 0x30,
        /// <summary>
        /// Push 49 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES49 = 0x31,
        /// <summary>
        /// Push 50 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES50 = 0x32,
        /// <summary>
        /// Push 51 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES51 = 0x33,
        /// <summary>
        /// Push 52 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES52 = 0x34,
        /// <summary>
        /// Push 53 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES53 = 0x35,
        /// <summary>
        /// Push 54 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES54 = 0x36,
        /// <summary>
        /// Push 55 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES55 = 0x37,
        /// <summary>
        /// Push 56 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES56 = 0x38,
        /// <summary>
        /// Push 57 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES57 = 0x39,
        /// <summary>
        /// Push 58 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES58 = 0x3A,
        /// <summary>
        /// Push 59 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES59 = 0x3B,
        /// <summary>
        /// Push 60 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES60 = 0x3C,
        /// <summary>
        /// Push 61 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES61 = 0x3D,
        /// <summary>
        /// Push 62 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES62 = 0x3E,
        /// <summary>
        /// Push 63 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES63 = 0x3F,
        /// <summary>
        /// Push 64 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES64 = 0x40,
        /// <summary>
        /// Push 65 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES65 = 0x41,
        /// <summary>
        /// Push 66 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES66 = 0x42,
        /// <summary>
        /// Push 67 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES67 = 0x43,
        /// <summary>
        /// Push 68 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES68 = 0x44,
        /// <summary>
        /// Push 69 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES69 = 0x45,
        /// <summary>
        /// Push 70 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES70 = 0x46,
        /// <summary>
        /// Push 71 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES71 = 0x47,
        /// <summary>
        /// Push 72 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES72 = 0x48,
        /// <summary>
        /// Push 73 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES73 = 0x49,
        /// <summary>
        /// Push 74 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES74 = 0x4A,
        /// <summary>
        /// Push 75 bytes on the evaluation stack.
        /// </summary>
        PUSHBYTES75 = 0x4B,
        PUSHDATA1 = 0x4C, // The next byte contains the number of bytes to be pushed onto the stack.
        PUSHDATA2 = 0x4D, // The next two bytes contain the number of bytes to be pushed onto the stack.
        PUSHDATA4 = 0x4E, // The next four bytes contain the number of bytes to be pushed onto the stack.
        PUSHM1 = 0x4F, // The number -1 is pushed onto the stack.
        PUSH1 = 0x51, // The number 1 is pushed onto the stack.
        PUSHT = PUSH1,
        PUSH2 = 0x52, // The number 2 is pushed onto the stack.
        PUSH3 = 0x53, // The number 3 is pushed onto the stack.
        PUSH4 = 0x54, // The number 4 is pushed onto the stack.
        PUSH5 = 0x55, // The number 5 is pushed onto the stack.
        PUSH6 = 0x56, // The number 6 is pushed onto the stack.
        PUSH7 = 0x57, // The number 7 is pushed onto the stack.
        PUSH8 = 0x58, // The number 8 is pushed onto the stack.
        PUSH9 = 0x59, // The number 9 is pushed onto the stack.
        PUSH10 = 0x5A, // The number 10 is pushed onto the stack.
        PUSH11 = 0x5B, // The number 11 is pushed onto the stack.
        PUSH12 = 0x5C, // The number 12 is pushed onto the stack.
        PUSH13 = 0x5D, // The number 13 is pushed onto the stack.
        PUSH14 = 0x5E, // The number 14 is pushed onto the stack.
        PUSH15 = 0x5F, // The number 15 is pushed onto the stack.
        PUSH16 = 0x60, // The number 16 is pushed onto the stack.


        // Flow control
        NOP = 0x61, // Does nothing.
        JMP = 0x62,
        JMPIF = 0x63,
        JMPIFNOT = 0x64,
        CALL = 0x65,
        RET = 0x66,
        APPCALL = 0x67,
        SYSCALL = 0x68,
        TAILCALL = 0x69,
        
        // Stack
        DUPFROMALTSTACK = 0x6A,
        TOALTSTACK = 0x6B, // Puts the input onto the top of the alt stack. Removes it from the main stack.
        FROMALTSTACK = 0x6C, // Puts the input onto the top of the main stack. Removes it from the alt stack.
        XDROP = 0x6D,
        DUPFROMALTSTACKBOTTOM = 0x6E,
        XSWAP = 0x72,
        XTUCK = 0x73,
        DEPTH = 0x74, // Puts the number of stack items onto the stack.
        DROP = 0x75, // Removes the top stack item.
        DUP = 0x76, // Duplicates the top stack item.
        NIP = 0x77, // Removes the second-to-top stack item.
        OVER = 0x78, // Copies the second-to-top stack item to the top.
        PICK = 0x79, // The item n back in the stack is copied to the top.
        ROLL = 0x7A, // The item n back in the stack is moved to the top.
        ROT = 0x7B, // The top three items on the stack are rotated to the left.
        SWAP = 0x7C, // The top two items on the stack are swapped.
        TUCK = 0x7D, // The item at the top of the stack is copied and inserted before the second-to-top item.


        // Splice
        CAT = 0x7E, // Concatenates two strings.
        SUBSTR = 0x7F, // Returns a section of a string.
        LEFT = 0x80, // Keeps only characters left of the specified point in a string.
        RIGHT = 0x81, // Keeps only characters right of the specified point in a string.
        SIZE = 0x82, // Returns the length of the input string.


        // Bitwise logic
        INVERT = 0x83, // Flips all of the bits in the input.
        AND = 0x84, // Boolean and between each bit in the inputs.
        OR = 0x85, // Boolean or between each bit in the inputs.
        XOR = 0x86, // Boolean exclusive or between each bit in the inputs.
        EQUAL = 0x87, // Returns 1 if the inputs are exactly equal, 0 otherwise.
        //OP_EQUALVERIFY = 0x88, // Same as OP_EQUAL, but runs OP_VERIFY afterward.
        //OP_RESERVED1 = 0x89, // Transaction is invalid unless occuring in an unexecuted OP_IF branch
        //OP_RESERVED2 = 0x8A, // Transaction is invalid unless occuring in an unexecuted OP_IF branch


        // Arithmetic
        // Note: Arithmetic inputs are limited to signed 32-bit integers, but may overflow their output.
        INC = 0x8B, // 1 is added to the input.
        DEC = 0x8C, // 1 is subtracted from the input.
        SIGN = 0x8D,
        NEGATE = 0x8F, // The sign of the input is flipped.
        ABS = 0x90, // The input is made positive.
        NOT = 0x91, // If the input is 0 or 1, it is flipped. Otherwise the output will be 0.
        NZ = 0x92, // Returns 0 if the input is 0. 1 otherwise.
        ADD = 0x93, // a is added to b.
        SUB = 0x94, // b is subtracted from a.
        MUL = 0x95, // a is multiplied by b.
        DIV = 0x96, // a is divided by b.
        MOD = 0x97, // Returns the remainder after dividing a by b.
        SHL = 0x98, // Shifts a left b bits, preserving sign.
        SHR = 0x99, // Shifts a right b bits, preserving sign.
        BOOLAND = 0x9A, // If both a and b are not 0, the output is 1. Otherwise 0.
        BOOLOR = 0x9B, // If a or b is not 0, the output is 1. Otherwise 0.
        NUMEQUAL = 0x9C, // Returns 1 if the numbers are equal, 0 otherwise.
        NUMNOTEQUAL = 0x9E, // Returns 1 if the numbers are not equal, 0 otherwise.
        LT = 0x9F, // Returns 1 if a is less than b, 0 otherwise.
        GT = 0xA0, // Returns 1 if a is greater than b, 0 otherwise.
        LTE = 0xA1, // Returns 1 if a is less than or equal to b, 0 otherwise.
        GTE = 0xA2, // Returns 1 if a is greater than or equal to b, 0 otherwise.
        MIN = 0xA3, // Returns the smaller of a and b.
        MAX = 0xA4, // Returns the larger of a and b.
        WITHIN = 0xA5, // Returns 1 if x is within the specified range (left-inclusive), 0 otherwise.


        // Crypto
        //RIPEMD160 = 0xA6, // The input is hashed using RIPEMD-160.
        SHA1 = 0xA7, // The input is hashed using SHA-1.
        SHA256 = 0xA8, // The input is hashed using SHA-256.
        HASH160 = 0xA9,
        HASH256 = 0xAA,
        //因为这个hash函数可能仅仅是csharp 编译时专用的
        CSHARPSTRHASH32 = 0xAB,
        //这个是JAVA专用的
        JAVAHASH32 = 0xAD,

        CHECKSIG = 0xAC,
        CHECKMULTISIG = 0xAE,


        // Array
        ARRAYSIZE = 0xC0,
        PACK = 0xC1,
        UNPACK = 0xC2,
        PICKITEM = 0xC3,
        SETITEM = 0xC4,
        NEWARRAY = 0xC5, //用作引用類型
        NEWSTRUCT = 0xC6, //用作值類型
        /// <summary>
        /// A Map is created and put on top of the main stack.
        /// </summary>
        NEWMAP = 0xC7,
        /// <summary>
        /// The item on top of main stack is removed and appended to the second item on top of the main stack.
        /// </summary>
        APPEND = 0xC8,
        /// <summary>
        /// An array is removed from the top of the main stack and its elements are reversed.
        /// </summary>
        REVERSE = 0xC9,
        /// <summary>
        /// An input index n (or key) and an array (or map) are removed from the top of the main stack. Element array[n] (or map[n]) is removed.
        /// </summary>
        REMOVE = 0xCA,
        /// <summary>
        /// An input index n (or key) and an array (or map) are removed from the top of the main stack. Puts True on top of main stack if array[n] (or map[n]) exist, and False otherwise.
        /// </summary>
        HASKEY = 0xCB,
        /// <summary>
        /// A map is taken from top of the main stack. The keys of this map are put on top of the main stack.
        /// </summary>
        KEYS = 0xCC,
        /// <summary>
        /// A map is taken from top of the main stack. The values of this map are put on top of the main stack.
        /// </summary>
        VALUES = 0xCD,

        SWITCH = 0xD0,

        // Exceptions
        THROW = 0xF0,
        THROWIFNOT = 0xF1
    }
}