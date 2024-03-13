import { Component, OnInit, Input } from "@angular/core";
@Component({
  selector: "app-path-card",
  templateUrl: "./path-card.component.html",
  styleUrls: ["./path-card.component.sass"],
})
export class PathCardComponent implements OnInit {
  @Input() singlePath: any = {};
  constructor() {}

  ngOnInit(): void {}
}
