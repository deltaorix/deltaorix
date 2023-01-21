require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "TOKEN_BOT",
    clientID: process.env.CLIENT_ID || "ID_BOT", // your bot client id
    prefix: process.env.PREFIX || "PREFIX_BOT", // bot prefix
    ownerID: process.env.OWNERID || "ID_OWNER" //your discord id
}