  var canvas = document.getElementById("canvas");
  var c = canvas.getContext("2d");
  var out = document.getElementById("out");
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  
  var init = requestAnimationFrame(start);
  var player1 = new Player(100,250,20,0,0);
  var player2 = new Player(600,250,20,0,0);
  var enemyBlueOne = new Enemy(730,230);
  var enemyBlueTwo = new Enemy(650,280);
  var enemyBlueThree = new Enemy(650,200);
  var enemyBlueFour = new Enemy(730,280);
  var enemyRedOne = new Enemy(50,300);
  var enemyRedTwo = new Enemy(150,280);
  var enemyRedThree = new Enemy(510,200);
  var enemyRedFour = new Enemy(230,280);
  var ball = new Ball(350,250);
  var wDown = false;
  var sDown = false;
  var aDown = false;
  var dDown = false;
  var upDown = false;
  var downDown = false;
  var leftDown = false;
  var rightDown = false;
  function start(){
    clear();
    renderBackground();
    renderGates();
    checkKeyboardStatus();
    checkPlayersBounds();
    checkBallBounds();
    checkPlayers_BallCollision();
    movePlayers();
    moveBall();
    renderPlayers();
    renderBall();
    checkEnemyBounds();
  
    
    out.innerHTML = "Player 1 Score: " + player1.score + "<br>Player 2 Score: " + player2.score;
    requestAnimationFrame(start);
  }
  
  function Ball(x,y){
    this.x = x;
    this.y = y;
    this.xVel = 0;
    this.yVel = 0;
    this.decel = 0.1;
    this.size = 5;
  }
  
  function Player(x,y,si,xVel,yVel){
    this.x = x;
    this.y = y;
    this.size = si;
    this.xVel = xVel;
    this.yVel = yVel;
    this.score = 0;
    this.accel = 0.55;
    this.decel = 0.55;
    this.maxSpeed = 3;
  }
  
  function Enemy(x,y){
    this.x = x;
    this.y = y;
    this.size = 15;
    this.xVel = Math.random(-9, 9);
    this.yVel = Math.random(-9, 9);
    this.accel = 0.55;
    this.decel = 0.55;
    this.maxSpeed = 3;
  }
  
  function reset(){
    var score1 = player1.score;
    var score2 = player2.score;
    player1 = new Player(100,250,20,0,0);
    player1.score = score1;
    player2 = new Player(600,250,20,0,0);
    player2.score = score2;
    ball = new Ball(350,250);
    enemyBlueOne = new Enemy(730,230);
    enemyBlueTwo = new Enemy(650,280);
    enemyBlueThree = new Enemy(650,280);
    enemyBlueFour = new Enemy(730,280);
    enemyRedOne = new Enemy(50,300);
    enemyRedTwo = new Enemy(150,280);
    enemyRedThree = new Enemy(510,200);
    enemyRedFour = new Enemy(230,280);
    wDown = false;
    sDown = false;
    aDown = false;
    dDown = false;
    upDown = false;
    downDown = false;
    leftDown = false;
    rightDown = false;
  }
  
  function movePlayers(){
    player1.x += player1.xVel;
    player1.y += player1.yVel;
    player2.x += player2.xVel;
    player2.y += player2.yVel;
    enemyBlueOne.x += enemyBlueOne.xVel;
    enemyBlueOne.y += enemyBlueOne.yVel;
    enemyBlueTwo.x += enemyBlueTwo.xVel;
    enemyBlueTwo.y += enemyBlueTwo.yVel;
    enemyBlueThree.x += enemyBlueThree.xVel;
    enemyBlueThree.y += enemyBlueThree.yVel;
    enemyBlueFour.x += enemyBlueFour.xVel;
    enemyBlueFour.y += enemyBlueFour.yVel;
    enemyRedOne.x += enemyRedOne.xVel;
    enemyRedOne.y += enemyRedOne.yVel;
    enemyRedTwo.x += enemyRedTwo.xVel;
    enemyRedTwo.y += enemyRedTwo.yVel;
    enemyRedThree.x += enemyRedThree.xVel;
    enemyRedThree.y += enemyRedThree.yVel;
    enemyRedFour.x += enemyRedFour.xVel;
    enemyRedFour.y += enemyRedFour.yVel;
  }
  
  function checkPlayers_BallCollision(){
    var p1_ball_distance = getDistance(player1.x,player1.y,ball.x,ball.y) - player1.size - ball.size;
    if(p1_ball_distance < 0){
      collide(ball,player1);
    }
    var p2_ball_distance = getDistance(player2.x,player2.y,ball.x,ball.y) - player2.size - ball.size;
    if(p2_ball_distance < 0){
      collide(ball,player2);
    }
    var pOne_pTwo_distance = getDistance(player1.x, player1.y, player2.x, player2.y) - player1.size - player2.size;
    if(pOne_pTwo_distance < 0) {
      collide(player2, player1);
    }

    var BEOne_ball_distance = getDistance(enemyBlueOne.x, enemyBlueOne.y, ball.x, ball.y) - enemyBlueOne.size - ball.size;
    if(BEOne_ball_distance < 0) {
      collide(enemyBlueOne, ball);
    }

    var BETwo_ball_distance = getDistance(enemyBlueTwo.x, enemyBlueTwo.y, ball.x, ball.y) - enemyBlueTwo.size - ball.size;
    if(BETwo_ball_distance < 0) {
      collide(enemyBlueTwo, ball);
    }

    var BEThree_ball_distance = getDistance(enemyBlueThree.x, enemyBlueThree.y, ball.x, ball.y) - enemyBlueThree.size - ball.size;
    if(BEThree_ball_distance < 0) {
      collide(enemyBlueThree, ball);
    }

    var BEThree_ball_distance = getDistance(enemyBlueFour.x, enemyBlueFour.y, ball.x, ball.y) - enemyBlueFour.size - ball.size;
    if(BEThree_ball_distance < 0) {
      collide(enemyBlueFour, ball);
    }
    var REOne_ball_distance = getDistance(enemyRedOne.x, enemyRedOne.y, ball.x, ball.y) - enemyRedOne.size - ball.size;
    if(REOne_ball_distance < 0) {
      collide(enemyRedOne, ball);
    }
    var RETwo_ball_distance = getDistance(enemyRedTwo.x, enemyRedTwo.y, ball.x, ball.y) - enemyRedTwo.size - ball.size;
    if(RETwo_ball_distance < 0) {
      collide(enemyRedTwo, ball);
    }
    var REThree_ball_distance = getDistance(enemyRedThree.x, enemyRedThree.y, ball.x, ball.y) - enemyRedThree.size - ball.size;
    if(REThree_ball_distance < 0) {
      collide(enemyRedThree, ball);
    }
    var REFour_ball_distance = getDistance(enemyRedFour.x, enemyRedFour.y, ball.x, ball.y) - enemyRedFour.size - ball.size;
    if(REFour_ball_distance < 0) {
      collide(enemyRedFour, ball);
    }

  }
  
  function collide(cir1,cir2){
    var dx = (cir1.x - cir2.x) / (cir1.size);
    var dy = (cir1.y - cir2.y) / (cir1.size);
    cir2.xVel = -dx;
    cir2.yVel = -dy;
    cir1.xVel = dx;
    cir1.yVel = dy;
  }
  
  function getDistance(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
  }
  
  function moveBall(){
    if(ball.xVel !== 0){
      if(ball.xVel > 0){
        ball.xVel -= ball.decel;
        if(ball.xVel < 0) ball.xVel = 0;
      } else {
        ball.xVel += ball.decel;
        if(ball.xVel > 0) ball.xVel = 0;
      }
    }
    if(ball.yVel !== 0){
      if(ball.yVel > 0){
        ball.yVel -= ball.decel;
        if(ball.yVel < 0) ball.yVel = 0;
      } else {
        ball.yVel += ball.decel;
        if(ball.yVel > 0) ball.yVel = 0;
      }
    }
    ball.x += ball.xVel;
    ball.y += ball.yVel;
  }
  
  function checkBallBounds(){
    if(ball.x + ball.size > canvas.width){
      if(ball.y > 150 && ball.y < 350){
        player1.score++;
        reset();
        return;
      }
      ball.x = canvas.width - ball.size;
      ball.xVel *= -1.5;
    }
    if(ball.x - ball.size < 0){
      if(ball.y > 150 && ball.y < 350){
        player2.score++;
        reset();
        return;
      }
      ball.x = 0 + ball.size;
      ball.xVel *= -1.5;
    }
    if(ball.y + ball.size > canvas.height){
      ball.y = canvas.height - ball.size;
      ball.yVel *= -1.5;
    }
    if(ball.y - ball.size < 0){
      ball.y = 0 + ball.size;
      ball.yVel *= -1.5;
    }
  }
  
  function checkPlayersBounds(){
    if(player1.x + player1.size > canvas.width){
      player1.x = canvas.width - player1.size;
      player1.xVel *= -0.5;
    }
    if(player1.x - player1.size < 0){
      player1.x = 0 + player1.size;
      player1.xVel *= -0.5;
    }
    if(player1.y + player1.size > canvas.height){
      player1.y = canvas.height - player1.size;
      player1.yVel *= -0.5;
    }
    if(player1.y - player1.size < 0){
      player1.y = 0 + player1.size;
      player1.yVel *= -0.5;
    }
    if(player2.x + player2.size > canvas.width){
      player2.x = canvas.width - player2.size;
      player2.xVel *= -0.5;
    }
    if(player2.x - player2.size < 0){
      player2.x = 0 + player2.size;
      player2.xVel *= -0.5;
    }
    if(player2.y + player2.size > canvas.height){
      player2.y = canvas.height - player2.size;
      player2.yVel *= -0.5;
    }
    if(player2.y - player2.size < 0){
      player2.y = 0 + player2.size;
      player2.yVel *= -0.5;
    }
  }

  function checkEnemyBounds() {
    if(enemyBlueOne.x + enemyBlueOne.size > canvas.width){
      enemyBlueOne.x = canvas.width - enemyBlueOne.size;
      enemyBlueOne.xVel = enemyBlueOne.xVel - 0.9;
    }
    if(enemyBlueOne.x - enemyBlueOne.size < 0){
      enemyBlueOne.x = 0 + enemyBlueOne.size;
      enemyBlueOne.xVel = enemyBlueOne.xVel - 0.9;
    }
    if(enemyBlueOne.y + enemyBlueOne.size > canvas.height){
      enemyBlueOne.y = canvas.height - enemyBlueOne.size;
      enemyBlueOne.yVel  = enemyBlueOne.yVel - 0.9;
    }
    if(enemyBlueOne.y - enemyBlueOne.size < 0){
      enemyBlueOne.y = 0 + enemyBlueOne.size;
      enemyBlueOne.yVel  = enemyBlueOne.yVel - 0.9;
    }
    if(enemyBlueTwo.x + enemyBlueTwo.size > canvas.width){
      enemyBlueTwo.x = canvas.width - enemyBlueTwo.size;
      enemyBlueTwo.xVel = enemyBlueTwo.xVel - 0.9;
    }
    if(enemyBlueTwo.x - enemyBlueTwo.size < 0){
      enemyBlueTwo.x = 0 + enemyBlueTwo.size;
      enemyBlueTwo.xVel = enemyBlueTwo.xVel - 0.9;
    }
    if(enemyBlueTwo.y + enemyBlueTwo.size > canvas.height){
      enemyBlueTwo.y = canvas.height - enemyBlueTwo.size;
      enemyBlueOne.yVel = enemyBlueTwo.yVel - 0.9;
    }
    if(enemyBlueTwo.y - enemyBlueTwo.size < 0){
      enemyBlueTwo.y = 0 + enemyBlueTwo.size;
      enemyBlueTwo.yVel = enemyBlueTwo.yVel - 0.9;
    }
    if(enemyBlueThree.x + enemyBlueThree.size > canvas.width){
      enemyBlueThree.x = canvas.width - enemyBlueThree.size;
      enemyBlueThree.xVel = enemyBlueThree.xVel - 0.9;
    }
    if(enemyBlueThree.x - enemyBlueThree.size < 0){
      enemyBlueThree.x = 0 + enemyBlueThree.size;
      enemyBlueThree.xVel = enemyBlueThree.xVel - 0.9;
    }
    if(enemyBlueThree.y + enemyBlueThree.size > canvas.height){
      enemyBlueThree.y = canvas.height - enemyBlueThree.size;
      enemyBlueOne.yVel = enemyBlueThree.yVel - 9;
    }
    if(enemyBlueThree.y - enemyBlueThree.size < 0){
      enemyBlueThree.y = 0 + enemyBlueThree.size;
      enemyBlueThree.yVel = enemyBlueThree.yVel - 0.9;
    }
    if(enemyBlueFour.x + enemyBlueFour.size > canvas.width){
      enemyBlueFour.x = canvas.width - enemyBlueFour.size;
      enemyBlueFour.xVel = enemyBlueFour.xVel - 9;
    }
    if(enemyBlueFour.x - enemyBlueFour.size < 0){
      enemyBlueFour.x = 0 + enemyBlueFour.size;
      enemyBlueFour.xVel = enemyBlueFour.xVel - 0.9;
    }
    if(enemyBlueFour.y + enemyBlueFour.size > canvas.height){
      enemyBlueFour.y = canvas.height - enemyBlueFour.size;
      enemyBlueOne.yVel = enemyBlueFour.yVel - 0.9;
    }
    if(enemyBlueFour.y - enemyBlueFour.size < 0){
      enemyBlueFour.y = 0 + enemyBlueFour.size;
      enemyBlueFour.yVel = enemyBlueFour.yVel - 0.9;
    }
    if(enemyRedOne.x + enemyRedOne.size > canvas.width){
      enemyRedOne.x = canvas.width - enemyRedOne.size;
      enemyRedOne.xVel = enemyRedOne.xVel - 0.9;
    }
    if(enemyRedOne.x - enemyRedOne.size < 0){
      enemyRedOne.x = 0 + enemyRedOne.size;
      enemyRedOne.xVel = enemyRedOne.xVel - 0.9;
    }
    if(enemyRedOne.y + enemyRedOne.size > canvas.height){
      enemyRedOne.y = canvas.height - enemyRedOne.size;
      enemyBlueOne.yVel = enemyRedOne.yVel - 0.9;
    }
    if(enemyRedOne.y - enemyRedOne.size < 0){
      enemyRedOne.y = 0 + enemyRedOne.size;
      enemyRedOne.yVel = enemyRedOne.yVel - 0.9;
    }
    if(enemyRedTwo.x + enemyRedTwo.size > canvas.width){
      enemyRedTwo.x = canvas.width - enemyRedTwo.size;
      enemyRedTwo.xVel = enemyRedTwo.xVel - 0.9;
    }
    if(enemyRedTwo.x - enemyRedTwo.size < 0){
      enemyRedTwo.x = 0 + enemyRedTwo.size;
      enemyRedTwo.xVel = enemyRedTwo.xVel - 0.9;
    }
    if(enemyRedTwo.y + enemyRedTwo.size > canvas.height){
      enemyRedTwo.y = canvas.height - enemyRedTwo.size;
      enemyRedTwo.yVel = enemyRedTwo.yVel + 0.9;
    }
    if(enemyRedTwo.y - enemyRedTwo.size < 0){
      enemyRedTwo.y = 0 + enemyRedTwo.size;
      enemyRedTwo.yVel = enemyRedTwo.yVel - 0.9;
    }
    if(enemyRedThree.x + enemyRedThree.size > canvas.width){
      enemyRedThree.x = canvas.width - enemyRedThree.size;
      enemyRedThree.xVel = enemyRedThree.xVel - 0.9;
    }
    if(enemyRedThree.x - enemyRedThree.size < 0){
      enemyRedThree.x = 0 + enemyRedThree.size;
      enemyRedThree.xVel = enemyRedThree.xVel - 0.9;
    }
    if(enemyRedThree.y + enemyRedThree.size > canvas.height){
      enemyRedThree.y = canvas.height - enemyRedThree.size;
      enemyRedThree.yVel = enemyRedThree.yVel - 0.9;
    }
    if(enemyRedThree.y - enemyRedThree.size < 0){
      enemyRedThree.y = 0 + enemyRedThree.size;
      enemyRedThree.yVel = enemyRedThree.yVel - 0.9;
    }
    if(enemyRedFour.x + enemyRedFour.size > canvas.width){
      enemyRedFour.x = canvas.width - enemyRedFour.size;
      enemyRedFour.xVel = enemyRedFour.xVel - 0.9;
    }
    if(enemyRedFour.x - enemyRedFour.size < 0){
      enemyRedFour.x = 0 + enemyRedFour.size;
      enemyRedFour.xVel = enemyRedFour.xVel - 0.9;
    }
    if(enemyRedFour.y + enemyRedFour.size > canvas.height){
      enemyRedFour.y = canvas.height - enemyRedFour.size;
      enemyBlueOne.yVel = enemyRedFour.yVel - 0.9;
    }
    if(enemyRedFour.y - enemyRedFour.size < 0){
      enemyRedFour.y = 0 + enemyRedFour.size;
      enemyRedFour.yVel = enemyRedFour.yVel - 0.9;
    }
  }
  
  function checkKeyboardStatus(){
    if(wDown){
      if(player1.yVel > -player1.maxSpeed){
        player1.yVel -= player1.accel;	
      } else {
        player1.yVel = -player1.maxSpeed;
      }
    } else {
      if(player1.yVel < 0){
        player1.yVel += player1.decel;
        if(player1.yVel > 0) player1.yVel = 0;	
      }
    }
    if(sDown){
      if(player1.yVel < player1.maxSpeed){
        player1.yVel += player1.accel;	
      } else {
        player1.yVel = player1.maxSpeed;
      }
    } else {
      if(player1.yVel > 0){
        player1.yVel -= player1.decel;
        if(player1.yVel < 0) player1.yVel = 0;
      }
    }
    if(aDown){
      if(player1.xVel > -player1.maxSpeed){
        player1.xVel -= player1.accel;	
      } else {
        player1.xVel = -player1.maxSpeed;
      }
    } else {
      if(player1.xVel < 0){
        player1.xVel += player1.decel;
        if(player1.xVel > 0) player1.xVel = 0;	
      }
    }
    if(dDown){
      if(player1.xVel < player1.maxSpeed){
        player1.xVel += player1.accel;	
      } else {
        player1.xVel = player1.maxSpeed;
      }
    } else {
      if(player1.xVel > 0){
        player1.xVel -= player1.decel;
        if(player1.xVel < 0) player1.xVel = 0;
      }
    }
  
    //PLAYER 2
  
    if(upDown){
      if(player2.yVel > -player2.maxSpeed){
        player2.yVel -= player2.accel;	
      } else {
        player2.yVel = -player2.maxSpeed;
      }
    } else {
      if(player2.yVel < 0){
        player2.yVel += player2.decel;
        if(player2.yVel > 0) player2.yVel = 0;	
      }
    }
    if(downDown){
      if(player2.yVel < player2.maxSpeed){
        player2.yVel += player2.accel;	
      } else {
        player2.yVel = player2.maxSpeed;
      }
    } else {
      if(player2.yVel > 0){
        player2.yVel -= player2.decel;
        if(player2.yVel < 0) player2.yVel = 0;
      }
    }
    if(leftDown){
      if(player2.xVel > -player2.maxSpeed){
        player2.xVel -= player2.accel;	
      } else {
        player2.xVel = -player2.maxSpeed;
      }
    } else {
      if(player2.xVel < 0){
        player2.xVel += player2.decel;
        if(player2.xVel > 0) player2.xVel = 0;	
      }
    }
    if(rightDown){
      if(player2.xVel < player2.maxSpeed){
        player2.xVel += player2.accel;	
      } else {
        player2.xVel = player2.maxSpeed;
      }
    } else {
      if(player2.xVel > 0){
        player2.xVel -= player2.decel;
        if(player2.xVel < 0) player2.xVel = 0;
      }
    }
  }
  
  document.onkeyup = function(e){
    if(e.keyCode === 87){
      wDown = false;
    }
    if(e.keyCode === 65){
      aDown = false;
    }
    if(e.keyCode === 68){
      dDown = false;
    }
    if(e.keyCode === 83){
      sDown = false;
    }
    if(e.keyCode === 38){
      upDown = false;
    }
    if(e.keyCode === 37){
      leftDown = false;
    }
    if(e.keyCode === 40){
      downDown = false;
    }
    if(e.keyCode === 39){
      rightDown = false;
    }
  }
  
  document.onkeydown = function(e){
    if(e.keyCode === 87){
      wDown = true;
    }
    if(e.keyCode === 65){
      aDown = true;
    }
    if(e.keyCode === 68){
      dDown = true;
    }
    if(e.keyCode === 83){
      sDown = true;
    }
    if(e.keyCode === 38){
      upDown = true;
    }
    if(e.keyCode === 37){
      leftDown = true;
    }
    if(e.keyCode === 40){
      downDown = true;
    }
    if(e.keyCode === 39){
      rightDown = true;
    }
  }
  
  function renderBall(){
    c.save();
    c.beginPath();
    c.fillStyle = "black";
    c.arc(ball.x,ball.y,ball.size,0,Math.PI*2);
    c.fill();
    c.closePath();
    c.restore();
  }
  
  function renderPlayers(){
    c.save();
    c.fillStyle = "red";
    c.beginPath();
    c.arc(player1.x,player1.y,player1.size,0,Math.PI*2);
    c.fill();
    c.closePath();
    c.beginPath();
    c.fillStyle = "blue";
    c.arc(player2.x,player2.y,player2.size,0,Math.PI*2);
    c.fill();
    c.closePath();
    c.beginPath();
    c.fillStyle = "navy";
    c.arc(enemyBlueOne.x,enemyBlueOne.y,enemyBlueOne.size,0,Math.PI*2);
    c.fill();
    c.closePath();
    c.beginPath();
    c.fillStyle = "navy";
    c.arc(enemyBlueTwo.x,enemyBlueTwo.y,enemyBlueTwo.size,0,Math.PI*2);
    c.fill();
    c.closePath();
    c.beginPath();
    c.fillStyle = "navy";
    c.arc(enemyBlueThree.x,enemyBlueThree.y,enemyBlueThree.size,0,Math.PI*2);
    c.fill();
    c.closePath();
    c.beginPath();
    c.fillStyle = "navy";
    c.arc(enemyBlueFour.x,enemyBlueFour.y,enemyBlueFour.size,0,Math.PI*2);
    c.fill();
    c.closePath();
    c.beginPath();
    c.fillStyle = "maroon";
    c.arc(enemyRedOne.x,enemyRedOne.y,enemyRedOne.size,0,Math.PI*2);
    c.fill();
    c.closePath();
    c.beginPath();
    c.fillStyle = "maroon";
    c.arc(enemyRedTwo.x,enemyRedTwo.y,enemyRedOne.size,0,Math.PI*2);
    c.fill();
    c.closePath();
    c.beginPath();
    c.fillStyle = "maroon";
    c.arc(enemyRedThree.x,enemyRedThree.y,enemyRedThree.size,0,Math.PI*2);
    c.fill();
    c.closePath();
    c.beginPath();
    c.fillStyle = "maroon";
    c.arc(enemyRedFour.x,enemyRedFour.y,enemyRedFour.size,0,Math.PI*2);
    c.fill();
    c.closePath();
    c.restore();
  }
  
  function renderGates(){
    c.save();
    c.beginPath();
    c.moveTo(0,150);
    c.lineTo(0,350);
    c.strokeStyle = "red";
    c.lineWidth = 10;
    c.stroke();
    c.closePath();
    c.beginPath();
    c.moveTo(canvas.width,150);
    c.lineTo(canvas.width,350);
    c.strokeStyle = "blue";
    c.lineWidth = 10;
    c.stroke();
    c.closePath();
    c.restore();
  }
  
  function renderBackground(){
    c.save();
    c.fillStyle = "#66aa66";
    c.fillRect(0,0,canvas.width,canvas.height);
    c.strokeStyle = "rgba(255,255,255,0.6)";
    c.beginPath();
    c.arc(canvas.width/2,canvas.height/2,150,0,Math.PI*2);
    c.closePath();
    c.lineWidth = 10;
    c.stroke();
    c.restore();
  }
  
  function clear(){
    c.clearRect(0,0,canvas.width,canvas.height);
  }