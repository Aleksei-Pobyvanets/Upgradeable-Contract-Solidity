const { ethers, upgrades } = require('hardhat');

async function main () {
  const DepositFunds = await ethers.getContractFactory('DepositFunds');
  console.log('Deploying DepositFunds...');
  const depositFunds = await upgrades.deployProxy(DepositFunds);
  await depositFunds.deployed();
  console.log('ContractV1 deployed to:', depositFunds.address);

  const Attack = await ethers.getContractFactory('Attack');
  console.log('Deploying attack...');
  const attack = await upgrades.deployProxy(Attack);
  await attack.deployed();
  console.log('attack deployed to:', attack.address);
}

main();