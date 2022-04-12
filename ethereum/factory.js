import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x9EB5FB1aD583DA6B12D11B0f6dE0672a15FC574c"
);

export default instance;
