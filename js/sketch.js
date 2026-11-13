/****************************************
About
****************************************/
/*
A sketch that makes frogs with funny faces rain from the sky. A counter at the top keeps track of the number of frogs that have been clicked into existence. 

I developed this for my Code The Dream Pre-Work Assignment. Everything in this code was learned throught the Unit 1: Intro to JS: Drawing & Animation course offered by Khan Academy.

As per the requirements of the Pre-Work Assignment, the code includes the following:
- A comment explaining the program
- A variable
- a conditional
- a loop
- a unique function

Thank you for taking the time to look at my code. I had a lot of fun going through the Khan Academy Unit 1 course and a lot of fun putting this code together.
*/

/****************************************
Arrays
****************************************/

//Set positions for rain
let xPositions = [200]; // Array for drop x position, initial at middle of canvas
var yPositions = [0]; //Top of canvas

//Empty array built for frog x and y positions to be added
var frogPosX = []; //Keeps track of x position of mouse
var frogPosY = []; //Keeps track of y position of mouse

//Set fall speed for frogs
var frogDropSpeed = 5;

/****************************************
Loops
****************************************/

//For Loops are found in the Setup and Draw functions located below.

/****************************************
Making the Frogs
****************************************/
//The frog face shape. Originally planned to be a parent object with several variations that could be called. I instead decided to cycle through a set of eyes and mouths.

//set a vatiable to the initial face shape (basic eye)
var frogEyeNum = 1;

//set a variable to the initial face shape (basic mouth)
var frogMouthNum = 1;

//The bulk of the frog function. This includes general shape and the various faces. Arguments are x position, y position, and a number to keep track of the eye (frogEyeNum) and mouth (frogMouthNum) variations.
var frog = function(frogX, frogY,frogEyeNum,frogMouthNum){
  //frog head
  fill(20,200,100); //Frog Green
  noStroke(); //Remove borders
  ellipse(frogX, frogY,50,40); //Main part of head
  ellipse(frogX - 20,frogY - 20,25,25); //Area for left eye
  ellipse(frogX + 20,frogY - 20,25,25); //Area for right eye
  //frog eye
  fill(255,255,255); //White
  ellipse(frogX - 20,frogY - 20,15,15); //White of eye left
  ellipse(frogX + 20,frogY - 20,15,15); //White of eye right
  //frog nose
  fill(0,0,0); //Black
  ellipse(frogX - 2,frogY - 10,1,5); //Left nostril
  ellipse(frogX + 2,frogY - 10,1,5); //Right nostril

//four different eye shapes. If statements to cycle between them. 
  //basic eyes
  if (frogEyeNum === 1){ //Basic eye set to 1
    fill(0,0,0); //Black
    ellipse(frogX - 20,frogY - 20,5,5); //Black circle at left eye
    ellipse(frogX + 20,frogY - 20,5,5); //Black circle at right eye
  };
  //closed eyes
  if (frogEyeNum === 2){  //Set closed eye to 2
    fill(0,0,0); //Black
    stroke(0,0,0); //Stroke added for black eye lines
    strokeWeight(2); //Incresed stroke weight to 2 to make eye lines more prominent 
    // Below are several diagnal lines to represent the closed eyes
    line(frogX - 25,frogY - 15,frogX - 13,frogY - 20); //lower left
    line(frogX - 25,frogY - 25,frogX - 13,frogY - 20); //upper left
    line(frogX + 25,frogY - 15,frogX + 13,frogY - 20); //lower right
    line(frogX + 25,frogY - 25,frogX + 13,frogY - 20); //upper right
    strokeWeight(1); //Set line size back to 1
    fill(0,0,0); //set color to black (possibly redundant)
  };
  //eyebrow eyes
  if (frogEyeNum === 3){  //set the eyebrow eyes to 3
    fill(0,0,0); //Black
    ellipse(frogX - 20,frogY - 20,5,5); //Round pupils similar to basic eyes (left)
    ellipse(frogX + 20,frogY - 20,5,5); //Round pupils similar to basic eyes (right)
    stroke(0,0,0); //Stroke added for black eye lines
    strokeWeight(4); //Incresed stroke weight to 4 to emphasize the eyebrows
    line(frogX - 25,frogY - 30,frogX - 13,frogY - 25); //Left eyebrow
    line(frogX + 25,frogY - 30,frogX + 13,frogY - 25); //Right eyebrow
    strokeWeight(1); //Return line width to 1
  };
  //sleepy eyes
  if (frogEyeNum === 4){  //Final eye variation set to 4
    fill(0,0,0); //Black
    stroke(0,0,0); //Stroke added for black eye lines
    strokeWeight(2); //Increased line size to 2
    line(frogX - 27,frogY - 20,frogX - 13,frogY - 20); //Left sleepy eye
    line(frogX + 27,frogY - 20,frogX + 13,frogY - 20); //Right sleepy eye
    strokeWeight(1); //Return stroke size to 1
    fill(0,0,0); //Set fill to black
  };

//four different mouth shapes. If statements to cycle between them. Arguments include frog position and a number to cycle between the face shapes.
  //basic mouth
  if (frogMouthNum === 1){ //Set basic mouth to 1
    stroke(0,0,0); //Set line color to black
    line(frogX-20, frogY + 2, frogX+20, frogY + 2); //Simple horizantal line for mouth
  };
  //happy mouth
  if (frogMouthNum === 2){ //Set happy mouth to 2
    noFill(); //Removed fill to make smile from an arc
    strokeWeight(1); //set line width to 1
    arc(frogX, frogY, 25, 25, 0, 3); //Arc used to make smile
    fill(0,0,0); //set color to black (maybe redundant)
  };
  //Frown mouth
  if (frogMouthNum === 3){  //Set frown mouth to 3
    noFill(); //Removed fill to make frown from an arc
    strokeWeight(1); //Set line width to 1
    arc(frogX, frogY + 11, 25, 25, 3, 0); //Arc used to make frown
    fill(0,0,0); //Set fill to black
  };
  //tongue mouth
  if (frogMouthNum === 4){  //Smile with a tongue sticking out set to 4
    noFill(); //No fill to make smile from arc
    strokeWeight(1); //Line width set to 1
    arc(frogX, frogY + 4, 25, 10, 0, 3); //Arc for smile
    fill(252,131,220); //Pink fill for tongue
    arc(frogX + 8, frogY + 7.3, 10, 15, 3, 12); //Tongue
    fill(0,0,0); //Set fill back to black
  }; 
};

/****************************************
Setup
****************************************/
function setup() {
  createCanvas(window.innerWidth, 400);
  
  //For loop to vary rain drops (placed here to use random function)
  for (var numDrops = 0; numDrops < 37; numDrops++){ //Limited the number of onscreen drops
    xPositions.push(random(10,window.innerWidth)); //Adds random x position of drops to array
    yPositions.push((numDrops/2)*25); //Adds varied y position of drops to array
  } 
}

/****************************************
Draw
****************************************/
function draw() {
  background(205,250,255);//Blue sky
  fill(0,0,0); //Set to black to make text easy to read
  textSize(30); //Made text large to draw attention of user
  text("Click to make it rain frogs!",25,50); //text is located at top of canvas
  
//Setting Frog to mouse position
  for (var frogi = 0; frogi < frogPosX.length;frogi++){ //for loop that is based on array length

    //Changing text at top of canvas
    fill(205,250,255); //Same color as background to hide old text
    noStroke(); //Removed borders of rectangle mentioned below
    rect(0,0,375,57); //Rectangle to cover old text
    fill(0,0,0); //Black for text 
    var frogScore = text("Number of frogs: " + (frogi + 1),50,50); //Variable for text at top of canvas that tells the user the number of frogs clicked into existence

    //Call on frog function. Arguments set to allow frog faces to change and fall
    frog( frogPosX[frogi], frogPosY[frogi], frogEyeNum, frogMouthNum);


    //Frog faces change based on the number of clicks. Originally I had planned to randomize the eyes and mouths, but I could not get it to work in a way I was happy with. I used the % operator to change the faces based on the set eye and mouths. It ended up giving the appearance of randomness so I decided to keep it like this. if/else conditionals used to cycle between faces.
    if(frogi % 2 === 0){ 
      frogEyeNum = 1;
      frogMouthNum = 1;
    }
    else if(frogi % 3 === 0){
      frogEyeNum = 2;
      frogMouthNum = 2;
    }
    else if(frogi % 5 === 0){
      frogEyeNum = 3;
      frogMouthNum = 3;
    }
    else if(frogi % 1 === 0){
      frogEyeNum = 4;
      frogMouthNum = 4;
    };

    //This conditional animates the frogs to drop to the bottom of the canvas regardless of position.
    if(frogPosY[frogi] < 390){
      frogDropSpeed = 5;
    }
    //This conditional slows the speed at which the frogs drop when they hit the bottom of the canvas. This was to keep the canvas from piling up with frogs, but it also is kinda satisfying watching the frogs slowly leave the canvas.
    else if(frogPosY[frogi] > 389){
      frogDropSpeed = 0.25;
    };
    
    frogPosY[frogi] += frogDropSpeed; //Animates the frogs dropping. Speed based on their y position
    }
  frogScore; //Calls on the frog counter text variable defined above.

  
//Rain loop
  for (var i = 0; i < xPositions.length; i++) { //Animates rain droplets over the frogs and the text
    fill(0,200,240); //Darker blue than background
    //droplet shape
    noStroke(); //Remove shape borders
    ellipse(xPositions[i], yPositions[i], 10, 10); //Round part of rain droplet
    triangle(xPositions[i]-5, yPositions[i], xPositions[i]+5, yPositions[i], xPositions[i], yPositions[i]-10); //Tail part of rain droplet
    strokeWeight(1);//Return shape border
    
    //Speed of rain falling
    yPositions[i] += 3; //Rain set to drip slower than frogs.
    
    //continous rain by setting yPosition back to 0
    if (yPositions[i] > 400){ //Conditional for when rain reaches bottom of canvas
    yPositions[i] = 0;
    xPositions[i] = random(10,window.innerWidth); //randomize drop x position.
    }
  }
}

//Initial position of frogs based on location mouse clicked on canvase. Each x and y position at each mouse click stored in the frogPosX and frogPosY arrays.
mouseClicked = function(){
    frogPosX.push(mouseX);
    frogPosY.push(mouseY);
};
