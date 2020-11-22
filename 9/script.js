// 1
// function getup(WhoI , cb){
//     let randomTime =Math.random()*(5000 -2000)+2000
//     let randomTime1=Math.random()*(2000-1000)+1000
//     setTimeout(()=>{
//         console.log('1)Дзвинить будильник')
//     },randomTime1)
//     setTimeout(()=>{
//         if(!WhoI){
//             cb('ми трошки перепили вчора' , null)
//         }else {
//             cb(null , `Ура , я ${WhoI} , я проснувся і я ще живий`)
//         }
//     },randomTime)
// }
// function eat1(WhatIEat , cb) {
//     let randomTime =Math.random()*(5000 -2000)+2000
//     let randomTime1=Math.random()*(2000-1000)+1000
//     let random =Math.random()*(100-1)+1
//     setTimeout(()=>{
//         console.log('2)я  йду снідати')
//     },randomTime1)
//     setTimeout(()=>{
//         if (!WhatIEat){
//             if (random>50){
//                 cb(null ,'Відібрав мівіну  у драці з бомжом')
//                 return
//             }
//             cb('Ми бідні , голодні студенти',null)
//         }else {
//             cb(null , `Ого я навіть поїв ${WhatIEat}`)
//         }
//     },randomTime)
// }
//
// function school(Homeworks , cb){
//     let randomTime =Math.random()*(5000 -2000)+2000
//     let randomTime1=Math.random()*(2000-1000)+1000
//     setTimeout(()=>{
//         console.log('3)Їдемо в інститут')
//     },randomTime1)
//     let random =Math.random()*(100-1)+1
//     setTimeout(()=>{
//         if (!Homeworks){
//             if (random>50){
//                 cb(null, `Юху , я списав домашку в школі . Ніхто і не замітив`)
//                 return
//             }
//             cb('Мене відчислили за прогули і багаточислені не зроблені ДЗ',null)
//         }else {
//             if(random>50){
//                 cb(null , `Я отримав 10 за ${Homeworks}`)
//                 return
//             }
//             cb(null, `У нас не перевіряли ДЗ`)
//         }
//     },randomTime)
// }
// function PE(DoYouHaveASuit ,cb){
//     let randomTime =Math.random()*(5000 -2000)+2000
//     let randomTime1=Math.random()*(2000-1000)+1000
//     setTimeout(()=>{
//         console.log('4)Починається фізра')
//     },randomTime1)
//     let random =Math.random()*(100-1)+1
//     setTimeout(()=>{
//         if (DoYouHaveASuit !== true){
//             if (random>50){
//                 cb(null , 'У вчителя добрий настрій ')
//                 return
//             }
//             cb('Ізбив фізрук' , null)
//             return
//         }
//         if (random>50){
//             cb(null , 'Я підтянувся 3 рази , я машина)')
//             return
//         }
//         cb(null , 'Все пройшло як завжди ')
//     },randomTime)
// }
// function gopStop(DoIHaveSameGorilka , cb){
//     let randomTime =Math.random()*(5000 -2000)+2000
//     let randomTime1=Math.random()*(2000-1000)+1000
//     setTimeout(()=>{
//         console.log('5)Йшовши по коридору я почув дивний звук . Це були 2 пацанів що сиділи на картанах і були в спортивному костюмі...')
//     },randomTime1)
//     let random =Math.random()*(100-1)+1
//     setTimeout(()=>{
//     if (DoIHaveSameGorilka ===true){
//         if (random>50){
//             cb(null , 'Віддав горілку , зате вони мене відпустили')
//             return
//         }
//         cb(null , 'Віддав горілку і тепер я їхній друг ...')
//         return
//     }
//     if (random>50){
//         cb('Мене ізбили' , null)
//         return
//     }
//     cb('мене ізбили і забрали гроші' , null)
//     },randomTime)
// }
//
// function eat2(money , friend ,cb ){
//     let randomTime =Math.random()*(5000 -2001)+2001
//     let randomTime1=Math.random()*(2000-1000)+1000
//     setTimeout(()=>{
//         console.log('6)я пішов в їдальню')
//     },randomTime1)
//     let random =Math.random()*(100-1)+1
//     setTimeout(()=>{
//         if (money>73){
//             if (random>50){
//                 cb(null , 'Купив пюрешку з катлеткою)')
//                 return
//             }
//             cb(null , 'Купив вермішель з салатіком)')
//             return
//         }
//         if (friend && !money){
//             if (random>50){
//                 cb(null,`Добре що зі мною є друг ${friend} ,він купив мені порцію)`)
//                 return
//             }
//             cb(null,`Добре що зі мною є друг ${friend} , він дозволив мені доїсти за ним...`)
//             return
//         }
//         cb('Немає ні друзів ні грошей' ,null)
//         },randomTime)
//
//
// }
// function goToHome(money,distance,cb ){
//     let randomTime =Math.random()*(5000 -2000)+2000
//     let randomTime1=Math.random()*(2000-1000)+1000
//     setTimeout(()=>{
//         console.log('7)Пари кінчились , збираюсь до дому')
//     },randomTime1)
//     let random =Math.random()*(100-1)+1
//     setTimeout(()=>{
//         if (money>30 &&distance>274){
//             if (random>50){
//                 cb(null ,'Я поїхав до хати на тролейбусі')
//                 return
//             }
//             cb(null ,'Я поїхав до хати на маршутці')
//             return
//         }
//         if (money>400){
//             cb(null ,'Я поїхав до хати на таксі')
//             return
//         }
//         if (money>10){
//             if (random>50){
//                 cb(null ,'Я поїхав до хати на тролейбусі')
//                 return
//             }
//             cb(null ,'Я поїхав до хати на маршутці')
//             return
//         }
//         if (!money && distance>100){
//             console.log(`Немає грошей, біжу до дому`)
//             if (random>50){
//                 cb(`напали собаки`,null)
//                 return
//             }
//             cb(null ,'Я ледь добіг до дому' ,null)
//             return
//         }
//         console.log(`Немає грошей йду на дорогу , йду пішки`)
//         if (random>50){
//             cb('настала , ніч , я не встиг дійти до хати ... Ночую на вулиці' ,null)
//             return
//         }
//         cb(null , 'Я дійшов до дому')
//     },randomTime)
// }
//
// getup("Anton" , (err , result)=>{
//     if (err){
//         console.log(` ПОМИЛКА: ${err}`);
//         return ;
//     }
//     console.log(result)
//     eat1('Гречку',(err , result)=>{
//         if (err){
//             console.log(` ПОМИЛКА: ${err}`);
//             return
//         }
//         console.log(result);
//         school('Math' , (err , result)=>{
//             if (err){
//                 console.log(` ПОМИЛКА: ${err}`);
//                 return
//             }
//             console.log(result);
//             PE(true , (err,result)=>{
//                 if (err){
//                     console.log(`ПОМИЛКА:${err}`)
//                     return
//                 }
//                 console.log(result)
//                 gopStop(true,(err,result)=>{
//                     if (err){
//                         console.log(`ПОМИЛКА:${err}`)
//                         return
//                     }
//                     console.log(result);
//                     eat2(74 , `Ostap` ,(err , result)=>{
//                         if (err){
//                             console.log(`ПОМИЛКА:${err}`)
//                             return
//                         }
//                         console.log(result)
//                         goToHome(10 ,300 ,(err,result)=>{
//                             if (err){
//                                 console.log(`ПОМИЛКА:${err}`)
//                                 return
//                             }
//                             console.log(result)
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

//2
// function getup(WhoI ){
//     return new Promise((resolve , reject )=>{
//         let randomTime =Math.random()*(5000 -2000)+2000
//         let randomTime1=Math.random()*(2000-1000)+1000
//         setTimeout(()=>{
//             console.log('1)Дзвинить будильник')
//         },randomTime1)
//         setTimeout(()=>{
//             if(!WhoI){
//                 reject('ми трошки перепили вчора' )
//                 return
//             }
//             resolve( `Ура , я ${WhoI} , я проснувся і ще я живий`)
//
//         },randomTime)
//     })
// }
// function eat1(WhatIEat ) {
//     return new Promise((resolve, reject) =>{
//         let randomTime =Math.random()*(5000 -2000)+2000
//         let randomTime1=Math.random()*(2000-1000)+1000
//         setTimeout(()=>{
//             console.log('2)я  йду снідати')
//         },randomTime1)
//         setTimeout(()=>{
//             let random =Math.random()*(100-1)+1
//             if (!WhatIEat){
//                 if (random>50){
//                     resolve('відібрав ролтон у важкому бою з бомжами')
//                 }
//                 reject('Ми бідні , голодні студенти')
//                 return
//             }
//             resolve(`Ого я навіть поїв ${WhatIEat}`)
//
//         },randomTime)
//     })
// }
//
// function school(Homeworks ){
//     return new Promise((resolve, reject) => {
//         let randomTime =Math.random()*(5000 -2000)+2000
//         let randomTime1=Math.random()*(2000-1000)+1000
//         setTimeout(()=>{
//             console.log('3)Їдемо в інститут')
//         },randomTime1)
//         let random =Math.random()*(100-1)+1
//         setTimeout(()=>{
//             if (!Homeworks){
//                 if (random>50){
//                     resolve(`Юху , я списав домашку в школі . Ніхто і не замітив`)
//                     return
//                 }
//                 reject('Мене відчислили за прогули і багаточислені не зроблені ДЗ')
//             }else {
//                 if(random>50){
//                     resolve( `Я отримав 10 за ${Homeworks}`)
//                     return
//                 }
//                 resolve( `У нас не перевіряли ДЗ`)
//             }
//         },randomTime)
//     })
// }
// function PE(DoYouHaveASuit ){
//     return new Promise((resolve, reject) => {
//         let randomTime =Math.random()*(5000 -2000)+2000
//         let randomTime1=Math.random()*(2000-1000)+1000
//         setTimeout(()=>{
//             console.log('4)Починається фізра')
//         },randomTime1)
//         let random =Math.random()*(100-1)+1
//         setTimeout(()=>{
//             if (DoYouHaveASuit !== true){
//                 if (random>50){
//                     resolve( 'У вчителя добрий настрій ')
//                     return
//                 }
//                 reject('Ізбив фізрук')
//                 return
//             }
//             if (random>50){
//                 resolve( 'Я підтянувся 3 рази , я машина)')
//                 return
//             }
//             resolve( 'Все пройшло як завжди ')
//         },randomTime)
//     })
// }
// function gopStop(DoIHaveSameGorilka ){
//     return new Promise((resolve, reject) => {
//         let randomTime =Math.random()*(5000 -2000)+2000
//         let randomTime1=Math.random()*(2000-1000)+1000
//         setTimeout(()=>{
//             console.log('5)Йшовши по коридору я почув дивний звук . Це були 2 пацанів що сиділи на картанах і були в спортивному костюмі...')
//         },randomTime1)
//         let random =Math.random()*(100-1)+1
//         setTimeout(()=>{
//             if (DoIHaveSameGorilka ===true){
//                 if (random>50){
//                     resolve( 'Віддав горілку , зате вони мене відпустили')
//                     return
//                 }
//                 resolve( 'Віддав горілку і тепер я їхній друг ...')
//                 return
//             }
//             if (random>50){
//                 reject('Мене ізбили' )
//                 return
//             }
//             reject('мене ізбили і забрали гроші')
//         },randomTime)
//     })
// }
//
// function eat2(money , friend  ){
//     return new Promise((resolve, reject) => {
//         let randomTime =Math.random()*(5000 -2001)+2001
//         let randomTime1=Math.random()*(2000-1000)+1000
//         setTimeout(()=>{
//             console.log('6)я пішов в їдальню')
//         },randomTime1)
//         let random =Math.random()*(100-1)+1
//         setTimeout(()=>{
//             if (money>73){
//                 if (random>50){
//                     resolve('Купив пюрешку з катлеткою)')
//                     return
//                 }
//                 resolve( 'Купив вермішель з салатіком)')
//                 return
//             }
//             if (friend && !money){
//                 if (random>50){
//                     resolve(`Добре що зі мною є друг ${friend} ,він купив мені порцію)`)
//                     return
//                 }
//                 resolve(`Добре що зі мною є друг ${friend} , він дозволив мені доїсти за ним...`)
//                 return
//             }
//             if (random>50){
//                 resolve(`Відібрав їжу у бомжа`)
//                 return
//             }
//             reject('Немає ні друзів ні грошей' )
//         },randomTime)
//     })
// }
// function goToHome(money,distance){
//     return new Promise((resolve, reject) => {
//         let randomTime =Math.random()*(5000 -2000)+2000
//         let randomTime1=Math.random()*(2000-1000)+1000
//         setTimeout(()=>{
//             console.log('7)Пари кінчились , збираюсь до дому')
//         },randomTime1)
//         let random =Math.random()*(100-1)+1
//         setTimeout(()=>{
//             if (money>30 &&distance>274){
//                 if (random>50){
//                     resolve('Я поїхав до хати на тролейбусі')
//                     return
//                 }
//                 resolve('Я поїхав до хати на маршутці')
//                 return
//             }
//             if (money>400){
//                 resolve('Я поїхав до хати на таксі')
//                 return
//             }
//             if (money>10){
//                 if (random>50){
//                     resolve('Я поїхав до хати на тролейбусі')
//                     return
//                 }
//                 resolve('Я поїхав до хати на маршутці')
//                 return
//             }
//             if (!money && distance>100){
//                 console.log(`Немає грошей, біжу до дому`)
//                 if (random>50){
//                     reject(`напали собаки`)
//                     return
//                 }
//                 resolve('Я ледь добіг до дому' )
//                 return
//             }
//             console.log(`Немає грошей йду на дорогу , йду пішки`)
//             if (random>50){
//                 reject('настала , ніч , я не встиг дійти до хати ... Ночую на вулиці' )
//                 return
//             }
//             resolve( 'Я дійшов до дому')
//         },randomTime)
//     })
// }
// getup('Anton').then(value=>{
//     console.log(value)
//     return eat1('гречу')
// })
// .then(value => {
//     console.log(value)
//     return school('алгебру')
// })
// .then(value => {
//     console.log(value)
//     return PE(true)
// })
// .then(value => {
//     console.log(value)
//     return gopStop(true)
// })
// .then(value => {
//     console.log(value);
//     return eat2(74 ,'Taras')
// })
// .then(value => {
//     console.log(value);
//     return goToHome( 1,100)
// })

//3
function getup(WhoI ){
    return new Promise((resolve , reject )=>{
        let randomTime =Math.random()*(5000 -2000)+2000
        let randomTime1=Math.random()*(2000-1000)+1000
        setTimeout(()=>{
            console.log('1)Дзвинить будильник')
        },randomTime1)
        setTimeout(()=>{
            if(!WhoI){
                reject('ми трошки перепили вчора' )
                return
            }
            resolve( `Ура , я ${WhoI} , я проснувся і ще я живий`)

        },randomTime)
    })
}
function eat1(WhatIEat ) {
    return new Promise((resolve, reject) =>{
        let randomTime =Math.random()*(5000 -2000)+2000
        let randomTime1=Math.random()*(2000-1000)+1000
        setTimeout(()=>{
            console.log('2)я  йду снідати')
        },randomTime1)
        setTimeout(()=>{
            let random =Math.random()*(100-1)+1
            if (!WhatIEat){
                if (random>50){
                    resolve('відібрав ролтон у важкому бою з бомжами')
                }
                reject('Ми бідні , голодні студенти')
                return
            }
            resolve(`Ого я навіть поїв ${WhatIEat}`)

        },randomTime)
    })
}

function school(Homeworks ){
    return new Promise((resolve, reject) => {
        let randomTime =Math.random()*(5000 -2000)+2000
        let randomTime1=Math.random()*(2000-1000)+1000
        setTimeout(()=>{
            console.log('3)Їдемо в інститут')
        },randomTime1)
        let random =Math.random()*(100-1)+1
        setTimeout(()=>{
            if (!Homeworks){
                if (random>50){
                    resolve(`Юху , я списав домашку в школі . Ніхто і не замітив`)
                    return
                }
                reject('Мене відчислили за прогули і багаточислені не зроблені ДЗ')
            }else {
                if(random>50){
                    resolve( `Я отримав 10 за ${Homeworks}`)
                    return
                }
                resolve( `У нас не перевіряли ДЗ`)
            }
        },randomTime)
    })
}
function PE(DoYouHaveASuit ){
    return new Promise((resolve, reject) => {
        let randomTime =Math.random()*(5000 -2000)+2000
        let randomTime1=Math.random()*(2000-1000)+1000
        setTimeout(()=>{
            console.log('4)Починається фізра')
        },randomTime1)
        let random =Math.random()*(100-1)+1
        setTimeout(()=>{
            if (DoYouHaveASuit !== true){
                if (random>50){
                    resolve( 'У вчителя добрий настрій ')
                    return
                }
                reject('Ізбив фізрук')
                return
            }
            if (random>50){
                resolve( 'Я підтянувся 3 рази , я машина)')
                return
            }
            resolve( 'Все пройшло як завжди ')
        },randomTime)
    })
}
function gopStop(DoIHaveSameGorilka ){
    return new Promise((resolve, reject) => {
        let randomTime =Math.random()*(5000 -2000)+2000
        let randomTime1=Math.random()*(2000-1000)+1000
        setTimeout(()=>{
            console.log('5)Йшовши по коридору я почув дивний звук . Це були 2 пацанів що сиділи на картанах і були в спортивному костюмі...')
        },randomTime1)
        let random =Math.random()*(100-1)+1
        setTimeout(()=>{
            if (DoIHaveSameGorilka ===true){
                if (random>50){
                    resolve( 'Віддав горілку , зате вони мене відпустили')
                    return
                }
                resolve( 'Віддав горілку і тепер я їхній друг ...')
                return
            }
            if (random>50){
                reject('Мене ізбили' )
                return
            }
            reject('мене ізбили і забрали гроші')
        },randomTime)
    })
}

function eat2(money , friend  ){
    return new Promise((resolve, reject) => {
        let randomTime =Math.random()*(5000 -2001)+2001
        let randomTime1=Math.random()*(2000-1000)+1000
        setTimeout(()=>{
            console.log('6)я пішов в їдальню')
        },randomTime1)
        let random =Math.random()*(100-1)+1
        setTimeout(()=>{
            if (money>73){
                if (random>50){
                    resolve('Купив пюрешку з катлеткою)')
                    return
                }
                resolve( 'Купив вермішель з салатіком)')
                return
            }
            if (friend && !money){
                if (random>50){
                    resolve(`Добре що зі мною є друг ${friend} ,він купив мені порцію)`)
                    return
                }
                resolve(`Добре що зі мною є друг ${friend} , він дозволив мені доїсти за ним...`)
                return
            }
            if (random>50){
                resolve(`Відібрав їжу у бомжа`)
                return
            }
            reject('Немає ні друзів ні грошей' )
        },randomTime)
    })
}
function goToHome(money,distance){
    return new Promise((resolve, reject) => {
        let randomTime =Math.random()*(5000 -2000)+2000
        let randomTime1=Math.random()*(2000-1000)+1000
        setTimeout(()=>{
            console.log('7)Пари кінчились , збираюсь до дому')
        },randomTime1)
        let random =Math.random()*(100-1)+1
        setTimeout(()=>{
            if (money>30 &&distance>274){
                if (random>50){
                    resolve('Я поїхав до хати на тролейбусі')
                    return
                }
                resolve('Я поїхав до хати на маршутці')
                return
            }
            if (money>400){
                resolve('Я поїхав до хати на таксі')
                return
            }
            if (money>10){
                if (random>50){
                    resolve('Я поїхав до хати на тролейбусі')
                    return
                }
                resolve('Я поїхав до хати на маршутці')
                return
            }
            if (!money && distance>100){
                console.log(`Немає грошей, біжу до дому`)
                if (random>50){
                    reject(`напали собаки`)
                    return
                }
                resolve('Я ледь добіг до дому' )
                return
            }
            console.log(`Немає грошей йду на дорогу , йду пішки`)
            if (random>50){
                reject('настала , ніч , я не встиг дійти до хати ... Ночую на вулиці' )
                return
            }
            resolve( 'Я дійшов до дому')
        },randomTime)
    })
}


let result =async function (){
    let a = await getup('Anton')
    console.log(a);
    let b =await eat1('гречу')
    console.log(b);
    let c =await school(`алгебру`)
    console.log(c);
    let d =await PE(true)
    console.log(d);
    let e =await gopStop(true)
    console.log(e);
    let f =await eat2(90,`Andriy` )
    console.log(f);
    let g=await goToHome(30 ,92)
    console.log(g);
}
result()