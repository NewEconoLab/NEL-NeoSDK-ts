namespace ThinSdk {
    export class Contract {
        public contractHash: Neo.Uint160;
        public scriptBuilder: ThinNeo.ScriptBuilder;
        constructor(_contractHash: Neo.Uint160, _scriptBuild: ThinNeo.ScriptBuilder) {
            this.contractHash = _contractHash;
            this.scriptBuilder = _scriptBuild;
        }

        public Call(method: string, ...args: any) {
            Contract.emitAppCall(this.scriptBuilder, this.contractHash, method, ...args);
        }
        public static emitAppCall(sb:ThinNeo.ScriptBuilder,scriptHash: Neo.Uint160, operation: string, ...args: any[]) {
            //for (int i = args.Length - 1; i >= 0; i--)
            //this.scriptBuilder.EmitPush(args[i]);
            //this.scriptBuilder.EmitPush(args.Length);
            //this.scriptBuilder.Emit(OpCode.PACK);
            //this.scriptBuilder.EmitPush(operation);
            //this.scriptBuilder.EmitPush(scriptHash);
            //this.scriptBuilder.EmitSysCall("System.Contract.Call");
            if (args && args.length > 0) {
                sb.EmitParamJson(args);
            }
            else {
                sb.EmitPushNumber(Neo.BigInteger.Zero);
                sb.Emit(ThinNeo.OpCode.NEWARRAY);
            }
            sb.EmitPushString(operation);
            sb.EmitPushBytes(new Uint8Array(scriptHash.bits.buffer));
            sb.EmitSysCall("System.Contract.Call");
            return sb;
        }
    }
    interface Argument {
        type: "String" | "Boolean" | "Hash160" | "Hash256" | "Integer" | "ByteArray" | "Array" | "Address";
        value: string | number | boolean | Array<Argument>
    }
}