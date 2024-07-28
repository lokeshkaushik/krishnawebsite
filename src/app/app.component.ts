import { Component } from "@angular/core";
import { AnimationService } from "./shared/animation.service";
// import { ExcelService } from "./shared/excel.service";
import { NavmenuComponent } from "./navmenu/navmenu.component";
import { HomePageComponent } from "./home-page/home-page.component";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AnimationService],
  standalone:true,
  imports: [NavmenuComponent, HomePageComponent]
})
export class AppComponent {
  title = "ethiccraft";
}
