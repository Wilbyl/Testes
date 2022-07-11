export function transfer(payer, reciver, tranferAmount) {
    if(transfer>=0){
  payer.balance = payer.balance - tranferAmount;
  reciver.balance = reciver.balance + tranferAmount;
  return [payer, reciver];
    }else{
        throw new Error(`operaçao invalida ${tranferAmount}`)
    }
}
