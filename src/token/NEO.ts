namespace ThinSdk.Token {
    export class NEO extends BaseToken {
        constructor(sb: ThinNeo.ScriptBuilder) {
            super(Neo.Uint160.parse("0x43cf98eddbe047e198a3e5d57006311442a0ca15"),sb)
        }
    }
}