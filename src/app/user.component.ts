import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<nav class="navbar navbar-default">

		  <div class="navbar-header">

		    <a class="navbar-brand" href="#">Hi Admin!</a>

		  </div>

		  <ul class="nav navbar-nav navbar-right">

		    <li class="active">
		    <li><a href="#">Log Out</a></li>

		  </ul>

		</nav> 		

		<div class="container">

		  <div class="row">

			  <div class="row">
		        <div class="col-md-6">
		          <h3>User Name</h3>
		        </div>
		        <div class="col-md-2">
		          <h3>Preparer</h3>
		        </div>
		        <div class="col-md-2">
		          <h3>Reviewer</h3>
		        </div>
		        <div class="col-md-2">
		          <h3>Delete User</h3>		          
		        </div>
		      </div>

		      <hr/>

			  <div class="row">
		        <div class="col-md-6">
		          <h3>User Name</h3>
		        </div>
		        <div class="col-md-2">
		          <a class="btn btn-primary" href="#">Enable</a>
		        </div>
		        <div class="col-md-2">
		          <a class="btn btn-primary" href="#">Enable</a>
		        </div>
		        <div class="col-md-2">
		          <a class="btn btn-primary" href="#">Delete User</a>
		        </div>
		      </div>

		      <hr/>
		</div>`,
})
 export class UserComponent  { 
// 	usersList: [];

// 	constructor(){
// 		this.usersList = [{
// 			userName : "Brad Pitt",
// 			preparer : false,
// 			reviewer : false
// 		}];
// 	}
//  }

 // interface usersList { 	
 // 	userName: string;
 // 	preparer: boolean;
 // 	reviewer: boolean; 	
 // }
}