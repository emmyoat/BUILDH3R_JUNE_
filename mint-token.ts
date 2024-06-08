import { AtlasEnvironment } from "atlas-ide";
import TokenArtifact from "../artifacts/TestToken";
import * as ethers from "ethers";

// Address of the ERC20 token contract
const TOKEN_CONTRACT_ADDRESS = "0x953282b3299BA4E397c3c05A3067b5815c9926aB"
// Wallet that will receive tokens
const RECEIVER_WALLET    = "0x9Dd0131c3312c189D3F9B073Dbe00693C5920d16";
// Amount of tokens to mint in ETH format, e.g. 1.23
const TOKEN_AMOUNT    = "20000000";

export async function main (atlas: AtlasEnvironment) {
  const provider = new ethers.providers.Web3Provider(atlas.provider);
  const wallet = provider.getSigner();

  // initialise token contract with address, abi and signer
  const tokenContract= new ethers.Contract(TOKEN_CONTRACT_ADDRESS, TokenArtifact.TestToken.abi, wallet);

  console.log("Minting tokens...");
  const tx = await tokenContract.mint(RECEIVER_WALLET, ethers.utils.parseEther(TOKEN_AMOUNT));
  await tx.wait();
  

  console.log("Success!");
  console.log(`The account ${RECEIVER_WALLET} now has ${await tokenContract.balanceOf(RECEIVER_WALLET)} tokens`)

}
