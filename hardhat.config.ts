import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [],
    },
    opgoerli: {
      url: "https://goerli.optimism.io",
      accounts: [],
    },
    hardhat: {},
  },
};

export default config;
