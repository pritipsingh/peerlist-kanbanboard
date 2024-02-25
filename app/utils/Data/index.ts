
export type columnType = "rejected" | "applied"  | "shortlisted";



export const columns = [
    {
        headingColor : "border-red-100",
        backgroundColor : "bg-red-100",  
        title: "Rejected",
        icon:"/Icons/rejected.svg",
        textColor:"text-[#EB5757]", 
        column:"rejected",
    },

{
    backgroundColor : "bg-gray-200", 
    headingColor : "border-gray-200",
    title: "Applied",
    icon:"/Icons/applied.svg",
    textColor:"text-gray-800", 
    column:"applied",
},
{
    headingColor : "border-green-200", 
    backgroundColor : "bg-green-200", 
    title: "Shortlisted",
    icon:"/Icons/shortlisted.svg",
    textColor:"text-green-600", 
    column:"shortlisted",
},




]

export interface EachCard  {
    id: string,
    external? : boolean,
    name : string,
    image? : string,
    description? : string,
    verified? : boolean,
    column :  columnType,
    rejectedby? : string,
    rejectedon? : string,
    rejectedbyimg? : string,
    experience? : string,
    offer? : boolean,
    resume? : string,
    notice? : string,
    shortlistedby? : string,
    shortlistedon? : string,
    shortlistedbyImg?: string,
    email?: string,
    phone?:string,
    applied: string,
    refby?: string,
    refImg?: string,

}

export interface EachCardPage extends EachCard {
    handleDragStart : any
}

export const cardDetails: EachCard[] = [
    {
        id: "1",
        image: "/Faces/face1.svg",
        name: "Ronald Richards",
        description: "Clous Consultant at Rapid Circle",
        column: "rejected",
        verified: true,
        rejectedby: "Yogini Benge",
        rejectedbyimg: "/Faces/face2.svg",
        rejectedon: "15 Dec 2023",
        applied: "1d",
    },
    {
        id:"2",
        image:"/Faces/face1.svg",
        name: "Esther Howard",
        description: "Clous Consultant at Rapid Circle",
        column: "applied",
        verified: true,
        experience: "11 y 6m",
        offer: true,
        applied: "1d",
        notice: "Immediete",
        email: "darrell.stewards@emaildomain.com",
        phone:"+1 12345 67490"
    },{
        id:"3",
        name: "Darrell Steward",
        column: "applied",
        external: true,
        verified: false,
        resume: "pritiresume.pdf",
        notice: "30 dys",
        applied: "1d",
    

    },
    
        {
            id: "4",
            image: "/",
            name: "Leslie Alexander",
            description: "Clous Consultant at Rapid Circle",
            column: "applied",
            experience: "11 y 6m",
            verified: true,
            refby: "Maddie",
            refImg:  "/Faces/face.svg",
            offer: true,
            notice: "Immediete",
            email: "darrell.stewards@emaildomain.com",
            phone: "+1 12345 67490",
            applied: "3d"
        },
    
        {
            id:"5",
            image:"/Faces/face1.svg",
            name: "Leslie Alexander",
            description: "Clous Consultant at Rapid Circle",
            column: "applied",
            experience: "11 y 6m",
            refby: "Maddie",
            refImg: "/Faces/face1.svg",
            applied: "1d",
            offer: true,
            verified: true,
            notice: "Immediete",
            email: "darrell.stewards@emaildomain.com",
            phone:"+1 12345 67490"
        },
        {
            id:"6",
            image:"/Faces/face1.svg",
            name: "Priti",
            description: "Clous Consultant at Rapid Circle",
            column: "shortlisted",
            experience: "11 y 6m",
            shortlistedby: "Yogini",
            shortlistedon: "25 Feb 2024",
            shortlistedbyImg: "/Faces/face1.svg",
            applied: "1d",
            offer: true,
           
            notice: "Immediete",
            email: "darrell.stewards@emaildomain.com",
            phone:"+1 12345 67490"
        },
        {
            id:"6",
            image:"/Faces/face1.svg",
            name: "Priti",
            description: "Clous Consultant at Rapid Circle",
            column: "shortlisted",
            experience: "11 y 6m",
            shortlistedby: "Yogini",
            shortlistedon: "25 Feb 2024",
            shortlistedbyImg: "/Faces/face2.svg",
            applied: "1d",
            offer: true,
            verified: true,
            notice: "Immediete",
            
        },
]