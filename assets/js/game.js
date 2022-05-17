var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack= 10;
var playerMoney = 10;
//You can also log multiple values at once like this




var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);


//create function
var fight = function(enemyName) {
    //repeat execute as long as the enemy-robot is alive
    while(enemyHealth > 0) {
    // place fight function code block here
    
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
     //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
     if(promptFight === "fight" || promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
    console.log (
        playerName + "attacked" + enemyNames +"." +enemyNames + "now has" + enemyHealth + "health remaining"
    );

    if (enemyHealth <= 0) {
        window.alert(enemyNames + "has died");

    } else {
        window.alert(enemyNames + "still has" + enemyHealth + "health left.");
    }
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack
  // Log a resulting message to the console so we know that it worked.
  console.log(
        enemyNames + "attacked" + playerName + "." + playerName + "now has" + playerHealth + "health remaining"
    );

    if (playerHealth <= 0) {
        window.alert(playerName + "has died!");

    }else {
        window.alert(playerName + "still has" + playerHealth + "health left.");
    }

} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
  
}else {
    window.alert("You need to choose a valid option. Try again!");
}
}
}
for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth=50;
    fight(pickedEnemyName);
  
}

// execute function

//fight();
