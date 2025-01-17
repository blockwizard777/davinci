const DavinciMultipleToken = {
  "contractName": "DavinciMultipleToken",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "contractURI",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "tokenURIPrefix",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address[]",
          "name": "recipients",
          "type": "address[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "bps",
          "type": "uint256[]"
        }
      ],
      "name": "SecondarySaleFees",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "SignerAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "SignerRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "_ids",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "_values",
          "type": "uint256[]"
        }
      ],
      "name": "TransferBatch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "_value",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "URI",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_owners",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_ids",
          "type": "uint256[]"
        }
      ],
      "name": "balanceOfBatch",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "creators",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "fees",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getFeeBps",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getFeeRecipients",
      "outputs": [
        {
          "internalType": "address payable[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isSigner",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceSigner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "_ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_values",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeBatchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "contractURI",
          "type": "string"
        }
      ],
      "name": "setContractURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "tokenURIPrefix",
          "type": "string"
        }
      ],
      "name": "setTokenURIPrefix",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenURIPrefix",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "uri",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "addSigner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "removeSigner",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address payable",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "internalType": "struct ERC1155Base.Fee[]",
          "name": "fees",
          "type": "tuple[]"
        },
        {
          "internalType": "uint256",
          "name": "supply",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "uri",
          "type": "string"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.12+commit.27d51765\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"contractURI\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"tokenURIPrefix\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"recipients\",\"type\":\"address[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"bps\",\"type\":\"uint256[]\"}],\"name\":\"SecondarySaleFees\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"SignerAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"SignerRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"_ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"_values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"_value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addSigner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"_owners\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contractURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"creators\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"fees\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"getFeeBps\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"getFeeRecipients\",\"outputs\":[{\"internalType\":\"address payable[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isSigner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address payable\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"internalType\":\"struct ERC1155Base.Fee[]\",\"name\":\"fees\",\"type\":\"tuple[]\"},{\"internalType\":\"uint256\",\"name\":\"supply\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"uri\",\"type\":\"string\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"removeSigner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceSigner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"_ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_values\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"contractURI\",\"type\":\"string\"}],\"name\":\"setContractURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"tokenURIPrefix\",\"type\":\"string\"}],\"name\":\"setTokenURIPrefix\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenURIPrefix\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_id\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"balanceOf(address,uint256)\":{\"params\":{\"_id\":\"ID of the Token\",\"_owner\":\"The address of the token holder\"},\"returns\":{\"_0\":\"The _owner's balance of the Token type requested\"}},\"balanceOfBatch(address[],uint256[])\":{\"params\":{\"_ids\":\"ID of the Tokens\",\"_owners\":\"The addresses of the token holders\"},\"returns\":{\"_0\":\"The _owner's balance of the Token types requested (i.e. balance for each (owner, id) pair)\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"_operator\":\"Address of authorized operator\",\"_owner\":\"The owner of the Tokens\"},\"returns\":{\"_0\":\"True if the operator is approved, false if not\"}},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"details\":\"Caller must be approved to manage the tokens being transferred out of the `_from` account (see \\\"Approval\\\" section of the standard). MUST revert if `_to` is the zero address. MUST revert if length of `_ids` is not the same as length of `_values`. MUST revert if any of the balance(s) of the holder(s) for token(s) in `_ids` is lower than the respective amount(s) in `_values` sent to the recipient. MUST revert on any other error. MUST emit `TransferSingle` or `TransferBatch` event(s) such that all the balance changes are reflected (see \\\"Safe Transfer Rules\\\" section of the standard). Balance changes and events MUST follow the ordering of the arrays (_ids[0]/_values[0] before _ids[1]/_values[1], etc). After the above conditions for the transfer(s) in the batch are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call the relevant `ERC1155TokenReceiver` hook(s) on `_to` and act appropriately (see \\\"Safe Transfer Rules\\\" section of the standard).\",\"params\":{\"_data\":\"Additional data with no specified format, MUST be sent unaltered in call to the `ERC1155TokenReceiver` hook(s) on `_to`\",\"_from\":\"Source address\",\"_ids\":\"IDs of each token type (order and length must match _values array)\",\"_to\":\"Target address\",\"_values\":\"Transfer amounts per token type (order and length must match _ids array)\"}},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"details\":\"Caller must be approved to manage the tokens being transferred out of the `_from` account (see \\\"Approval\\\" section of the standard). MUST revert if `_to` is the zero address. MUST revert if balance of holder for token `_id` is lower than the `_value` sent. MUST revert on any other error. MUST emit the `TransferSingle` event to reflect the balance change (see \\\"Safe Transfer Rules\\\" section of the standard). After the above conditions are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call `onERC1155Received` on `_to` and act appropriately (see \\\"Safe Transfer Rules\\\" section of the standard).\",\"params\":{\"_data\":\"Additional data with no specified format, MUST be sent unaltered in call to `onERC1155Received` on `_to`\",\"_from\":\"Source address\",\"_id\":\"ID of the token type\",\"_to\":\"Target address\",\"_value\":\"Transfer amount\"}},\"setApprovalForAll(address,bool)\":{\"details\":\"MUST emit the ApprovalForAll event on success.\",\"params\":{\"_approved\":\"True if the operator is approved, false to revoke approval\",\"_operator\":\"Address to add to the set of authorized operators\"}},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"},\"uri(uint256)\":{\"details\":\"URIs are defined in RFC 3986. The URI may point to a JSON file that conforms to the \\\"ERC-1155 Metadata URI JSON Schema\\\".\",\"returns\":{\"_0\":\"URI string\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"balanceOf(address,uint256)\":{\"notice\":\"Get the balance of an account's Tokens.\"},\"balanceOfBatch(address[],uint256[])\":{\"notice\":\"Get the balance of multiple account/token pairs\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Queries the approval status of an operator for a given owner.\"},\"safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)\":{\"notice\":\"Transfers `_values` amount(s) of `_ids` from the `_from` address to the `_to` address specified (with safety call).\"},\"safeTransferFrom(address,address,uint256,uint256,bytes)\":{\"notice\":\"Transfers `_value` amount of an `_id` from the `_from` address to the `_to` address specified (with safety call).\"},\"setApprovalForAll(address,bool)\":{\"notice\":\"Enable or disable approval for a third party (\\\"operator\\\") to manage all of the caller's tokens.\"},\"uri(uint256)\":{\"notice\":\"A distinct Uniform Resource Identifier (URI) for a given token.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/Users/home/Sites/davinci/davinci-contracts/contracts/token/DavinciMultipleToken.sol\":\"DavinciMultipleToken\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000},\"remappings\":[]},\"sources\":{\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/Common.sol\":{\"keccak256\":\"0xfbb4eddff8b2a351e23740298be48a85c99085c46e1bec217726770535497034\",\"urls\":[\"bzz-raw://e6a8798b544bc21e42f913ee5769c59f4398320fbaf0a7e74b96241926886059\",\"dweb:/ipfs/QmX1uhrW5JQjigaQZ7NqY31VUwtmGXamDbc2kTtoMDcJfk\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/ERC1155.sol\":{\"keccak256\":\"0x964231fd3251c7c167d3c56218a6fe1d149868ab7c44ff13968ae86986f65f33\",\"urls\":[\"bzz-raw://d4fc22ec1d91f2c4b545d7e08266a2dd3861e7aca279b578a809adfb098373ac\",\"dweb:/ipfs/QmagHL9hQ3VaRJAqVq7wybnBXEqck5BTuxqZ4q4mAXJwKA\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/ERC1155Base.sol\":{\"keccak256\":\"0x1f3629014a55049628417f5d6ba876a819dc8953675cd684d5b9b95f11288e06\",\"urls\":[\"bzz-raw://8112a6a89c351bb8a7f0ea3911319fbd7d50e6d0592fe1161208a5440504a2b4\",\"dweb:/ipfs/QmbYj6SfdEhVQm9a6wDFt6x4vbdbwP1TMkhGaZpYGFfuRW\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/ERC1155MetadataURI.sol\":{\"keccak256\":\"0x7f1a6a61d22edbaa70fbe00dddea7e90694f721de21eee2fe48d91791305b294\",\"urls\":[\"bzz-raw://a7359018ad0efe6f1ac71e1c9f5bb536225e9f54bcb41fc6139b94d43ab70a1a\",\"dweb:/ipfs/QmWmSHLasMohwjBigkRpzdENwtQiZYNXHcmhbuo13NrfTa\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/ERC165.sol\":{\"keccak256\":\"0x22d052c0d5b45f041d556896ef7592011361d4b6f854191bb00d7e8ef6c030d9\",\"urls\":[\"bzz-raw://d3d19bf368d3e0d25ae4d779508242fd08c976dbb49dec63f3e8151278f5a8c9\",\"dweb:/ipfs/QmQ5RWSr91yhaK9qybHkKHsdygpBtjabwxuaeMiJWvnuw8\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/HasContractURI.sol\":{\"keccak256\":\"0x2b7f23d3e395e328fb75160e409d2c7fcb804b881513fbe7ab6d9a58e26998dd\",\"urls\":[\"bzz-raw://c5a0ce0d795368d68ce6405bc701a68cc7f704bbd114eb82f949280672a62a0b\",\"dweb:/ipfs/Qmew57iRJC9eAL2u1RNofFPzpuy4xnjaTDVdqd9ph9Q7yD\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/HasSecondarySaleFees.sol\":{\"keccak256\":\"0x71b91263c4c4775dc5fc4046d8777039c223b3ece584e997ec1a32e85de1bf1f\",\"urls\":[\"bzz-raw://a6dadabed0b4bfc854839415cd918402e47f93e9041dc31153cc6b650f48ee98\",\"dweb:/ipfs/QmPTMBBoUVrtirPjnTgBbqAoDcRBMRVH7oZQyFKk51Bdsp\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/HasTokenURI.sol\":{\"keccak256\":\"0xf8691e795fc9cb04d3d501eca489a4e790b81c40d20fbc08952509452eb285fb\",\"urls\":[\"bzz-raw://4ffc15b8099e7981cdb5a45c346affd7c20a4222cee651af2fa2d0e82a8abe62\",\"dweb:/ipfs/QmZNyShUPSxyqCksfdtgiangG4k1kb53C9oaRBz5Xvy5qp\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/interface/ERC1155TokenReceiver.sol\":{\"keccak256\":\"0x14aab1ba387f06215b7171ffd33cedc2dfbf85f09c47d72453c5e19e9170603c\",\"urls\":[\"bzz-raw://f30113e5b9b49de95cf12779327f8ba03292061ded3e5e55e1ae73e81a1b58bf\",\"dweb:/ipfs/QmbgG38YERMsdHjS1yNMwpdVvXEhGc4t5o4qQWi75eBzPW\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/interface/IERC1155.sol\":{\"keccak256\":\"0xc2463ae25a0ba4d32f72b6e62e5177e85341f89b5a6f734f3c9558e42cb14665\",\"urls\":[\"bzz-raw://bc277f3dd44f3ac4d1d9e04e7e913eed1b5c4b96a6512cfbcc92f51694126ac7\",\"dweb:/ipfs/QmRZkFf3tQ6jBuAJLDiKKwNjcxvdDo8NbZhawxp3cJVbr9\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/interface/IERC1155MetadataURI.sol\":{\"keccak256\":\"0xdc490dfff3a55f19c8d3975b90e70d24e90ac9a1e94a1caf67d07c6cf3f4ad58\",\"urls\":[\"bzz-raw://baa020956b7575150f6dd55eee0cf71c6896710826b7c52278241336c9b2e4b9\",\"dweb:/ipfs/QmbYV1i4wySmoNK9zbcvKGZNN81sjVzxydEomM5UUcxQ3e\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/interface/IERC165.sol\":{\"keccak256\":\"0xd733b0a4f0cbff05a0e7366c9059e0f3bc4a27930a3dea93dc8054adf7a1e053\",\"urls\":[\"bzz-raw://daeaca3827b4df16041b007a045fedd75a3d15e4a75050c83ca53877dfa30aec\",\"dweb:/ipfs/QmSgGXbMNmgPpLZDXpcyEDqvm7QAYTxtmxJpi7KpbBspzh\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/utils/Roles.sol\":{\"keccak256\":\"0x30dc5e88d871dde9221d8a2894f571d0d35d66b9d581803ceb73ad63265dbbb0\",\"urls\":[\"bzz-raw://3a0aa0a1ae25f15782336153b8ce86218e54444c2a0dad0a9f96e7677d797945\",\"dweb:/ipfs/QmVBwRkBk3h5jaQ8MkicnpH4U1GykMbxa7JEsFQBgDeNSM\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/utils/SignerRole.sol\":{\"keccak256\":\"0xb038d5e71a8d7a1c35e89e0ca3ec80fcb6678321894dcf205c449cc8a6e4d048\",\"urls\":[\"bzz-raw://d2eaf74d3fda869c2bf62a1d95ac9ac5ffc96546679327bbf5d719217a9446f7\",\"dweb:/ipfs/QmfD17Z9wEF71Bc8n9bLHZEXiaeTcjZ2HTQQtNkrUSrWRP\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/lib/utils/StringLibrary.sol\":{\"keccak256\":\"0x008a9399d6eb91ebd6ea7e1ebb1d5468b5d3effca17f4ee0ed10d48287129135\",\"urls\":[\"bzz-raw://740e8472ef707d1e2d080e3e1156d3eb6b26b8246694f29993df0871a74b9349\",\"dweb:/ipfs/QmcizT75DUqQroA6pv3LK1F5uay99WPvtHUUG8bSEiVeEE\"]},\"/Users/home/Sites/davinci/davinci-contracts/contracts/token/DavinciMultipleToken.sol\":{\"keccak256\":\"0x72d5b1316f9ac11ab3dfb731ebc13f9e85ca3a4034e9c522374ea1f01e65dad4\",\"urls\":[\"bzz-raw://9e9fba856ca2e8f620463e13870761bc03985a04a3bbfdad90728e318dbcba8b\",\"dweb:/ipfs/Qmc7kBaHEZkNBDjH6FPPEA93AtFLBWqPambcBDKb9M41mj\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0x9486045e189facd2e868ece35249872598ef03f1087fb6fa4d1161842daa2287\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://77c3a04ef8453788b14b1ebbc24dd3f0a18ceb2615cd156aac949a611e552af8\",\"dweb:/ipfs/QmcmqWGguRM3iLuF57tcyrN3F6EA63kzeNkDfQuteBnurr\"]},\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0x15e2d5bd4c28a88548074c54d220e8086f638a71ed07e6b3ba5a70066fcf458d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://90faf5851c02f9bd42c5bfb54d4f0421a2612f50ab80b2c4fa24fa3792071cc2\",\"dweb:/ipfs/QmRGM4F2PcGVF85aTfaA9YBhCHHDqrMhRjyp6fGeBTtirb\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://526dc85e1f9b9b45830e202568d267d93dde7a4fcccf4ad7798dadcd92304d3c\",\"dweb:/ipfs/QmaoXMB972J3cSDLtBq3xBo4jLwqD2uzXTwujtSPqkYVhR\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x28911e614500ae7c607a432a709d35da25f3bc5ddc8bd12b278b66358070c0ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://256c8c8af5eb072bc473226ab2b2187149b8fc04f5f4a4820db22527f5ce8e3c\",\"dweb:/ipfs/QmRvi5BhnL7Rxf85KrJhwM6RRhukm4tzoctRdgQEheNyiN\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b50604051620031df380380620031df8339810160408190526200003491620004d5565b81818181806200004b6301ffc9a760e01b6200017c565b6200005d632dde656160e21b6200017c565b600062000069620001d7565b600180546001600160a01b0319166001600160a01b03831690811790915560405191925090600090600080516020620031bf833981519152908290a350620000ba620000b4620001d7565b620001db565b8051620000cf90600390602084019062000392565b50508151620000e79150600590602084019062000392565b50620000fa63e8a3d48560e01b6200017c565b506200010d636cdb3d1360e11b6200017c565b505084516200012490600a90602088019062000392565b5083516200013a90600b90602087019062000392565b50620001667fe37243f27916e395706434720b54132b80ef5cc8c56f39b0df6485e8dfb697cf6200017c565b62000171836200022d565b5050505050620006d5565b6001600160e01b03198082161415620001b25760405162461bcd60e51b8152600401620001a99062000627565b60405180910390fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b3390565b620001f6816002620002e760201b6200123f1790919060201c565b6040516001600160a01b038216907f47d1c22a25bb3a5d4e481b9b1e6944c2eade3181a0a20b495ed61d35b5323f2490600090a250565b62000237620001d7565b6001600160a01b03166200024a62000338565b6001600160a01b031614620002735760405162461bcd60e51b8152600401620001a9906200065e565b6001600160a01b0381166200029c5760405162461bcd60e51b8152600401620001a990620005e1565b6001546040516001600160a01b03808416921690600080516020620031bf83398151915290600090a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b620002f3828262000347565b15620003135760405162461bcd60e51b8152600401620001a990620005aa565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6001546001600160a01b031690565b60006001600160a01b038216620003725760405162461bcd60e51b8152600401620001a99062000693565b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620003d557805160ff191683800117855562000405565b8280016001018555821562000405579182015b8281111562000405578251825591602001919060010190620003e8565b506200041392915062000417565b5090565b5b8082111562000413576000815560010162000418565b600082601f8301126200043f578081fd5b81516001600160401b038082111562000456578283fd5b6040516020601f8401601f191682018101838111838210171562000478578586fd5b806040525081945083825286818588010111156200049557600080fd5b600092505b83831015620004b957858301810151828401820152918201916200049a565b83831115620004cb5760008185840101525b5050505092915050565b600080600080600060a08688031215620004ed578081fd5b85516001600160401b038082111562000504578283fd5b6200051289838a016200042e565b9650602088015191508082111562000528578283fd5b6200053689838a016200042e565b604089015190965091506001600160a01b038216821462000555578283fd5b6060880151919450808211156200056a578283fd5b6200057889838a016200042e565b935060808801519150808211156200058e578283fd5b506200059d888289016200042e565b9150509295509295909350565b6020808252601f908201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601c908201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526022908201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604082015261737360f01b606082015260800190565b612ada80620006e56000396000f3fe608060405234801561001057600080fd5b50600436106101b85760003560e01c806395d89b41116100f9578063e8a3d48511610097578063f0cc52a011610071578063f0cc52a01461038c578063f242432a1461039f578063f2fde38b146103b2578063f5298aca146103c5576101b8565b8063e8a3d4851461035e578063e985e9c514610366578063eb12d61e14610379576101b8565b8063b9c4d9fb116100d3578063b9c4d9fb1461031b578063c0ac99831461033b578063cd53d08e14610343578063e5c8b03d14610356576101b8565b806395d89b41146102ed57806399e0dd7c146102f5578063a22cb46514610308576101b8565b80632eb2c2d611610166578063715018a611610140578063715018a6146102aa5780637df73e27146102b25780638da5cb5b146102c5578063938e3d7b146102da576101b8565b80632eb2c2d6146102635780634e1273f4146102765780636308f1cd14610289576101b8565b80630e316ab7116101975780630e316ab71461021b5780630e89341c146102305780630ebd4c7f14610243576101b8565b8062fdd58e146101bd57806301ffc9a7146101e657806306fdde0314610206575b600080fd5b6101d06101cb366004611f97565b6103d8565b6040516101dd91906129be565b60405180910390f35b6101f96101f436600461205f565b6103ff565b6040516101dd9190612402565b61020e61041e565b6040516101dd919061240d565b61022e610229366004611ddd565b6104ac565b005b61020e61023e3660046120d2565b610500565b6102566102513660046120d2565b610511565b6040516101dd91906123ef565b61022e610271366004611e31565b61061b565b610256610284366004611ff6565b610911565b61029c6102973660046121c6565b610a02565b6040516101dd9291906122cd565b61022e610a45565b6101f96102c0366004611ddd565b610adb565b6102cd610ae8565b6040516101dd91906122b9565b61022e6102e8366004612097565b610af7565b61020e610b3f565b61022e610303366004612097565b610b9a565b61022e610316366004611f66565b610be2565b61032e6103293660046120d2565b610c51565b6040516101dd9190612387565b61020e610d60565b6102cd6103513660046120d2565b610dbb565b61022e610dd6565b61020e610de8565b6101f9610374366004611df9565b610e43565b61022e610387366004611ddd565b610e71565b61022e61039a3660046120ea565b610eb9565b61022e6103ad366004611eec565b610ecb565b61022e6103c0366004611ddd565b61107f565b61022e6103d3366004611fc2565b61114d565b60009081526006602090815260408083206001600160a01b03949094168352929052205490565b6001600160e01b03191660009081526020819052604090205460ff1690565b600a805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104a45780601f10610479576101008083540402835291602001916104a4565b820191906000526020600020905b81548152906001019060200180831161048757829003601f168201915b505050505081565b6104b461128b565b6001600160a01b03166104c5610ae8565b6001600160a01b0316146104f45760405162461bcd60e51b81526004016104eb9061275f565b60405180910390fd5b6104fd8161128f565b50565b606061050b826112d1565b92915050565b60008181526009602090815260408083208054825181850281018501909352808352606094859484015b82821015610583576000848152602090819020604080518082019091526002850290910180546001600160a01b0316825260019081015482840152908352909201910161053b565b5050505090506060815167ffffffffffffffff811180156105a357600080fd5b506040519080825280602002602001820160405280156105cd578160200160208202803683370190505b50905060005b8251811015610613578281815181106105e857fe5b60200260200101516020015182828151811061060057fe5b60209081029190910101526001016105d3565b509392505050565b6001600160a01b0387166106415760405162461bcd60e51b81526004016104eb9061258e565b8483146106605760405162461bcd60e51b81526004016104eb9061285f565b6001600160a01b03881633148061069f57506001600160a01b038816600090815260076020908152604080832033845290915290205460ff1615156001145b6106bb5760405162461bcd60e51b81526004016104eb906126a5565b60005b858110156107f05760008787838181106106d457fe5b90506020020135905060008686848181106106eb57fe5b90506020020135905061073d816006600085815260200190815260200160002060008e6001600160a01b03166001600160a01b031681526020019081526020016000205461140c90919063ffffffff16565b6006600084815260200190815260200160002060008d6001600160a01b03166001600160a01b03168152602001908152602001600020819055506107c06006600084815260200190815260200160002060008c6001600160a01b03166001600160a01b03168152602001908152602001600020548261143490919063ffffffff16565b60009283526006602090815260408085206001600160a01b038e16865290915290922091909155506001016106be565b50866001600160a01b0316886001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8989898960405161084494939291906123c8565b60405180910390a461085e876001600160a01b0316611460565b156109075761090733898989898080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808d0282810182019093528c82529093508c92508b91829185019084908082843760009201919091525050604080516020601f8c018190048102820181019092528a815292508a915089908190840183828082843760009201919091525061146692505050565b5050505050505050565b606083821461091f57600080fd5b60608467ffffffffffffffff8111801561093857600080fd5b50604051908082528060200260200182016040528015610962578160200160208202803683370190505b50905060005b858110156109f8576006600086868481811061098057fe5b90506020020135815260200190815260200160002060008888848181106109a357fe5b90506020020160208101906109b89190611ddd565b6001600160a01b03166001600160a01b03168152602001908152602001600020548282815181106109e557fe5b6020908102919091010152600101610968565b5095945050505050565b60096020528160005260406000208181548110610a1b57fe5b6000918252602090912060029091020180546001909101546001600160a01b039091169250905082565b610a4d61128b565b6001600160a01b0316610a5e610ae8565b6001600160a01b031614610a845760405162461bcd60e51b81526004016104eb9061275f565b6001546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36001805473ffffffffffffffffffffffffffffffffffffffff19169055565b600061050b60028361152e565b6001546001600160a01b031690565b610aff61128b565b6001600160a01b0316610b10610ae8565b6001600160a01b031614610b365760405162461bcd60e51b81526004016104eb9061275f565b6104fd81611576565b600b805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104a45780601f10610479576101008083540402835291602001916104a4565b610ba261128b565b6001600160a01b0316610bb3610ae8565b6001600160a01b031614610bd95760405162461bcd60e51b81526004016104eb9061275f565b6104fd8161158d565b3360008181526007602090815260408083206001600160a01b038716808552925291829020805460ff191685151517905590519091907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190610c45908590612402565b60405180910390a35050565b60008181526009602090815260408083208054825181850281018501909352808352606094859484015b82821015610cc3576000848152602090819020604080518082019091526002850290910180546001600160a01b03168252600190810154828401529083529092019101610c7b565b5050505090506060815167ffffffffffffffff81118015610ce357600080fd5b50604051908082528060200260200182016040528015610d0d578160200160208202803683370190505b50905060005b825181101561061357828181518110610d2857fe5b602002602001015160000151828281518110610d4057fe5b6001600160a01b0390921660209283029190910190910152600101610d13565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104a45780601f10610479576101008083540402835291602001916104a4565b6008602052600090815260409020546001600160a01b031681565b610de6610de161128b565b61128f565b565b6005805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104a45780601f10610479576101008083540402835291602001916104a4565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b610e7961128b565b6001600160a01b0316610e8a610ae8565b6001600160a01b031614610eb05760405162461bcd60e51b81526004016104eb9061275f565b6104fd816115a0565b610ec5848484846115e2565b50505050565b6001600160a01b038516610ef15760405162461bcd60e51b81526004016104eb90612950565b6001600160a01b038616331480610f3057506001600160a01b038616600090815260076020908152604080832033845290915290205460ff1615156001145b610f4c5760405162461bcd60e51b81526004016104eb906126a5565b60008481526006602090815260408083206001600160a01b038a168452909152902054610f79908461140c565b60008581526006602090815260408083206001600160a01b038b81168552925280832093909355871681522054610fb1908490611434565b60008581526006602090815260408083206001600160a01b03808b168086529190935292819020939093559151909188169033907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62906110149089908990612a24565b60405180910390a461102e856001600160a01b0316611460565b1561107757611077338787878787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061197792505050565b505050505050565b61108761128b565b6001600160a01b0316611098610ae8565b6001600160a01b0316146110be5760405162461bcd60e51b81526004016104eb9061275f565b6001600160a01b0381166110e45760405162461bcd60e51b81526004016104eb9061248e565b6001546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001600160a01b03831633148061118c57506001600160a01b038316600090815260076020908152604080832033845290915290205460ff1615156001145b6111a85760405162461bcd60e51b81526004016104eb90612648565b60008281526006602090815260408083206001600160a01b03871684529091529020546111d5908261140c565b60008381526006602090815260408083206001600160a01b038816808552925280832093909355915190919033907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62906112329087908790612a24565b60405180910390a4505050565b611249828261152e565b156112665760405162461bcd60e51b81526004016104eb90612457565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3390565b61129a600282611a3f565b6040516001600160a01b038216907f3525e22824a8a7df2c9a6029941c824cf95b6447f1e13d5128fd3826d35afe8b90600090a250565b6000818152600460209081526040918290208054835160026001831615610100026000190190921691909104601f810184900484028201840190945283815260609361050b9391929183018282801561136b5780601f106113405761010080835404028352916020019161136b565b820191906000526020600020905b81548152906001019060200180831161134e57829003601f168201915b505060038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152955091935091508301828280156113f95780601f106113ce576101008083540402835291602001916113f9565b820191906000526020600020905b8154815290600101906020018083116113dc57829003601f168201915b5050505050611a8790919063ffffffff16565b60008282111561142e5760405162461bcd60e51b81526004016104eb90612557565b50900390565b6000828201838110156114595760405162461bcd60e51b81526004016104eb906124eb565b9392505050565b3b151590565b6040517fbc197c8100000000000000000000000000000000000000000000000000000000808252906001600160a01b0386169063bc197c81906114b5908a908a908990899089906004016122e6565b602060405180830381600087803b1580156114cf57600080fd5b505af11580156114e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611507919061207b565b6001600160e01b031916146110775760405162461bcd60e51b81526004016104eb90612702565b60006001600160a01b0382166115565760405162461bcd60e51b81526004016104eb90612794565b506001600160a01b03166000908152602091909152604090205460ff1690565b8051611589906005906020840190611c1c565b5050565b8051611589906003906020840190611c1c565b6115ab60028261123f565b6040516001600160a01b038216907f47d1c22a25bb3a5d4e481b9b1e6944c2eade3181a0a20b495ed61d35b5323f2490600090a250565b6000848152600860205260409020546001600160a01b0316156116175760405162461bcd60e51b81526004016104eb906127f1565b816116345760405162461bcd60e51b81526004016104eb90612828565b60008151116116555760405162461bcd60e51b81526004016104eb90612987565b6000848152600860205260409020805473ffffffffffffffffffffffffffffffffffffffff191633179055825160609067ffffffffffffffff8111801561169b57600080fd5b506040519080825280602002602001820160405280156116c5578160200160208202803683370190505b5090506060845167ffffffffffffffff811180156116e257600080fd5b5060405190808252806020026020018201604052801561170c578160200160208202803683370190505b50905060005b855181101561188c5760006001600160a01b031686828151811061173257fe5b6020026020010151600001516001600160a01b031614156117655760405162461bcd60e51b81526004016104eb906128bc565b85818151811061177157fe5b6020026020010151602001516000141561179d5760405162461bcd60e51b81526004016104eb90612420565b600087815260096020526040902086518790839081106117b957fe5b6020908102919091018101518254600180820185556000948552938390208251600290920201805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909216919091178155910151910155855186908290811061181d57fe5b60200260200101516000015183828151811061183557fe5b60200260200101906001600160a01b031690816001600160a01b03168152505085818151811061186157fe5b60200260200101516020015182828151811061187957fe5b6020908102919091010152600101611712565b508451156118d0577f99aba1d63749cfd5ad1afda7c4663840924d54eb5f005bbbeadedc6ec13674b28683836040516118c7939291906129c7565b60405180910390a15b600086815260066020908152604080832033845290915290208490556118f68684611bbf565b604051339060009082907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629061192f908b908a90612a24565b60405180910390a4857f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b84604051611967919061240d565b60405180910390a2505050505050565b6040517ff23a6e6100000000000000000000000000000000000000000000000000000000808252906001600160a01b0386169063f23a6e61906119c6908a908a90899089908990600401612344565b602060405180830381600087803b1580156119e057600080fd5b505af11580156119f4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a18919061207b565b6001600160e01b031916146110775760405162461bcd60e51b81526004016104eb906128f3565b611a49828261152e565b611a655760405162461bcd60e51b81526004016104eb906125eb565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b805182516060918491849184910167ffffffffffffffff81118015611aab57600080fd5b506040519080825280601f01601f191660200182016040528015611ad6576020820181803683370190505b5090506000805b8451811015611b4657848181518110611af257fe5b602001015160f81c60f81b838380600101945081518110611b0f57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600101611add565b5060005b8351811015611bb357838181518110611b5f57fe5b602001015160f81c60f81b838380600101945081518110611b7c57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600101611b4a565b50909695505050505050565b6000828152600860205260409020546001600160a01b0316611bf35760405162461bcd60e51b81526004016104eb90612522565b611589828260008281526004602090815260409091208251611c1792840190611c1c565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611c5d57805160ff1916838001178555611c8a565b82800160010185558215611c8a579182015b82811115611c8a578251825591602001919060010190611c6f565b50611c96929150611c9a565b5090565b5b80821115611c965760008155600101611c9b565b60008083601f840112611cc0578182fd5b50813567ffffffffffffffff811115611cd7578182fd5b6020830191508360208083028501011115611cf157600080fd5b9250929050565b60008083601f840112611d09578182fd5b50813567ffffffffffffffff811115611d20578182fd5b602083019150836020828501011115611cf157600080fd5b600082601f830112611d48578081fd5b813567ffffffffffffffff811115611d5e578182fd5b611d71601f8201601f1916602001612a32565b9150808252836020828501011115611d8857600080fd5b8060208401602084013760009082016020015292915050565b600060408284031215611db2578081fd5b611dbc6040612a32565b90508135611dc981612a79565b808252506020820135602082015292915050565b600060208284031215611dee578081fd5b813561145981612a79565b60008060408385031215611e0b578081fd5b8235611e1681612a79565b91506020830135611e2681612a79565b809150509250929050565b60008060008060008060008060a0898b031215611e4c578384fd5b8835611e5781612a79565b97506020890135611e6781612a79565b9650604089013567ffffffffffffffff80821115611e83578586fd5b611e8f8c838d01611caf565b909850965060608b0135915080821115611ea7578586fd5b611eb38c838d01611caf565b909650945060808b0135915080821115611ecb578384fd5b50611ed88b828c01611cf8565b999c989b5096995094979396929594505050565b60008060008060008060a08789031215611f04578182fd5b8635611f0f81612a79565b95506020870135611f1f81612a79565b94506040870135935060608701359250608087013567ffffffffffffffff811115611f48578283fd5b611f5489828a01611cf8565b979a9699509497509295939492505050565b60008060408385031215611f78578182fd5b8235611f8381612a79565b915060208301358015158114611e26578182fd5b60008060408385031215611fa9578182fd5b8235611fb481612a79565b946020939093013593505050565b600080600060608486031215611fd6578283fd5b8335611fe181612a79565b95602085013595506040909401359392505050565b6000806000806040858703121561200b578384fd5b843567ffffffffffffffff80821115612022578586fd5b61202e88838901611caf565b90965094506020870135915080821115612046578384fd5b5061205387828801611caf565b95989497509550505050565b600060208284031215612070578081fd5b813561145981612a8e565b60006020828403121561208c578081fd5b815161145981612a8e565b6000602082840312156120a8578081fd5b813567ffffffffffffffff8111156120be578182fd5b6120ca84828501611d38565b949350505050565b6000602082840312156120e3578081fd5b5035919050565b600080600080608085870312156120ff578182fd5b8435935060208086013567ffffffffffffffff8082111561211e578485fd5b818801915088601f830112612131578485fd5b813561214461213f82612a59565b612a32565b818152848101908486016040808502870188018e101561216257898afd5b8996505b8487101561218e576121788e83611da1565b8452600196909601959287019290810190612166565b919950508a01359650505060608801359250808311156121ac578384fd5b50506121ba87828801611d38565b91505092959194509250565b600080604083850312156121d8578182fd5b50508035926020909101359150565b60008284527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115612218578081fd5b6020830280836020870137939093016020019283525090919050565b6000815180845260208085019450808401835b8381101561226357815187529582019590820190600101612247565b509495945050505050565b60008151808452815b8181101561229357602081850181015186830182015201612277565b818111156122a45782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b60006001600160a01b03808816835280871660208401525060a0604083015261231260a0830186612234565b82810360608401526123248186612234565b90508281036080840152612338818561226e565b98975050505050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a0608083015261237c60a083018461226e565b979650505050505050565b6020808252825182820181905260009190848201906040850190845b81811015611bb35783516001600160a01b0316835292840192918401916001016123a3565b6000604082526123dc6040830186886121e7565b828103602084015261237c8185876121e7565b6000602082526114596020830184612234565b901515815260200190565b600060208252611459602083018461226e565b6020808252601c908201527f4665652076616c75652073686f756c6420626520706f73697469766500000000604082015260600190565b6020808252601f908201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252818101527f5f736574546f6b656e5552493a20546f6b656e2073686f756c64206578697374604082015260600190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b60208082526025908201527f64657374696e6174696f6e2061646472657373206d757374206265206e6f6e2d60408201527f7a65726f2e000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526021908201527f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c60408201527f6500000000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602b908201527f4e656564206f70657261746f7220617070726f76616c20666f7220337264207060408201527f61727479206275726e732e000000000000000000000000000000000000000000606082015260800190565b6020808252602f908201527f4e656564206f70657261746f7220617070726f76616c20666f7220337264207060408201527f61727479207472616e73666572732e0000000000000000000000000000000000606082015260800190565b6020808252603e908201527f636f6e74726163742072657475726e656420616e20756e6b6e6f776e2076616c60408201527f75652066726f6d206f6e45524331313535426174636852656365697665640000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526022908201527f526f6c65733a206163636f756e7420697320746865207a65726f20616464726560408201527f7373000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526017908201527f546f6b656e20697320616c7265616479206d696e746564000000000000000000604082015260600190565b60208082526019908201527f537570706c792073686f756c6420626520706f73697469766500000000000000604082015260600190565b60208082526029908201527f5f69647320616e64205f76616c756573206172726179206c656e676874206d7560408201527f7374206d617463682e0000000000000000000000000000000000000000000000606082015260800190565b6020808252601b908201527f526563697069656e742073686f756c642062652070726573656e740000000000604082015260600190565b60208082526039908201527f636f6e74726163742072657475726e656420616e20756e6b6e6f776e2076616c60408201527f75652066726f6d206f6e45524331313535526563656976656400000000000000606082015260800190565b60208082526015908201527f5f746f206d757374206265206e6f6e2d7a65726f2e0000000000000000000000604082015260600190565b60208082526011908201527f7572692073686f756c6420626520736574000000000000000000000000000000604082015260600190565b90815260200190565b60006060820185835260206060818501528186518084526080860191508288019350845b81811015612a105784516001600160a01b0316835293830193918301916001016129eb565b505084810360408601526123388187612234565b918252602082015260400190565b60405181810167ffffffffffffffff81118282101715612a5157600080fd5b604052919050565b600067ffffffffffffffff821115612a6f578081fd5b5060209081020190565b6001600160a01b03811681146104fd57600080fd5b6001600160e01b0319811681146104fd57600080fdfea2646970667358221220b589d3c473b9f6790853a8b2bd45c100b77e72013613f91357d821aee41d4c1f64736f6c634300060c00338be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101b85760003560e01c806395d89b41116100f9578063e8a3d48511610097578063f0cc52a011610071578063f0cc52a01461038c578063f242432a1461039f578063f2fde38b146103b2578063f5298aca146103c5576101b8565b8063e8a3d4851461035e578063e985e9c514610366578063eb12d61e14610379576101b8565b8063b9c4d9fb116100d3578063b9c4d9fb1461031b578063c0ac99831461033b578063cd53d08e14610343578063e5c8b03d14610356576101b8565b806395d89b41146102ed57806399e0dd7c146102f5578063a22cb46514610308576101b8565b80632eb2c2d611610166578063715018a611610140578063715018a6146102aa5780637df73e27146102b25780638da5cb5b146102c5578063938e3d7b146102da576101b8565b80632eb2c2d6146102635780634e1273f4146102765780636308f1cd14610289576101b8565b80630e316ab7116101975780630e316ab71461021b5780630e89341c146102305780630ebd4c7f14610243576101b8565b8062fdd58e146101bd57806301ffc9a7146101e657806306fdde0314610206575b600080fd5b6101d06101cb366004611f97565b6103d8565b6040516101dd91906129be565b60405180910390f35b6101f96101f436600461205f565b6103ff565b6040516101dd9190612402565b61020e61041e565b6040516101dd919061240d565b61022e610229366004611ddd565b6104ac565b005b61020e61023e3660046120d2565b610500565b6102566102513660046120d2565b610511565b6040516101dd91906123ef565b61022e610271366004611e31565b61061b565b610256610284366004611ff6565b610911565b61029c6102973660046121c6565b610a02565b6040516101dd9291906122cd565b61022e610a45565b6101f96102c0366004611ddd565b610adb565b6102cd610ae8565b6040516101dd91906122b9565b61022e6102e8366004612097565b610af7565b61020e610b3f565b61022e610303366004612097565b610b9a565b61022e610316366004611f66565b610be2565b61032e6103293660046120d2565b610c51565b6040516101dd9190612387565b61020e610d60565b6102cd6103513660046120d2565b610dbb565b61022e610dd6565b61020e610de8565b6101f9610374366004611df9565b610e43565b61022e610387366004611ddd565b610e71565b61022e61039a3660046120ea565b610eb9565b61022e6103ad366004611eec565b610ecb565b61022e6103c0366004611ddd565b61107f565b61022e6103d3366004611fc2565b61114d565b60009081526006602090815260408083206001600160a01b03949094168352929052205490565b6001600160e01b03191660009081526020819052604090205460ff1690565b600a805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104a45780601f10610479576101008083540402835291602001916104a4565b820191906000526020600020905b81548152906001019060200180831161048757829003601f168201915b505050505081565b6104b461128b565b6001600160a01b03166104c5610ae8565b6001600160a01b0316146104f45760405162461bcd60e51b81526004016104eb9061275f565b60405180910390fd5b6104fd8161128f565b50565b606061050b826112d1565b92915050565b60008181526009602090815260408083208054825181850281018501909352808352606094859484015b82821015610583576000848152602090819020604080518082019091526002850290910180546001600160a01b0316825260019081015482840152908352909201910161053b565b5050505090506060815167ffffffffffffffff811180156105a357600080fd5b506040519080825280602002602001820160405280156105cd578160200160208202803683370190505b50905060005b8251811015610613578281815181106105e857fe5b60200260200101516020015182828151811061060057fe5b60209081029190910101526001016105d3565b509392505050565b6001600160a01b0387166106415760405162461bcd60e51b81526004016104eb9061258e565b8483146106605760405162461bcd60e51b81526004016104eb9061285f565b6001600160a01b03881633148061069f57506001600160a01b038816600090815260076020908152604080832033845290915290205460ff1615156001145b6106bb5760405162461bcd60e51b81526004016104eb906126a5565b60005b858110156107f05760008787838181106106d457fe5b90506020020135905060008686848181106106eb57fe5b90506020020135905061073d816006600085815260200190815260200160002060008e6001600160a01b03166001600160a01b031681526020019081526020016000205461140c90919063ffffffff16565b6006600084815260200190815260200160002060008d6001600160a01b03166001600160a01b03168152602001908152602001600020819055506107c06006600084815260200190815260200160002060008c6001600160a01b03166001600160a01b03168152602001908152602001600020548261143490919063ffffffff16565b60009283526006602090815260408085206001600160a01b038e16865290915290922091909155506001016106be565b50866001600160a01b0316886001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8989898960405161084494939291906123c8565b60405180910390a461085e876001600160a01b0316611460565b156109075761090733898989898080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808d0282810182019093528c82529093508c92508b91829185019084908082843760009201919091525050604080516020601f8c018190048102820181019092528a815292508a915089908190840183828082843760009201919091525061146692505050565b5050505050505050565b606083821461091f57600080fd5b60608467ffffffffffffffff8111801561093857600080fd5b50604051908082528060200260200182016040528015610962578160200160208202803683370190505b50905060005b858110156109f8576006600086868481811061098057fe5b90506020020135815260200190815260200160002060008888848181106109a357fe5b90506020020160208101906109b89190611ddd565b6001600160a01b03166001600160a01b03168152602001908152602001600020548282815181106109e557fe5b6020908102919091010152600101610968565b5095945050505050565b60096020528160005260406000208181548110610a1b57fe5b6000918252602090912060029091020180546001909101546001600160a01b039091169250905082565b610a4d61128b565b6001600160a01b0316610a5e610ae8565b6001600160a01b031614610a845760405162461bcd60e51b81526004016104eb9061275f565b6001546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36001805473ffffffffffffffffffffffffffffffffffffffff19169055565b600061050b60028361152e565b6001546001600160a01b031690565b610aff61128b565b6001600160a01b0316610b10610ae8565b6001600160a01b031614610b365760405162461bcd60e51b81526004016104eb9061275f565b6104fd81611576565b600b805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104a45780601f10610479576101008083540402835291602001916104a4565b610ba261128b565b6001600160a01b0316610bb3610ae8565b6001600160a01b031614610bd95760405162461bcd60e51b81526004016104eb9061275f565b6104fd8161158d565b3360008181526007602090815260408083206001600160a01b038716808552925291829020805460ff191685151517905590519091907f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190610c45908590612402565b60405180910390a35050565b60008181526009602090815260408083208054825181850281018501909352808352606094859484015b82821015610cc3576000848152602090819020604080518082019091526002850290910180546001600160a01b03168252600190810154828401529083529092019101610c7b565b5050505090506060815167ffffffffffffffff81118015610ce357600080fd5b50604051908082528060200260200182016040528015610d0d578160200160208202803683370190505b50905060005b825181101561061357828181518110610d2857fe5b602002602001015160000151828281518110610d4057fe5b6001600160a01b0390921660209283029190910190910152600101610d13565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104a45780601f10610479576101008083540402835291602001916104a4565b6008602052600090815260409020546001600160a01b031681565b610de6610de161128b565b61128f565b565b6005805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104a45780601f10610479576101008083540402835291602001916104a4565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b610e7961128b565b6001600160a01b0316610e8a610ae8565b6001600160a01b031614610eb05760405162461bcd60e51b81526004016104eb9061275f565b6104fd816115a0565b610ec5848484846115e2565b50505050565b6001600160a01b038516610ef15760405162461bcd60e51b81526004016104eb90612950565b6001600160a01b038616331480610f3057506001600160a01b038616600090815260076020908152604080832033845290915290205460ff1615156001145b610f4c5760405162461bcd60e51b81526004016104eb906126a5565b60008481526006602090815260408083206001600160a01b038a168452909152902054610f79908461140c565b60008581526006602090815260408083206001600160a01b038b81168552925280832093909355871681522054610fb1908490611434565b60008581526006602090815260408083206001600160a01b03808b168086529190935292819020939093559151909188169033907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62906110149089908990612a24565b60405180910390a461102e856001600160a01b0316611460565b1561107757611077338787878787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061197792505050565b505050505050565b61108761128b565b6001600160a01b0316611098610ae8565b6001600160a01b0316146110be5760405162461bcd60e51b81526004016104eb9061275f565b6001600160a01b0381166110e45760405162461bcd60e51b81526004016104eb9061248e565b6001546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001600160a01b03831633148061118c57506001600160a01b038316600090815260076020908152604080832033845290915290205460ff1615156001145b6111a85760405162461bcd60e51b81526004016104eb90612648565b60008281526006602090815260408083206001600160a01b03871684529091529020546111d5908261140c565b60008381526006602090815260408083206001600160a01b038816808552925280832093909355915190919033907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62906112329087908790612a24565b60405180910390a4505050565b611249828261152e565b156112665760405162461bcd60e51b81526004016104eb90612457565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3390565b61129a600282611a3f565b6040516001600160a01b038216907f3525e22824a8a7df2c9a6029941c824cf95b6447f1e13d5128fd3826d35afe8b90600090a250565b6000818152600460209081526040918290208054835160026001831615610100026000190190921691909104601f810184900484028201840190945283815260609361050b9391929183018282801561136b5780601f106113405761010080835404028352916020019161136b565b820191906000526020600020905b81548152906001019060200180831161134e57829003601f168201915b505060038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152955091935091508301828280156113f95780601f106113ce576101008083540402835291602001916113f9565b820191906000526020600020905b8154815290600101906020018083116113dc57829003601f168201915b5050505050611a8790919063ffffffff16565b60008282111561142e5760405162461bcd60e51b81526004016104eb90612557565b50900390565b6000828201838110156114595760405162461bcd60e51b81526004016104eb906124eb565b9392505050565b3b151590565b6040517fbc197c8100000000000000000000000000000000000000000000000000000000808252906001600160a01b0386169063bc197c81906114b5908a908a908990899089906004016122e6565b602060405180830381600087803b1580156114cf57600080fd5b505af11580156114e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611507919061207b565b6001600160e01b031916146110775760405162461bcd60e51b81526004016104eb90612702565b60006001600160a01b0382166115565760405162461bcd60e51b81526004016104eb90612794565b506001600160a01b03166000908152602091909152604090205460ff1690565b8051611589906005906020840190611c1c565b5050565b8051611589906003906020840190611c1c565b6115ab60028261123f565b6040516001600160a01b038216907f47d1c22a25bb3a5d4e481b9b1e6944c2eade3181a0a20b495ed61d35b5323f2490600090a250565b6000848152600860205260409020546001600160a01b0316156116175760405162461bcd60e51b81526004016104eb906127f1565b816116345760405162461bcd60e51b81526004016104eb90612828565b60008151116116555760405162461bcd60e51b81526004016104eb90612987565b6000848152600860205260409020805473ffffffffffffffffffffffffffffffffffffffff191633179055825160609067ffffffffffffffff8111801561169b57600080fd5b506040519080825280602002602001820160405280156116c5578160200160208202803683370190505b5090506060845167ffffffffffffffff811180156116e257600080fd5b5060405190808252806020026020018201604052801561170c578160200160208202803683370190505b50905060005b855181101561188c5760006001600160a01b031686828151811061173257fe5b6020026020010151600001516001600160a01b031614156117655760405162461bcd60e51b81526004016104eb906128bc565b85818151811061177157fe5b6020026020010151602001516000141561179d5760405162461bcd60e51b81526004016104eb90612420565b600087815260096020526040902086518790839081106117b957fe5b6020908102919091018101518254600180820185556000948552938390208251600290920201805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909216919091178155910151910155855186908290811061181d57fe5b60200260200101516000015183828151811061183557fe5b60200260200101906001600160a01b031690816001600160a01b03168152505085818151811061186157fe5b60200260200101516020015182828151811061187957fe5b6020908102919091010152600101611712565b508451156118d0577f99aba1d63749cfd5ad1afda7c4663840924d54eb5f005bbbeadedc6ec13674b28683836040516118c7939291906129c7565b60405180910390a15b600086815260066020908152604080832033845290915290208490556118f68684611bbf565b604051339060009082907fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629061192f908b908a90612a24565b60405180910390a4857f6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b84604051611967919061240d565b60405180910390a2505050505050565b6040517ff23a6e6100000000000000000000000000000000000000000000000000000000808252906001600160a01b0386169063f23a6e61906119c6908a908a90899089908990600401612344565b602060405180830381600087803b1580156119e057600080fd5b505af11580156119f4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a18919061207b565b6001600160e01b031916146110775760405162461bcd60e51b81526004016104eb906128f3565b611a49828261152e565b611a655760405162461bcd60e51b81526004016104eb906125eb565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b805182516060918491849184910167ffffffffffffffff81118015611aab57600080fd5b506040519080825280601f01601f191660200182016040528015611ad6576020820181803683370190505b5090506000805b8451811015611b4657848181518110611af257fe5b602001015160f81c60f81b838380600101945081518110611b0f57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600101611add565b5060005b8351811015611bb357838181518110611b5f57fe5b602001015160f81c60f81b838380600101945081518110611b7c57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600101611b4a565b50909695505050505050565b6000828152600860205260409020546001600160a01b0316611bf35760405162461bcd60e51b81526004016104eb90612522565b611589828260008281526004602090815260409091208251611c1792840190611c1c565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611c5d57805160ff1916838001178555611c8a565b82800160010185558215611c8a579182015b82811115611c8a578251825591602001919060010190611c6f565b50611c96929150611c9a565b5090565b5b80821115611c965760008155600101611c9b565b60008083601f840112611cc0578182fd5b50813567ffffffffffffffff811115611cd7578182fd5b6020830191508360208083028501011115611cf157600080fd5b9250929050565b60008083601f840112611d09578182fd5b50813567ffffffffffffffff811115611d20578182fd5b602083019150836020828501011115611cf157600080fd5b600082601f830112611d48578081fd5b813567ffffffffffffffff811115611d5e578182fd5b611d71601f8201601f1916602001612a32565b9150808252836020828501011115611d8857600080fd5b8060208401602084013760009082016020015292915050565b600060408284031215611db2578081fd5b611dbc6040612a32565b90508135611dc981612a79565b808252506020820135602082015292915050565b600060208284031215611dee578081fd5b813561145981612a79565b60008060408385031215611e0b578081fd5b8235611e1681612a79565b91506020830135611e2681612a79565b809150509250929050565b60008060008060008060008060a0898b031215611e4c578384fd5b8835611e5781612a79565b97506020890135611e6781612a79565b9650604089013567ffffffffffffffff80821115611e83578586fd5b611e8f8c838d01611caf565b909850965060608b0135915080821115611ea7578586fd5b611eb38c838d01611caf565b909650945060808b0135915080821115611ecb578384fd5b50611ed88b828c01611cf8565b999c989b5096995094979396929594505050565b60008060008060008060a08789031215611f04578182fd5b8635611f0f81612a79565b95506020870135611f1f81612a79565b94506040870135935060608701359250608087013567ffffffffffffffff811115611f48578283fd5b611f5489828a01611cf8565b979a9699509497509295939492505050565b60008060408385031215611f78578182fd5b8235611f8381612a79565b915060208301358015158114611e26578182fd5b60008060408385031215611fa9578182fd5b8235611fb481612a79565b946020939093013593505050565b600080600060608486031215611fd6578283fd5b8335611fe181612a79565b95602085013595506040909401359392505050565b6000806000806040858703121561200b578384fd5b843567ffffffffffffffff80821115612022578586fd5b61202e88838901611caf565b90965094506020870135915080821115612046578384fd5b5061205387828801611caf565b95989497509550505050565b600060208284031215612070578081fd5b813561145981612a8e565b60006020828403121561208c578081fd5b815161145981612a8e565b6000602082840312156120a8578081fd5b813567ffffffffffffffff8111156120be578182fd5b6120ca84828501611d38565b949350505050565b6000602082840312156120e3578081fd5b5035919050565b600080600080608085870312156120ff578182fd5b8435935060208086013567ffffffffffffffff8082111561211e578485fd5b818801915088601f830112612131578485fd5b813561214461213f82612a59565b612a32565b818152848101908486016040808502870188018e101561216257898afd5b8996505b8487101561218e576121788e83611da1565b8452600196909601959287019290810190612166565b919950508a01359650505060608801359250808311156121ac578384fd5b50506121ba87828801611d38565b91505092959194509250565b600080604083850312156121d8578182fd5b50508035926020909101359150565b60008284527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115612218578081fd5b6020830280836020870137939093016020019283525090919050565b6000815180845260208085019450808401835b8381101561226357815187529582019590820190600101612247565b509495945050505050565b60008151808452815b8181101561229357602081850181015186830182015201612277565b818111156122a45782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b60006001600160a01b03808816835280871660208401525060a0604083015261231260a0830186612234565b82810360608401526123248186612234565b90508281036080840152612338818561226e565b98975050505050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a0608083015261237c60a083018461226e565b979650505050505050565b6020808252825182820181905260009190848201906040850190845b81811015611bb35783516001600160a01b0316835292840192918401916001016123a3565b6000604082526123dc6040830186886121e7565b828103602084015261237c8185876121e7565b6000602082526114596020830184612234565b901515815260200190565b600060208252611459602083018461226e565b6020808252601c908201527f4665652076616c75652073686f756c6420626520706f73697469766500000000604082015260600190565b6020808252601f908201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252818101527f5f736574546f6b656e5552493a20546f6b656e2073686f756c64206578697374604082015260600190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b60208082526025908201527f64657374696e6174696f6e2061646472657373206d757374206265206e6f6e2d60408201527f7a65726f2e000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526021908201527f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c60408201527f6500000000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602b908201527f4e656564206f70657261746f7220617070726f76616c20666f7220337264207060408201527f61727479206275726e732e000000000000000000000000000000000000000000606082015260800190565b6020808252602f908201527f4e656564206f70657261746f7220617070726f76616c20666f7220337264207060408201527f61727479207472616e73666572732e0000000000000000000000000000000000606082015260800190565b6020808252603e908201527f636f6e74726163742072657475726e656420616e20756e6b6e6f776e2076616c60408201527f75652066726f6d206f6e45524331313535426174636852656365697665640000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526022908201527f526f6c65733a206163636f756e7420697320746865207a65726f20616464726560408201527f7373000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526017908201527f546f6b656e20697320616c7265616479206d696e746564000000000000000000604082015260600190565b60208082526019908201527f537570706c792073686f756c6420626520706f73697469766500000000000000604082015260600190565b60208082526029908201527f5f69647320616e64205f76616c756573206172726179206c656e676874206d7560408201527f7374206d617463682e0000000000000000000000000000000000000000000000606082015260800190565b6020808252601b908201527f526563697069656e742073686f756c642062652070726573656e740000000000604082015260600190565b60208082526039908201527f636f6e74726163742072657475726e656420616e20756e6b6e6f776e2076616c60408201527f75652066726f6d206f6e45524331313535526563656976656400000000000000606082015260800190565b60208082526015908201527f5f746f206d757374206265206e6f6e2d7a65726f2e0000000000000000000000604082015260600190565b60208082526011908201527f7572692073686f756c6420626520736574000000000000000000000000000000604082015260600190565b90815260200190565b60006060820185835260206060818501528186518084526080860191508288019350845b81811015612a105784516001600160a01b0316835293830193918301916001016129eb565b505084810360408601526123388187612234565b918252602082015260400190565b60405181810167ffffffffffffffff81118282101715612a5157600080fd5b604052919050565b600067ffffffffffffffff821115612a6f578081fd5b5060209081020190565b6001600160a01b03811681146104fd57600080fd5b6001600160e01b0319811681146104fd57600080fdfea2646970667358221220b589d3c473b9f6790853a8b2bd45c100b77e72013613f91357d821aee41d4c1f64736f6c634300060c0033",
  "immutableReferences": {},
  "sourceMap": "196:808:32:-:0;;;319:340;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;462:11;475:14;462:11;475:14;;730:40:14;-1:-1:-1;730:18:14;:40::i;:::-;478:38:19;-1:-1:-1;478:18:19;:38::i;:::-;884:17:38;904:12;:10;:12::i;:::-;926:6;:18;;-1:-1:-1;;926:18:38;-1:-1:-1;;;;;926:18:38;;;;;;;;959:43;;-1:-1:-1;;;926:18:38;;-1:-1:-1;926:18:38;;-1:-1:-1;;;;;;;;;;959:43:38;-1:-1:-1;;959:43:38;-1:-1:-1;336:24:30;347:12;:10;:12::i;:::-;336:10;:24::i;:::-;344:32:20;;;;:14;;:32;;;;;:::i;:::-;-1:-1:-1;;321:26:18;;;;-1:-1:-1;321:11:18;;:26;;;;;:::i;:::-;-1:-1:-1;357:46:18;-1:-1:-1;357:18:18;:46::i;:::-;-1:-1:-1;1410:47:11;-1:-1:-1;1410:18:11;:47::i;:::-;-1:-1:-1;;508:12:32;;::::1;::::0;:4:::1;::::0;:12:::1;::::0;::::1;::::0;::::1;:::i;:::-;-1:-1:-1::0;530:16:32;;::::1;::::0;:6:::1;::::0;:16:::1;::::0;::::1;::::0;::::1;:::i;:::-;-1:-1:-1::0;557:58:32::1;583:30;557:18;:58::i;:::-;625:27;643:8:::0;625:17:::1;:27::i;:::-;319:340:::0;;;;;196:808;;1463:190:14;-1:-1:-1;1538:25:14;;;;;1530:66;;;;-1:-1:-1;;;1530:66:14;;;;;;;:::i;:::-;;;;;;;;;-1:-1:-1;1606:33:14;:20;:33;;;;;;;;;;:40;;-1:-1:-1;;1606:40:14;-1:-1:-1;1606:40:14;;;1463:190::o;598:104:41:-;685:10;598:104;:::o;812:119:30:-;868:21;881:7;868:8;:12;;;;;;:21;;;;:::i;:::-;904:20;;-1:-1:-1;;;;;904:20:30;;;;;;;;812:119;:::o;2011:240:38:-;1308:12;:10;:12::i;:::-;-1:-1:-1;;;;;1297:23:38;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1297:23:38;;1289:68;;;;-1:-1:-1;;;1289:68:38;;;;;;;:::i;:::-;-1:-1:-1;;;;;2099:22:38;::::1;2091:73;;;::::0;-1:-1:-1;;;2091:73:38;;::::1;::::0;::::1;;;:::i;:::-;2200:6;::::0;2179:38:::1;::::0;-1:-1:-1;;;;;;;;2179:38:38;;::::1;::::0;2200:6:::1;::::0;2179:38;-1:-1:-1;;;;;;;;;2179:38:38;2200:6:::1;::::0;2179:38:::1;2227:6;:17:::0;;-1:-1:-1;;2227:17:38::1;-1:-1:-1::0;;;;;2227:17:38;;;::::1;::::0;;;::::1;::::0;;2011:240::o;261:175:29:-;338:18;342:4;348:7;338:3;:18::i;:::-;337:19;329:63;;;;-1:-1:-1;;;329:63:29;;;;;;;:::i;:::-;-1:-1:-1;;;;;402:20:29;:11;:20;;;;;;;;;;;:27;;-1:-1:-1;;402:27:29;-1:-1:-1;402:27:29;;;261:175::o;1085:85:38:-;1157:6;;-1:-1:-1;;;;;1157:6:38;;1085:85::o;780:200:29:-;852:4;-1:-1:-1;;;;;876:21:29;;868:68;;;;-1:-1:-1;;;868:68:29;;;;;;;:::i;:::-;-1:-1:-1;;;;;;953:20:29;:11;:20;;;;;;;;;;;;;;;780:200::o;196:808:32:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;196:808:32;;;-1:-1:-1;196:808:32;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;147:444:-1;;260:3;253:4;245:6;241:17;237:27;227:2;;-1:-1;;268:12;227:2;302:13;;-1:-1;6104:30;;;6101:2;;;-1:-1;;6137:12;6101:2;5770;5764:9;6278:4;-1:-1;;6210:9;6191:17;;6187:33;5796:17;;;;5892:22;;;5856:34;;;5853:62;5850:2;;;-1:-1;;5918:12;5850:2;5948:10;5770:2;5937:22;;321:74;;;415:6;408:5;401:21;519:3;6278:4;510:6;443;501:16;;498:25;495:2;;;536:1;;526:12;495:2;6764:1;6755:10;;6771:101;6785:6;6782:1;6779:13;6771:101;;;6852:11;;;;;6846:18;6833:11;;;;;6826:39;6800:10;;;;6771:101;;;6887:6;6884:1;6881:13;6878:2;;;6764:1;6278:4;6943:6;477:5;6934:16;;6927:27;6878:2;;;;;220:371;;;;:::o;599:1205::-;;;;;;822:3;810:9;801:7;797:23;793:33;790:2;;;-1:-1;;829:12;790:2;874:24;;-1:-1;907:30;;;904:2;;;-1:-1;;940:12;904:2;970:74;1036:7;1027:6;1016:9;1012:22;970:74;:::i;:::-;960:84;;1102:2;1091:9;1087:18;1081:25;1067:39;;918:18;1118:6;1115:30;1112:2;;;-1:-1;;1148:12;1112:2;1178:74;1244:7;1235:6;1224:9;1220:22;1178:74;:::i;:::-;1289:2;1339:22;;83:13;1168:84;;-1:-1;83:13;-1:-1;;;;;;6632:54;;7034:35;;7024:2;;-1:-1;;7073:12;7024:2;1429;1414:18;;1408:25;1297:74;;-1:-1;1442:30;;;1439:2;;;-1:-1;;1475:12;1439:2;1505:74;1571:7;1562:6;1551:9;1547:22;1505:74;:::i;:::-;1495:84;;1637:3;1626:9;1622:19;1616:26;1602:40;;918:18;1654:6;1651:30;1648:2;;;-1:-1;;1684:12;1648:2;;1714:74;1780:7;1771:6;1760:9;1756:22;1714:74;:::i;:::-;1704:84;;;784:1020;;;;;;;;:::o;3593:416::-;3793:2;3807:47;;;2036:2;3778:18;;;6404:19;2072:33;6444:14;;;2052:54;2125:12;;;3764:245::o;4016:416::-;4216:2;4230:47;;;2376:2;4201:18;;;6404:19;2412:34;6444:14;;;2392:55;-1:-1;2467:12;;;2460:30;2509:12;;;4187:245::o;4439:416::-;4639:2;4653:47;;;2760:2;4624:18;;;6404:19;2796:30;6444:14;;;2776:51;2846:12;;;4610:245::o;4862:416::-;5062:2;5076:47;;;5047:18;;;6404:19;3133:34;6444:14;;;3113:55;3187:12;;;5033:245::o;5285:416::-;5485:2;5499:47;;;3438:2;5470:18;;;6404:19;3474:34;6444:14;;;3454:55;-1:-1;3529:12;;;3522:26;3567:12;;;5456:245::o;:::-;196:808:32;;;;;;",
  "deployedSourceMap": "196:808:32:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7289:378:11;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;927:142:14;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;268:18:32:-;;;:::i;:::-;;;;;;;:::i;769:95::-;;;;;;:::i;:::-;;:::i;:::-;;338:111:13;;;;;;:::i;:::-;;:::i;1034:302:12:-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;5269:1776:11:-;;;;;;:::i;:::-;;:::i;7966:403::-;;;;;;:::i;:::-;;:::i;484:38:12:-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;:::i;1717:145:38:-;;;:::i;512:107:30:-;;;;;;:::i;:::-;;:::i;1085:85:38:-;;;:::i;:::-;;;;;;;:::i;3637:113:12:-;;;;;;:::i;:::-;;:::i;292:20:32:-;;;:::i;3506:125:12:-;;;;;;:::i;:::-;;:::i;8723:210:11:-;;;;;;:::i;:::-;;:::i;682:346:12:-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;158:28:20:-;;;:::i;416:44:12:-;;;;;;:::i;:::-;;:::i;729:77:30:-;;;:::i;91:25:18:-;;;:::i;9212:158:11:-;;;;;;:::i;:::-;;:::i;665:98:32:-;;;;;;:::i;:::-;;:::i;870:132::-;;;;;;:::i;:::-;;:::i;2704:935:11:-;;;;;;:::i;:::-;;:::i;2011:240:38:-;;;;;;:::i;:::-;;:::i;2552:497:12:-;;;;;;:::i;:::-;;:::i;7289:378:11:-;7369:7;7639:13;;;:8;:13;;;;;;;;-1:-1:-1;;;;;7639:21:11;;;;;;;;;;;;7289:378::o;927:142:14:-;-1:-1:-1;;;;;;1029:33:14;1006:4;1029:33;;;;;;;;;;;;;;927:142::o;268:18:32:-;;;;;;;;;;;;;;;-1:-1:-1;;268:18:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;769:95::-;1308:12:38;:10;:12::i;:::-;-1:-1:-1;;;;;1297:23:38;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1297:23:38;;1289:68;;;;-1:-1:-1;;;1289:68:38;;;;;;;:::i;:::-;;;;;;;;;835:22:32::1;849:7;835:13;:22::i;:::-;769:95:::0;:::o;338:111:13:-;396:13;428:14;438:3;428:9;:14::i;:::-;421:21;338:111;-1:-1:-1;;338:111:13:o;1034:302:12:-;1141:8;;;;:4;:8;;;;;;;;1120:29;;;;;;;;;;;;;;;;;1095:13;;;;1120:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1120:29:12;;;-1:-1:-1;1120:29:12;;;;;;;;;;;;;;;;;;;;;;;;;1159:20;1193:5;:12;1182:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1182:24:12;;1159:47;;1221:6;1216:91;1237:5;:12;1233:1;:16;1216:91;;;1282:5;1288:1;1282:8;;;;;;;;;;;;;;:14;;;1270:6;1277:1;1270:9;;;;;;;;;;;;;;;;;:26;1251:3;;1216:91;;;-1:-1:-1;1323:6:12;1034:302;-1:-1:-1;;;1034:302:12:o;5269:1776:11:-;-1:-1:-1;;;;;5471:19:11;;5463:69;;;;-1:-1:-1;;;5463:69:11;;;;;;;:::i;:::-;5550:29;;;5542:83;;;;-1:-1:-1;;;5542:83:11;;;;;;;:::i;:::-;5652:10;-1:-1:-1;;;;;5643:19:11;;;;:66;;-1:-1:-1;;;;;;5666:23:11;;;;;;:16;:23;;;;;;;;5690:10;5666:35;;;;;;;;;;:43;;-1:-1:-1;5666:43:11;5643:66;5635:126;;;;-1:-1:-1;;;5635:126:11;;;;;;;:::i;:::-;5777:9;5772:380;5792:15;;;5772:380;;;5828:10;5841:4;;5846:1;5841:7;;;;;;;;;;;;;5828:20;;5862:13;5878:7;;5886:1;5878:10;;;;;;;;;;;;;5862:26;;6047:30;6071:5;6047:8;:12;6056:2;6047:12;;;;;;;;;;;:19;6060:5;-1:-1:-1;;;;;6047:19:11;-1:-1:-1;;;;;6047:19:11;;;;;;;;;;;;;:23;;:30;;;;:::i;:::-;6025:8;:12;6034:2;6025:12;;;;;;;;;;;:19;6038:5;-1:-1:-1;;;;;6025:19:11;-1:-1:-1;;;;;6025:19:11;;;;;;;;;;;;:52;;;;6113:28;6123:8;:12;6132:2;6123:12;;;;;;;;;;;:17;6136:3;-1:-1:-1;;;;;6123:17:11;-1:-1:-1;;;;;6123:17:11;;;;;;;;;;;;;6113:5;:9;;:28;;;;:::i;:::-;6091:12;;;;:8;:12;;;;;;;;-1:-1:-1;;;;;6091:17:11;;;;;;;;;;:50;;;;-1:-1:-1;;5809:3:11;5772:380;;;-1:-1:-1;6702:52:11;;-1:-1:-1;;;;;6702:52:11;;;;;;;;6716:10;;6702:52;;;;6740:4;;;;6746:7;;;;6702:52;:::i;:::-;;;;;;;;6915:16;-1:-1:-1;;;;;6915:14:11;;;:16::i;:::-;6911:128;;;6947:81;6983:10;6995:5;7002:3;7007:4;;6947:81;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;6947:81:11;;;;;;;;;;;;;;;;;;;;-1:-1:-1;7013:7:11;;-1:-1:-1;7013:7:11;;;;6947:81;;;7013:7;;6947:81;7013:7;6947:81;;;;;;;;;-1:-1:-1;;6947:81:11;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;7022:5:11;;-1:-1:-1;7022:5:11;;;;6947:81;;7022:5;;;;6947:81;;;;;;;;;-1:-1:-1;6947:35:11;;-1:-1:-1;;;6947:81:11:i;:::-;5269:1776;;;;;;;;:::o;7966:403::-;8075:16;8112:29;;;8104:38;;;;;;8153:26;8196:7;8182:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;8182:29:11;;8153:58;;8227:9;8222:114;8242:18;;;8222:114;;;8296:8;:17;8305:4;;8310:1;8305:7;;;;;;;;;;;;;8296:17;;;;;;;;;;;:29;8314:7;;8322:1;8314:10;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;8296:29:11;;;;;;;;;;;;-1:-1:-1;8296:29:11;;8281:12;;:9;;8291:1;;8281:12;;;;;;;;;;;;;;;:44;8262:3;;8222:114;;;-1:-1:-1;8353:9:11;7966:403;-1:-1:-1;;;;;7966:403:11:o;484:38:12:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;484:38:12;;;;-1:-1:-1;484:38:12;-1:-1:-1;484:38:12;:::o;1717:145:38:-;1308:12;:10;:12::i;:::-;-1:-1:-1;;;;;1297:23:38;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1297:23:38;;1289:68;;;;-1:-1:-1;;;1289:68:38;;;;;;;:::i;:::-;1807:6:::1;::::0;1786:40:::1;::::0;1823:1:::1;::::0;-1:-1:-1;;;;;1807:6:38::1;::::0;1786:40:::1;::::0;1823:1;;1786:40:::1;1836:6;:19:::0;;-1:-1:-1;;1836:19:38::1;::::0;;1717:145::o;512:107:30:-;568:4;591:21;:8;604:7;591:12;:21::i;1085:85:38:-;1157:6;;-1:-1:-1;;;;;1157:6:38;;1085:85::o;3637:113:12:-;1308:12:38;:10;:12::i;:::-;-1:-1:-1;;;;;1297:23:38;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1297:23:38;;1289:68;;;;-1:-1:-1;;;1289:68:38;;;;;;;:::i;:::-;3715:28:12::1;3731:11;3715:15;:28::i;292:20:32:-:0;;;;;;;;;;;;;;;-1:-1:-1;;292:20:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3506:125:12;1308:12:38;:10;:12::i;:::-;-1:-1:-1;;;;;1297:23:38;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1297:23:38;;1289:68;;;;-1:-1:-1;;;1289:68:38;;;;;;;:::i;:::-;3590:34:12::1;3609:14;3590:18;:34::i;8723:210:11:-:0;8829:10;8812:28;;;;:16;:28;;;;;;;;-1:-1:-1;;;;;8812:39:11;;;;;;;;;;;:51;;-1:-1:-1;;8812:51:11;;;;;;;8878:48;;8812:39;;8829:10;8878:48;;;;8812:51;;8878:48;:::i;:::-;;;;;;;;8723:210;;:::o;682:346:12:-;807:8;;;;:4;:8;;;;;;;;786:29;;;;;;;;;;;;;;;;;750:24;;;;786:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;786:29:12;;;-1:-1:-1;786:29:12;;;;;;;;;;;;;;;;;;;;;;;;;825:31;881:5;:12;859:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;859:35:12;;825:69;;909:6;904:95;925:5;:12;921:1;:16;904:95;;;970:5;976:1;970:8;;;;;;;;;;;;;;:18;;;958:6;965:1;958:9;;;;;;;;-1:-1:-1;;;;;958:30:12;;;;:9;;;;;;;;;;;:30;-1:-1:-1;939:3:12;904:95;;158:28:20;;;;;;;;;;;;;;;-1:-1:-1;;158:28:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;416:44:12;;;;;;;;;;;;-1:-1:-1;;;;;416:44:12;;:::o;729:77:30:-;772:27;786:12;:10;:12::i;:::-;772:13;:27::i;:::-;729:77::o;91:25:18:-;;;;;;;;;;;;;;;-1:-1:-1;;91:25:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9212:158:11;-1:-1:-1;;;;;9328:24:11;;;9305:4;9328:24;;;:16;:24;;;;;;;;:35;;;;;;;;;;;;;;;9212:158::o;665:98:32:-;1308:12:38;:10;:12::i;:::-;-1:-1:-1;;;;;1297:23:38;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1297:23:38;;1289:68;;;;-1:-1:-1;;;1289:68:38;;;;;;;:::i;:::-;737:19:32::1;748:7;737:10;:19::i;870:132::-:0;967:28;973:2;977:4;983:6;991:3;967:5;:28::i;:::-;870:132;;;;:::o;2704:935:11:-;-1:-1:-1;;;;;2845:19:11;;2837:53;;;;-1:-1:-1;;;2837:53:11;;;;;;;:::i;:::-;2917:10;-1:-1:-1;;;;;2908:19:11;;;;:66;;-1:-1:-1;;;;;;2931:23:11;;;;;;:16;:23;;;;;;;;2955:10;2931:35;;;;;;;;;;:43;;-1:-1:-1;2931:43:11;2908:66;2900:126;;;;-1:-1:-1;;;2900:126:11;;;;;;;:::i;:::-;3174:13;;;;:8;:13;;;;;;;;-1:-1:-1;;;;;3174:20:11;;;;;;;;;;:32;;3199:6;3174:24;:32::i;:::-;3151:13;;;;:8;:13;;;;;;;;-1:-1:-1;;;;;3151:20:11;;;;;;;;;;:55;;;;3250:18;;;;;;3239:30;;:6;;:10;:30::i;:::-;3216:13;;;;:8;:13;;;;;;;;-1:-1:-1;;;;;3216:18:11;;;;;;;;;;;;;;:53;;;;3312:51;;3216:18;;3312:51;;;3327:10;;3312:51;;;;3216:13;;3356:6;;3312:51;:::i;:::-;;;;;;;;3516:16;-1:-1:-1;;;;;3516:14:11;;;:16::i;:::-;3512:121;;;3548:74;3579:10;3591:5;3598:3;3603;3608:6;3616:5;;3548:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3548:30:11;;-1:-1:-1;;;3548:74:11:i;:::-;2704:935;;;;;;:::o;2011:240:38:-;1308:12;:10;:12::i;:::-;-1:-1:-1;;;;;1297:23:38;:7;:5;:7::i;:::-;-1:-1:-1;;;;;1297:23:38;;1289:68;;;;-1:-1:-1;;;1289:68:38;;;;;;;:::i;:::-;-1:-1:-1;;;;;2099:22:38;::::1;2091:73;;;::::0;-1:-1:-1;;;2091:73:38;;::::1;::::0;::::1;;;:::i;:::-;2200:6;::::0;2179:38:::1;::::0;-1:-1:-1;;;;;2179:38:38;;::::1;::::0;2200:6:::1;::::0;2179:38:::1;::::0;2200:6:::1;::::0;2179:38:::1;2227:6;:17:::0;;-1:-1:-1;;2227:17:38::1;-1:-1:-1::0;;;;;2227:17:38;;;::::1;::::0;;;::::1;::::0;;2011:240::o;2552:497:12:-;2649:10;-1:-1:-1;;;;;2639:20:12;;;;:68;;-1:-1:-1;;;;;;2663:24:12;;;;;;:16;:24;;;;;;;;2688:10;2663:36;;;;;;;;;;:44;;-1:-1:-1;2663:44:12;2639:68;2631:124;;;;-1:-1:-1;;;2631:124:12;;;;;;;:::i;:::-;2905:13;;;;:8;:13;;;;;;;;-1:-1:-1;;;;;2905:21:12;;;;;;;;;;:33;;2931:6;2905:25;:33::i;:::-;2881:13;;;;:8;:13;;;;;;;;-1:-1:-1;;;;;2881:21:12;;;;;;;;;;:57;;;;2981:61;;2881:13;;:21;2996:10;;2981:61;;;;2881:13;;3035:6;;2981:61;:::i;:::-;;;;;;;;2552:497;;;:::o;261:175:29:-;338:18;342:4;348:7;338:3;:18::i;:::-;337:19;329:63;;;;-1:-1:-1;;;329:63:29;;;;;;;:::i;:::-;-1:-1:-1;;;;;402:20:29;:11;:20;;;;;;;;;;;:27;;-1:-1:-1;;402:27:29;-1:-1:-1;402:27:29;;;261:175::o;598:104:41:-;685:10;598:104;:::o;937:127:30:-;996:24;:8;1012:7;996:15;:24::i;:::-;1035:22;;-1:-1:-1;;;;;1035:22:30;;;;;;;;937:127;:::o;583:140:20:-;696:19;;;;:10;:19;;;;;;;;;674:42;;;;;;;;;;;-1:-1:-1;;674:42:20;;;;;;;;;;;;;;;;;;;;;;;;;;642:13;;674:42;;;;696:19;674:42;;696:19;674:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;674:14:20;:21;;;;;;;;;;;;;-1:-1:-1;;674:21:20;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;674:14:20;;-1:-1:-1;674:21:20;;-1:-1:-1;674:21:20;;:14;:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:42;;;;:::i;3136:155:39:-;3194:7;3226:1;3221;:6;;3213:49;;;;-1:-1:-1;;;3213:49:39;;;;;;;:::i;:::-;-1:-1:-1;3279:5:39;;;3136:155::o;2690:175::-;2748:7;2779:5;;;2802:6;;;;2794:46;;;;-1:-1:-1;;;2794:46:39;;;;;;;:::i;:::-;2857:1;2690:175;-1:-1:-1;;;2690:175:39:o;726:413:40:-;1086:20;1124:8;;;726:413::o;10611:1181:11:-;11604:88;;11696:22;11604:88;;;11696:22;-1:-1:-1;;;;;11604:48:11;;;312:10:10;;11604:88:11;;11653:9;;11664:5;;11671:4;;11677:7;;11686:5;;11604:88;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;;11604:114:11;;11596:189;;;;-1:-1:-1;;;11596:189:11;;;;;;;:::i;780:200:29:-;852:4;-1:-1:-1;;;;;876:21:29;;868:68;;;;-1:-1:-1;;;868:68:29;;;;;;;:::i;:::-;-1:-1:-1;;;;;;953:20:29;:11;:20;;;;;;;;;;;;;;;780:200::o;541:105:18:-;613:26;;;;:11;;:26;;;;;:::i;:::-;;541:105;:::o;1217:117:20:-;1295:32;;;;:14;;:32;;;;;:::i;812:119:30:-;868:21;:8;881:7;868:12;:21::i;:::-;904:20;;-1:-1:-1;;;;;904:20:30;;;;;;;;812:119;:::o;1411:1135:12:-;1548:3;1523:13;;;:8;:13;;;;;;-1:-1:-1;;;;;1523:13:12;:29;1515:65;;;;-1:-1:-1;;;1515:65:12;;;;;;;:::i;:::-;1598:12;1590:50;;;;-1:-1:-1;;;1590:50:12;;;;;;;:::i;:::-;1679:1;1664:4;1658:18;:22;1650:52;;;;-1:-1:-1;;;1650:52:12;;;;;;;:::i;:::-;1713:13;;;;:8;:13;;;;;:26;;-1:-1:-1;;;;;;1713:26:12;1729:10;1713:26;;;1793:12;;1749:27;;1779;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1779:27:12;;1749:57;;1816:17;1847:5;:12;1836:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1836:24:12;;1816:44;;1875:6;1870:336;1891:5;:12;1887:1;:16;1870:336;;;1932:8;;1962:3;;1932:5;;1938:1;;1932:8;;;;;;;;;;;;;;;;:18;-1:-1:-1;;;;;1932:34:12;;;1924:74;;;;-1:-1:-1;;;1924:74:12;;;;;;;:::i;:::-;2020:5;2026:1;2020:8;;;;;;;;;;;;;;:14;;;2038:1;2020:19;;2012:60;;;;-1:-1:-1;;;2012:60:12;;;;;;;:::i;:::-;2086:9;;;;:4;:9;;;;;2101:8;;:5;;2107:1;;2101:8;;;;;;;;;;;;;;;;;2086:24;;;;;;;;-1:-1:-1;2086:24:12;;;;;;;;;;;;;;;;-1:-1:-1;;2086:24:12;-1:-1:-1;;;;;2086:24:12;;;;;;;;;;;;;;;2140:8;;;;2146:1;;2140:8;;;;;;;;;;;;:18;;;2124:10;2135:1;2124:13;;;;;;;;-1:-1:-1;;;;;2124:34:12;;;:13;;;;;;;;;;;:34;2181:8;;:5;;2187:1;;2181:8;;;;;;;;;;;;:14;;;2172:3;2176:1;2172:6;;;;;;;;;;;;;;;;;:23;1905:3;;1870:336;;;-1:-1:-1;2219:12:12;;:16;2215:91;;2256:39;2274:3;2279:10;2291:3;2256:39;;;;;;;;:::i;:::-;;;;;;;;2215:91;2315:13;;;;:8;:13;;;;;;;;2329:10;2315:25;;;;;;;:35;;;2360:23;2324:3;2378:4;2360:12;:23::i;:::-;2444:66;;2485:10;;2479:3;;2485:10;;2444:66;;;;2497:3;;2502:7;;2444:66;:::i;:::-;;;;;;;;2535:3;2525:14;2529:4;2525:14;;;;;;:::i;:::-;;;;;;;;1411:1135;;;;;;:::o;9477:1128:11:-;10435:81;;10520:16;10435:81;;;10520:16;-1:-1:-1;;;;;10435:43:11;;;165:10:10;;10435:81:11;;10479:9;;10490:5;;10497:3;;10502:6;;10510:5;;10435:81;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;;10435:101:11;;10427:171;;;;-1:-1:-1;;;10427:171:11;;;;;;;:::i;511:180:29:-;590:18;594:4;600:7;590:3;:18::i;:::-;582:64;;;;-1:-1:-1;;;582:64:29;;;;;;;:::i;:::-;-1:-1:-1;;;;;656:20:29;679:5;656:20;;;;;;;;;;;:28;;-1:-1:-1;;656:28:29;;;511:180::o;782:414:31:-;1000:10;;987;;857:13;;907:2;;945;;857:13;;987:23;977:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;977:34:31;;958:53;;1021:6;1046;1041:55;1062:3;:10;1058:1;:14;1041:55;;;1090:3;1094:1;1090:6;;;;;;;;;;;;;;;;1079:3;1083;;;;;;1079:8;;;;;;;;;;;:17;;;;;;;;;;-1:-1:-1;1074:3:31;;1041:55;;;;1111:6;1106:55;1127:3;:10;1123:1;:14;1106:55;;;1155:3;1159:1;1155:6;;;;;;;;;;;;;;;;1144:3;1148;;;;;;1144:8;;;;;;;;;;;:17;;;;;;;;;;-1:-1:-1;1139:3:31;;1106:55;;;-1:-1:-1;1185:3:31;;782:414;-1:-1:-1;;;;;;782:414:31:o;3288:212:12:-;3410:3;3381:17;;;:8;:17;;;;;;-1:-1:-1;;;;;3381:17:12;3373:78;;;;-1:-1:-1;;;3373:78:12;;;;;;;:::i;:::-;3461:32;3480:7;3489:3;1046:19:20;;;;:10;:19;;;;;;;;:25;;;;;;;;:::i;:::-;;962:116;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;313:352;;;443:3;436:4;428:6;424:17;420:27;410:2;;-1:-1;;451:12;410:2;-1:-1;481:20;;521:18;510:30;;507:2;;;-1:-1;;543:12;507:2;587:4;579:6;575:17;563:29;;638:3;587:4;;622:6;618:17;579:6;604:32;;601:41;598:2;;;655:1;;645:12;598:2;403:262;;;;;:::o;2281:336::-;;;2395:3;2388:4;2380:6;2376:17;2372:27;2362:2;;-1:-1;;2403:12;2362:2;-1:-1;2433:20;;2473:18;2462:30;;2459:2;;;-1:-1;;2495:12;2459:2;2539:4;2531:6;2527:17;2515:29;;2590:3;2539:4;2570:17;2531:6;2556:32;;2553:41;2550:2;;;2607:1;;2597:12;2626:442;;2728:3;2721:4;2713:6;2709:17;2705:27;2695:2;;-1:-1;;2736:12;2695:2;2783:6;2770:20;37755:18;37747:6;37744:30;37741:2;;;-1:-1;;37777:12;37741:2;2805:65;37918:4;-1:-1;;37850:9;37831:17;;37827:33;37908:15;2805:65;:::i;:::-;2796:74;;2890:6;2883:5;2876:21;2994:3;37918:4;2985:6;2918;2976:16;;2973:25;2970:2;;;3011:1;;3001:12;2970:2;41120:6;37918:4;2918:6;2914:17;37918:4;2952:5;2948:16;41097:30;41176:1;41158:16;;;37918:4;41158:16;41151:27;2952:5;2688:380;-1:-1;;2688:380::o;3105:477::-;;3215:4;3203:9;3198:3;3194:19;3190:30;3187:2;;;-1:-1;;3223:12;3187:2;3251:20;3215:4;3251:20;:::i;:::-;3242:29;;230:6;217:20;242:41;277:5;242:41;:::i;:::-;3358:57;3340:16;3333:83;;3478:2;3536:9;3532:22;3656:20;3478:2;3497:5;3493:16;3486:75;3181:401;;;;:::o;3726:241::-;;3830:2;3818:9;3809:7;3805:23;3801:32;3798:2;;;-1:-1;;3836:12;3798:2;85:6;72:20;97:33;124:5;97:33;:::i;3974:366::-;;;4095:2;4083:9;4074:7;4070:23;4066:32;4063:2;;;-1:-1;;4101:12;4063:2;85:6;72:20;97:33;124:5;97:33;:::i;:::-;4153:63;-1:-1;4253:2;4292:22;;72:20;97:33;72:20;97:33;:::i;:::-;4261:63;;;;4057:283;;;;;:::o;4347:1179::-;;;;;;;;;4608:3;4596:9;4587:7;4583:23;4579:33;4576:2;;;-1:-1;;4615:12;4576:2;85:6;72:20;97:33;124:5;97:33;:::i;:::-;4667:63;-1:-1;4767:2;4806:22;;72:20;97:33;72:20;97:33;:::i;:::-;4775:63;-1:-1;4903:2;4888:18;;4875:32;4927:18;4916:30;;;4913:2;;;-1:-1;;4949:12;4913:2;4987:80;5059:7;5050:6;5039:9;5035:22;4987:80;:::i;:::-;4969:98;;-1:-1;4969:98;-1:-1;5132:2;5117:18;;5104:32;;-1:-1;5145:30;;;5142:2;;;-1:-1;;5178:12;5142:2;5216:80;5288:7;5279:6;5268:9;5264:22;5216:80;:::i;:::-;5198:98;;-1:-1;5198:98;-1:-1;5361:3;5346:19;;5333:33;;-1:-1;5375:30;;;5372:2;;;-1:-1;;5408:12;5372:2;;5446:64;5502:7;5493:6;5482:9;5478:22;5446:64;:::i;:::-;4570:956;;;;-1:-1;4570:956;;-1:-1;4570:956;;;;;;5428:82;-1:-1;;;4570:956::o;5533:867::-;;;;;;;5724:3;5712:9;5703:7;5699:23;5695:33;5692:2;;;-1:-1;;5731:12;5692:2;85:6;72:20;97:33;124:5;97:33;:::i;:::-;5783:63;-1:-1;5883:2;5922:22;;72:20;97:33;72:20;97:33;:::i;:::-;5891:63;-1:-1;5991:2;6030:22;;3656:20;;-1:-1;6099:2;6138:22;;3656:20;;-1:-1;6235:3;6220:19;;6207:33;6260:18;6249:30;;6246:2;;;-1:-1;;6282:12;6246:2;6320:64;6376:7;6367:6;6356:9;6352:22;6320:64;:::i;:::-;5686:714;;;;-1:-1;5686:714;;-1:-1;5686:714;;6302:82;;5686:714;-1:-1;;;5686:714::o;6407:360::-;;;6525:2;6513:9;6504:7;6500:23;6496:32;6493:2;;;-1:-1;;6531:12;6493:2;85:6;72:20;97:33;124:5;97:33;:::i;:::-;6583:63;-1:-1;6683:2;6719:22;;1926:20;40654:13;;40647:21;41894:32;;41884:2;;-1:-1;;41930:12;6774:366;;;6895:2;6883:9;6874:7;6870:23;6866:32;6863:2;;;-1:-1;;6901:12;6863:2;85:6;72:20;97:33;124:5;97:33;:::i;:::-;6953:63;7053:2;7092:22;;;;3656:20;;-1:-1;;;6857:283::o;7147:491::-;;;;7285:2;7273:9;7264:7;7260:23;7256:32;7253:2;;;-1:-1;;7291:12;7253:2;85:6;72:20;97:33;124:5;97:33;:::i;:::-;7343:63;7443:2;7482:22;;3656:20;;-1:-1;7551:2;7590:22;;;3656:20;;7247:391;-1:-1;;;7247:391::o;7645:678::-;;;;;7836:2;7824:9;7815:7;7811:23;7807:32;7804:2;;;-1:-1;;7842:12;7804:2;7900:17;7887:31;7938:18;;7930:6;7927:30;7924:2;;;-1:-1;;7960:12;7924:2;7998:80;8070:7;8061:6;8050:9;8046:22;7998:80;:::i;:::-;7980:98;;-1:-1;7980:98;-1:-1;8143:2;8128:18;;8115:32;;-1:-1;8156:30;;;8153:2;;;-1:-1;;8189:12;8153:2;;8227:80;8299:7;8290:6;8279:9;8275:22;8227:80;:::i;:::-;7798:525;;;;-1:-1;8209:98;-1:-1;;;;7798:525::o;8330:239::-;;8433:2;8421:9;8412:7;8408:23;8404:32;8401:2;;;-1:-1;;8439:12;8401:2;2072:6;2059:20;2084:32;2110:5;2084:32;:::i;8576:261::-;;8690:2;8678:9;8669:7;8665:23;8661:32;8658:2;;;-1:-1;;8696:12;8658:2;2211:6;2205:13;2223:32;2249:5;2223:32;:::i;8844:347::-;;8958:2;8946:9;8937:7;8933:23;8929:32;8926:2;;;-1:-1;;8964:12;8926:2;9022:17;9009:31;9060:18;9052:6;9049:30;9046:2;;;-1:-1;;9082:12;9046:2;9112:63;9167:7;9158:6;9147:9;9143:22;9112:63;:::i;:::-;9102:73;8920:271;-1:-1;;;;8920:271::o;9198:241::-;;9302:2;9290:9;9281:7;9277:23;9273:32;9270:2;;;-1:-1;;9308:12;9270:2;-1:-1;3656:20;;9264:175;-1:-1;9264:175::o;9446:901::-;;;;;9657:3;9645:9;9636:7;9632:23;9628:33;9625:2;;;-1:-1;;9664:12;9625:2;3669:6;3656:20;9716:63;;9844:2;;9833:9;9829:18;9816:32;9868:18;;9860:6;9857:30;9854:2;;;-1:-1;;9890:12;9854:2;10002:6;9991:9;9987:22;;;844:3;837:4;829:6;825:17;821:27;811:2;;-1:-1;;852:12;811:2;899:6;886:20;921:101;936:85;1014:6;936:85;:::i;:::-;921:101;:::i;:::-;1050:21;;;1107:14;;;;1082:17;;;1208:4;1196:17;;;1187:27;;;;1184:36;-1:-1;1181:2;;;-1:-1;;1223:12;1181:2;-1:-1;1249:10;;1243:227;1268:6;1265:1;1262:13;1243:227;;;1348:58;1402:3;1390:10;1348:58;:::i;:::-;1336:71;;1290:1;1283:9;;;;;1421:14;;;;1449;;;;1243:227;;;9910:109;;-1:-1;;10095:22;;3656:20;;-1:-1;;;10192:2;10177:18;;10164:32;;-1:-1;10205:30;;;10202:2;;;-1:-1;;10238:12;10202:2;;;10268:63;10323:7;10314:6;10303:9;10299:22;10268:63;:::i;:::-;10258:73;;;9619:728;;;;;;;:::o;10354:366::-;;;10475:2;10463:9;10454:7;10450:23;10446:32;10443:2;;;-1:-1;;10481:12;10443:2;-1:-1;;3656:20;;;10633:2;10672:22;;;3656:20;;-1:-1;10437:283::o;13382:467::-;;39603:6;39598:3;39591:19;13641:66;13633:6;13630:78;13627:2;;;-1:-1;;13711:12;13627:2;39640:4;13746:6;13742:17;41120:6;41115:3;39640:4;39635:3;39631:14;41097:30;41158:16;;;;39640:4;41158:16;41151:27;;;-1:-1;41158:16;;13514:335;-1:-1;13514:335::o;13888:690::-;;14081:5;38525:12;39603:6;39598:3;39591:19;39640:4;;39635:3;39631:14;14093:93;;39640:4;14257:5;38055:14;-1:-1;14296:260;14321:6;14318:1;14315:13;14296:260;;;14382:13;;22660:37;;11277:14;;;;39208;;;;14343:1;14336:9;14296:260;;;-1:-1;14562:10;;14012:566;-1:-1;;;;;14012:566::o;14697:343::-;;14839:5;38525:12;39603:6;39598:3;39591:19;-1:-1;41265:101;41279:6;41276:1;41273:13;41265:101;;;39640:4;41346:11;;;;;41340:18;41327:11;;;;;41320:39;41294:10;41265:101;;;41381:6;41378:1;41375:13;41372:2;;;-1:-1;39640:4;41437:6;39635:3;41428:16;;41421:27;41372:2;-1:-1;37850:9;41537:14;-1:-1;;41533:28;14996:39;;;;39640:4;14996:39;;14787:253;-1:-1;;14787:253::o;22829:222::-;-1:-1;;;;;40893:54;;;;11382:45;;22956:2;22941:18;;22927:124::o;23058:365::-;-1:-1;;;;;40893:54;;;;11382:45;;23409:2;23394:18;;22660:37;23229:2;23214:18;;23200:223::o;23430:1048::-;-1:-1;;;;;40893:54;;;11382:45;;40893:54;;23952:2;23937:18;;11382:45;-1:-1;23989:2;23974:18;;23967:48;;;23430:1048;;24029:108;;23772:19;;24123:6;24029:108;:::i;:::-;24185:9;24179:4;24175:20;24170:2;24159:9;24155:18;24148:48;24210:108;24313:4;24304:6;24210:108;:::i;:::-;24202:116;;24367:9;24361:4;24357:20;24351:3;24340:9;24336:19;24329:49;24392:76;24463:4;24454:6;24392:76;:::i;:::-;24384:84;23758:720;-1:-1;;;;;;;;23758:720::o;24485:752::-;-1:-1;;;;;40893:54;;;11382:45;;40893:54;;24907:2;24892:18;;11382:45;24990:2;24975:18;;22660:37;;;25073:2;25058:18;;22660:37;;;-1:-1;25110:3;25095:19;;25088:49;;;24485:752;;25151:76;;24727:19;;25213:6;25151:76;:::i;:::-;25143:84;24713:524;-1:-1;;;;;;;24713:524::o;25244:402::-;25437:2;25451:47;;;38525:12;;25422:18;;;39591:19;;;25244:402;;25437:2;38055:14;;;;39631;;;;25244:402;13037:284;13062:6;13059:1;13056:13;13037:284;;;13123:13;;-1:-1;;;;;40893:54;11382:45;;39208:14;;;;10913;;;;-1:-1;13077:9;13037:284;;25653:669;;25928:2;25949:17;25942:47;26003:118;25928:2;25917:9;25913:18;26107:6;26099;26003:118;:::i;:::-;26169:9;26163:4;26159:20;26154:2;26143:9;26139:18;26132:48;26194:118;26307:4;26298:6;26290;26194:118;:::i;26329:370::-;;26506:2;26527:17;26520:47;26581:108;26506:2;26495:9;26491:18;26675:6;26581:108;:::i;26706:210::-;40654:13;;40647:21;14651:34;;26827:2;26812:18;;26798:118::o;26923:310::-;;27070:2;27091:17;27084:47;27145:78;27070:2;27059:9;27055:18;27209:6;27145:78;:::i;27240:416::-;27440:2;27454:47;;;15626:2;27425:18;;;39591:19;15662:30;39631:14;;;15642:51;15712:12;;;27411:245::o;27663:416::-;27863:2;27877:47;;;15963:2;27848:18;;;39591:19;15999:33;39631:14;;;15979:54;16052:12;;;27834:245::o;28086:416::-;28286:2;28300:47;;;16303:2;28271:18;;;39591:19;16339:34;39631:14;;;16319:55;16408:8;16394:12;;;16387:30;16436:12;;;28257:245::o;28509:416::-;28709:2;28723:47;;;16687:2;28694:18;;;39591:19;16723:29;39631:14;;;16703:50;16772:12;;;28680:245::o;28932:416::-;29132:2;29146:47;;;29117:18;;;39591:19;17059:34;39631:14;;;17039:55;17113:12;;;29103:245::o;29355:416::-;29555:2;29569:47;;;17364:2;29540:18;;;39591:19;17400:32;39631:14;;;17380:53;17452:12;;;29526:245::o;29778:416::-;29978:2;29992:47;;;17703:2;29963:18;;;39591:19;17739:34;39631:14;;;17719:55;17808:7;17794:12;;;17787:29;17835:12;;;29949:245::o;30201:416::-;30401:2;30415:47;;;18086:2;30386:18;;;39591:19;18122:34;39631:14;;;18102:55;18191:3;18177:12;;;18170:25;18214:12;;;30372:245::o;30624:416::-;30824:2;30838:47;;;18465:2;30809:18;;;39591:19;18501:34;39631:14;;;18481:55;18570:13;18556:12;;;18549:35;18603:12;;;30795:245::o;31047:416::-;31247:2;31261:47;;;18854:2;31232:18;;;39591:19;18890:34;39631:14;;;18870:55;18959:17;18945:12;;;18938:39;18996:12;;;31218:245::o;31470:416::-;31670:2;31684:47;;;19247:2;31655:18;;;39591:19;19283:34;39631:14;;;19263:55;19352:32;19338:12;;;19331:54;19404:12;;;31641:245::o;31893:416::-;32093:2;32107:47;;;32078:18;;;39591:19;19691:34;39631:14;;;19671:55;19745:12;;;32064:245::o;32316:416::-;32516:2;32530:47;;;19996:2;32501:18;;;39591:19;20032:34;39631:14;;;20012:55;20101:4;20087:12;;;20080:26;20125:12;;;32487:245::o;32739:416::-;32939:2;32953:47;;;20376:2;32924:18;;;39591:19;20412:25;39631:14;;;20392:46;20457:12;;;32910:245::o;33162:416::-;33362:2;33376:47;;;20708:2;33347:18;;;39591:19;20744:27;39631:14;;;20724:48;20791:12;;;33333:245::o;33585:416::-;33785:2;33799:47;;;21042:2;33770:18;;;39591:19;21078:34;39631:14;;;21058:55;21147:11;21133:12;;;21126:33;21178:12;;;33756:245::o;34008:416::-;34208:2;34222:47;;;21429:2;34193:18;;;39591:19;21465:29;39631:14;;;21445:50;21514:12;;;34179:245::o;34431:416::-;34631:2;34645:47;;;21765:2;34616:18;;;39591:19;21801:34;39631:14;;;21781:55;21870:27;21856:12;;;21849:49;21917:12;;;34602:245::o;34854:416::-;35054:2;35068:47;;;22168:2;35039:18;;;39591:19;22204:23;39631:14;;;22184:44;22247:12;;;35025:245::o;35277:416::-;35477:2;35491:47;;;22498:2;35462:18;;;39591:19;22534;39631:14;;;22514:40;22573:12;;;35448:245::o;35700:222::-;22660:37;;;35827:2;35812:18;;35798:124::o;35929:740::-;;36212:2;36201:9;36197:18;22690:5;22667:3;22660:37;36330:2;36212;36330;36319:9;36315:18;36308:48;36370:108;12037:5;38525:12;39603:6;39598:3;39591:19;39631:14;36201:9;39631:14;12049:93;;36330:2;12213:5;38055:14;12225:21;;-1:-1;12252:260;12277:6;12274:1;12271:13;12252:260;;;12338:13;;-1:-1;;;;;40893:54;11382:45;;39208:14;;;;11095;;;;-1:-1;12292:9;12252:260;;;12256:14;;36526:9;36520:4;36516:20;36511:2;36500:9;36496:18;36489:48;36551:108;36654:4;36645:6;36551:108;:::i;36676:333::-;22660:37;;;36995:2;36980:18;;22660:37;36831:2;36816:18;;36802:207::o;37016:256::-;37078:2;37072:9;37104:17;;;37179:18;37164:34;;37200:22;;;37161:62;37158:2;;;37236:1;;37226:12;37158:2;37078;37245:22;37056:216;;-1:-1;37056:216::o;37279:325::-;;37459:18;37451:6;37448:30;37445:2;;;-1:-1;;37481:12;37445:2;-1:-1;37526:4;37514:17;;;37579:15;;37382:222::o;41574:117::-;-1:-1;;;;;40893:54;;41633:35;;41623:2;;41682:1;;41672:12;41956:115;-1:-1;;;;;;40741:78;;42014:34;;42004:2;;42062:1;;42052:12",
  "source": "\npragma solidity ^0.6.12;\npragma experimental ABIEncoderV2;\n\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"../lib/utils/SignerRole.sol\";\nimport \"../lib/contracts/ERC1155Base.sol\";\n\ncontract DavinciMultipleToken is Ownable, SignerRole, ERC1155Base {\n    string public name;\n    string public symbol;\n\n    constructor(string memory _name, string memory _symbol, address newOwner, string memory contractURI, string memory tokenURIPrefix) ERC1155Base(contractURI, tokenURIPrefix) public {\n        name = _name;\n        symbol = _symbol;\n\n        _registerInterface(bytes4(keccak256('MINT_WITH_ADDRESS')));\n        transferOwnership(newOwner);\n    }\n\n    function addSigner(address account) public override onlyOwner {\n        _addSigner(account);\n    }\n\n    function removeSigner(address account) public onlyOwner {\n        _removeSigner(account);\n    }\n\n    function mint(uint256 id, Fee[] memory fees, uint256 supply, string memory uri) public {\n        _mint(id, fees, supply, uri);\n    }\n}",
  "sourcePath": "/Users/home/Sites/davinci/davinci-contracts/contracts/token/DavinciMultipleToken.sol",
  "ast": {
    "absolutePath": "/Users/home/Sites/davinci/davinci-contracts/contracts/token/DavinciMultipleToken.sol",
    "exportedSymbols": {
      "DavinciMultipleToken": [
        5499
      ]
    },
    "id": 5500,
    "license": null,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5400,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".12"
        ],
        "nodeType": "PragmaDirective",
        "src": "1:24:32"
      },
      {
        "id": 5401,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "26:33:32"
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 5402,
        "nodeType": "ImportDirective",
        "scope": 5500,
        "sourceUnit": 6155,
        "src": "61:52:32",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/home/Sites/davinci/davinci-contracts/contracts/lib/utils/SignerRole.sol",
        "file": "../lib/utils/SignerRole.sol",
        "id": 5403,
        "nodeType": "ImportDirective",
        "scope": 5500,
        "sourceUnit": 4825,
        "src": "114:37:32",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/ERC1155Base.sol",
        "file": "../lib/contracts/ERC1155Base.sol",
        "id": 5404,
        "nodeType": "ImportDirective",
        "scope": 5500,
        "sourceUnit": 2521,
        "src": "152:42:32",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5405,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6154,
              "src": "229:7:32",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$6154",
                "typeString": "contract Ownable"
              }
            },
            "id": 5406,
            "nodeType": "InheritanceSpecifier",
            "src": "229:7:32"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5407,
              "name": "SignerRole",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4824,
              "src": "238:10:32",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SignerRole_$4824",
                "typeString": "contract SignerRole"
              }
            },
            "id": 5408,
            "nodeType": "InheritanceSpecifier",
            "src": "238:10:32"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5409,
              "name": "ERC1155Base",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2520,
              "src": "250:11:32",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC1155Base_$2520",
                "typeString": "contract ERC1155Base"
              }
            },
            "id": 5410,
            "nodeType": "InheritanceSpecifier",
            "src": "250:11:32"
          }
        ],
        "contractDependencies": [
          1614,
          2080,
          2520,
          2552,
          2609,
          4089,
          4132,
          4219,
          4378,
          4390,
          4402,
          4824,
          6154,
          6828
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5499,
        "linearizedBaseContracts": [
          5499,
          2520,
          2080,
          1614,
          4089,
          2552,
          4219,
          4390,
          4824,
          6154,
          6828,
          4132,
          2609,
          4378,
          4402
        ],
        "name": "DavinciMultipleToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "06fdde03",
            "id": 5412,
            "mutability": "mutable",
            "name": "name",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 5499,
            "src": "268:18:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 5411,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "268:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "95d89b41",
            "id": 5414,
            "mutability": "mutable",
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 5499,
            "src": "292:20:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 5413,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "292:6:32",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5452,
              "nodeType": "Block",
              "src": "498:161:32",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5433,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5431,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5412,
                      "src": "508:4:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5432,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5416,
                      "src": "515:5:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "508:12:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 5434,
                  "nodeType": "ExpressionStatement",
                  "src": "508:12:32"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5437,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5435,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5414,
                      "src": "530:6:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5436,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5418,
                      "src": "539:7:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "530:16:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 5438,
                  "nodeType": "ExpressionStatement",
                  "src": "530:16:32"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "4d494e545f574954485f41444452455353",
                                "id": 5443,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "593:19:32",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_e37243f27916e395706434720b54132b80ef5cc8c56f39b0df6485e8dfb697cf",
                                  "typeString": "literal_string \"MINT_WITH_ADDRESS\""
                                },
                                "value": "MINT_WITH_ADDRESS"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_e37243f27916e395706434720b54132b80ef5cc8c56f39b0df6485e8dfb697cf",
                                  "typeString": "literal_string \"MINT_WITH_ADDRESS\""
                                }
                              ],
                              "id": 5442,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -8,
                              "src": "583:9:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 5444,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "583:30:32",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "id": 5441,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "576:6:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_bytes4_$",
                            "typeString": "type(bytes4)"
                          },
                          "typeName": {
                            "id": 5440,
                            "name": "bytes4",
                            "nodeType": "ElementaryTypeName",
                            "src": "576:6:32",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 5445,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "576:38:32",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "id": 5439,
                      "name": "_registerInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2608,
                      "src": "557:18:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes4_$returns$__$",
                        "typeString": "function (bytes4)"
                      }
                    },
                    "id": 5446,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "557:58:32",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5447,
                  "nodeType": "ExpressionStatement",
                  "src": "557:58:32"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5449,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5420,
                        "src": "643:8:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5448,
                      "name": "transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6153,
                      "src": "625:17:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5450,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "625:27:32",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5451,
                  "nodeType": "ExpressionStatement",
                  "src": "625:27:32"
                }
              ]
            },
            "documentation": null,
            "id": 5453,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 5427,
                    "name": "contractURI",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5422,
                    "src": "462:11:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 5428,
                    "name": "tokenURIPrefix",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5424,
                    "src": "475:14:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 5429,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5426,
                  "name": "ERC1155Base",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 2520,
                  "src": "450:11:32",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC1155Base_$2520_$",
                    "typeString": "type(contract ERC1155Base)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "450:40:32"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 5425,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5416,
                  "mutability": "mutable",
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5453,
                  "src": "331:19:32",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5415,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "331:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5418,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5453,
                  "src": "352:21:32",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5417,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "352:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5420,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5453,
                  "src": "375:16:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5419,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:7:32",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5422,
                  "mutability": "mutable",
                  "name": "contractURI",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5453,
                  "src": "393:25:32",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5421,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5424,
                  "mutability": "mutable",
                  "name": "tokenURIPrefix",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5453,
                  "src": "420:28:32",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5423,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "330:119:32"
            },
            "returnParameters": {
              "id": 5430,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "498:0:32"
            },
            "scope": 5499,
            "src": "319:340:32",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              4782
            ],
            "body": {
              "id": 5465,
              "nodeType": "Block",
              "src": "727:36:32",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5462,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5455,
                        "src": "748:7:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5461,
                      "name": "_addSigner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4807,
                      "src": "737:10:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5463,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "737:19:32",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5464,
                  "nodeType": "ExpressionStatement",
                  "src": "737:19:32"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "eb12d61e",
            "id": 5466,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 5459,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5458,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 6103,
                  "src": "717:9:32",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "717:9:32"
              }
            ],
            "name": "addSigner",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 5457,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "708:8:32"
            },
            "parameters": {
              "id": 5456,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5455,
                  "mutability": "mutable",
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5466,
                  "src": "684:15:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5454,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "684:7:32",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "683:17:32"
            },
            "returnParameters": {
              "id": 5460,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "727:0:32"
            },
            "scope": 5499,
            "src": "665:98:32",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5477,
              "nodeType": "Block",
              "src": "825:39:32",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5474,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5468,
                        "src": "849:7:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5473,
                      "name": "_removeSigner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4823,
                      "src": "835:13:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5475,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "835:22:32",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5476,
                  "nodeType": "ExpressionStatement",
                  "src": "835:22:32"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "0e316ab7",
            "id": 5478,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": null,
                "id": 5471,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5470,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 6103,
                  "src": "815:9:32",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "815:9:32"
              }
            ],
            "name": "removeSigner",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 5469,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5468,
                  "mutability": "mutable",
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5478,
                  "src": "791:15:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5467,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "791:7:32",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "790:17:32"
            },
            "returnParameters": {
              "id": 5472,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "825:0:32"
            },
            "scope": 5499,
            "src": "769:95:32",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5497,
              "nodeType": "Block",
              "src": "957:45:32",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5491,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5480,
                        "src": "973:2:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5492,
                        "name": "fees",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5483,
                        "src": "977:4:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Fee_$2102_memory_ptr_$dyn_memory_ptr",
                          "typeString": "struct ERC1155Base.Fee memory[] memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5493,
                        "name": "supply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5485,
                        "src": "983:6:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5494,
                        "name": "uri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5487,
                        "src": "991:3:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_array$_t_struct$_Fee_$2102_memory_ptr_$dyn_memory_ptr",
                          "typeString": "struct ERC1155Base.Fee memory[] memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 5490,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2412,
                      "src": "967:5:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_array$_t_struct$_Fee_$2102_memory_ptr_$dyn_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,struct ERC1155Base.Fee memory[] memory,uint256,string memory)"
                      }
                    },
                    "id": 5495,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "967:28:32",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5496,
                  "nodeType": "ExpressionStatement",
                  "src": "967:28:32"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "f0cc52a0",
            "id": 5498,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 5488,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5480,
                  "mutability": "mutable",
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5498,
                  "src": "884:10:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5479,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "884:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5483,
                  "mutability": "mutable",
                  "name": "fees",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5498,
                  "src": "896:17:32",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Fee_$2102_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct ERC1155Base.Fee[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 5481,
                      "name": "Fee",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 2102,
                      "src": "896:3:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Fee_$2102_storage_ptr",
                        "typeString": "struct ERC1155Base.Fee"
                      }
                    },
                    "id": 5482,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "896:5:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Fee_$2102_storage_$dyn_storage_ptr",
                      "typeString": "struct ERC1155Base.Fee[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5485,
                  "mutability": "mutable",
                  "name": "supply",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5498,
                  "src": "915:14:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5484,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "915:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5487,
                  "mutability": "mutable",
                  "name": "uri",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 5498,
                  "src": "931:17:32",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5486,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "931:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "883:66:32"
            },
            "returnParameters": {
              "id": 5489,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "957:0:32"
            },
            "scope": 5499,
            "src": "870:132:32",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 5500,
        "src": "196:808:32"
      }
    ],
    "src": "1:1003:32"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/Users/home/Sites/davinci/davinci-contracts/contracts/token/DavinciMultipleToken.sol",
      "exportedSymbols": {
        "DavinciMultipleToken": [
          5499
        ]
      },
      "license": null
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".12"
          ]
        },
        "id": 5400,
        "name": "PragmaDirective",
        "src": "1:24:32"
      },
      {
        "attributes": {
          "literals": [
            "experimental",
            "ABIEncoderV2"
          ]
        },
        "id": 5401,
        "name": "PragmaDirective",
        "src": "26:33:32"
      },
      {
        "attributes": {
          "SourceUnit": 6155,
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "scope": 5500,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5402,
        "name": "ImportDirective",
        "src": "61:52:32"
      },
      {
        "attributes": {
          "SourceUnit": 4825,
          "absolutePath": "/Users/home/Sites/davinci/davinci-contracts/contracts/lib/utils/SignerRole.sol",
          "file": "../lib/utils/SignerRole.sol",
          "scope": 5500,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5403,
        "name": "ImportDirective",
        "src": "114:37:32"
      },
      {
        "attributes": {
          "SourceUnit": 2521,
          "absolutePath": "/Users/home/Sites/davinci/davinci-contracts/contracts/lib/contracts/ERC1155Base.sol",
          "file": "../lib/contracts/ERC1155Base.sol",
          "scope": 5500,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5404,
        "name": "ImportDirective",
        "src": "152:42:32"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            1614,
            2080,
            2520,
            2552,
            2609,
            4089,
            4132,
            4219,
            4378,
            4390,
            4402,
            4824,
            6154,
            6828
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            5499,
            2520,
            2080,
            1614,
            4089,
            2552,
            4219,
            4390,
            4824,
            6154,
            6828,
            4132,
            2609,
            4378,
            4402
          ],
          "name": "DavinciMultipleToken",
          "scope": 5500
        },
        "children": [
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Ownable",
                  "referencedDeclaration": 6154,
                  "type": "contract Ownable"
                },
                "id": 5405,
                "name": "UserDefinedTypeName",
                "src": "229:7:32"
              }
            ],
            "id": 5406,
            "name": "InheritanceSpecifier",
            "src": "229:7:32"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SignerRole",
                  "referencedDeclaration": 4824,
                  "type": "contract SignerRole"
                },
                "id": 5407,
                "name": "UserDefinedTypeName",
                "src": "238:10:32"
              }
            ],
            "id": 5408,
            "name": "InheritanceSpecifier",
            "src": "238:10:32"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC1155Base",
                  "referencedDeclaration": 2520,
                  "type": "contract ERC1155Base"
                },
                "id": 5409,
                "name": "UserDefinedTypeName",
                "src": "250:11:32"
              }
            ],
            "id": 5410,
            "name": "InheritanceSpecifier",
            "src": "250:11:32"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "06fdde03",
              "mutability": "mutable",
              "name": "name",
              "overrides": null,
              "scope": 5499,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string"
                },
                "id": 5411,
                "name": "ElementaryTypeName",
                "src": "268:6:32"
              }
            ],
            "id": 5412,
            "name": "VariableDeclaration",
            "src": "268:18:32"
          },
          {
            "attributes": {
              "constant": false,
              "functionSelector": "95d89b41",
              "mutability": "mutable",
              "name": "symbol",
              "overrides": null,
              "scope": 5499,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string"
                },
                "id": 5413,
                "name": "ElementaryTypeName",
                "src": "292:6:32"
              }
            ],
            "id": 5414,
            "name": "VariableDeclaration",
            "src": "292:20:32"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "name": "",
              "overrides": null,
              "scope": 5499,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_name",
                      "overrides": null,
                      "scope": 5453,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 5415,
                        "name": "ElementaryTypeName",
                        "src": "331:6:32"
                      }
                    ],
                    "id": 5416,
                    "name": "VariableDeclaration",
                    "src": "331:19:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "_symbol",
                      "overrides": null,
                      "scope": 5453,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 5417,
                        "name": "ElementaryTypeName",
                        "src": "352:6:32"
                      }
                    ],
                    "id": 5418,
                    "name": "VariableDeclaration",
                    "src": "352:21:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "newOwner",
                      "overrides": null,
                      "scope": 5453,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 5419,
                        "name": "ElementaryTypeName",
                        "src": "375:7:32"
                      }
                    ],
                    "id": 5420,
                    "name": "VariableDeclaration",
                    "src": "375:16:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "contractURI",
                      "overrides": null,
                      "scope": 5453,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 5421,
                        "name": "ElementaryTypeName",
                        "src": "393:6:32"
                      }
                    ],
                    "id": 5422,
                    "name": "VariableDeclaration",
                    "src": "393:25:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "tokenURIPrefix",
                      "overrides": null,
                      "scope": 5453,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 5423,
                        "name": "ElementaryTypeName",
                        "src": "420:6:32"
                      }
                    ],
                    "id": 5424,
                    "name": "VariableDeclaration",
                    "src": "420:28:32"
                  }
                ],
                "id": 5425,
                "name": "ParameterList",
                "src": "330:119:32"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5430,
                "name": "ParameterList",
                "src": "498:0:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2520,
                      "type": "type(contract ERC1155Base)",
                      "value": "ERC1155Base"
                    },
                    "id": 5426,
                    "name": "Identifier",
                    "src": "450:11:32"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5422,
                      "type": "string memory",
                      "value": "contractURI"
                    },
                    "id": 5427,
                    "name": "Identifier",
                    "src": "462:11:32"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5424,
                      "type": "string memory",
                      "value": "tokenURIPrefix"
                    },
                    "id": 5428,
                    "name": "Identifier",
                    "src": "475:14:32"
                  }
                ],
                "id": 5429,
                "name": "ModifierInvocation",
                "src": "450:40:32"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5412,
                              "type": "string storage ref",
                              "value": "name"
                            },
                            "id": 5431,
                            "name": "Identifier",
                            "src": "508:4:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5416,
                              "type": "string memory",
                              "value": "_name"
                            },
                            "id": 5432,
                            "name": "Identifier",
                            "src": "515:5:32"
                          }
                        ],
                        "id": 5433,
                        "name": "Assignment",
                        "src": "508:12:32"
                      }
                    ],
                    "id": 5434,
                    "name": "ExpressionStatement",
                    "src": "508:12:32"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5414,
                              "type": "string storage ref",
                              "value": "symbol"
                            },
                            "id": 5435,
                            "name": "Identifier",
                            "src": "530:6:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5418,
                              "type": "string memory",
                              "value": "_symbol"
                            },
                            "id": 5436,
                            "name": "Identifier",
                            "src": "539:7:32"
                          }
                        ],
                        "id": 5437,
                        "name": "Assignment",
                        "src": "530:16:32"
                      }
                    ],
                    "id": 5438,
                    "name": "ExpressionStatement",
                    "src": "530:16:32"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2608,
                              "type": "function (bytes4)",
                              "value": "_registerInterface"
                            },
                            "id": 5439,
                            "name": "Identifier",
                            "src": "557:18:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "bytes4",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(bytes4)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "bytes4",
                                      "type": null
                                    },
                                    "id": 5440,
                                    "name": "ElementaryTypeName",
                                    "src": "576:6:32"
                                  }
                                ],
                                "id": 5441,
                                "name": "ElementaryTypeNameExpression",
                                "src": "576:6:32"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "bytes32",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_stringliteral_e37243f27916e395706434720b54132b80ef5cc8c56f39b0df6485e8dfb697cf",
                                          "typeString": "literal_string \"MINT_WITH_ADDRESS\""
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": -8,
                                      "type": "function (bytes memory) pure returns (bytes32)",
                                      "value": "keccak256"
                                    },
                                    "id": 5442,
                                    "name": "Identifier",
                                    "src": "583:9:32"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "4d494e545f574954485f41444452455353",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "string",
                                      "type": "literal_string \"MINT_WITH_ADDRESS\"",
                                      "value": "MINT_WITH_ADDRESS"
                                    },
                                    "id": 5443,
                                    "name": "Literal",
                                    "src": "593:19:32"
                                  }
                                ],
                                "id": 5444,
                                "name": "FunctionCall",
                                "src": "583:30:32"
                              }
                            ],
                            "id": 5445,
                            "name": "FunctionCall",
                            "src": "576:38:32"
                          }
                        ],
                        "id": 5446,
                        "name": "FunctionCall",
                        "src": "557:58:32"
                      }
                    ],
                    "id": 5447,
                    "name": "ExpressionStatement",
                    "src": "557:58:32"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 6153,
                              "type": "function (address)",
                              "value": "transferOwnership"
                            },
                            "id": 5448,
                            "name": "Identifier",
                            "src": "625:17:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5420,
                              "type": "address",
                              "value": "newOwner"
                            },
                            "id": 5449,
                            "name": "Identifier",
                            "src": "643:8:32"
                          }
                        ],
                        "id": 5450,
                        "name": "FunctionCall",
                        "src": "625:27:32"
                      }
                    ],
                    "id": 5451,
                    "name": "ExpressionStatement",
                    "src": "625:27:32"
                  }
                ],
                "id": 5452,
                "name": "Block",
                "src": "498:161:32"
              }
            ],
            "id": 5453,
            "name": "FunctionDefinition",
            "src": "319:340:32"
          },
          {
            "attributes": {
              "baseFunctions": [
                4782
              ],
              "documentation": null,
              "functionSelector": "eb12d61e",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "addSigner",
              "scope": 5499,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "overrides": [
                    null
                  ]
                },
                "id": 5457,
                "name": "OverrideSpecifier",
                "src": "708:8:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "account",
                      "overrides": null,
                      "scope": 5466,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 5454,
                        "name": "ElementaryTypeName",
                        "src": "684:7:32"
                      }
                    ],
                    "id": 5455,
                    "name": "VariableDeclaration",
                    "src": "684:15:32"
                  }
                ],
                "id": 5456,
                "name": "ParameterList",
                "src": "683:17:32"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5460,
                "name": "ParameterList",
                "src": "727:0:32"
              },
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 6103,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 5458,
                    "name": "Identifier",
                    "src": "717:9:32"
                  }
                ],
                "id": 5459,
                "name": "ModifierInvocation",
                "src": "717:9:32"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4807,
                              "type": "function (address)",
                              "value": "_addSigner"
                            },
                            "id": 5461,
                            "name": "Identifier",
                            "src": "737:10:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5455,
                              "type": "address",
                              "value": "account"
                            },
                            "id": 5462,
                            "name": "Identifier",
                            "src": "748:7:32"
                          }
                        ],
                        "id": 5463,
                        "name": "FunctionCall",
                        "src": "737:19:32"
                      }
                    ],
                    "id": 5464,
                    "name": "ExpressionStatement",
                    "src": "737:19:32"
                  }
                ],
                "id": 5465,
                "name": "Block",
                "src": "727:36:32"
              }
            ],
            "id": 5466,
            "name": "FunctionDefinition",
            "src": "665:98:32"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "0e316ab7",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "name": "removeSigner",
              "overrides": null,
              "scope": 5499,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "account",
                      "overrides": null,
                      "scope": 5478,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 5467,
                        "name": "ElementaryTypeName",
                        "src": "791:7:32"
                      }
                    ],
                    "id": 5468,
                    "name": "VariableDeclaration",
                    "src": "791:15:32"
                  }
                ],
                "id": 5469,
                "name": "ParameterList",
                "src": "790:17:32"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5472,
                "name": "ParameterList",
                "src": "825:0:32"
              },
              {
                "attributes": {
                  "arguments": null
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 6103,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 5470,
                    "name": "Identifier",
                    "src": "815:9:32"
                  }
                ],
                "id": 5471,
                "name": "ModifierInvocation",
                "src": "815:9:32"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4823,
                              "type": "function (address)",
                              "value": "_removeSigner"
                            },
                            "id": 5473,
                            "name": "Identifier",
                            "src": "835:13:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5468,
                              "type": "address",
                              "value": "account"
                            },
                            "id": 5474,
                            "name": "Identifier",
                            "src": "849:7:32"
                          }
                        ],
                        "id": 5475,
                        "name": "FunctionCall",
                        "src": "835:22:32"
                      }
                    ],
                    "id": 5476,
                    "name": "ExpressionStatement",
                    "src": "835:22:32"
                  }
                ],
                "id": 5477,
                "name": "Block",
                "src": "825:39:32"
              }
            ],
            "id": 5478,
            "name": "FunctionDefinition",
            "src": "769:95:32"
          },
          {
            "attributes": {
              "documentation": null,
              "functionSelector": "f0cc52a0",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "mint",
              "overrides": null,
              "scope": 5499,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "id",
                      "overrides": null,
                      "scope": 5498,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5479,
                        "name": "ElementaryTypeName",
                        "src": "884:7:32"
                      }
                    ],
                    "id": 5480,
                    "name": "VariableDeclaration",
                    "src": "884:10:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "fees",
                      "overrides": null,
                      "scope": 5498,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "struct ERC1155Base.Fee[]",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "struct ERC1155Base.Fee[]"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Fee",
                              "referencedDeclaration": 2102,
                              "type": "struct ERC1155Base.Fee"
                            },
                            "id": 5481,
                            "name": "UserDefinedTypeName",
                            "src": "896:3:32"
                          }
                        ],
                        "id": 5482,
                        "name": "ArrayTypeName",
                        "src": "896:5:32"
                      }
                    ],
                    "id": 5483,
                    "name": "VariableDeclaration",
                    "src": "896:17:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "supply",
                      "overrides": null,
                      "scope": 5498,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 5484,
                        "name": "ElementaryTypeName",
                        "src": "915:7:32"
                      }
                    ],
                    "id": 5485,
                    "name": "VariableDeclaration",
                    "src": "915:14:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "uri",
                      "overrides": null,
                      "scope": 5498,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 5486,
                        "name": "ElementaryTypeName",
                        "src": "931:6:32"
                      }
                    ],
                    "id": 5487,
                    "name": "VariableDeclaration",
                    "src": "931:17:32"
                  }
                ],
                "id": 5488,
                "name": "ParameterList",
                "src": "883:66:32"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5489,
                "name": "ParameterList",
                "src": "957:0:32"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_array$_t_struct$_Fee_$2102_memory_ptr_$dyn_memory_ptr",
                                  "typeString": "struct ERC1155Base.Fee memory[] memory"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2412,
                              "type": "function (uint256,struct ERC1155Base.Fee memory[] memory,uint256,string memory)",
                              "value": "_mint"
                            },
                            "id": 5490,
                            "name": "Identifier",
                            "src": "967:5:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5480,
                              "type": "uint256",
                              "value": "id"
                            },
                            "id": 5491,
                            "name": "Identifier",
                            "src": "973:2:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5483,
                              "type": "struct ERC1155Base.Fee memory[] memory",
                              "value": "fees"
                            },
                            "id": 5492,
                            "name": "Identifier",
                            "src": "977:4:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5485,
                              "type": "uint256",
                              "value": "supply"
                            },
                            "id": 5493,
                            "name": "Identifier",
                            "src": "983:6:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5487,
                              "type": "string memory",
                              "value": "uri"
                            },
                            "id": 5494,
                            "name": "Identifier",
                            "src": "991:3:32"
                          }
                        ],
                        "id": 5495,
                        "name": "FunctionCall",
                        "src": "967:28:32"
                      }
                    ],
                    "id": 5496,
                    "name": "ExpressionStatement",
                    "src": "967:28:32"
                  }
                ],
                "id": 5497,
                "name": "Block",
                "src": "957:45:32"
              }
            ],
            "id": 5498,
            "name": "FunctionDefinition",
            "src": "870:132:32"
          }
        ],
        "id": 5499,
        "name": "ContractDefinition",
        "src": "196:808:32"
      }
    ],
    "id": 5500,
    "name": "SourceUnit",
    "src": "1:1003:32"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.12+commit.27d51765.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.3.4",
  "updatedAt": "2021-03-09T19:23:05.780Z",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "balanceOf(address,uint256)": {
        "params": {
          "_id": "ID of the Token",
          "_owner": "The address of the token holder"
        },
        "returns": {
          "_0": "The _owner's balance of the Token type requested"
        }
      },
      "balanceOfBatch(address[],uint256[])": {
        "params": {
          "_ids": "ID of the Tokens",
          "_owners": "The addresses of the token holders"
        },
        "returns": {
          "_0": "The _owner's balance of the Token types requested (i.e. balance for each (owner, id) pair)"
        }
      },
      "isApprovedForAll(address,address)": {
        "params": {
          "_operator": "Address of authorized operator",
          "_owner": "The owner of the Tokens"
        },
        "returns": {
          "_0": "True if the operator is approved, false if not"
        }
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": {
        "details": "Caller must be approved to manage the tokens being transferred out of the `_from` account (see \"Approval\" section of the standard). MUST revert if `_to` is the zero address. MUST revert if length of `_ids` is not the same as length of `_values`. MUST revert if any of the balance(s) of the holder(s) for token(s) in `_ids` is lower than the respective amount(s) in `_values` sent to the recipient. MUST revert on any other error. MUST emit `TransferSingle` or `TransferBatch` event(s) such that all the balance changes are reflected (see \"Safe Transfer Rules\" section of the standard). Balance changes and events MUST follow the ordering of the arrays (_ids[0]/_values[0] before _ids[1]/_values[1], etc). After the above conditions for the transfer(s) in the batch are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call the relevant `ERC1155TokenReceiver` hook(s) on `_to` and act appropriately (see \"Safe Transfer Rules\" section of the standard).",
        "params": {
          "_data": "Additional data with no specified format, MUST be sent unaltered in call to the `ERC1155TokenReceiver` hook(s) on `_to`",
          "_from": "Source address",
          "_ids": "IDs of each token type (order and length must match _values array)",
          "_to": "Target address",
          "_values": "Transfer amounts per token type (order and length must match _ids array)"
        }
      },
      "safeTransferFrom(address,address,uint256,uint256,bytes)": {
        "details": "Caller must be approved to manage the tokens being transferred out of the `_from` account (see \"Approval\" section of the standard). MUST revert if `_to` is the zero address. MUST revert if balance of holder for token `_id` is lower than the `_value` sent. MUST revert on any other error. MUST emit the `TransferSingle` event to reflect the balance change (see \"Safe Transfer Rules\" section of the standard). After the above conditions are met, this function MUST check if `_to` is a smart contract (e.g. code size > 0). If so, it MUST call `onERC1155Received` on `_to` and act appropriately (see \"Safe Transfer Rules\" section of the standard).",
        "params": {
          "_data": "Additional data with no specified format, MUST be sent unaltered in call to `onERC1155Received` on `_to`",
          "_from": "Source address",
          "_id": "ID of the token type",
          "_to": "Target address",
          "_value": "Transfer amount"
        }
      },
      "setApprovalForAll(address,bool)": {
        "details": "MUST emit the ApprovalForAll event on success.",
        "params": {
          "_approved": "True if the operator is approved, false to revoke approval",
          "_operator": "Address to add to the set of authorized operators"
        }
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      },
      "uri(uint256)": {
        "details": "URIs are defined in RFC 3986. The URI may point to a JSON file that conforms to the \"ERC-1155 Metadata URI JSON Schema\".",
        "returns": {
          "_0": "URI string"
        }
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {
      "balanceOf(address,uint256)": {
        "notice": "Get the balance of an account's Tokens."
      },
      "balanceOfBatch(address[],uint256[])": {
        "notice": "Get the balance of multiple account/token pairs"
      },
      "isApprovedForAll(address,address)": {
        "notice": "Queries the approval status of an operator for a given owner."
      },
      "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": {
        "notice": "Transfers `_values` amount(s) of `_ids` from the `_from` address to the `_to` address specified (with safety call)."
      },
      "safeTransferFrom(address,address,uint256,uint256,bytes)": {
        "notice": "Transfers `_value` amount of an `_id` from the `_from` address to the `_to` address specified (with safety call)."
      },
      "setApprovalForAll(address,bool)": {
        "notice": "Enable or disable approval for a third party (\"operator\") to manage all of the caller's tokens."
      },
      "uri(uint256)": {
        "notice": "A distinct Uniform Resource Identifier (URI) for a given token."
      }
    },
    "version": 1
  }
}