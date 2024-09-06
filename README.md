# NFT DApp Backend

This project is the backend API for an NFT DApp that allows users to interact with digital assets on the Ethereum blockchain. The backend is built with Node.js and Express.js and integrates with IPFS via Pinata for storing metadata files. 

## Overview

The backend API provides endpoints to:

- Upload files to IPFS via Pinata.
- Manage metadata for NFTs.

The API is designed to serve as a helper for a frontend application built with Node.js and Vue.js, which will enable users to mint, view, and transfer digital assets.

## Technologies Used

- **Node.js**: JavaScript runtime used for building the backend server.
- **Express.js**: Framework used to set up the server and define API routes.
- **Axios**: HTTP client used for making requests to Pinata's API.
- **Pinata SDK**: Library used to interact with the Pinata API for IPFS file uploads.
- **dotenv**: Module used to manage environment variables securely.

## Application Architecture

The application follows a simple architecture:

1. **Express.js Server**: Handles incoming HTTP requests and routes them to the appropriate handler.
2. **IPFS Integration via Pinata**: Allows the application to upload files and metadata to IPFS.
3. **API Endpoints**: 
   - `GET /`: Health check endpoint to verify that the server is running.
   - `POST /upload`: Endpoint to upload files to IPFS via Pinata.

### File Structure

```
nft-dapp-backend/
│
├── .env                 # Environment variables (Pinata API keys)
├── node_modules/        # Node.js dependencies
├── package.json         # Project metadata and dependencies
├── server.js            # Main server file
└── README.md            # Project documentation
```

## Setup and Running the Application Locally

### Prerequisites

- Node.js installed on your machine
- Pinata API Key and Secret (sign up at [Pinata](https://pinata.cloud/))

### Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Samson-Ludo/nft-dapp-backend.git
    cd nft-dapp-backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env` file** in the root directory with your Pinata API credentials:
    ```
    PINATA_API_KEY=your_pinata_api_key
    PINATA_SECRET_API_KEY=your_pinata_secret_api_key
    ```

4. **Run the server**:
    ```bash
    node server.js
    ```

5. **Test the API**:

    - **Health Check**: Open a browser or use Postman to visit `http://localhost:3000/` to check if the server is running.
    
    - **Upload a File**:
      Send a `POST` request to `http://localhost:3000/upload` with the following JSON body:
      
      ```json
      {
          "path": "./path-to-your-file/file.png",
          "fileName": "YourFileName"
      }
      ```

### Deployment Instructions

#### 1. **Deploy to GitHub**
   - Push your code to a GitHub repository:
     ```bash
     git add .
     git commit -m "Initial commit"
     git push origin main
     ```
   - Ensure that your repository has a `README.md`, `.gitignore`, and other necessary files.

#### 2. **Deploy to Netlify**
   - Go to [Render](https://render.com/).
   - Connect your GitHub repository.
   - In the deployment settings, specify the following build settings:
     - **Build Command**: `npm run build`
     - **Publish Directory**: `dist`
   - Click **Deploy** to deploy your DApp.

### Assumptions and Decisions

- **IPFS Integration**: The choice to use Pinata was made for simplicity and ease of integration with IPFS.
- **Backend Scope**: The backend is primarily designed to serve as a helper for the frontend. It doesn't directly interact with the Ethereum blockchain, as that is handled by the frontend.
- **File Management**: The backend currently handles direct file uploads to IPFS via Pinata. It could be extended to support additional metadata management features if needed.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## Author

[Samson Okaludo](https://www.linkedin.com/in/samson-okaludo)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

