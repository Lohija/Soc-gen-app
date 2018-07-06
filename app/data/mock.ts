import { User } from "../model/user";

export const USER_DATA  : User[] = [{
    firstName : 'Bill',
    lastName : 'Gates',        
    dob : new Date(1990,1,1),
    income : 10000,
    image : "assets/1.jpg",
    company : 'TCS',
    vote : 23,
    phone : "8892685759"
},
{
    firstName : 'Tom',
    lastName : 'NG',        
    dob : new Date(1989,1,1),
    income : 0,
    image : "assets/2.jpg",
    company : 'Soc gen',
    vote : 12,
    phone : "9965050911"
}]