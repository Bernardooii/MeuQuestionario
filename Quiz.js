class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  // escreva aqui o código para ocultar os elementos da questão
  question.hide();


    // escreva o código aqui para mudar a cor de fundo
    background("yellow");

    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz~
      var title = createElement('h1')
      title.html("Resultado do questionário");
      title.position(100, 200);
      var title2 = createElement('h2')
      title2.html("---------------------------");
      title2.position(200, 200);
      var title3 = createElement('h2')
      title3.html("Onde tem dois sete, dois zeros?");
      title3.position(250, 100);
      var title3 = createElement('h3')
      title3.html("1: 7700");
      title3.position(300, 100);
      var title4 = createElement('h3')
      title4.html("2: 2720");
      title4.position(325, 100);
      var title5 = createElement('h3')
      title5.html("3: 2700");
      title5.position(350, 100);
      var title6 = createElement('h3')
      title6.html("4: 7720");
      title6.position(375, 200);


    // chame getContestantInfo () aqui
    getContestantInfo();

    // escreva a condição para verificar se contestantInfo não é indefinido
  if(allContestants!==undefined){
    fill("blue");
    textSize(20);
    TextTrack("Jogador que respondeu corretamente estará destacado em verde",400,200);
  }

    // escreva aqui o código para adicionar uma nota

    // escreva o código para destacar o competidor que respondeu corretamente
    for(var plr in allContestants){
      var correctAns = "3";
      if(correctAns === allContestants[plr].answer)
      fill("green")
      else
      fill("red")
    }
    
  }

}
