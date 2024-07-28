import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.css'
})

export class UpcomingEventsComponent implements OnInit {
  images = [
    "/assets/img/upcoming/card3.1.jpg",
    "/assets/img/upcoming/pdc.jpeg",
    "/assets/img/upcoming/card4.jpeg"
  ];
  imgID: number = 0;
  disp: boolean = false;
  btnTxt: string[] = ["More", "More", "More"];
  readmore: boolean = false;
  textID: number = 0;
  constructor() {}

  ngOnInit() {}
  onClickImg(id: number) {
    this.imgID = id;
    this.disp = !this.disp;
  }
  clickReadBtn(txtID: number) {
    this.textID = txtID;
    this.readmore = !this.readmore;
    this.readmore === true
      ? (this.btnTxt[txtID] = "Less")
      : (this.btnTxt[txtID] = "More");
  }
  onclose() {
    this.disp = false;
  }
}

