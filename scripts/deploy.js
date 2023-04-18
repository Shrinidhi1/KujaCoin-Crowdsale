const hre = require("hardhat");

async function main() {
 //const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  //const unlockTime = currentTimestampInSeconds + 60;

  //const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const Token = await hre.ethers.getContractFactory("Token");
  const Token1 = await Token.deploy(10,5);

  await Token1.deployed();

  console.log("Kuja Token Deployed..",Token1.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
