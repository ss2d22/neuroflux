import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployEventTicket: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deploy, log } = hre.deployments;
    const { deployer } = await hre.getNamedAccounts();

    log("Deploying EventTicket contract");
    const eventTicket = await deploy("EventTicket", {
        from: deployer,
        args: [], // Add constructor arguments inside this array if your contract has any
        log: true,
    });

    log(`EventTicket deployed at ${eventTicket.address}`);
};

export default deployEventTicket;
deployEventTicket.tags = ["EventTicket"];
