import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  template: `
    <p>Account Details</p>
    <p>Account ID: {{ id }}</p>
  `,
  styles: [
  ]
})
export class AccountDetailComponent implements OnInit {

  id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = Number(this.route.snapshot.paramMap.get('id'));
    // Can also get route param subscribing to observable
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
    });
  }

}
