## LoL-Improver
Lol-improver let's you take notes of champs you play and look up player latest match history.
https://github.com/ArizonaMangoJuice/lol-improver-server
https://focused-nightingale-b297e9.netlify.com/

## Motivation
I like league of legends. I decided why not just make an app that lets you view player stats and take notes on champions you play.

## How to use?
First, you create an account. Login with the account created. Start taking notes. Search a player if you want to see there recent stats.
- Try to search for these player:
- ScrubNoob
- L 5 22 9
- Grig1
- TCLB Robin NA
- IlIlIllllIIIIIII
- Tony Top

## Build status
Build status of continus integration i.e. travis, appveyor etc. Ex. - 

[![Build Status](https://travis-ci.org/ArizonaMangoJuice/lol-improver-server.svg?branch=master)](https://travis-ci.org/ArizonaMangoJuice/lol-improver-server.svg?branch=master)

## Code style
Standard/Thinkful-style

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
 
## Screenshots
### Mobile Login
![alt text](https://doc-0c-28-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/bam2n6vgf04is595ifgc82jifhi66ofb/1528725600000/04640128816426817059/*/1czbU_3hFrLtshUuxhEn-P_K2ZaOvsFh4)

### Mobile Sign Up

![alt text](https://doc-0k-28-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/qpa2o35dbbe681k4ammuoksnm34te05t/1528725600000/04640128816426817059/*/1jRutzYyH5SFtFk61JrX9WSzSQwBbBSB4)

### Mobile Dashboard

![alt text](https://doc-0g-28-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/qi50rfgonh1bdc225gsm7t2utidognlt/1528725600000/04640128816426817059/*/1S2rz5jDjpRKeec4xH4xmwhmkn9LkwFNh)
![alt text](https://doc-00-28-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/b7ok2i1olp5js7rdf8u1245ne4ele9lc/1528725600000/04640128816426817059/*/123dqKRQj8KpKuX6BBFn5E0Hp1pCnNj3e)

### Desktop Landing Page
![alt text](https://lh6.googleusercontent.com/mlRHpVgtPeRUzJSLZGSEIyE0uDyye0IaVproNj9LTBWExaWAxnTTlfNxYIlCMMBLv-uj0xk4Azkgpw=w617-h902-rw)

### Desktop Register Page
![alt text](https://lh5.googleusercontent.com/zSajtQpJe6Ftb9fEyIsgw9vvcew2sPKmNjPdNVlPnRKz3vSJLzwrbeqgTFJ0N31omGJ-jF5comIY3w=w617-h902-rw)

### Desktop Dashboard
![alt text](https://lh5.googleusercontent.com/z8kf9TRFW1xMIvQXN0uzDmRRGvEhK4T1vqEbuBD5j08LLZMeix-glgIus1b7Vxnlt2xZ2D1VwAfmuw=w617-h902-rw)


## API Documentation
- https://lol-improver-ci.herokuapp.com/api/static/:champId
    lets you see any static data based of the champId
- https://lol-improver-ci.herokuapp.com/api/champions/:id
    lets you update the note from the champion thats from the user
- https://lol-improver-ci.herokuapp.com/api/players/:name
    grabs the user and shows the most recent matches
- https://lol-improver-ci.herokuapp.com/api/champions/
    grabs all the champions for a current user
- https://lol-improver-ci.herokuapp.com/api/users/
    lets you create a user if it doesnt exist
- https://lol-improver-ci.herokuapp.com/api/login
    lets you login if you have the valid credentials

    

## Tech/framework used

<b>Built with</b>
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [RiotGameApi](https://developer.riotgames.com/)
- [Travis](https://travis-ci.org)

## Features
You can take notes on any champion.
You can save the notes with a user.
You can look up player stats.

## Credits
Props to everyone on thinkful for making me use my brain. Props to hiram helping me out with tests. 

## Future Development
-Gonna make the player search save the match details , so when newer matches get called it shows from the point of when someone started searching for the player.
-make the notes also show your accumulated kda and wins
