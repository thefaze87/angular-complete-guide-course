import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { SystemService } from "../data/system.service";
import { Item } from "../data/system";

@Component({
  selector: "app-system-items",
  templateUrl: "./system-items.component.html",
  styleUrls: []
})
export class SystemItemsComponent implements OnInit {
  items: Item[] = [];
  id: number;
  constructor(
    private systemService: SystemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.parent?.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.id = Number(params.get("id"));
          return this.systemService.getSystemItems(this.id);
        })
      )
      .subscribe(data => {
        this.items = data;
      });
  }
}
