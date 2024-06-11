# BUILDH3R_JUNE_[Zksync]
# Interacting with Zksync
 ## **Build a smart contract to send messages with Zeek**
 The smart contract will store messages from users and emit events with replies from Zeek. The entire code is as follows:
 ![ZeekMessage](https://github.com/emmyoat/BUILDH3R_JUNE_/assets/120312489/8eaa251d-4b5b-49b5-a387-0e87263ebd1d)
The Solidity smart contract contains two functions:
- sendMessage stores the messages sent by users in the messages state variable.
- getTotalMessages returns the number of messages stored in the smart contract.
- getLastMessage returns the last message sent.
  
 Then i enter a name for the project and clicked on “Deploy” to trigger the smart contract compilation and deployment.
![ZeekMessage](https://github.com/emmyoat/BUILDH3R_JUNE_/assets/120312489/206d6cf9-c7c6-42d6-a8d5-1b6590fc7dd8)
Once compiled i sign the transaction with your wallet and wait until it's processed. 
The “Write Functions” section contains the form to interact with the sendMessage function. Write a message, click the “Run” button and confirm the transaction in your wallet. You’ll see that the getTotalMessages is updated to 1 and getLastMessage returns the message you just sent.

![ZeekMessage2](https://github.com/emmyoat/BUILDH3R_JUNE_/assets/120312489/e0c804d7-1f8e-4aab-8994-87b114f1c77a)

## Check the contract in explorer
I copied the smart contract address from Atlas/Remix and searched it via the zkSync Sepolia Testnet explorer. I saw a transaction from the message i sent.
![CA](https://github.com/emmyoat/BUILDH3R_JUNE_/assets/120312489/51e1c61c-7b9a-46fb-be86-2484d7391bcb)

# **Create an ERC20 token**
The ERC20 token i am to deploy will allow users to mint and burn tokens. 

### Deploy the smart contract
I used Atlas for the deployment ![TestToken](https://github.com/emmyoat/BUILDH3R_JUNE_/assets/120312489/2796cc68-07f8-4729-8cdf-2d160365eba2)
 I changed the selected network to “zkSync Sepolia Testnet“ and clicked on "Deploy" to trigger the smart contract compilation and deployment.
Once compiled i signed the transaction with my wallet and waited until its processed. 

## **Interact with the ERC20 contract**
I used the following variables in my code
- TOKEN_CONTRACT_ADDRESS: 0xFe6d68976481fCD6C4d9D011059DC4065E8e96Ed
- RECEIVER_WALLET: 0x9Dd0131c3312c189D3F9B073Dbe00693C5920d16
- TOKEN_AMOUNT: 20000000
  I deployed the contract by clicking the “Deploy” button to run the script and see the output in the terminal.
![Mint-token](https://github.com/emmyoat/BUILDH3R_JUNE_/assets/120312489/fec8a994-8429-4674-971b-4749bad3c4ce)
To confirm that the address recieved the token i searched the zkSync Sepolia Testnet explorer and search the receiver wallet address
![Blockexplorer](https://github.com/emmyoat/BUILDH3R_JUNE_/assets/120312489/5b111aa5-4410-420f-b080-525a13896c90)

  # **Using Paymaster**
Although application developers are encouraged to create their own paymaster smart contract, zkSync provides a testnet paymaster for convenience and testing purposes.
The testnet paymaster address is 0x3cb2b87d10ac01736a65688f3e0fb1b070b3eea3
## Interacting with the testnet paymaster
I interacted with the ZeekMessages.sol contract that i created earlier and use the ERC20 token that was deployed to pay the transaction fees.
![paymaster-transacation](https://github.com/emmyoat/BUILDH3R_JUNE_/assets/120312489/ea82ca3c-b367-4bfb-b822-0398a70f177f)
Then i clicked the Deploy button to deploy the contract
only the ERC20 balance decreased, meaning the fee was paid with the ERC20 token instead of ETH.












