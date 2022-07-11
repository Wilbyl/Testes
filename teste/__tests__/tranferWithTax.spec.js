import {Conta} from "../conta"

describe("transferWithTax", () => {
    test('devera ser cobrado 100 de uma conta que possui 1000 ',()=>{
        const payerAccount = new Conta (1,1000);
        const reciverAccount = new Conta (2, 1000);

        const updateAccount= tranferWithTax(payerAccount, receiverAccount,500)

        expect(updateAccount)toEqual(
            expect.arrayContaining([
                
            ]

            )
        )
    })
});