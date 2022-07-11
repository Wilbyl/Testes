import { Conta } from "../conta";
import { transfer } from "../transfer";

describe("transfer", () => {
  test("it should transfer 500 from an account with 1000 to another with 0", () => {
    const payerAccount = new Conta(1, 1000);
    const receiverAccount = new Conta(2, 0);

    const updateAccount = transfer(payerAccount, receiverAccount, 500);

    // expect(updateAccount.length).toBe(2);
    // expect(updateAccount[0].id).toBe(1);
    // expect(updateAccount[0].balance).toBe(500);
    
    // expect(updateAccount[1].id).toBe(2);
    // expect(updateAccount[1].balance).toBe(500);

    expect(updateAccount).toHaveLength(2);

    expect(updateAccount).toEqual(
        expect.arrayContaining([
            expect.objectContaining({id:1 ,balance:500}),
            expect.objectContaining({id:2 ,balance:500})
    ])

    );

  });

  test('it should throw an erro when amout is negative', ()=> {
    const payerAccount = new Conta (1,1000);
    const reciverAccount = new Conta (2, 1000);

    const updateAccount = ()=> {
        tranfer(payerAccount, reciverAccount, -10);
    }
    expect(updateAccount).toThrow(Error('tranferencia errada = -10'))
  })

  test('it should throw an erro when amout is 0', ()=> {
    const payerAccount = new Conta (1,1000);
    const reciverAccount = new Conta (2, 1000);

    const updateAccount = ()=> {
        tranfer(payerAccount, reciverAccount, 0);
    }
        expect(updateAccount).toThrow(Error('tranferencia errada = 0'))
  })
});
