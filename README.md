<div align="center"><img style = "width:100%;"src="https://i.imgur.com/vZvmHHX.png"></img></div>
<hr>
<h2 align=center>Zaprecall</h2>
<h3 align=center>Web development Project</h3>
<hr>
<h4 align=center>A flashcards web-app</h4>
<h4 align=center>Flashcards are cards that contain a question/statement in front of you and an answer on the back. You can use them to train your memory with Active Recall and Spaced Repetition methodologies. The idea is to read the question or statement and try to remember the answer.</h4>
<br>
<div align=center style="display:flex; justify-content: center; gap:5%">
        <img style = "height:250px;"src="https://i.imgur.com/4UEVM5p.png">
        <img style = "height:250px;"src="https://i.imgur.com/OGzVqnr.png">
        <img style = "height:250px;"src="https://i.imgur.com/AFyD2uA.png">
</div>
<br><hr>

## Features

- Cards have two faces
- User can open more than one card at same time
- User has three response options for each card
  - "Não lembrei" (didn't remember)
  - "Quase não lembrei" (almost didn't remember)
  - "Zap!" (remembered)
- Visual response to user answers
- Score updated with each answer
- Message after replying all flashcards

## Requirements

- Layout

  - [x] Apply layout to mobile, following Figma below. It is not necessary to implement a desktop version.

- Componentization and data
    - [x] Page elements must be componentized with React in separate files.
    - [x] Dynamic page data (like *deck*, *flashcards*, etc) should be represented as *arrays* or objects in JavaScript and rendered on screen.
- Start
    - [x] When starting, a “startup screen” should be displayed.
    - [x] When clicking the “Start Recall!” button, the *deck* of *flashcards* is displayed on the screen.
- *Flashcards*
    - [x] Every time the user plays, the *flashcards* must be shuffled.
    - [x] All *flashcards* must appear on the screen flipped and indexed by numbers (eg Flashcard 1, Flashcard 2), in order to “hide” the term or question it contains.
    - [x] When clicking on a *flashcard*, the question or term corresponding to the *flashcard* should appear.
    - [x] To see the *flashcard* response, the user must click on the “flip” icon (the component is the same, it just had its *layout* adapted).
        - When turning a *flashcard*...
            - [x] When clicking on any of the buttons (I didn't remember, Almost didn't remember or Zap), the *flashcard* should be given as answered and will have its status changed to reflect the user's choice:
                - Incorrect *Flashcard* (I don't remember)
                - *Flashcard* correct with effort (Almost forgot)
                - *Flashcard* correct immediately (Zap!)
            - [x] Once answered, the question should be closed and its text crossed out with the correct color corresponding to its status and an icon.
- Final result
     - [x] The result should be pinned to the bottom of the page.
     - [x] Whenever a card is turned over...
         - [x] The number of answered flashcards must be updated
         - [x] The sequence of answers must be recorded and appear in the form of icons (important: the icons must appear in the order of the user's answers and not in the order of the flashcards!).
     - [x] When all flashcards are answered...
         - [x] Congratulations message should be displayed if only *flashcard* responses are “ZAP!” or “Lembrei com esforço”.
             - [x] When answering all *flashcards* and there is at least one *status* "Incorrect", the message of “Putz” should be displayed.

## Usage

Install my project with npm

> Clone the repository:

```bash
  git clone git@github.com:DanielCdOliveira/projeto8-zaprecall.git
```
>Install dependences:

```bash
  npm install
```
> Run aplication:

```bash
  npm start
```


### Built with

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

### Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/danielcdoliveira/
