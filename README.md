# bci-discord-bot
for BCI Lab <br >

The purpose of this bot is to 
<br>1. welcome members 
<br>2. list member in voice channel 
<br>3. get the incoming event then notify all members


## Documentation

[Discord.js](https://discord.js.org/#/docs/discord.js/main/general/welcome)


## Installation

Install the project with node and npm 

```bash
 npm install discord.js 
 npm i dotenv
 npm i node mon
 npm i install eslint -g
```

### To install eslint on save
npx eslint --init
Then, go to 
1. file --> preference --> setting
2. type onsave 
3. click on setting
4. make sure at the end of the scripts, it has 
    "editor.codeActionsOnSave": {
     "sorce.fixAll.eslint" : true
    },
    "eslint.validate": ["javascript"]
5. and in the setting of eslint, make sure it has
    "editor.formatOnSave": true,
    "eslint.codeActionsOnSave.rules": true