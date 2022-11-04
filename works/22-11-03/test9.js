'use strict';

// 오늘날짜를 전역변수로 생성...
const today = new Date();
const year = today.getFullYear();   // 연도 4자리
const month = today.getMonth() + 1;   // 월(기존월보다 1자리 작다.(0월부터 생성))
const date = today.getDate();   //일
const hour = today.getHours();  //시
const minute = today.getMinutes();  //분
const second = today.getSeconds();  //초
 //요일 : getday();
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

// 표준날짜 출력함수
let fCheck1 = () => {
  let date1 = new Date();
  console.log("date1 : " + date1);
  document.getElementById("demo").innerHTML = date1;
}

// 편집날짜 함수
let fCheck2 = () => {
  let strDate = yymmdd;
  document.getElementById("demo").innerHTML = strDate;
}

// 쉬운날짜 함수
let fCheck3 = () => {
  let str = "";
  str += year + "년 ";
  str += month + "월 ";
  str += date + "일 ";
  // 요일 : 0(일), 1(월), 2(화), 3(수), 4(목), 5(금), 6(토)
  // str += today.getDay();    //요일 : getday();
  let week = ["일","월","화","수","목","금","토"];
  str += week[today.getDay()] + "요일 ";
  str += hour + "시 "
  str += minute + "분 "
  str += second + "초"
  let strDate = str
  document.getElementById("demo").innerHTML = strDate;
}

// 시간출력 함수
let fCheck4 = () => {
  // // let strDate = today.getTime(); //24*60*60을 해서 보여준다
  // let strTime = today.getMilliseconds();
  // // strTime = (today.getMilliseconds()/1000/60) + "초"
  // strTime = (today.getMlliseconds()/1000/60) + "초";
  // let strDate = strTime;
  let startDate = today.getTime();
  let lastDate = new Date();
  let elapsedTime = lastDate.getTime() - today.getTime();
  let strDate = elapsedTime / (60*60*24*1000);
  document.getElementById("demo").innerHTML = strDate;
}

// 해당월 마지막일자 함수
let fCheck5 = () => {
  let strDate = new Date(2022,11,0); // new Date(년,월,일,시,분,초);
  strDate += "<br/>해당월의 마지막 일자는? " + strDate.getDate();
  document.getElementById("demo").innerHTML = strDate;
}
// 과제스
let fCheck6 = () => {
  let strDate = new Date(document.getElementById("year").value,document.getElementById("month").value,0); // new Date(년,월,일,시,분,초);
  let zeroDate = "\""+ strDate.getFullYear() + "년 " + (strDate.getMonth()+1) + "월 " + strDate.getDate() + "일\"이 해당월 마지막 일입니다."
  document.getElementById("demo").innerHTML = zeroDate;
}

// 선택된 년/월의 마지막 일자를 날짜 형식에 맞추서 출력(yyyy-mm-dd)
let fCheck7 = () => {
  let strDate = new Date(document.getElementById("year").value,document.getElementById("month").value,0); // new Date(년,월,일,시,분,초);
  let m = (strDate.getMonth()+1); let d = strDate.getDate();
  if((strDate.getMonth()+1)<10){
    m = "0"+m;
  }
  if(strDate.getDate()<10){
    d = "0"+d;
  }
  let zeroDate = "\""+ strDate.getFullYear() + "년 " + m + "월 " + d + "일\"이 해당월 마지막 일입니다."
  document.getElementById("demo").innerHTML = zeroDate;
}

// 선생님 방법
// 오늘날짜형식에 맞춰서 출력(yyyy-mm-dd)
/*function fCheck6() {
  let strDate = year + "-" + month + "-" + date;
  let fmtDate = strDate.split("-");
  let yy = fmtDate[0];
  let mm = ('0' + fmtDate[1]).slice(-2);    // 2월 --> 02월 : 02 --> 002
  let dd = ('0' + fmtDate[2]).slice(-2)
  strDate = yy + "-" + mm + "-" + dd;

  demo.innerHTML = strDate;
}*/

// 오늘 일자를 날짜 형식에 맞추서 출력(yyyy-mm-dd)
let fCheck8 = () => {
  let m = month; let d = date;
  if(parseInt(month)<10){
    m = "0"+m;
  }
  if(parseInt(date)<10){
    d = "0"+d;
  }
  let zeroDate = "\""+ year + "-" + m + "-" + d + "\""
  document.getElementById("demo").innerHTML = zeroDate;
}

