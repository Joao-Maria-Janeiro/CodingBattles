import { Component, OnInit } from '@angular/core';

export interface Player {
  username: string;
  country: string;
  score: number;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  players: Player[] = [
    {username: 'McJaneiro', country: "EUA", score: 1765},
    {username: 'SirWilliams', country: "PERU", score: 1349},
    {username: 'Guilherme', country: "PORTUGAL", score: 800},
    {username: 'João', country: "PORTUGAL", score: 890},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
