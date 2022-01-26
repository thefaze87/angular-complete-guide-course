import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { SystemService } from "../data/system.service";
@Component({
  selector: 'app-settings',
  template: `
    <h3>Information</h3>
    <p>{{ info }}</p>
  `,
  styles: [
  ]
})
export class SettingsComponent implements OnInit {
  info: string;
  id: number;
  constructor(
    private systemService: SystemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.parent?.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = Number(params.get('id'));
        return this.systemService.getSystemInfo(this.id);
      })
    )
    .subscribe(data => {
        this.info = data;
    });
  }

}
