import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-emailaddress',
  templateUrl: './emailaddress.component.html',
  styleUrls: ['./emailaddress.component.scss']
})
export class EmailaddressComponent implements OnInit {
  message:any;

  constructor(private acroute: ActivatedRoute, private userservice: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userservice.currentMessage.subscribe(message=> {this.message = message
  })
  }
}
