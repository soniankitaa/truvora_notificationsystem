import type { Notification } from "../types/notification.js";

export const notifications: Notification[] = [

{
id:"1",
tenantId:"tenant-1",
userId:"user-1",

type:"team_invitation",

title:"Team Invitation",

message:"John invited you to Marketing Team.",

read:false,

createdAt:new Date().toISOString(),

metadata:{
teamName:"Marketing Team"
}
},

{
id:"2",
tenantId:"tenant-1",
userId:"user-1",

type:"creator_reply",

title:"Creator Replied",

message:"Sarah replied to your comment.",

read:false,

createdAt:new Date().toISOString(),

metadata:{
creatorName:"Sarah"
}
},

{
id:"3",
tenantId:"tenant-1",
userId:"user-2",

type:"task",

title:"Task Assigned",

message:"New sales task assigned.",

read:false,

createdAt:new Date().toISOString()

}

];