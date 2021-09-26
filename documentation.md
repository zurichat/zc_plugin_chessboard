# CHESS PLUGIN DOCUMENTATIONS OVERVIEW

Zuri chess plugin is a web based recreational and competitive board game played between two players with an option for AI, that can easily be installed and used as part of the Zuri chat main application.

- live link : [https://chess.zuri.chat](https//chess.zuri.chat)

## TABLE OF CONTENT: Quick reference

- [CHESS PLUGIN DOCUMENTATIONS OVERVIEW](#chess-plugin-documentations-overview)
  - [TABLE OF CONTENT: Quick reference](#table-of-content-quick-reference)
  - [Get Started](#get-started)
  - [Authorization](#authorization)
  - [Plugin Information](#plugin-information)
    - [How To Use](#how-to-use)
    - [Features](#features)
    - [Responses](#responses)
      - [onSuccess](#onsuccess)
      - [onError](#onerror)
  - [Sidebar Information](#sidebar-information)
    - [How To Use](#how-to-use-1)
    - [Features](#features-1)
    - [Responses](#responses-1)
      - [onSuccess](#onsuccess-1)
      - [onError](#onerror-1)
  - [Create Game](#create-game)
    - [How To Use](#how-to-use-2)
    - [Features](#features-2)
    - [Responses](#responses-2)
      - [onSuccess](#onsuccess-2)
      - [onError](#onerror-2)
  - [Join Game](#join-game)
    - [How To Use](#how-to-use-3)
    - [Features](#features-3)
    - [Responses](#responses-3)
      - [onSuccess](#onsuccess-3)
      - [onError](#onerror-3)
  - [All Game](#all-game)
    - [How To Use](#how-to-use-4)
    - [Features](#features-4)
    - [Responses](#responses-4)
      - [onSuccess](#onsuccess-4)
      - [onError](#onerror-4)
  - [Watch Game](#watch-game)
    - [How To Use](#how-to-use-5)
    - [Features](#features-5)
    - [Responses](#responses-5)
      - [onSuccess](#onsuccess-5)
      - [onError](#onerror-5)
  - [Move Piece](#move-piece)
    - [How To Use](#how-to-use-6)
    - [Features](#features-6)
    - [Responses](#responses-6)
      - [onSuccess](#onsuccess-6)
      - [onError](#onerror-6)
  - [End Game -NOT IMPLEMENTED YET - WORKING ON IT - STILL DUMMY VALUES](#end-game--not-implemented-yet---working-on-it---still-dummy-values)
    - [How To Used](#how-to-used)
    - [Features](#features-7)
    - [Responses](#responses-7)
      - [onSuccess](#onsuccess-7)
      - [onError](#onerror-7)
  - [Unwatch Game -NOT IMPLEMENTED YET - WORKING ON IT - STILL DUMMY VALUES](#unwatch-game--not-implemented-yet---working-on-it---still-dummy-values)
    - [How To Used](#how-to-used-1)
    - [Features](#features-8)
    - [Responses](#responses-8)
      - [onSuccess](#onsuccess-8)
      - [onError](#onerror-8)
  - [Resign Game -NOT IMPLEMENTED YET - WORKING ON IT - STILL DUMMY VALUES](#resign-game--not-implemented-yet---working-on-it---still-dummy-values)
    - [How To Used](#how-to-used-2)
    - [Features](#features-9)
    - [Responses](#responses-9)
      - [onSuccess](#onsuccess-9)
      - [onError](#onerror-9)
  - [Game by id](#game-by-id)
    - [How To Use](#how-to-use-7)
    - [Features](#features-10)
    - [Responses](#responses-10)
      - [onSuccess](#onsuccess-10)
      - [onError](#onerror-10)
  - [Game by user id](#game-by-user-id)
    - [How To Use](#how-to-use-8)
    - [Features](#features-11)
    - [Responses](#responses-11)
      - [onSuccess](#onsuccess-11)
      - [onError](#onerror-11)
  - [Game Comments](#game-comments)
    - [How To Use](#how-to-use-9)
    - [Features](#features-12)
    - [Responses](#responses-12)
      - [onSuccess](#onsuccess-12)
      - [onError](#onerror-12)
  - [Game delete](#game-delete)
    - [How To Use](#how-to-use-10)
    - [Features](#features-13)
    - [Responses](#responses-13)
      - [onSuccess](#onsuccess-13)
      - [onError](#onerror-13)
  - [All Results](#all-results)
    - [How To Used](#how-to-used-3)
    - [Features](#features-14)
    - [Responses](#responses-14)
      - [onSuccess](#onsuccess-14)
      - [onError](#onerror-14)
  - [Results by game id](#results-by-game-id)
    - [How To Use](#how-to-use-11)
    - [Features](#features-15)
    - [Responses](#responses-15)
      - [onSuccess](#onsuccess-15)
      - [onError](#onerror-15)

## Get Started

Our API is organized around using HTTP verbs and REST. This API accepts and returns JSON formatted payload

## Authorization

User must be authenticated to use the API

<!-- create table -->

## Plugin Information

<!-- descriptions -->

When this endpoint is used, it Returns all the information for this chess application plugin.

### How To Use

This is a GET endpoint and it simple means that your browser e.g chrome, edge, etc can make request (i.e write/send the endpoint in their browser engine) and see the response (i.e the plugin information).

Input the endpoint in the browser and hit enter, when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|/info | GET  |      false |       false |

- PARAMS[URL OR DATA] if true
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|     |           |          |

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```[
  {
    plugin_id: "61448b7c976307hjc83Cdh5",
    name: "Chess Plugin",
    description:
      "Ease stress in Zuri's chess room while running business deals, socialize with friends and colleagues by engaging in a friendly chess match. You could also decide to spectate a chess game and make comments while you watch.",
    category: "Games",
    pictures: [
      "https://res.cloudinary.com/kyloren/image/upload/v1631878728/Chess%20MarketPlace/intro_gk0icz.png",
      ],
    icon_url:
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?",
    scaffold_structure: "Single SPA",
    version: "v1.0",
    developer_name: "HNG 8.0/Team Tesla",
    developer_email: "hello@zuri.com",
    sidebar_url: "https://chess.zuri.chat/api/v1/sideBar",
    ping_url: "https://chess.zuri.chat/api/v1/ping",
    homepage_url: "https://chess.zuri.chat/",
    install_url: "https://chess.zuri.chat/",
  }
]

```

- message : "Plugin Information Retrieved"

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
  Error object

```

- message : "Could not fetch plugin information"
  
## Sidebar Information
<!-- descriptions -->

When this endpoint is used, it Returns all the information for this chess application sidebar.

### How To Use

This is a GET endpoint and it simple means that your browser e.g chrome, edge, etc can make request (i.e write/send the endpoint in their browser engine) and see the response (i.e the plugin information).

Input/insert the endpoint complete url in the browser and hit enter, when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|/sidebar | GET  | True        | False       |

- URL PARAMS if True
  - The URL parameter is passed in the endpoint as a query parameter

|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|user |string     | true     |
|org  |string     | true     |

- complete url format : <https://www.chess.zuri.chat/api/v1?{user}?{org}/>

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```[
 name: "Chess Plugin",
        description: "The Chess plugin",
        plugin_id: PLUGIN_ID,
        organisation_id: org,
        user_id: user,
        group_name: "Chess Games",
        show_group: true,
        public_rooms: [
          {
            room_name: "Chess room",
            room_image: "https://www.svgrepo.com/show/12072/chess-board.svg",
            room_url: "https://zuri.chat/chess",
          },
        ],
        joined_rooms,
]

```

- message : "Fetch sidebar data"

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
  Error object

```

- message : "Could not fetch sidebar information"
  
## Create Game
<!-- descriptions -->

When this endpoint is used, it Creates a new gaming room, assigns an Id to it and sets the status to started (state = 0).

### How To Use

This is a POST endpoint and it can be tested with a form or through POSTMAN.
There can not be more than 6 games running concurrently.

Once request is sent to the api endpoint with all neccesary parameters through a FORM or POSTMAN and hit enter. when successful, [onSuccess](#onsuccess) response is return and game created. when an error occur [onError](#onerror) is thrown.

- Guidance Example on the <https://zuri.chat/chess> application :
  - Once you click on join as player 1, all parameters will be added automatically and on Success, you enter into the game created waiting for opponent

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|/game/create | POST  | false      | true       |

- PARAMS [URL OR DATA] if true
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|   user_id|integer| true    |
|user_name| string| true     |
| image_url| string| false   |

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```[
  { object_id: game._id }
]

```

- message : " "New Game Board Created successfully",

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
Error object

```

- message_1 : "Unable to create a Game"
- message_2 : "No free boards right now"
  
## Join Game
<!-- descriptions -->

When this endpoint is used, its check if an opponent already exist, if not it join as the opponent.

### How To Use

This is a POST endpoint and it Enters a game as the second player.
This can be tested from the client side in a form or using Postman.

Input the endpoint complete url into postman or form with all necessary parameter , when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

- Guidance Example on the <https://zuri.chat/chess> application :
  - Once the link is open, user choose any six available game in the homepage to play as opponent. On clicked "join as opponent/player 2", the user enters the game and can start playing with the host.

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|/join | POST  | false        | true       |

- PARAMS[URL OR DATA] if true
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
| game_id| string |   true   |
| user_id|integer |true      |
| user_name|string|true      |
|image_url|string |false     |
### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```
game_id
```

- message : "Game join successfully"

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
Error object

```

- message_1 : "Unable to join a game"
- message_2: "opponent already exists"
- message_3: "Game not found"
  
## All Game
<!-- descriptions -->

When this endpoint is used, it returns all the game objects in the database of this chess application plugin.

### How To Use

This is a GET endpoint and it simple means that your browser e.g chrome, edge, etc can make request (i.e write/send the endpoint in their browser engine) and see the response (i.e the plugin information).

Input the endpoint in the browser and hit enter, when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

- Guidance Example on the <https://zuri.chat/chess> application :
  - Once the link is open, user see all games in the game box

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|/game/all | GET  | false       | false      |

- PARAMS [URL OR DATA] if required
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|     |           |          |

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```
gameData
```

- message : " Game retrieve successfully"

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
Error object
```

- message : "Unable to get all Games"
  
## Watch Game
<!-- descriptions -->

When this endpoint is used, it sends out a single piecemove so that the other player and spectators can view it.
### How To Use

This is a PATCH Method.

 When successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

- Guidance Example on the <https://zuri.chat/chess> application :
  - Once the link is clicked, a spectator can enter the game to view and comments on the ongoing game.
### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|/watch | PATCH  | false        | true    |

- PARAMS [URL OR DATA] if true
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|game_id|string | true |
|user_id | string| true|
|user_name | string | true |
### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```
  {
    payload
  }  
```

- message : "Joined as spectator successfully"

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
Error object
```

- message_1 : "Unable to add spectator successfully"
- message_2 : "Game not found"
  
## Move Piece
<!-- descriptions -->

When this endpoint is used, it Returns all the information for this chess application plugin.

### How To Use

This is a PATCH endpoint.

Input the endpoint in the browser and hit enter, when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

- Guidance Example on the <https://zuri.chat/chess> application :
  - Once the link is clicked, a user can enter the game as either player or player 2 and get to move game piece based of the game rules

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|/piecemove | PATCH  | false| true   |

- PARAMS [URL OR DATA] if true
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|position_fen| string |true  |
|user_id     |string|true|
|game_id|string |true|
|board_state |string|true |
### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```
{
  payload
}
```

- message : "piece moved"

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
Error object
```

- message_1 : "Failed to move piece"
- message_2 : "Game not found"


## End Game -NOT IMPLEMENTED YET - WORKING ON IT - STILL DUMMY VALUES
<!-- descriptions -->



### How To Used

This is a GET endpoint and it simple means that your browser e.g chrome, edge, etc can make request (i.e write/send the endpoint in their browser engine) and see the response (i.e the plugin information).

Input the endpoint in the browser and hit enter, when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|/info | GET  | None        | None       |

- DATA PARAMS if required
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|     |           |          |

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```[
  {
    plugin_id: "61448b7c976307hjc83Cdh5",
    name: "Chess Plugin",
    description:
      "Ease stress in Zuri's chess room while running business deals, socialize with friends and colleagues by engaging in a friendly chess match. You could also decide to spectate a chess game and make comments while you watch.",
    category: "Games",
    pictures: [
      "https://res.cloudinary.com/kyloren/image/upload/v1631878728/Chess%20MarketPlace/intro_gk0icz.png",
      ],
    icon_url:
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?",
    scaffold_structure: "Single SPA",
    version: "v1.0",
    developer_name: "HNG 8.0/Team Tesla",
    developer_email: "hello@zuri.com",
    sidebar_url: "https://chess.zuri.chat/api/v1/sideBar",
    ping_url: "https://chess.zuri.chat/api/v1/ping",
    homepage_url: "https://chess.zuri.chat/",
    install_url: "https://chess.zuri.chat/",
  }
]

```

- message : "Plugin Information Retrieved"

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```<Error object>
```

- message : "Could not fetch plugin information"
  
## Unwatch Game -NOT IMPLEMENTED YET - WORKING ON IT - STILL DUMMY VALUES
<!-- descriptions -->

When this endpoint is used, it Returns all the information for this chess application plugin.

### How To Used

This is a GET endpoint and it simple means that your browser e.g chrome, edge, etc can make request (i.e write/send the endpoint in their browser engine) and see the response (i.e the plugin information).

Input the endpoint in the browser and hit enter, when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|/info | GET  | None        | None       |

- DATA PARAMS if required
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|     |           |          |

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```[
  {
    plugin_id: "61448b7c976307hjc83Cdh5",
    name: "Chess Plugin",
    description:
      "Ease stress in Zuri's chess room while running business deals, socialize with friends and colleagues by engaging in a friendly chess match. You could also decide to spectate a chess game and make comments while you watch.",
    category: "Games",
    pictures: [
      "https://res.cloudinary.com/kyloren/image/upload/v1631878728/Chess%20MarketPlace/intro_gk0icz.png",
      ],
    icon_url:
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?",
    scaffold_structure: "Single SPA",
    version: "v1.0",
    developer_name: "HNG 8.0/Team Tesla",
    developer_email: "hello@zuri.com",
    sidebar_url: "https://chess.zuri.chat/api/v1/sideBar",
    ping_url: "https://chess.zuri.chat/api/v1/ping",
    homepage_url: "https://chess.zuri.chat/",
    install_url: "https://chess.zuri.chat/",
  }
]

```

- message : "Plugin Information Retrieved"

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```<Error object>
```

- message : "Could not fetch plugin information"
  
## Resign Game -NOT IMPLEMENTED YET - WORKING ON IT - STILL DUMMY VALUES
<!-- descriptions -->

When this endpoint is used, it Returns all the information for this chess application plugin.

### How To Used

This is a GET endpoint and it simple means that your browser e.g chrome, edge, etc can make request (i.e write/send the endpoint in their browser engine) and see the response (i.e the plugin information).

Input the endpoint in the browser and hit enter, when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|   |  |         |       |

- PARAMS [URL OR DATA] if true
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|     |           |          |

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```

```

- message : ""

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
Error object

```

- message : "Could not fetch plugin information"
  
  
  
<!-- IfOnlyIcan -->
## Game by id
<!-- descriptions -->

When this endpoint is used,

### How To Use

This is a GET endpoint and it simple means that your browser e.g chrome, edge, etc can make request (i.e write/send the endpoint in their browser engine) and see the response (i.e the plugin information).

Input the endpoint in the browser and hit enter, when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

- Guidance Example on the <https://zuri.chat/chess> application :

<!-- description on how to use on our app : leave if not implemented in the FE yet -->
  -

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|    |   |         |        |

- PARAMS [URL OR DATA] if true
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|     |           |          |

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```

```

- message : ""

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
Error object

```

- message : ""
  
<!--ifOnlyIcan  -->
## Game by user id
<!-- descriptions -->

When this endpoint is used,

### How To Use

This is a GET endpoint and it simple means that your browser e.g chrome, edge, etc can make request (i.e write/send the endpoint in their browser engine) and see the response (i.e the plugin information).

Input the endpoint in the browser and hit enter, when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

- Guidance Example on the <https://zuri.chat/chess> application :

<!-- description on how to use on our app : leave if not implemented in the FE yet -->
  -

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|   |   |        |        |

- PARAMS [URL OR DATA] if true
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|     |           |          |

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```

```

- message : ""

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
  Error object

```

- message : ""

  <!--ifOnlyiIcan  -->

## Game Comments
<!-- descriptions -->

When this endpoint is used, it Returns all the information for this chess application plugin.

### How To Use
<!-- brief description -->

When successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

- Guidance Example on the <https://zuri.chat/chess> application :

<!-- description on how to use on our app : leave if not implemented in the FE yet -->
  -

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
| |   |         |        |

- PARAMS [URL OR DATA] if true
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|     |           |          |

- complete endpoint url format :

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```

```

- message : ""

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
Error object

```

- message :

  <!-- OnlyIfIcan  -->

## Game delete
<!-- descriptions -->

### How To Use

<!-- brief description -->

, when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

- Guidance Example on the <https://zuri.chat/chess> application :

<!-- description on how to use on our app : leave if not implemented in the FE yet -->
  -

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|    |        |            |        |

- PARAMS[URL OR DATA] if true
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|     |           |          |

- complete endpoint url format :

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```


```

- message : ""

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
Error object

```

- message : ""
  
  <!-- ifOnlyIcan -->

## All Results
<!-- descriptions -->

### How To Used

This is a GET endpoint and it simple means that your browser e.g chrome, edge, etc can make request (i.e write/send the endpoint in their browser engine) and see the response (i.e the plugin information).

Input the endpoint in the browser and hit enter, when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

- Guidance Example on the <https://zuri.chat/chess> application :

- <!-- description on how to use on our app : leave if not implemented in the FE yet -->

  -

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|    |     |        |      |

- PARAMS [URL OR DATA] if true
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|     |           |          |

- complete endpoint format :

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```

```

- message : ""

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
Error object

```

- message : ""

  <!-- ifOnlyIcan  -->

## Results by game id
<!-- descriptions -->

### How To Use

This is a GET endpoint and it simple means that your browser e.g chrome, edge, etc can make request (i.e write/send the endpoint in their browser engine) and see the response (i.e the plugin information).

Input the endpoint complete url in the browser and hit enter, when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

- Guidance Example on the <https://zuri.chat/chess> application :

<!-- description on how to use on our app : leave if not implemented in the FE yet -->
  -

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
  
- General endpoint
  
| URL| METHOD | URL PARAMS | DATA PARAMS |
| ---|--------|------------|-------------|
|    |        |        |       |

- PARAMS [URL OR DATA] if true
  
|NAME | DATA TYPE | REQUIRED |
|-----|-----------|----------|
|     |           |          |

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :
  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```[
  
]

```

- message : ""

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
  Error object

```

- message : ""
