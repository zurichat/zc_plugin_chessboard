# Chess Board Room Plugin

<img src="https://raw.githubusercontent.com/eni4sure/zc_plugin_chessboard/2e0f029fb0c05eaea0206f46b17ce4722adca9df/images/chesspieces.jpg" alt="An image of chess pieces"/>

Zuri chesss plugin is a web based recreational and competitive board game played between two players with an option for AI, that can easily be installed and used as part of the Zuri chat main application.

## Design:

Figma link to the design implemented: 
<br>
https://www.figma.com/file/5mZjRNojKB4vtatKlahMbu/Team-Tesla?node-id=1234%3A25684

## Hosted URL:

https://chess.zuri.chat/

## Tech Stack:

- React js
- Nodejs
- Ajax
- WebSockets

# Project Setup & Contribution Guide:

- Fork this REPO
- Clone the repo from your account

```
git clone https://github.com/<username>/zc_plugin_chessboard.git
```

#

## For BACKEND

- switch to the backend directory and install all dependencies

```
cd server
npm install   or   yarn install
```

## For FRONTEND

- switch to the frontend directory and install all dependencies

```
cd client
npm install   or   yarn install
```

#

- Add the main repo remote to your project upstream

```
git remote add upstream https://github.com/zurichat/zc_plugin_chessboard.git
```

- Pull from upstream

```
git pull upstream dev
```

- Switch to a new branch with your {feature-name}

```
git checkout -b <feature-name>
```

- Add your work/code

- When done making your changes, run

```
  git add .
  git commit -m 'your commit message'
  git push origin <feature-name>
```

- Create a Pull Request to `dev` branch

<br>

# For Local Testing:

- Run backend server

```
cd server
npm run dev   or   yarn run dev
```

- Open http://127.0.0.1:5050/ping
- Open another terminal in vscode and run

```
cd client
npm start   or   yarn start
```

- Open http://127.0.0.1:3000/
