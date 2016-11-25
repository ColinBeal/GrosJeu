$(document).ready(function(){
newBoard();

$(".color").click(function(){
  if (gameRunning == true && activeColor != $(this).attr('id')){
  activeColor = $(this).attr('id');
  checkColor($(this).attr('id'));
  moves++;
  $("#moves").replaceWith("<div class='button' id='moves'>Moves:"+moves+"/"+maxMoves+"</div>");
  checkWinCondition();
}
		});
$(".button").click(function(){
  	switch($(this).attr('id')){
      case "new":
        removeBoard();
        newBoard();
        break;
    }
		});
});

var moves = 0;
var maxMoves = 30;
var gameRunning = true;
var activeColor;

checkColor = function(color){
  var x = 1;
  var lastInLine = false;
  var firstInLine = false;
  var test;

  while(x <= 100) {
    	
    if ($(".block:nth-child("+x+")").attr('id').indexOf("-in")> -1) {
					$(".block:nth-child("+x+")").attr("id", color +"-in");
      		  lastInLine = false;
  					firstInLine = false;
     				test = x.toString();			
      
      				if(test.match(/0$/) == '0'){
       					lastInLine = true;
     					}
      				else if (test.match(/1$/) == '1') {
       						firstInLine= true;
   						}


      

      if(x+1 <= 100 && lastInLine == false ) {
        	if ($(".block:nth-child("+(x+1)+")").attr('id') == color)	{
							$(".block:nth-child("+(x+1)+")").attr('id', color +"-in");
					}
      	}
      
        if (x+10 <= 100 ){
						 if ($(".block:nth-child("+(x+10)+")").attr('id') == color)	{
								 $(".block:nth-child("+(x+10)+")").attr('id', color +"-in");
						}  
        }
      
       if(x-1 >0 && firstInLine == false ){
						if ($(".block:nth-child("+(x-1)+")").attr('id') == color)	{
         				$(".block:nth-child("+(x-1)+")").attr('id', color +"-in");
      			}  
       }
      
			if(x-10 >=0){
      		if ($(".block:nth-child("+(x-10)+")").attr('id') == color) {
     					$(".block:nth-child("+(x-10)+")").attr('id', color +"-in");
    			}
     	 }
    }
    x++;
   
}
 
 
 
}

newBoard = function(){
  var colors =	['red','blue','orange','purple','yellow','brown','green','green'];
var i = 0;
 gameRunning = true;
  
  while (i < 100) {
			$(".field").append( "<div class='block' id='"+colors[Math.floor((Math.random() * 7) )]+"'></div>" );
    i++;
  }
  activeColor =  $(".block:first-child").attr("id");
 $(".block:first-child").attr("id",$(".block:first-child").attr("id")+"-in");
  checkColor($(".block:first-child").attr("id").slice(0,$(".block:first-child").attr("id").indexOf('-')));
  
  $("#moves").replaceWith("<div class='button' id='moves'>Moves:"+moves+"/"+maxMoves+"</div>");
  
}
removeBoard = function(){
    $(".block").remove();
 		$(".resultpopup").remove();
    moves = 0;
    
   
}
checkWinCondition = function(){
  x = 1;
  y = 0;
  if(moves <= maxMoves){
    if ($(".block:last-child").attr('id').indexOf("-in")> -1) {
      	 while(x <= 100) {	
      			if ($(".block:nth-child("+x+")").attr('id').indexOf("-in")> -1) {
          		y++;	
        		}
            x++;
         }
    }
    
    if(y == 100){     
      $(".header").append( "<div class='resultpopup'>WINNER!</div>");
      gameRunning = false;

    
  }
    else if (y < 100 && moves>=maxMoves ){
      $(".header").append( "<div class='resultpopup'>LOSER!</div>");
      gameRunning = false;
    }
}
  else{
    $(".header").append( "<div class='resultpopup'>LOSER!</div>");
    gameRunning = false;
    
  }
}
  
 

