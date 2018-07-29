import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Token } from '../token';
import { TokenService } from '../token.service';


@Component({
  selector: 'app-token-detail',
  templateUrl: './token-detail.component.html',
  styleUrls: ['./token-detail.component.css']
})
export class TokenDetailComponent implements OnInit {
  @Input() token: Token;
  constructor(
    private route: ActivatedRoute,
    private tokenService: TokenService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getToken();
  }
  getToken(): void {
    const shortname = this.route.snapshot.paramMap.get('shortname');
    this.tokenService.getToken(shortname).subscribe(token => this.token = token);

  }

}
