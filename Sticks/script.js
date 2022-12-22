var htmlstart = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="style.css"><title>Table</title></head><body>';
var htmlend = '</body></html>';
var max = 12;
var str = ' ';
var nbs = max;
var trn = false;

window.onload = function()
{
    document.open();
    document.write(htmlstart);

    for(var i = 0; i < max; i++)
    {
        document.write('<button id="b' + i + '" onclick="btnClick();"></button>');
    }

    document.write(htmlend);
    document.close();
}

function btnClick(nb = 0)
{
    if(nbs == 1)
    {
        if(trn == false)
        {
            alert('Sorry! You lose...');
        }
        else
        {
            alert('Congratulations! You win!');
        }
        window.location.href = 'file:///C:/Users/Parent/Documents/Visual%20Studio%20Code/HTML/Jeu%20de%20Fort%20Boyard%20Batonnets/index.html';
        return;
    }
    if(trn == false)
    {
        while(nb == 0 || nb > 3)
        {
            nb = prompt('How many sticks do you want to remove? Please enter a number between 1 and 3.');
            if(nb == 0 || nb > 3)
            {
                alert('Your entry is incorrect. Please retry.')
            }
        }
    }
    nbs -= nb;
    for(var i = 0; i < nb; i++)
    {
        if(document.getElementById('b' + i).style.display == 'none')
        {
            nb++;
        }
        else
        {
            document.getElementById('b' + i).style.display = 'none';
        }
    }
    if(trn == false)
    {
        trn = true;
        setTimeout(cmptr, 1000);
    }
    else
    {
        trn = false;
    }
}

function cmptr()
{
    var m;
    var s = true;
    for(var i = 0; i < max; i++)
    {
        var n = 1 + (4 * i);
        if(nbs == n)
        {
            s = false;
        }
        if(nbs > n)
        {
            m = n;
        }
    }
    var less;
    if(s == false)
    {
        less = getRandomInt(1, 4);
    }
    else
    {
        less = nbs - m;
    }
    alert('The computer remove ' + less + ' sticks.');
    btnClick(less);
}

function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}