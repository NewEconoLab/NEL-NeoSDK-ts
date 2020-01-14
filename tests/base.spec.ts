///<reference path="../dist/neo-ts.d.ts"/>
require("../dist/rollup/aes")
require("../dist/component/aes")
require("../dist/component/mode-ecb")
require("../dist/component/pad-nopadding")
require("../dist/jsrsasign")   // 引用 neo的 sdk
require("../dist/scrypt")   // 引用 neo的 sdk
require("../dist/neo-ts")   // 引用 neo的 sdk

test('string.hexToBytes bytes.toHexString', () => {
    expect("0xa1760976db5fcdfab2a9930e8f6ce875b2d18225".hexToBytes().toHexString()).toBe("a1760976db5fcdfab2a9930e8f6ce875b2d18225");
});

// test("BigInteger test", () => {
//     expect(Neo.BigInteger.Zero.add(new Neo.BigInteger(1222)).add(new Neo.BigInteger(2312222222)).subtract(new Neo.BigInteger(33333)).toString()).toBe("2312189011")
// })