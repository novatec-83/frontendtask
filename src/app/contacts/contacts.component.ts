import { Component,  OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactList:any;
  constructor(public userService: UserService, public router: Router) { }

  ngOnInit(): void {
    this.getContacts();
  } 

  getContacts(){
    this.userService.readAll().subscribe((data:any)=>{
      this.contactList= data;
    })
  }

  filter(data:any){
    this.userService.changeMessage(data)
  }

}
