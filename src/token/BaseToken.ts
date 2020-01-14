namespace ThinSdk.Token{
    export class BaseToken extends Contract {
        constructor(_contractHash: Neo.Uint160, _scriptBuilder: ThinNeo.ScriptBuilder) {
            super(_contractHash, _scriptBuilder);
        }
        public transfer(from: string, to: string, amount: number) {
            this.Call("transfer", `(addr)${from}`, `(addr)${to}`, `(integer)${amount}`);
            this.scriptBuilder.Emit(ThinNeo.OpCode.THROWIFNOT);
        }

        public balanceOf(...accounts: Neo.Uint160[]) {
            for (const account of accounts) {
                this.Call("balanceOf", account)
            }
        }

        public balanceOf_Unite(...accounts: Neo.Uint160[]) {
            this.scriptBuilder.EmitPushNumber(Neo.BigInteger.Zero);
            for (const account of accounts) {
                this.Call("balanceOf", account)
                this.scriptBuilder.Emit(ThinNeo.OpCode.ADD);
            }
        }

        public decimals() {
            this.Call("decimals");
        }

        public symbol() {
            this.Call("symbol");
        }
    }    
}