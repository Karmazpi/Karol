var player = 'X';
function plansza(colcount, rowcount){
    this.pola = [];
    var content = document.getElementById('kolkokrzyzyk');
    var div = document.createElement('div');
    div.style.width = "500px";
    div.style.height = "500px";
    div.style.backgroundColor = "silver";
    div.style.margin = '100px auto';
    var cols = colcount;
    var rows = rowcount;
    var me = this;
    for(var i=0; i<colcount; i++)
    {
        var row = [];
        for(var j=0; j<rowcount; j++){
            row.push(new pole(500/colcount-4, 500/rowcount-4, div, this))  //te 4 to pixele jakie zostały dodane do     obramowania
            }
        this.pola.push(row);
    }
    content.appendChild(div);
    this.checkWinner = function()
    {
        var counter = 0;
        var sign = '';
        for(var i=0; i<cols; i++)
        {
            counter=0;
            for(var j=0; j<rows; j++)
            {
                if(this.pola[j][i].value() == '')
                {
                    sign='';
                    counter = 0;
//                    break;
                }
                else if(sign!='' && this.pola[j][i].value()!=sign)
                {
                    sign=''; 
                    counter = 1;
//                    break;
                }
                else
                {
                    sign=this.pola[j][i].value();
                    counter++;
                }
            }
            if(sign!='')
            {
                break;
            }
        }
        if(sign==='')
        {
            for(var i=0; i<rows; i++)
            {
                counter=0;
                for(var j=0; j<cols; j++)
                {
                    if(this.pola[i][j].value() == '')
                    {
                        sign='';
                        break;
                    }
                    else if(sign!='' && this.pola[i][j].value()!=sign)
                    {
                        sign='';    
                        break;
                    }
                    else
                    {
                        sign=this.pola[i][j].value();
                    }
                }
                if(sign!='')
                {
                    break;
                }
            }   
        }
        if(sign==='')
        {
            counter=0;
            for(var i=0; i<cols; i++)
            {
                if(this.pola[i][i].value() == '')
                {
                    sign='';
                    break;
                }
                else if(sign!='' && this.pola[i][i].value()!=sign)
                {
                    sign='';    
                    break;
                }
                else
                {
                    sign=this.pola[i][i].value();
                }
            }
            
        }
        if(sign==='')
        {
            counter=0;
            for(var j=0; j<cols; j++)
            {
                if(this.pola[j][j].value() == '')
                {
                    sign='';
                    break;
                }
                else if(sign!='' && this.pola[j][j].value()!=sign)
                {
                    sign='';    
                    break;
                }
                else
                {
                    sign=this.pola[j][j].value();
                }
                
            }
            
        }
        if(sign==='')
        {
            counter=0;
            for(var i=cols-1; i>=0; i--)
            {
                if(this.pola[rows - i - 1][i].value() == '')
                {
                    sign='';
                    break;
                }
                else if(sign!='' && this.pola[rows - i - 1][i].value()!=sign)
                {
                    sign='';    
                    break;
                }
                else
                {
                    sign=this.pola[rows - i - 1][i].value();
                }
            }
        }

        if(sign != '')
        {
            alert('wygrana ' + sign);
            div.remove();
            me = new plansza(rows, cols);
        }
    }
   
    
}
function pole(width, height, divPlansza, plansza){
    var div = document.createElement('div');
    div.style.width = width+"px";
    div.style.height = height+"px";
    div.style.border = "2px solid black";
    div.style.float = 'left';
    div.style.cursor = 'pointer';
    div.style.textAlign = 'center';
    div.style.lineHeight = height+'px';
    div.onclick = function(){
        if(this.innerHTML === "")
        {
           this.innerHTML = player;
            if(player === 'X')
                player = 'o';
            else
                player = 'X';
        }
        plansza.checkWinner()
    }
    this.value = function(){
        return div.innerHTML;
    }
    divPlansza.appendChild(div);
}
var plan = new plansza(3,3);

//var k = ['jablok','pomarancza','wisnia'];
//
//var tekst = '';
//for(var i=0; i<k.length; i++){
////    alert(k[i])
//    tekst+=k[i];
//}
//alert(tekst);