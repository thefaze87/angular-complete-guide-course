import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { SystemService } from "../data/system.service";

@Component({
  selector: "app-system-info",
  templateUrl: "./system-info.component.html",
  styleUrls: []
})
export class SystemInfoComponent implements OnInit {
  info: string;
  id: number;
  constructor(
    private systemService: SystemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.id = Number(params.get("id"));
          return this.systemService.getSystemInfo(this.id);
        })
      )
      .subscribe(data => {
        this.info = data;
      });
  }
}
