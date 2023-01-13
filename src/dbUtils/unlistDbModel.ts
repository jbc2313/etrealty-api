import prisma from "./prismaClient";

export async function unlistModel(list: any) {
    console.log("**DB MODEL UNLISTED**");
    console.log("unlist list");
    //console.log(list);
    //time format for last updated
    //   2022-12-13T15:01:02Z
    
    // NEED TO GET TIME TO THIS FORMAT ABOVE
    const time: any = Date.now();
    console.log("TIME IS:");
    console.log(time);

    // list.forEach((el: string)=> {
    //     prisma.property.update({
    //         where: { PropertyId: el },
    //         data: { 
    //             Status: "Unlisted", 
    //             ApiUpdateAt: " "
    //         } 
    //     })        
    // })



    // just view the propertys in the db
    // list.forEach((el: string)=> {
    //     prisma.property.findMany({
    //         where: { PropertyId: el}
    //     }).then(response => {
    //         console.log(response)
    //     })
    // })


};
