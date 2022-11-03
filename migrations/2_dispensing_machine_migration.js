const DispensingMachine=artifacts.require("DispensingMachine");
module.exports=function(deployer)
{   
   deployer.deploy(DispensingMachine);

}