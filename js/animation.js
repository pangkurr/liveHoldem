// 게임
var reserveState = false; // 나가기 예약
var isShowDown = false; // 쇼다운됐는지

// 레이즈 애니 계산용
var callMoney = 0;
var bbMoney = 0;
var preBetMoney = 0;
var userGold = 0;

var hcardWidth = "3.6rem"; // 유저 핸디 width
var hcardHeight = "4.5rem"; // 유저 핸디 height

//테이블 카드
var tcardWidth = '4.2rem'; // 테이블 카드 
var tcardHeight = '6rem'; // 테이블 카드 
var tcardTop = '40%'; // 테이블 카드
var tcardLeft = ["32.6%","41.2%","49.9%","58.5%","67.1%"];// 테이블카드 
//시작 카드 뿌리기
var scardWidth = '3.6rem';
var scardHeight = '4.5rem';
var myStartTop =  ["-12.5%","5.5%","42.5%","82.5%","94.2%","82.5%","42.5%","5.5%","-12.5%"]; //카드 top (딜러쪽 카드 기준) 내 시작 핸드 카드 top 위치
var myStartLeft = ["13.52%","-2.45%","-6.45%","3.55%","46.55%","89.75%","99.72%","95.7%","79.8%"]; //카드 left (딜러쪽 카드 기준)
var twoCardGap = 6.78; //givetwocard() pc용 ,mobile용

//chip 유저->딜러쪽
var chipLeft = ["525%","700%","750%","585%","20%","-546%","-714%","-635%","-433%"];
var chipBottom =["-685%","-525%","-120%","415%","310%","415%","-120%","-525%","-685%"];

//chip 딜러->유저쪽
//var wCoinLeft =["-550%","-700%","-800%","-600%","25%","700%","800%","725%","525%"]; //chip만
//var wCoinBottom =["750%","575%","75%","-400%","-425%","-425%","75%","575%","800%"];//chip만

var wCoinLeft =["24%","14%","12%","20%","50%","80%","88%","87%","76%"]; //box채로
var wCoinTop =["17%","29%","50%","80%","77%","80%","50%","29%","17%"];//box채로
//coinstack
var stackLeft = ["0%", "50%"];

$(document).ready(function(){
	if($(document).width() > 1024){ // pc
		hcardWidth = "3.6rem"; // 유저 핸디 width
		hcardHeight = "4.5rem"; // 유저 핸디 height
		
		tcardWidth = '4.2rem'; // 테이블 카드 
		tcardHeight = '6rem'; // 테이블 카드 
		tcardTop = '40%'; // 테이블 카드
		tcardLeft = ["32.6%","41.2%","49.9%","58.5%","67.1%"];// 테이블카드 
		
		scardWidth = '3.6rem';
		scardHeight = '4.5rem';
		
		myStartTop =  ["-12.5%","5.5%","42.5%","82.5%","94.2%","82.5%","42.5%","5.5%","-12.5%"]; //카드 top (딜러쪽 카드 기준) 내 시작 핸드 카드 top 위치
		myStartLeft = ["13.52%","-2.45%","-6.45%","3.55%","46.55%","89.75%","99.72%","95.7%","79.8%"]; //카드 left (딜러쪽 카드 기준)
		
		twoCardGap = 6.78; //givetwocard() pc용 ,mobile용
		
		chipLeft = ["525%","700%","750%","585%","20%","-546%","-714%","-635%","-433%"];
		chipBottom =["-685%","-525%","-120%","415%","310%","415%","-120%","-525%","-685%"];
	}else{//모바일 가로
		 hcardWidth = "4.5vw"; //유저 핸디 width
		 hcardHeight = "6.5vw"; //유저 핸디 height
		 
		 tcardWidth = '8.4vw'; // 테이블 카드 
		 tcardHeight = '12vw'; // 테이블 카드 
		 tcardTop = '42%'; // 테이블 카드
		 tcardLeft = ["31.15%","40.6%","50.2%","59.7%","69.3%"];// 테이블카드 
		 
		 scardWidth = '4.5vw';
		 scardHeight = '6.5vw';
		 
		 myStartTop =  ["-16.6%","3.8%","40.5%","80.5%","93.6%","80.5%","40.5%","3.8%","-16.6%"]; //카드 top (딜러쪽 카드 기준) 내 시작 핸드 카드 top 위치
		 myStartLeft = ["14.8%","-1.2%","-5.2%","4.9%","47.9%","90.2%","100.3%","96.25%","80.3%"]; //카드 left (딜러쪽 카드 기준)
		 
		 twoCardGap = 4.8;
		 
		//chip 유저->딜러쪽
		 chipLeft = ["510%","680%","730%","565%","15%","-519%","-714%","-685%","-410%"];
		 chipBottom =["-720%","-550%","-130%","415%","335%","415%","-130%","-550%","-720%"];
		 
		//chip 딜러->유저쪽
		 //wCoinLeft =["-300%","-400%","-475%","-375%","30%","425%","525%","475%","325%"];
		 //wCoinBottom =["800%","600%","-150%","-450%","-400%","-450%","150%","600%","800%"];
		 
	}
});

window.addEventListener("resize",function(){
	if($(document).width() > 1024){ // pc
		hcardWidth = "3.6rem"; // 유저 핸디 width
		hcardHeight = "4.5rem"; // 유저 핸디 height
		
		tcardWidth = '4.2rem'; // 테이블 카드 
		tcardHeight = '6rem'; // 테이블 카드 
		tcardTop = '40%'; // 테이블 카드
		tcardLeft = ["32.6%","41.2%","49.9%","58.5%","67.1%"];// 테이블카드 
		
		scardWidth = '3.6rem';
		scardHeight = '4.5rem';
		
		myStartTop =  ["-12.5%","5.5%","42.5%","82.5%","94.2%","82.5%","42.5%","5.5%","-12.5%"]; //카드 top (딜러쪽 카드 기준) 내 시작 핸드 카드 top 위치
		myStartLeft = ["13.52%","-2.45%","-6.45%","3.55%","46.55%","89.75%","99.72%","95.7%","79.8%"]; //카드 left (딜러쪽 카드 기준)
		
		twoCardGap = 6.78; //givetwocard() pc용 ,mobile용
		
		chipLeft = ["525%","700%","750%","585%","20%","-546%","-714%","-635%","-433%"];
		chipBottom =["-685%","-525%","-120%","415%","310%","415%","-120%","-525%","-685%"];
	}else{//모바일 가로
		 hcardWidth = "4.5vw"; //유저 핸디 width
		 hcardHeight = "6.5vw"; //유저 핸디 height
		 
		 tcardWidth = '8.4vw'; // 테이블 카드 
		 tcardHeight = '12vw'; // 테이블 카드 
		 tcardTop = '42%'; // 테이블 카드
		 tcardLeft = ["31.15%","40.6%","50.2%","59.7%","69.3%"];// 테이블카드 
		 
		 scardWidth = '4.5vw';
		 scardHeight = '6.5vw';
		 
		 myStartTop =  ["-16.6%","3.8%","40.5%","80.5%","93.6%","80.5%","40.5%","3.8%","-16.6%"]; //카드 top (딜러쪽 카드 기준) 내 시작 핸드 카드 top 위치
		 myStartLeft = ["14.8%","-1.2%","-5.2%","4.9%","47.9%","90.2%","100.3%","96.25%","80.3%"]; //카드 left (딜러쪽 카드 기준)
		 
		 twoCardGap = 4.8;
		 
		//chip 유저->딜러쪽
		 chipLeft = ["510%","680%","730%","565%","15%","-519%","-714%","-685%","-410%"];
		 chipBottom =["-720%","-550%","-130%","415%","335%","415%","-130%","-550%","-720%"];
		 
		//chip 딜러->유저쪽
		 //wCoinLeft =["-300%","-400%","-475%","-375%","30%","425%","525%","475%","325%"];
		 //wCoinBottom =["800%","600%","-150%","-450%","-400%","-450%","150%","600%","800%"];
	};
});


function startGameSetting(){
	
	//게임결과 지우기
	$(".d,.sb,.bb,.chip,.chipamount,.betmoneybox,.sidepotbox.totalmoney,.gameresult,.actionbubblebox,.cardbubblebox,.timebank,.jokbo").css({display:"none"});
	$(".gameframe").find(".effect").removeClass("effect");
	$(".userbox").removeClass("die");
	//카드관련 초기화
	$(".cardbox").css({bottom:"0%",display:"none"});
	$(".card").css({left:"0%",bottom:"0%",rotate:"0deg"});
	
	$(".tablecardbox").css("display","block");
	$(".tablecard").css({display:"none",bottom:"0%"});
	$(".tablecard").attr("src","../images/back.png");
	
	for(var i=0; i<5; i++)
		$(".tablecard").eq(i).attr("src", "../images/back.png");
	$(".card").attr("src", "../images/back.png").css('display','none');
	
	$(".betmoneybox").css({top:"58%",left:"50%"});
	
	//let dSeat = findClientSeat(parseInt(obj.dealer));
	//let sbSeat = findClientSeat(parseInt(obj.sb));
	//let bbSeat = findClientSeat(parseInt(obj.bb));
	let dSeat = 4;
	let sbSeat = 3;
	let bbSeat = 2;
	$(".userbox:eq("+dSeat+")").find(".d").css("display","flex");
	$(".userbox:eq("+sbSeat+")").find(".sb").css("display","flex");
	$(".userbox:eq("+bbSeat+")").find(".bb").css("display","flex");
	
	$(".totalmoney").css({display:"flex"});
}
function deleteGameSetting(){
	setTimeout(function(){
		//게임결과 지우기
		$(
      ".d,.sb,.bb,.chip,.chipamount,.betmoneybox,.sidepotbox,.totalmoney,.gameresult,.actionbubblebox,.cardbubblebox,.timebank,.jokbo"
    ).css({ display: "none" });
		$(".gameframe").find(".effect").removeClass("effect");
		$(".userbox").removeClass("die");
		//카드관련 초기화
		$(".cardbox").css({bottom:"0%",display:"none"});
		$(".card").css({left:"0%",rotate:"0deg"});
		
		$(".tablecardbox").css("display","none");
		$(".tablecard").css({display:"none"});
		$(".tablecard").attr("src","../images/back.png");
		
		for(var i=0; i<5; i++)
			$(".tablecard").eq(i).attr("src", "../images/back.png");
		$(".card").attr("src", "../images/back.png").css('display','none');
		
		$(".betmoneybox").css({top:"58%",left:"50%"});
	},2000)
}
//타이머
var timerProgress; //timer 상태 저장 변수
function userTimer(num) {
	$(".timebank").css("display","block");
	const userbox = document.querySelectorAll(".userbox");
	userbox.forEach(function() {
	    clearInterval(timerProgress);
	    $(this).find('.timerprofile').css('background', 'transparent');
	});
    var timerProfile = userbox[num].querySelector('.timerprofile'); //background 입힐 곳
    var sValue = 0; // 회전 시작 값
    var dValue = 360; // 회전 끝 값
    var speed = 41.6; // 회전 속도  , 1초=1000 ,진행시간/dValue, 15초(15000)/360 = 41.6 

    // 이전 타이머 중지 및 초기화
    if (timerProfile.hasAttribute('data-timer-id')) { //현재 있는 data-timer-id 속성이 있는지 판별
        clearInterval(timerProfile.getAttribute('data-timer-id')); //timerProgress값 초기화
        timerProfile.removeAttribute('data-timer-id'); //데이터 값 있으면 제거
        timerProfile.style.background = 'transparent'; //진행중인 timerProfile 배경색을 투명색으로 감추기.
    }

    timerProgress = setInterval(() => {
        sValue++; // 3.6 곱하기 sValue 값 = 0도부터 360도
		timerProfile.style.background = 'conic-gradient(hsl(' + sValue + ', 100%, 50%) ' + sValue + 'deg, #fff3f3 0deg)';


        if (sValue == dValue) { //3.6도 ~ 360도가 완료되면 제거
            clearInterval(timerProgress);
            clearInterval(timerProfile.getAttribute('data-timer-id')); //timerProgress값 초기화
            timerProfile.removeAttribute('data-timer-id'); //데이터 값 있으면 제거
            timerProfile.style.background = 'transparent'; //진행중인 timerProfile 배경색을 투명색으로 감추기.
        }
    }, speed);

    // 현재 타이머 ID를 데이터 속성에 저장
    timerProfile.setAttribute('data-timer-id', timerProgress);
}
function giveTwoCard(){
	$(".card").css({position:"relative"});
	let delay = 0;//지연시간
	for(var i=0; i<9;i++){
		let cSeat = i;
		let card1 = $(".dcard").not(".scard").clone().addClass("scard").css("display","block").appendTo(".tablewrap");
		let card2 = $(".dcard").not(".scard").clone().addClass("scard").css("display","block").appendTo(".tablewrap");;
		switch(cSeat){
		case 0:
			card1.delay(delay+=100).animate({width : scardWidth, height : scardHeight,top : myStartTop[0], left:(parseFloat(myStartLeft[0])+0*twoCardGap)+"%"},350,function(){
				card2.animate({width : scardWidth, height : scardHeight,top : myStartTop[0], left:(parseFloat(myStartLeft[0])+1*twoCardGap)+"%"},350,function(){
					card1.remove();
					card2.remove();
					$(".userbox:eq("+cSeat+")").find(".cardbox,.card").css({display:"flex"});
					$(".userbox:eq("+cSeat+")").find(".cardbox").animate({bottom:"-20%"},300);
					$(".userbox:eq("+cSeat+")").find(".card:eq(0)").animate({left:"10%",rotate:"-10deg"},300);
					$(".userbox:eq("+cSeat+")").find(".card:eq(1)").animate({left:"-10%",rotate:"5deg"},300);
				});
			});
			break;
		case 1:
			card1.delay(delay+=100).animate({width : scardWidth, height : scardHeight,top : myStartTop[1], left:(parseFloat(myStartLeft[1])+0*twoCardGap)+"%"},350,function(){
				card2.animate({width : scardWidth, height : scardHeight,top : myStartTop[1], left:(parseFloat(myStartLeft[1])+1*twoCardGap)+"%"},350,function(){
					card1.remove()
					card2.remove()
					$(".userbox:eq("+cSeat+")").find(".cardbox,.card").css({display:"flex"});
					$(".userbox:eq("+cSeat+")").find(".cardbox").animate({bottom:"-20%"},300)
					$(".userbox:eq("+cSeat+")").find(".card:eq(0)").animate({left:"10%",rotate:"-10deg"},300);
					$(".userbox:eq("+cSeat+")").find(".card:eq(1)").animate({left:"-10%",rotate:"5deg"},300);
				});
			});
			break;
		case 2:
			card1.delay(delay+=100).animate({width : scardWidth, height : scardHeight,top : myStartTop[2], left:(parseFloat(myStartLeft[2])+0*twoCardGap)+"%"},350,function(){
				card2.animate({width : scardWidth, height : scardHeight,top : myStartTop[2], left:(parseFloat(myStartLeft[2])+1*twoCardGap)+"%"},350,function(){
					card1.remove()
					card2.remove()
					$(".userbox:eq("+cSeat+")").find(".cardbox,.card").css({display:"flex"});
					$(".userbox:eq("+cSeat+")").find(".cardbox").animate({bottom:"-20%"},300)
					$(".userbox:eq("+cSeat+")").find(".card:eq(0)").animate({left:"10%",rotate:"-10deg"},300);
					$(".userbox:eq("+cSeat+")").find(".card:eq(1)").animate({left:"-10%",rotate:"5deg"},300);
				});
			});
			break;
		case 3:
			card1.delay(delay+=100).animate({width : scardWidth, height : scardHeight,top : myStartTop[3], left:(parseFloat(myStartLeft[3])+0*twoCardGap)+"%"},350,function(){
				card2.animate({width : scardWidth, height : scardHeight,top : myStartTop[3], left:(parseFloat(myStartLeft[3])+1*twoCardGap)+"%"},350,function(){
					card1.remove()
					card2.remove()
					$(".userbox:eq("+cSeat+")").find(".cardbox,.card").css({display:"flex"});
					$(".userbox:eq("+cSeat+")").find(".cardbox").animate({bottom:"-20%"},300)
					$(".userbox:eq("+cSeat+")").find(".card:eq(0)").animate({left:"10%",rotate:"-10deg"},300);
					$(".userbox:eq("+cSeat+")").find(".card:eq(1)").animate({left:"-10%",rotate:"5deg"},300);
				});
			});
			break;
		case 4://나
			card1.delay(delay+=100).animate({width : scardWidth, height : scardHeight,top : myStartTop[4], left:(parseFloat(myStartLeft[4])+0*twoCardGap)+"%"},350,function(){
				card2.animate({width : scardWidth, height : scardHeight,top : myStartTop[4], left:(parseFloat(myStartLeft[4])+1*twoCardGap)+"%"},350,function(){
					card1.remove()
					card2.remove()
					$(".userbox:eq("+cSeat+")").find(".cardbox,.card").css({display:"flex"});
					$(".userbox:eq("+cSeat+")").find(".cardbox").animate({bottom:"-20%"},300)
					$(".userbox:eq("+cSeat+")").find(".card:eq(0)").animate({left:"10%",rotate:"-10deg"},300);
					$(".userbox:eq("+cSeat+")").find(".card:eq(1)").animate({left:"-10%",rotate:"5deg"},300);
				});
			});
			break;
		case 5:
			card1.delay(delay+=100).animate({width : scardWidth, height : scardHeight,top : myStartTop[5], left:(parseFloat(myStartLeft[5])+0*twoCardGap)+"%"},350,function(){
				card2.animate({width : scardWidth, height : scardHeight,top : myStartTop[5], left:(parseFloat(myStartLeft[5])+1*twoCardGap)+"%"},350,function(){
					card1.remove()
					card2.remove()
					$(".userbox:eq("+cSeat+")").find(".cardbox,.card").css({display:"flex"});
					$(".userbox:eq("+cSeat+")").find(".cardbox").animate({bottom:"-20%"},300)
					$(".userbox:eq("+cSeat+")").find(".card:eq(0)").animate({left:"10%",rotate:"-10deg"},300);
					$(".userbox:eq("+cSeat+")").find(".card:eq(1)").animate({left:"-10%",rotate:"5deg"},300);
				});
			});
			break;
		case 6:
			card1.delay(delay+=100).animate({width : scardWidth, height : scardHeight,top : myStartTop[6], left:(parseFloat(myStartLeft[6])+0*twoCardGap)+"%"},350,function(){
				card2.animate({width : scardWidth, height : scardHeight,top : myStartTop[6], left:(parseFloat(myStartLeft[6])+1*twoCardGap)+"%"},350,function(){
					card1.remove()
					card2.remove()
					$(".userbox:eq("+cSeat+")").find(".cardbox,.card").css({display:"flex"});
					$(".userbox:eq("+cSeat+")").find(".cardbox").animate({bottom:"-20%"},300)
					$(".userbox:eq("+cSeat+")").find(".card:eq(0)").animate({left:"10%",rotate:"-10deg"},300);
					$(".userbox:eq("+cSeat+")").find(".card:eq(1)").animate({left:"-10%",rotate:"5deg"},300);
				});
			});
			break;
		case 7:
			card1.delay(delay+=100).animate({width : scardWidth, height : scardHeight,top : myStartTop[7], left:(parseFloat(myStartLeft[7])+0*twoCardGap)+"%"},350,function(){
				card2.animate({width : scardWidth, height : scardHeight,top : myStartTop[7], left:(parseFloat(myStartLeft[7])+1*twoCardGap)+"%"},350,function(){
					card1.remove()
					card2.remove()
					$(".userbox:eq("+cSeat+")").find(".cardbox,.card").css({display:"flex"});
					$(".userbox:eq("+cSeat+")").find(".cardbox").animate({bottom:"-20%"},300)
					$(".userbox:eq("+cSeat+")").find(".card:eq(0)").animate({left:"10%",rotate:"-10deg"},300);
					$(".userbox:eq("+cSeat+")").find(".card:eq(1)").animate({left:"-10%",rotate:"5deg"},300);
				});
			});
			break;
		case 8:
			card1.delay(delay+=100).animate({width : scardWidth, height : scardHeight,top : myStartTop[8], left:(parseFloat(myStartLeft[8])+0*twoCardGap)+"%"},350,function(){
				card2.animate({width : scardWidth, height : scardHeight,top : myStartTop[8], left:(parseFloat(myStartLeft[8])+1*twoCardGap)+"%"},350,function(){
					card1.remove()
					card2.remove()
					$(".userbox:eq("+cSeat+")").find(".cardbox,.card").css({display:"flex"});
					$(".userbox:eq("+cSeat+")").find(".cardbox").animate({bottom:"-20%"},300)
					$(".userbox:eq("+cSeat+")").find(".card:eq(0)").animate({left:"10%",rotate:"-10deg"},300);
					$(".userbox:eq("+cSeat+")").find(".card:eq(1)").animate({left:"-10%",rotate:"5deg"},300);
				});
			});
			break;
		}
	}
}
function theFlop(){
	$(".actionbubblebox").css("display","none");
	$(".userbox").each(function(){
		clearInterval(timerProgress); //진행중인 유저 타이머 멈추기
		$(this).find(".timerprofile").css("background","transparent");
	})
	setTimeout(function(){
		tableCardAni(0 , "clover01");
		tableCardAni(1 , "clover01");
		tableCardAni(2 , "clover01");
	},450)
}

function theTurn(){
	$(".actionbubblebox").css("display","none");
	clearInterval(timerProgress); //진행중인 유저 타이머 멈추기
	setTimeout(function(){tableCardAni(3 , "clover01")},450);
}

function theRiver(){
	$(".actionbubblebox").css("display","none");
	clearInterval(timerProgress); //진행중인 유저 타이머 멈추기
	setTimeout(function(){tableCardAni(4 , "clover01")},350);
}
function tcardAni(){//flop
	for(var i=0; i<3; i++){
		let dcard = $(".dcard").not(".tcard").clone();
		dcard.addClass("tcard");
		$(".tablewrap").append(dcard);
		switch(i){
		case 0:
			dcard.attr("src","../images/back.png").css({display:"flex",width:tcardWidth,height:tcardHeight,opacity:"0.4",top:parseInt(tcardTop)-10+"%",left:tcardLeft[0]}).animate({top:tcardTop,opacity:"1"},350,function(){
				$(".tablecard:eq(0)").css("display","flex");
			});
			break;
		case 1:
			dcard.attr("src","../images/back.png").css({display:"flex",width:tcardWidth,height:tcardHeight,opacity:"0.4",top:parseInt(tcardTop)-10+"%",left:tcardLeft[1]}).delay(70).animate({top:tcardTop,opacity:"1"},350,function(){
				$(".tablecard:eq(1)").css("display","flex");
			});
			break;
		case 2:
			dcard.attr("src","../images/back.png").css({display:"flex",width:tcardWidth,height:tcardHeight,opacity:"0.4",top:parseInt(tcardTop)-10+"%",left:tcardLeft[2]}).delay(140).animate({top:tcardTop,opacity:"1"},350,function(){
				$(".tablecard:eq(2)").css("display","flex");
				$(".dcard.tcard").remove();
			});
			break;
		}
	}
}
function tcardAni2(man){//0:turn , 1:river
	let dcard = $(".dcard").not(".tcard").clone();
	dcard.addClass("tcard");
	$(".tablewrap").append(tcard);
	switch(man){
	case 0://turn
		dcard.attr("src","../images/back.png").css({display:"flex",width:tcardWidth,height:tcardHeight,opacity:"0.4",top:parseInt(tcardTop)-10+"%",left:tcardLeft[3]}).animate({top:tcardTop,opacity:"1"},350,function(){
			$(".tablecard:eq(3)").css("display","flex");
			dcard.remove();
		});
		break;
	case 1://river
		dcard.attr("src","../images/back.png").css({display:"flex",width:tcardWidth,height:tcardHeight,opacity:"0.4",top:parseInt(tcardTop)-10+"%",left:tcardLeft[4]}).animate({top:tcardTop,opacity:"1"},350,function(){
			$(".tablecard:eq(4)").css("display","flex");
			dcard.remove();
		});
		break;
	}
}

function tableCardAni(man, card) { // 테이블 카드 뒤집는 애니
    var tableCardBox = document.querySelector('.tablecardbox');
    var tableCards = tableCardBox.querySelectorAll('.tablecard');
    var tCard = tableCards[man]; // 테이블카드 위치
    var startTime; //애니 진행하기 위한 변수 (무시)
	var duration = 600; //진행속도
    function animate(currentTime) {
        if (!startTime) {
            startTime = currentTime;
        }
        var progress = currentTime - startTime; // 진행도 파악
        tCard.style.width = tcardWidth; //없어도 됨 
        tCard.style.height = tcardHeight; //없어도 됨
        tCard.style.display = "block";
        if (progress < duration) {
        	var rotationProgress = progress / duration;
            var rotateXValue, rotateYValue;

            if (rotationProgress <= 0.5) { //0~50% 진행도
                rotateXValue = -Math.abs(rotationProgress * 40); //-20deg ~0deg
				rotateYValue = rotationProgress * 180; // 0~90deg
            }else{//50.1%~100% 진행도
            	tCard.src = '../images/' + card + '.png'; //이미지 변경후 돌리기
				rotateXValue = (40 - 40 * rotationProgress); //20deg ~ 0deg
				rotateYValue = 180 - rotationProgress * 180; // 90deg ~ 0deg
			}
            tCard.style.transform = 'rotateX(' + rotateXValue + 'deg) rotateY(' + rotateYValue + 'deg)';
            requestAnimationFrame(animate);
        }else {
        	//종료시 상황
            tCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
        }
    }
    requestAnimationFrame(animate);
}

function userHcard(man , c1, c2){ //게임 결과 띄울때
	man = Number(man);
	$(".userbox:eq("+man+")").find(".cardbox").animate({bottom:"0%"},200,"linear");
	$(".userbox:eq("+man+")").find(".card:eq(0)").animate({rotate:"0deg",left:"0%"},200,"linear");
	$(".userbox:eq("+man+")").find(".card:eq(1)").animate({rotate:"0deg",left:"0%"},200,"linear",function(){
		$(".userbox:eq("+man+")").find(".card:eq(0)").animate({width:0},150,function(){
			$(this).attr("src","../images/"+c1+".png").animate({width:hcardWidth},150,function(){
				$(".userbox:eq("+man+")").find(".card:eq(1)").animate({width:0},150,function(){
					$(this).attr("src","../images/"+c2+".png").animate({width:hcardWidth},150);
				})
			});
		})
	});
}

function userHcard2(man,c1,c2){ // 내 핸디 카드만 돌릴때
	man = Number(man);
	$(".userbox:eq("+man+")").find(".card:eq(0)").animate({width:0},120,"linear",function(){
		$(this).attr("src","../images/"+c1+".png").animate({width:hcardWidth},300,"linear",function(){
			$(".userbox:eq("+man+")").find(".card:eq(1)").animate({width:0},120,"linear",function(){
				$(this).attr("src","../images/"+c2+".png").animate({width:hcardWidth},300,"linear");
			})
		})
	})
}

function startCoin(man){
	$(".userbox:eq("+man+")").find(".chipamount").css("display","flex");
	for(var i=0;i<3; i++){
		let obj = $(".userbox:eq("+man+")").find(".chip").not(".scoin").clone();
		obj.addClass("scoin");
		$(".userbox:eq("+man+")").find(".chipbox").append(obj);
		obj.delay(90*i).css("display","block").animate({bottom:12+(12*i)+"%"},90);
	}
}
function tStartCoin(man){
	$(".userbox:eq("+man+")").find(".chipamount").css("display","none");
	$(".userbox:eq("+man+")").find(".chip.scoin").animate({bottom:chipBottom[man],left:chipLeft[man]},300,"linear",function(){
		$(".userbox:eq("+man+")").find(".chip.scoin").remove();
	})
}
function betCoinStack(cnum,man,num){//cnum = obj.gubetMoney , num = obj.clientBbMoney
	cnum = Number(cnum);//베팅값
	man = Number(man); //cSeat
	num = Number(num); //bbMoney 값
	// 칩 쌓을 개수 계산
	var numCoins = Math.floor(cnum / num);
	
	// 칩 최대 개수 설정
	const MAX_COIN_STACK = 12;
	numCoins = Math.min(numCoins, MAX_COIN_STACK);
	
	// 칩 쌓기
	for (var i = 0; i < numCoins; i++) {
		let obj = $(".userbox:eq("+man+")").find(".chip").not(".scoin, ._2, .tcoin").clone();
		obj.addClass("scoin");
		$(".userbox:eq("+man+")").find(".chipbox").append(obj);
		if(i<=6){
			obj.delay(90*i).css({left:stackLeft[0],display:"flex"}).animate({bottom:(0+(12*i)+"%")},70);
		}else{
			let num = i-7;
			obj.delay(90*num).css({left:stackLeft[2],display:"flex"}).animate({bottom:(0+(12*num)+"%")},70);
		}
	}
	
	//$(".userbox:eq("+man+")").find(".chipamount").text(""); //금액상자
}
function totalCoinStack(test){ //테이블 중앙 코인 탑쌓기 , 메인팟 : m , 사이드팟 :s
	$(".tcoin").remove(); //갱신하기 위해 기존 코인 삭제
	var numCoins;
	const MAX_COIN = 10;//코인 최대개수값
	numCoins = (test == 0) ? 4 : MAX_COIN;

	$(".betmoneybox").css("display","flex"); // var betBox = 매배개수 == m? $(".betmoneybox") : $(".sidepotbox")
	for(var i=0; i<numCoins;i++){
		let obj =$(".betchipbox").find(".chip").not(".tcoin,.scoin").clone();
		obj.addClass("tcoin");
		$(".betchipbox").append(obj);

		if(i<=5){
			if(numCoins<=5){//가운데 배치
				obj.delay(90*i).css({display:"flex"}).animate({bottom:(0+(12*i)+"%")},70);
			}else{ // stackLeft[0] = 2줄 배치 첫번째줄
				obj.delay(90*i).css({left:stackLeft[0],display:"flex"}).animate({bottom:(0+(12*i)+"%")},70);
			}
		}else{//stackLeft[1] = 2줄 배치 두번째줄
			let num = i-6;
			obj.delay(90*i).css({left:stackLeft[1],display:"flex"}).animate({bottom:(0+(12*num)+"%")},70);
		}
	}
}

function winCoinAni(man){//동시 승자가 있다면 위 주석을 사용해주세요
	/*let obj = $(".betchipbox").find(".tcoin");
	obj.animate({bottom:wCoinBottom[man],left:wCoinLeft[man]},300,function(){
		$(this).remove();
	})*/
	
	let obj = $(".betmoneybox");
	obj.animate({top:wCoinTop[man],left:wCoinLeft[man]},300,function(){
		$(this).css("display","none");
	})
};

function showHighlight(){ //animate bottom 퍼센트 주기, 테이블 :20%, 유저카드:25%
	/*for(var i=0; i<list.length;i++){
		//테이블 카드 하이라이트 애니
		let tbCard = $('.tablecard');
		if($(tbCard).eq(k).attr("src").split('\/')[4].split('.')[0] == list[i]){
			$(tbCard).eq(k).delay(900).addClass('effect').animate({bottom:"20%"},200);
		}
		
		// 이긴사람 하이라이트
		let userCard = $(".card");
		for(var k=0; k<userCard.length; k++){
			if($(userCard).eq(k).attr("src").split('\/')[4].split('.')[0] == list[i]){
				$(userCard).eq(k).delay(1000).addClass('effect').animate({bottom:"25%"},200);;
			}
		}
	}*/
	
	//테이블 카드 하이라이트 애니
	let tbCard = $('.tablecard');
	for(var i=0; i<3;i++){
		$(tbCard).eq(i).delay(400).addClass('effect').animate({bottom:"20%"},200);
	}
	
	// 이긴사람 하이라이트
	let userCard = $(".card");
	for(var k=0; k<4;k++){
		$(userCard).eq(k).delay(600).addClass('effect').animate({bottom:"25%"},200);;
	}
	$(".userbox:eq(0)").find(".gameresult").css("display","block");
	$(".userbox:eq(1)").find(".gameresult").css("display","block");
}
function test(){
	deleteGameSetting();
	setTimeout(startGameSetting,2000);
	setTimeout(function(){startCoin(3)},2500);
	setTimeout(function(){startCoin(2)},2600);
	setTimeout(function(){tStartCoin(3);tStartCoin(2);},3000);
	setTimeout(function(){totalCoinStack(0)},3500);
	setTimeout(giveTwoCard,4000);
	setTimeout(function(){userHcard2(4,"clover01","clover01")},6000);
	setTimeout(function(){userTimer(4)},6500);
	setTimeout(theFlop,8500);
	setTimeout(theTurn,9000);
	setTimeout(theRiver,10000);
	setTimeout(function(){userHcard(0,"clover01","clover01")},11000);
	setTimeout(function(){userHcard(1,"clover01","clover01")},11000);
	setTimeout(function(){userHcard(5,"clover01","clover01")},11000);
	setTimeout(showHighlight,12000);
	setTimeout(function(){winCoinAni(0);},13000);
	setTimeout(deleteGameSetting,14000);
}

const aniBtn = document.querySelector(".animation");
aniBtn.addEventListener("click", test);
