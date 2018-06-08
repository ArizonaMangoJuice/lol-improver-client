## LoL-Improver
Lol-improver let's you take notes of champs you play and look up player latest match history.

https://focused-nightingale-b297e9.netlify.com/

## Motivation
I like league of legends. I decided why not just make an app that lets you view player stats and take notes on champions you play.

##Search Players
- Try to search for these player:
- ScrubNoob
- L 5 22 9
- Grig1
- TCLB Robin NA
- IlIlIllllIIIIIII
- Tony Top

## How to use?
First, you create an account. Login with the account created. Start taking notes. Search a player if you want to see there recent stats.

## Build status
Build status of continus integration i.e. travis, appveyor etc. Ex. - 

[![Build Status](https://travis-ci.org/ArizonaMangoJuice/lol-improver-server.svg?branch=master)](https://travis-ci.org/ArizonaMangoJuice/lol-improver-server.svg?branch=master)

## Code style
Standard/Thinkful-style

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
 
## Screenshots
### Mobile Login
![alt text](https://lh6.googleusercontent.com/jNyfOe7bNARAaSjeckh7wIIONNe2bApzvCUQUgxBC5cdYWmYjQ9rz8OnmT96L5e5wDNVisT4CHvPqg=w1920-h955-rw)

### Mobile Sign Up

![alt text](https://lh4.googleusercontent.com/Fwh01qKWnBqoOIXBTIVvEcVETmcg70sPFRhJ_R-SsH5ePeBLM4JcFUhZTYymo4WHm7bgoBqvRvJznA=w617-h902-rw)

### Mobile Dashboard

![alt text](https://lh3.googleusercontent.com/KmjEJnaZJTDG1uyWoyx7VVpiuEOfDOKovBIUEY_SYDJ7f1KhDLuPz8R1pH7r4KzQJhOA4DH53IYc8w=w617-h902-rw)
![alt text](https://lh6.googleusercontent.com/r_vYETp-1VzJPnPMi4_NMhDvDCoAyOt_N_ZjojN1ttkV0GVmdy73AXZroWDSVsi3VMkBrXxrbOAqGQ=w617-h902-rw)

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
