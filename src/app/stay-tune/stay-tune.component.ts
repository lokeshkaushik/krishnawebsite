import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-stay-tune',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stay-tune.component.html',
  styleUrl: './stay-tune.component.css'
})
export class StayTuneComponent implements OnInit {
  @ViewChild("f")
  signUp!: NgForm;
  constructor(private http:HttpClient) {}

  ngOnInit() {}
  onSignUp() {
    this.http.post('https://ethiccraft-41131.firebaseio.com/stayTune.json',this.signUp.value).subscribe(response =>
{
  alert(`Submitted Successfully. 
Thanks for your information !
Note this TransactionID :`+response["name"]);
});

this.signUp.reset();
  }
}
