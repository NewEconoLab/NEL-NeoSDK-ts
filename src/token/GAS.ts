namespace ThinSdk.Token {
    export class GAS extends BaseToken {
        constructor(sb: ThinNeo.ScriptBuilder) {
            super(Neo.Uint160.parse("0xa1760976db5fcdfab2a9930e8f6ce875b2d18225"), sb)
        }
    }
}