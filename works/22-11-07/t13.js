'use strict';

// 클래스 만들기
class Member {
  // 필드명 (JS에선 getters/setters를 사용할땐 필드를 생성X)
  // getter와 setter를 통해서 값의 처리떄는 필드를 선언하지 않는다.
  constructor(name,age,color) {
    this.name = name;
    this.age = age;
    this.color = color;
  } 
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  get color() {
    return this._color;
  }
  set name(name) {
    this._name = name;
  }
  set age(age) {
    this._age = (age < 1) ? age*(-1) : age; // 다항 연산자
  }
  set color(color) {
    this._color = (color == "깜정") || (color == "껌정") || (color == "블랙") || (color == "흑색") || (color == "까망") ? color="검정" : color;
  }
  // 메소드
  memberPrint() {
    console.log("성명 : " + this.name + " , 나이 : " + this.age + " , 색상 : " + this.color);
  }
}

