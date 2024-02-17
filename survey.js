const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question("What do you listen to while doing that?", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
        rl.question("What is your favorite food?", (food) => {
          rl.question("Which sport is your absolute favourite?", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {

              console.log(`Hi I'm ${name}! Great to meet you!`);
              console.log(`I like to spend my freetime ${activity}!`);
              console.log(`While I'm ${activity}, I like to listen to ${music}.`);
              console.log(`My favorite meal of the day is ${meal},`);
              console.log(`but my favorite food is ${food}!`);
              console.log(`If I have to pick, my favorite sport is ${sport}.`);
              console.log(`If I'm really good at one thing, its definitely ${superpower}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});