export const monthMap ={
    "1":"Jan",
    "2":"Feb",
    "3":"Mar",
    "4":"Apr",
    "5":"May",
    "6":"Jun",
    "7":"July",
    "8":"Aug",
    "9":"Sept",
    "10":"Oct",
    "11":"Nov",
    "12":"Dec",
  }
 export const convertDate=(d)=>{
    // const p = blogs[0].createdAt;
    const date = new Date(d);
    console.log(date);
    return `${date.getDay()} ${monthMap[date.getMonth()]} ${date.getFullYear()} At ${date.getHours()>12?date.getHours()-12<10? `0${date.getHours()-12}`:date.getHours()-12:date.getHours()}:${date.getMinutes()<10?`0${date.getMinutes()}`:date.getMinutes()} ${date.getHours()>12?"PM":"AM"}`
  }