import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
})
 export class UserComponent  { 
	admin: string;
	usersList: usersList[];
	newUserName: string;
	newUserPrep: boolean;
	newUserRev: boolean;

	constructor(){
		// if(localStorage.getItem('localUserList')){
		// 	this.usersList: usersList[] = localStorage.getItem('localUserList');
		// }
		this.admin = "nameOfAdmin";
		this.newUserRev=false;
		this.newUserPrep=false;
		this.usersList = [{
			//index: 0,
			userName : "Brad Pitt",
			preparer : true,
			reviewer : false
		},
		{
			//index: 0,
			userName : "Mitt Romney",
			preparer : false,
			reviewer : true
		}
		];
	}

	togglePrepStatus(arrIndex:number){
		this.usersList[arrIndex].preparer = !this.usersList[arrIndex].preparer; 
		localStorage.setItem('localUserList',this.usersList);
	}

	toggleRevStatus(arrIndex:number){
		this.usersList[arrIndex].reviewer = !this.usersList[arrIndex].reviewer;
	}

	deleteUser(arrIndex:number){
		this.usersList.splice(arrIndex,1);
	}

	togglePrep(){
		this.newUserPrep = !this.newUserPrep;
	}

	toggleRev(){
		this.newUserRev = !this.newUserRev;
	}

	submitUser(){
		this.usersList.push({
			userName: this.newUserName,
			preparer: this.newUserPrep,
			reviewer: this.newUserRev
		});
	}
 }

 export interface usersList { 	
 	//index: number;
 	userName: string;
 	preparer: boolean;
 	reviewer: boolean; 	
 }
