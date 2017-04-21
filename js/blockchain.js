function blockChain(){

  function origin(){
    this.blockAddress = "coinbase";
    
  }

  function block(previousBlockAddress, value, senderAddress, recipAddress){
    this.previousBlockAddress = previousBlockAddress;
    this.transactionValue = value;
    this.senderAddress = senderAddress;
    this.recipAddress = recipAddress;
  }
  this.first = new block()
}
