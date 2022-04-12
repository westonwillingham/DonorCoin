import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x5c720e366e3f6D0E7994Fa0A0544Df9C9B7599E5"
);

export default instance;
