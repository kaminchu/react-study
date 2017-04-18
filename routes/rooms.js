import express from "express";

import TeamSpeakClient from "node-teamspeak";
import TS3Query from "../lib/ts3-query";

const router = express.Router();
router.get("/",(req, res)=>{
    const cl = new TeamSpeakClient("localhost");
    const con = new TS3Query(cl);
    con.send("login",{client_login_name: "test", client_login_password: "Zu6DwHX1"})
        .then(con.send("use", {sid: 1}))
        .then(con.send("clientlist",{}))
        .then(result=>{res.send(result)});
});

module.exports = router;



