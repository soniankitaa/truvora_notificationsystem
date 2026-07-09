import { Customer } from "@/lib/types/crm";

export const customers: Customer[] = [

{
id:"1",
name:"Sophia Williams",
company:"Acme Technologies",
email:"sophia@acme.com",
phone:"+1 555 234 567",
status:"VIP",
stage:"Won",
revenue:245000,
owner:"Sarah",
lastActivity:"2 min ago",
aiScore:97,
},

{
id:"2",
name:"James Brown",
company:"Nova Industries",
email:"james@nova.com",
phone:"+1 555 657 883",
status:"Customer",
stage:"Proposal",
revenue:95000,
owner:"David",
lastActivity:"12 min ago",
aiScore:91,
},

{
id:"3",
name:"Emma Wilson",
company:"Skyline Pvt Ltd",
email:"emma@skyline.com",
phone:"+1 555 985 123",
status:"Lead",
stage:"Qualified",
revenue:42000,
owner:"Emily",
lastActivity:"36 min ago",
aiScore:84,
},

{
id:"4",
name:"Michael Scott",
company:"Quantum Labs",
email:"michael@quantum.com",
phone:"+1 555 121 443",
status:"Lead",
stage:"New",
revenue:12000,
owner:"Sarah",
lastActivity:"1 hour ago",
aiScore:68,
},

];