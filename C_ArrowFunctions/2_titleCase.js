
let toTitleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' ')); ;     //output--->  Fullstack Developers
  }

  toTitleCase(" fULlsTaCK dEveloPers");