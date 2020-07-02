'use strict';
class Employees {
	constructor(name, email, job_title) {
		this.name = name;
		this.email = email;
		this.job_title = job_title;
	}
}

// create new object
let developer = new Employees('Andre', 'andre@gmail.com', 'Developer');
let tester = new Employees('Ria Turner', 'ria25@gmail.com', 'Tester');

console.log(developer);
console.log(tester);
