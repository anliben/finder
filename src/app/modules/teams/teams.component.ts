import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Array<any> = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    let data = localStorage.getItem('teams')
    if (typeof data === 'string') {
      this.teams = JSON.parse(data)
    } else {
      this.getTeams()
    }
  }

  getTeams() {
    this.http.get('https://www.narutodb.xyz/api/team', {

      params: {
        limit: 191
      }
    })
      .subscribe((response: any) => {
        this.teams = response.teams
        localStorage.setItem('teams', JSON.stringify(this.teams))
      })
  }
}
