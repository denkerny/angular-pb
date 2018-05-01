import { Table } from "./Table";


export const TABLES: Table[] = [
    { countryId: 1, name: 'UA', goals: [
        {
            date: '5.11.2017',
            goal: 3
        },
        {
            date: '5.12.2017',
            goal: 2 
        },
        {
            date: '10.12.2017',
            goal: 1
        },


    ] },
    { countryId: 2, name: 'UK', goals: [
        {
            date: '6.11.2017',
            goal: 2
        },
        {
            date: '4.12.2017',
            goal: 3 
        },
        {
            date: '1.12.2017',
            goal: 1
        },


    ] },
    { countryId: 3, name: 'SP', goals: [
        {
            date: '18.11.2017',
            goal: 1
        },
        {
            date: '13.12.2017',
            goal: 2 
        },
        {
            date: '2.12.2017',
            goal: 3
        },
    ] },
]