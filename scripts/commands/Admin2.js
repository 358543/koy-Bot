module.exports.config = {
  name: "admin",
  version: "1.0.0",
  permission: 0,
  credits: "Rahad",
  description: "",
  prefix: true, 
  category: "Admin information", 
  usages: "/admin",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://i.imgur.com/bVmqmH9.png",
"https://i.imgur.com/bVmqmH9.png"];
  
var callback = () => api.sendMessage({body:`DO NOT TRUST THE BOT OPERATOR
--------------------------------------------
𝐍𝐚𝐦𝐞       : lee yeon 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : lee yeon  
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : catholic 
𝐀𝐝𝐝𝐫𝐞𝐬𝐬: mallig Isabela 
𝐆𝐞𝐧𝐝𝐞𝐫.   : male
𝐀𝐠𝐞           : 19
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : single 
𝐖𝐨𝐫𝐤        : student 
𝐆𝐦𝐚𝐢𝐥       : yonlee@gmail.com
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: unknown 
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : unknown 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/profile.php?id=61554265433272
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
