const readlineSync = require('readline-sync');
let mas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let k=0;
for(let i=9;i>=0;i--)
{
    let randomNumber = `${Math.floor(Math.random() * i)}` ;
    k=mas[randomNumber];
    mas[randomNumber]=mas[i];
    mas[i]=k;
}
if(mas[0]===0)
{
    mas[0]=mas[5];
}
let a1=mas[0];
let a2=mas[1];
let a3=mas[2];
let a4=mas[3];
let arr = [a1, a2, a3, a4];
console.log(arr);

let Try = readlineSync.question('Try:');

let tries = 1;
while (Try != arr) 
{
    let bulls = 0,
        covs = 0;
        for (let i = 0; i < Try.length; i++)
        {
            if (Try[i] == arr[i]) 
            {
                bulls++;
            } 
            else 
            {
                for (let j = 0; j < arr.length; j++) 
                {
                    if (Try[i] == arr[j]) 
                    {
                        covs++;
                    }
                }
            }
        }
        if(bulls===4)
        {
            console.log(`This is the right number. Tries:${tries}`);
            break;
        }
        console.log(`bulls:${bulls}, covs:${covs}`);
        Try = readlineSync.question('Try:');
        tries++;
}
