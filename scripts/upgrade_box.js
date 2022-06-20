const { ethers, upgrades } = require('hardhat');

async function main () {
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy('0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e', BoxV2);
  console.log('Box upgraded');
}

main();
