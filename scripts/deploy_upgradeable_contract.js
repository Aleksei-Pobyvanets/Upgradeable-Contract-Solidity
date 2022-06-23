const { ethers, upgrades } = require('hardhat');

async function main () {
    // const EtherStore = await ethers.getContractFactory('EtherStore');
    // console.log('Deploying EtherStore...');
    // const etherStore = await upgrades.deployProxy(EtherStore);
    // await etherStore.deployed();
    // console.log('Box deployed to:', etherStore.address);

    const Attack = await ethers.getContractFactory('Attack');
    console.log('Deploying attack...');
    const attack = await upgrades.deployProxy(Attack);
    await attack.deployed();
    console.log('attack deployed to:', attack.address);
}

main();