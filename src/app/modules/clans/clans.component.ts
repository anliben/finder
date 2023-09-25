import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clans',
  templateUrl: './clans.component.html',
  styleUrls: ['./clans.component.css']
})
export class ClansComponent implements OnInit {

  clans: Array<any> = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    let data = localStorage.getItem('clans')
    if (typeof data === 'string') {
      this.clans = JSON.parse(data)
    } else {
      this.getClans()
    }
  }

  getClans() {
    this.http.get('https://www.narutodb.xyz/api/clan', {

      params: {
        limit: 58
      }
    })
      .subscribe((response: any) => {
        this.clans = response.clans
        localStorage.setItem('clans', JSON.stringify(this.clans))
      })
  }
}
