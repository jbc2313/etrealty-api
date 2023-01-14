import prisma from "./prismaClient";

export async function unlistModel(list: any) {
    console.log("**DB MODEL UNLISTED**");
    console.log("unlist list");
    //console.log(list);
    //time format for last updated
    //   2022-12-13T15:01:02Z
    
    // NEED TO GET TIME TO THIS FORMAT ABOVE
    const t = new Date;
    const time = t.toJSON(); 
    console.log("TIME IS:");
    console.log(time);
  

    //move this out of herre to another part of code;
    // check to make sure property is not already Unlisted
    // const updatedList: any = [];
    //
    // list.forEach((el:string)=> {
    //    prisma.property.findFirst({
    //         where: { PropertyId: el },
    //    }).then(model => {
    //         if(model?.Status === "Unlisted"){
    //             console.log(model); 
    //             //updatedList.push(model?.PropertyId);
    //         }else{
    //             //updatedList.push(model?.PropertyId);
    //         }
    //    })
    // });
    //
    // console.log(updatedList);

   



//     list.forEach((el: string)=> {
//         prisma.property.update({
//             where: { PropertyId: el },
//             data: { 
//                 Status: "Unlisted", 
//                 ApiUpdateAt: time,
//             } 
//         }).then(returned => console.log('Model updated'));
//     })



    // just view the propertys in the db
    // list.forEach((el: string)=> {
    //     prisma.property.findMany({
    //         where: { PropertyId: el}
    //     }).then(response => {
    //         console.log(response)
    //     })
    // })


};
