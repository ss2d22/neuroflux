// deploy/SwapContract.ts

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // Replace with the addresses of your actual tokens
  const token1Address = "0xa47f43de2f9623acb395ca4905746496d2014d57";
  const token2Address = "0xfe97e85d13abd9c1c33384e796f10b73905637ce";

  await deploy("SwapContract", {
    from: deployer,
    args: [token1Address, token2Address],
    log: true,
  });
};

export default func;
func.tags = ["SwapContract"];