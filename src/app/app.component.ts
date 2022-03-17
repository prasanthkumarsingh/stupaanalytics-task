import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  players:any;
  playerList:any;
  QFNL: any;
  SFNL: any;
  FNL: any;
  finalWinner: any;
  constructor(){

  }


  ngOnInit(){

// Util function


const noOfPlayers = 16;
 this.playerList = [];
// List of Players
for (let i = 1; i <= noOfPlayers; i++) {
  this.playerList.push(`PLAYER ${i}`);
}

console.log('~~Welcome to U10 CUP 2008~~');
console.log("All Players ::", JSON.stringify(this.playerList, null, '\t'))
const round1 = [];
const quarterFinalGames = [];
let qFGIdx = 0;

const quarterFinals = [];

const semiFinalGames = [];
let sFGIdx = 0;

const semiFinals = [];

const finalGames = [];
let fGIdx = 0;

const finals = [];

let finalWinner = '';
for (let eachPlayer = 0; eachPlayer < this.playerList.length / 2; eachPlayer++) {
  const slicePlayers = this.playerList.slice(eachPlayer * 2, eachPlayer * 2 + 2);
  round1[eachPlayer] = slicePlayers;
  quarterFinalGames[qFGIdx] = slicePlayers[this.randomWinner(0, 1)];
  // quarterFinalGamesIdx Increment
  qFGIdx += 1;
  if (qFGIdx === this.playerList.length / 2) {
      console.log('Quarter Final Players:: ', JSON.stringify(quarterFinalGames, null, '\t'));
      this.QFNL = quarterFinalGames;
    for (let eachQFGPlayer = 0; eachQFGPlayer < quarterFinalGames.length / 2; eachQFGPlayer++) {
      const sliceQFGPlayers = quarterFinalGames.slice(eachQFGPlayer * 2, eachQFGPlayer * 2 + 2);
      quarterFinals[eachQFGPlayer] = sliceQFGPlayers;
      semiFinalGames[sFGIdx] = sliceQFGPlayers[this.randomWinner(0, 1)];
      // SemiFinalGamesIdx increment
      sFGIdx += 1;
      if (sFGIdx === this.playerList.length / 4) {
          console.log('Quarter Final Match List:: ', JSON.stringify(quarterFinals, null, '\t'));

           console.log('Semi Final Players:: ', JSON.stringify(semiFinalGames, null, '\t'));
           this.SFNL = semiFinalGames;
        for (let eachSFPlayer = 0; eachSFPlayer < semiFinalGames.length / 2; eachSFPlayer++) {
          const sliceSFPlayers = semiFinalGames.slice(eachSFPlayer * 2, eachSFPlayer * 2 + 2);
          semiFinals[eachSFPlayer] = sliceSFPlayers;
          
          finalGames[fGIdx] = sliceSFPlayers[this.randomWinner(0, 1)];
           // FinalGamesIdx increment
          fGIdx += 1;
          if (fGIdx === this.playerList.length / 8) {
               console.log('Semi Final Match List:: ', JSON.stringify(semiFinals, null, '\t'));
               console.log('Final Players:: ', JSON.stringify(finalGames, null, '\t'));
               this.FNL = finalGames;
            for (let eachFPlayer = 0; eachFPlayer < finalGames.length / 2; eachFPlayer++) {
              const sliceFPlayers = finalGames.slice(eachFPlayer * 2, eachFPlayer * 2 + 2);
              finals[eachFPlayer] = sliceFPlayers;
              this.finalWinner = sliceFPlayers[this.randomWinner(0, 1)];
            }
          }
        }
      }
    }
  }
}

console.log('<<<<< FINAL WINNER >>>>>', this.finalWinner);

  }

  randomWinner(min:any, max:any) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

}
