# Chess Board Room Plugin

<img src="https://raw.githubusercontent.com/eni4sure/zc_plugin_chessboard/2e0f029fb0c05eaea0206f46b17ce4722adca9df/images/chesspieces.jpg" alt="An image of chess pieces"/>

Zuri chesss plugin is a web based recreational and competitive board game played between two players with an option for AI, that can easily be installed and used as part of the Zuri chat main application.

## Design:
Figma link to the design implemented:
<br>
 coming soon!

## Hosted URL:
https://chess.zuri.chat/

## Tech Stack:
 - React js
 - Nodejs
 - Ajax
 - WebSockets

# Project Setup & Contribution Guide:
- Fork this REPO
- Run `` git clone https://github.com/zurichat/zc_plugin_chessboard.git ``

#
## For FRONTEND

 - Enter the frontend working directory and install all dependencies
 ``` 
 cd client 
 npm install   or   yarn install 
 ```

## For BACKEND

 - Just Install all dependencies
 ``` 
 npm install   or   yarn install  
 ```
#


  - Create a branch for your Task
```
  git checkout -b {$yourBranchName}
```

 - After changes, run
```
  git add .
  git commit -m 'commit message'
  git push origin {$yourBranchName}
```

 - Create a Pull Request


  # For Local Testing:
 - Run backend server
 ```
 npm run dev
 ```
 - Open http://127.0.0.1:5000
 - Open another terminal in vscode
 - change directory to client
 ```
 cd client
 npm start
 ```
 - Open http://127.0.0.1:3000/
