export interface Customer {

    id:string;

    name:string;

    company:string;

    email:string;

    phone:string;

    status:
        | "Lead"
        | "Customer"
        | "VIP";

    stage:
        | "New"
        | "Qualified"
        | "Proposal"
        | "Won"
        | "Lost";

    revenue:number;

    owner:string;

    lastActivity:string;

    aiScore:number;
}