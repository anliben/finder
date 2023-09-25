import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters: Array<any> = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    let data = localStorage.getItem('characters')
    if (typeof data === 'string') {
      this.characters = JSON.parse(data)
    } else {
      this.getCharacters()
    }
  }

  getCharacters() {
    this.http.get('https://www.narutodb.xyz/api/character', {

      params: {
        limit: 1431
      }
    })
      .subscribe((response: any) => {
        this.characters = response.characters
        localStorage.setItem('characters', JSON.stringify(this.characters))
      })
  }

}
