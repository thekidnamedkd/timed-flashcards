# _TIMED FLASHCARD_

#### _A study tool for JavaScript using flashcards._

#### By _**KEVIN DAVIS, THOMAS GLENN, SEAN DOWNS**_

## Description

_A game to learn JavaScript terms that give a user a set of definitions and ask them to select the appropriate term from a set of options. The user will be awarded a point to total score for a correct answer and an incorrectly will take away a point from the total. _

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| The game object is created with player and deck objects declared inside | Start Game | Game:{{Player}, {Deck}} |
| The player object will have a playerScore set to 0. | | |
| The deck will contain a set of flashcards. | | |
| The flashcards will contain properties for definition, term, bad terms. | | |
| The game will populate the bad terms of each flashcard with incorrect two random terms from else where in the deck. | | |
| The game will show a flashcard definition from the deck for X seconds. | | |
| The game will show three radio button terms for the definition shown. | | |
| On click the game will compare a players radio selection against the correct term of the card. | | |
| After X total seconds the game will compare a players radio selection against the correct term of the card. | | | 
| A question answered correctly adds 1 point to the playerScore. | | |
| A question answered wrong subtracts 1 point | | |
| A question unanswered after X total seconds subtracts 1 point. | | |
| The game will remove correctly answered cards from the deck. | | |
| The game will keep incorrectly answered cards in the deck. | | |
| The game will continue showing cards until a total score goal triggers a win state. | | |
| The game will finish when score threshold is reached. | | |

=question bank


radio buttons

listing objects
--GAME
  --PLAYER
      --playerScore
  --DECK OF FLASHCARDS
    --flashcard array
    --flashcard prototype
      --term
      --definition
      --error definition

## Setup/Installation Requirements

* _Visit the following link: _
* _Clone the repository to your desired directory._
* _OR_
* _Visit here: _

## Known Bugs

_ No known bugs at this time._

## Support and contact details

_Contact me us at: thekidnamedkd@gmail.com, spdowns@protonmail.com, thomasgrantglenn@mac.com_

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Webpack_
* _Jest_
* _Git_

### License

*GPL license distribution*

Copyright (c) 2020 **_Kevin Davis, Sean Downs, Thomas Glenn_**
