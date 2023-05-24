const statement = require("./src/statement.js");


test("1 is 1", () => {
    const invoice = {
        customer: "BigCo",
        performances: [
            { playID: "hamlet", audience: 55 },
            { playID: "as-like", audience: 35 },
            { playID: "othello", audience: 40 },
        ],
    };
    const plays = {
        hamlet: { name: "Hamlet", type: "tragedy" },
        "as-like": { name: "As YOu Like it", type: "comedy" },
        othello: { name: "Othello", type: "tragedy" },
    };
    const expectedResult =
        "청구내역 (고객명: BigCo)\n" +
        "Hamlet: $0.00 55석\n" +
        "As YOu Like it: $0.00 35석\n" +
        "Othello: $0.00 40석\n" +
        "총액 $0.00\n" +
        "적립 포인트 47점\n";

    const result = statement(invoice, plays);
    expect(result).toBe(expectedResult);
});
