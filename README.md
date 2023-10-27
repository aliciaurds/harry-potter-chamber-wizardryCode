# HARRY POTTER AND THE CHAMBER OF WIZARDRY IN CODE

## [Play the Game!](https://aliciaurds.github.io/harry-potter-chamber-wizardryCode/)

![Game Logo](/images/LogoGame.png)


# Description

Harry Potter and the Chamber of Wizardry in Code is an exciting  wizardry adventure. Players take on the role of Harry Potter as they fly on a broomstick, dodging adversaries such as Voldemort and Umbridge. When the time is right, unleash the power of the wand and cast the Expelliarmus spell! The goal is to achieve a high score by defeating your foes. Dive into the magical world of Harry Potter, master your wizarding skills, and prove your mettle in this thrilling, action-packed game! And remember: Don't act like a muggle!


# Main Functionalities

- Player moves up with the space bar. 
- At some point player can shoot by clicking a button on the lower-right corner.
- Enemies move horizontally in a random manner.
- At a certain point enemies' speed increases.
- Game ends if the player is touched by the enemies.
- The main goal is to achieve a score as high as possible which will be displayed on the game screen.



# Backlog Functionalities

- Add different players so you can choose which one to play with.
- Each player to have different spells.
- Add a Dementor that takes score out from you.
- Add a Patronus that destroys all enemies around.
- Make it more responsive.


# Technologies used

- HTML
- CSS
- JavaScript
- DOM Manipulation 
- JS Classes
- Local Storage
- JS Audio() and JS Image()

# States

- Start Screen
- Game Screen
- Game Over Screen

# Proyect Structure

## main.js

- startGame();
- resetGame();
- spellEvent();
- jumpEvent();

## Game.js

- Game () 
    - this.player;
    - this.wand;
    - this.enemiesArr;
    - this.spellArr;
    - this.difficultySpeed;
    - this.timer;     
    - this.isGameOn;
    - this.spellEnabled;
    - this.wandAppear();
    - this.score;
    - this.scoreNode;
    - this.highScore;
    - this.highScoreNod;
    - this.highScoreNode.innerText;
- fasterEnemies()
- enemiesAppear()
- enemiesDisapear()
- collisionEnemies()
- wandAppear()
- collisionWand()
- spellAppear()
- collisionSpell()
- calculateTime()
- scoreChanges()
- gameOver()
- gameLoop()

## Player.js 

- Player () {
    this.node;
    this.node.src;
    this.x;
    this.y;
    this.w;
    this.h;
    this.gravitySpeed;
    this.jumpSpeed;
}
- gravityEffect () {}
- jump () {}

## Enemies.js 

- Enemies () {
    this.node;
    this.node.src;
    this.x;
    this.y;
    this.w;
    this.h;
    this.speedX;
}
- autoMovement () {}

## Shoot.js 

- Spell () {
    this.node;
    this.node.src;
    this.x;
    this.y;
    this.w;
    this.h;
    this.speed;
}
- spellMovement () {}

## Wand.js 

- Wand () {
    this.node;
    this.node.src;
    this.x;
    this.y;
    this.w;
    this.h;
    this.wandSpeed;
}
- wandMovement () {}


## Soundtrack.js 

- .addEventlisterner(){}
- playAudio()
- stopAudio()
- playShootBtn()
- playHermione()

# Sketch

![Sketch](/images/Brainstorming.jpg)

# Extra Links 

### Trello
[Link](https://trello.com/b/6gbPFKQ1/harrypotter-chamber-wizardrycode)

### Slides
[Link](https://docs.google.com/presentation/d/1Zc7Wqtgwqg7rnF49a6jhU302ik8MC8m-V1GSxpQuoTY/edit?usp=sharing)

### Deploy
[Link](https://github.com/aliciaurds/harry-potter-chamber-wizardryCode/deployments)