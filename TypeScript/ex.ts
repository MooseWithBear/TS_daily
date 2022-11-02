// // type Member = [number, boolean];
// // type 이름 = [string, string]
// // let a:[string,number]=['홍',250];



// // a= ['k',1];
// // // a= [1,'k'];
// // console.log('a: ', a);

// // let 김:이름 = ['신','성'];
// // console.log('김: ', 김);


// // a[0].toUpperCase();
// // // a[1].toUpperCase();

// // let kim:Member = [123,true];
// // kim = [100, false];
// // // kim = ['홍길동', 100];


// console.log('--------------------');


// function sayHello():void {
//     console.log('helloooooo');
// }

// function sayHello2():number {
//     return 100; 
// }

// function sayHello3(a:number, b:number):number {
//     return a+b;
// }

// sayHello();
// console.log(sayHello2());
// console.log(sayHello3(100,200));


// const isGreater = (a: number, b: number): boolean => {
// 	return a > b;
// }
// console.log(isGreater(100,200));


// // let user:object{};
// console.log('---------------------');
// // let user:{name:string, age:number}//안에 객체 또한 타입을 지정해주어야 한다.

// console.log('---------------------');

// type Member = {
// 	name:string,
// 	age:number
// }
// let user:Member
// console.log('---------------------');

// user = {
// 	name:'홍길동',
// 	age: 30
// }

// console.log(user.name, user.age);




// interface User {
// 	name: string;
// 	age: number;
// }

// let user : User = {
// 	name:'홍길동',
// 	age:30
// } 
// user.age=10;
// console.log(user.name, user.age)




// interface User {
// 	name:string;
// 	age:number;
// 	gender? : string; //필수값이었지만 ?를 넣음으로써 있어도 없어도 되는 값으로 변한다.
// }

// let user : User = {
// 	name:'홍길동',
// 	age : 30,
// }

// user.age=10;
// user.gender = 'male';	
// console.log(user.name, user.age)
// console.log(user.name, user.age, user.gender)



// interface User {
// 	name:string;
// 	age:number;
// 	gender?:string;
// 	readonly birthYear : number;
// }

// let user : User = {
// 	name : '홍길동',
// 	age:30,
// 	birthYear:2000
// }

// user.age=10;
// user.gender = 'male';
// user.birthYear = 2022;
// console.log(user.name, user.age);



// type Score = 'A' | 'B' | 'C' | 'F';

// interface User {
// 	name:string;
// 	age:number;
// 	gender?:string;
// 	readonly birthYear :number;
// 	[key:number] : Score;
// }

// let user : User = {
// 	name:'홍길동',
// 	age : 30,
// 	birthYear :2000,
// 	1:'A',
// 	2:'B',
// 	3:'C',
// 	4:'K'
// }

// user.age=10;
// user.gender = 'male';
// //user.birthYear = 2022; //readonly 이기때문에 에러발생
// console.log(user.name , user.age); 


interface Add {
	(num1:number, num2:number): number;
	// (x:number, y:number): number; //도 된다
}
const add :Add =function(x,y) {
	return x+y;
}
console.log(add(10,20));

interface IsAdult {
	(age:number):boolean;
}

const kim: IsAdult = (age) => {
	return age >19;
}
console.log(kim(30));