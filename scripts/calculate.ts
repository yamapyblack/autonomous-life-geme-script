import { Contract } from "ethers";
import { ethers } from "hardhat";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const worldAddr = "";
  //set merkle root
  const world = (await ethers.getContractAt("World", worldAddr)) as Contract;
  while (true) {
    await sleep(5000);
    const tx = await world.calculate();
    console.log(tx);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
