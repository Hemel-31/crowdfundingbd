const her = require("hardhat");

async function main(){
    const Crowd_Funding = await her.ethers.getContractFactory("Crowd_Funding");
    const crowd_Funding = await Crowd_Funding.deploy();

    await crowd_Funding.deployed();

    console.log(`Crowd_Funding deployed to ${crowd_Funding.address}`);
}

main().catch((error)=>{
    console.error(error);
    process.exitCode = 1;
});