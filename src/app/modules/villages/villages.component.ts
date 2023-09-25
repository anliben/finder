import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villages',
  templateUrl: './villages.component.html',
  styleUrls: ['./villages.component.css']
})
export class VillagesComponent implements OnInit {
  villages: Array<any> = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    let data = localStorage.getItem('villages')
    if (typeof data === 'string') {
      this.villages = JSON.parse(data)
    } else {
      this.getVillages()
    }
  }

  getVillages() {
    this.http.get('https://www.narutodb.xyz/api/village', {

      params: {
        limit: 39
      }
    })
      .subscribe((response: any) => {
        this.villages = response.villages
        localStorage.setItem('villages', JSON.stringify(this.villages))
      })
  }
}
