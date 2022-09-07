
function rovarspraket (str:string){

    const consonent  = ['a','e','i','o','u']
    let res = ''

    const text = str.split(' ');
    for (let i =0;i<text.length;i++)
    {
        for (let j=0;j<text[i].length;j++)
        {
            if (!(text[i][j] in consonent) )
            {
                // console.log(text[i][j]+'o'+text[i][j])
                res = res+text[i][j]+'o'+text[i][j]
            }
            else if (text[i][j] in consonent)
            {
                res = res+ "";
                 res = res+text[i][j]       
            }
        }
    }

    console.log(res)
}
rovarspraket('this is fun')

