'use strict';
class Employees {
	constructor(name, email, job_title) {
		this.name = name;
		this.email = email;
		this.job_title = job_title;
		this.total = 0;
	}
	signin() {
		console.log(this.email, 'sign in now!');
		return this;
	}
	signout() {
		console.log(this.email, 'im sign out!');
		return this;
	}
	updateTotal() {
		this.total++;
		console.log(this.email, 'the total is', this.total);
		return this;
	}
}

class Manager extends Employees {
	removeEmployee(emp) {
		emps = emps.filter((e) => {
			return e.name != emp.name;
		});
	}
}

// create new object
let developer = new Employees('Andre Manuel', 'andre@gmail.com', 'Developer');
let tester = new Employees('Steve Turner', 'steve25@gmail.com', 'QA Tester');
let web_design = new Employees('Tom Jackson', 'ria25@gmail.com', 'Web Design');
let marketing = new Employees('Sara Tyson', 'sara19@gmail.com', 'Marketing');
let juniorDev = new Employees(
	'James Ryan',
	'james@gmail.com',
	'Junior Developer'
);
let manager = new Manager('Smith Paul', 'paul25@gmail.com', 'Manager');

let emps = [developer, tester, web_design, marketing, juniorDev, manager];
manager.removeEmployee(developer);

console.log(emps);
//console.log(tester);

//developer.signin().updateTotal().updateTotal().signout();
//tester.signout();
