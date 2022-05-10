const listscore = document.querySelector('.list-scores')

const listOfScore = [{
    Id: '1',
    Name: 'Juan Rosario',
    Score: 1550
  }, {
    Id: '2',
    Name: 'Elida Suli',
    Score: 650
  }, {
    Id: '3',
    Name: 'Sergio Rosario',
    Score: 750
  }, {
    Id: '4',
    Name: 'Esther Rosario',
    Score: 850
  }, {
    Id: '5',
    Name: 'Reyna Rosario',
    Score: 900
  }, {
    Id: '6',
    Name: 'Jesus Aquino',
    Score: 950
  }];
  
  const scores=(item)=> {
    return `
    <div class="score-container">
    <p class="score">${item.Name}: <span class="score-number">${item.Score}</span></p>
    </div>
    `
  }

  const listOfScoreSorted = listOfScore.sort((a, b) => b.Score - a.Score);
  export const displayScores = () =>{
    listscore.innerHTML = `${listOfScoreSorted.map(scores).join('')}`;
  };


  