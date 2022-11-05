    
    var user = 1;
    var P1 = "<img border=0 width=100 height=100 src='P1.png'/>";
    var P2 = "<img border=0 width=100 height=100 src='P2.png'/>";   
    var clicks = 0;
    var p1_score=0;
    var p2_score=0;

    var Result = new Array();
    Result[0] = new Array(0,0,0);
    Result[1] = new Array(0,0,0);
    Result[2] = new Array(0,0,0);    
    var complete = 0;
    
    function play(cell) {
      if (complete==1) {
        return 0;
      }
      var row = cell.id[0];
      var col = cell.id[1];
      
      clicks++;
      if (user == 1) {
        cell.innerHTML = P1;
        user = 2;
        Result[row][col] = 1;
        document.getElementById("btn2").innerHTML="Player 2 Turn";
        document.getElementById("btn1").innerHTML="";
		
      } else {
        cell.innerHTML = P2;
        user = 1;
        Result[row][col] = 2;
        document.getElementById("btn1").innerHTML="Player 1 Turn";
        document.getElementById("btn2").innerHTML="";
		
      }
      var finish = checkForWin();
      if (finish != 0) {
       
        if(finish===1)
        {
            
            setTimeout(function(){

            document.getElementById("board").innerHTML="";
            const element = document.querySelector("#board");
            element.classList.add("winnerClass");
            document.getElementById("board").innerHTML="Player 1 wins !!!";

            }, 500); 
            
            

        }
        else if(finish===2)
        {
          setTimeout(function(){

            document.getElementById("board").innerHTML="";
            const element = document.querySelector("#board");
            element.classList.add("winnerClass");
            document.getElementById("board").innerHTML="Player 2 wins !!!";

            }, 500); 
        }
		
        complete = 1;
      } else if (clicks==9) {
        setTimeout(function(){

          document.getElementById("board").innerHTML="";
          const element = document.querySelector("#board");
          element.classList.add("winnerClass");
          document.getElementById("board").innerHTML="Its a Tie!!!";

          }, 500); 
		
        complete = 1;
      }
    }
    function start()
    {

    }
    function checkForWin() {
      var winner = 0;
      if (Result[0][0]!=0 && Result[0][0]==Result[0][1] && Result[0][1]==Result[0][2])
        winner = Result[0][0];
      else if (Result[2][0] !=0 && Result[2][0]==Result[2][1] && Result[2][1]==Result[2][2])
        winner = Result[2][0];
      else if (Result[1][0] !=0 && Result[1][0]==Result[1][1] && Result[1][1]==Result[1][2])
        winner = Result[1][0];
      else if (Result[0][2] !=0 && Result[0][2]==Result[1][1] && Result[1][1]==Result[2][0])
        winner = Result[0][2];
      else if (Result[0][0] !=0 && Result[0][0]==Result[1][0] && Result[1][0]==Result[2][0])
        winner = Result[0][0];
      else if (Result[0][1] !=0 && Result[0][1]==Result[1][1] && Result[1][1]==Result[2][1])
        winner = Result[0][1];
      else if (Result[0][2] !=0 && Result[0][2]==Result[1][2] && Result[1][2]==Result[2][2])
        winner = Result[0][2];
      else if (Result[0][0] !=0 && Result[0][0]==Result[1][1] && Result[1][1]==Result[2][2])
        winner = Result[0][0];
      
      return winner;
    }

    function reset()
    {
      for(var i=0;i<3;i++)
      {
        for(var j=0;j<3;j++)
        {
          var id=i.toString()+j.toString();
          document.getElementById(id).innerHTML="";
        }
      }
     
    }

    
    