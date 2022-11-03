const DispensingMachine=artifacts.require("DispensingMachine");
contract("DispensingMachine",async(accounts)=>
{
       before(async()=>
       {
          instance=await DispensingMachine.deployed();
       }
       )
      it('ensures that the starting balance of the dispensing machine is 200',
      async()=>
      {
          let balance=await instance.getDispensingMachineBalance();
          assert.equal(balance,200,'The initial balance shoud be 200 products'); 
          
      })
      
      it('ensures the balance of vendering machine can be updated',async()=>
      {
        await instance.restock(200);
        let balance=await instance.getDispensingMachineBalance();
        assert.equal(balance,400,'The balance shoud be 400 products'); 
          

      })
      it('allows product can be purchased',async()=>
      {
           await instance.purchase(1,{from:accounts[0],value:web3.utils.toWei('5','ether')});
           let balance=await instance.getDispensingMachineBalance();
           assert.equal(balance,399,'The  balance shoud be 399 products'); 
      })

    })