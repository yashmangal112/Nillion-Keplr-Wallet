# Add Chain to Keplr Wallet using Keplr Button for Custom Blockchain

## Overview

This npm package provides a React component for a button that allows users to add a custom blockchain to their Keplr wallet. The button integrates with the Keplr wallet to facilitate the addition of new chains and provides feedback on the success of the operation.

## Features

- Easily add a custom blockchain to Keplr
- Configurable button text and blockchain information
- Uses the Keplr API to facilitate the addition of the new chain
- Error handling and user feedback
- Compatible with major web browsers (Chrome, Firefox, Edge)

## Installation

To use the `keplr-button` package in your web application, follow these steps:

### 1. Install the Package

You can install the package via npm or Yarn:

```bash
npm install @yash112/keplr-button
```

### 2. Set Up Your Web Application
If you don't already have a React application, you can create one using Create React App:

```bash
npx create-react-app my-app
cd my-app
```

### 3. Import and Use the Component
To use the KeplrButton component in your React application, follow these steps:

- Import the Component: Import the KeplrButton component from the package into your React component file.

- Configure ChainInfo: Define the ChainInfo for the blockchain you want to add. This information includes RPC and REST endpoints, chain ID, and other configuration details required by Keplr.

- Use the Component: Include the KeplrButton component in your React component and pass the appropriate chainInfo and other props as needed.

### 4. Running the Demo
To see the KeplrButton in action, follow these steps:

#### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/yashmangal112/Nillion-Keplr-Wallet.git
cd keplr-demo
```

#### 2. Install Dependencies

Install the necessary dependencies:

```bash
npm install
```

#### 3. Start the Development Server

Start the development server to run the demo:

```bash
npm start
```

#### 4. Open the Web App
Open your browser and navigate to http://localhost:3000 (or the URL provided by your development server) to see the demo in action.

#### 5. Interact with the Demo
- Add NilChain to Keplr: Click the "Add NilChain to Keplr" button to prompt Keplr to add the NilChain Testnet.
- Check Balance: After adding the chain, the app will display your NIL balance or an error message if the balance cannot be fetched.


### Contributing
- Contributions are welcome! Please submit issues or pull requests on the GitHub repository.


### Contact
For any questions or support, please contact yashmangal240@gmail.com.
