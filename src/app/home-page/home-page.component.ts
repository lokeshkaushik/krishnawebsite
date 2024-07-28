import { Component } from '@angular/core';
import { HomeSliderComponent } from "../home-slider/home-slider.component";
import { WhyjoinComponent } from "../whyjoin/whyjoin.component";
import { LeadersComponent } from "../leaders/leaders.component";
import { UpcomingEventsComponent } from "../upcoming-events/upcoming-events.component";
import { StayTuneComponent } from "../stay-tune/stay-tune.component";
import { RecentEventsComponent } from "../recent-events/recent-events.component";
import { OurCausesComponent } from "../our-causes/our-causes.component";
import { TestinomialComponent } from "../testinomial/testinomial.component";
import { CollegesComponent } from "../colleges/colleges.component";
import { GetInTouchComponent } from "../get-in-touch/get-in-touch.component";
import { FooterComponent } from "../footer/footer.component";
// import { WhyjoinComponent_1 as WhyjoinComponent } from "../whyjoin/whyjoin.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeSliderComponent, LeadersComponent, UpcomingEventsComponent, StayTuneComponent, RecentEventsComponent, OurCausesComponent, TestinomialComponent, CollegesComponent, GetInTouchComponent, FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
  }


