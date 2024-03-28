//Start of Code
let mode = 1
let counter = 0
let shapemode = "none"
let mousex1
let mousey1
let mousex2
let mousey2
let mousex3
let mousey3
let mousex4
let mousey4
let c = "black"
let penthickness
let eraserthickness
let opacity
let pot
let ptslider
let etslider
let opcslider
let potslider
let colourpicker
let canvas
let savedrawing
let colourConfirm = "black"
let randomColour
let randomColourMode = 0
let manualstate = 0
let outlinemode = 0
let shapeoutline = 0
let outlinec = "black"

function setup(){
  if (manualstate == 0){
    canvas = createCanvas(windowWidth, windowHeight)
    background(220)

    ptslider = createSlider(1, 150, 10, 1)
    ptslider.position(800, 5)
    ptslider.size(120)

    etslider = createSlider(1, 150, 10, 1)
    etslider.position(800, 22)
    etslider.size(120)

    opcslider = createSlider(0, 255, 255, 5)
    opcslider.position(275, 20)
    opcslider.size(50)
    
    potslider = createSlider(0, 10, 0, 1)
    potslider.position(800, 39)
    potslider.size(120)

    colourpicker = createColorPicker(c)
    colourpicker.position(180, 30)
    colourpicker.size(20, 20)
  }
}
function draw(){
  if (manualstate == 1){
    stroke(0)
    strokeWeight(1)
    fill(220)
    rect(5, 60, windowWidth - 10, windowHeight - 65)

    strokeWeight(0)
    fill(255)
    rect(15, 65, 150, 50, 10)

    textAlign(CENTER)

    textSize(20)
    fill("black")
    text("Go to Canvas", 90, 95)

    textSize(30)
    text("Instruction Manual to use Paint App", windowWidth / 2, 100)

    textSize(15)
    textAlign(LEFT)

    text("To change the colour of the pen, click on the colour buttons or use the arrow keys.", 40, 150)

    text('To increase the opacity of the colour of the pen, use the slider on the left to adjust or press "x".', 40, 190)
    text('To decrease the opacity of the colour of the pen, use the slider on the left to adjust or press "z".', 40, 210)

    text("To change between pen modes:", 40, 250);
    text('     -> Click on the "Dotted Line" button for dotted lines or press "m".', 40, 270)
    text('    -> Click on the "Solid Line" button for solid lines or press "m".', 40, 290)
    text('    -> Click on the "Triangle Line" button for lines made of triangles or press "m".', 40, 310)
    text('    -> Click on the "Square Line" button for lines made of squares or press "m".', 40, 330)
    text('    -> Click on the "Airbrush" button for airbrush mode or press  "m".', 40, 350)
    text('    -> Click on the "X" button for eraser mode or press "m".', 40, 370)

    text('To increase the thickness of the pen, use the slider on the top right to adjust or press "w".', 40, 410)
    text('To decrease the thickness of the pen, use the slider on the top right to adjust or press "s".', 40, 430)

    text('To increase the thickness of the eraser, use the slider on the center right to adjust or press "d".', 40, 470)
    text('To decrease the thickness of the eraser, use the slider on the center right to adjust or press "a".', 40, 490)

    text('To clear the canvas, click on the "CLEAR ALL" button or press "c".', 40, 530)

    text('To download the canvas, click on the "Download" button or press "l".', 40, 570)

    text('To open up the manual, click on the "Manual" button or press "i".', 40, 610)
    text('To return to the canvas, click on the "Go to Canvas" button.', 40, 630)
    
    text('To change mode to insert shape, click the "Shape icon" button or press "p".', 750, 150)
    text('To return to pen mode, click the "Shape mode on" button to turn off or click "0".', 750, 170)
    text('To draw a triangle, you must click 3 points on the screen where you want your 3 vertexes to be.', 750, 210)
    text('To draw a rectangle, you must click 2 points on the screen where you want your top-left and bottom-right corner corner to be.', 750, 230)
    text('To draw a quadriletralm you must click 4 points on the screen where you want your 4 vertexes to be.', 750, 250)
    text('To draw a circle, you must click 2 points on the screen: ', 750, 270)
    text('    The first point will be your center and the second point will be any point on the circumference of the circle.', 750, 290)
    
    text('To change the colour of the outline of the shape or pen, click on the "Outline Mode" button or press "SHIFT". ', 750, 330)
    text('To adjust the thickness of the outline of the shape, use the same method for adjusting thickness of pen.', 750, 350)
    text('To turn on shape outline or pen outline, click on the "Outline off" button or press "O".', 750, 370)
    
    text('To increase the thickness of the pen outline, use the slider on the bottom right to adjust or press "r".', 750, 410)
    text('To decrease the thickness of the pen outline, use the slider on the bottom right to adjust or press "e".', 750, 430)

    fill("red")
    text("Important: ", 40, 700)
    text("1. To use keys on the keyboard, you must first make the code active by drawing something in the canvas.", 40, 740)
    text("2. When you click on the Manual after you drew something in the canvas, the progress will NOT be saved.", 40, 760)
    text('3. To set colour of the pen outline, click on the "Outline Mode" button or press "SHIFT" before setting the colour of pen, then clicking it again before drawing with the pen.', 40, 780)  
  }

  if (manualstate == 0){
    fill(220)
    strokeWeight(0)
    rect(0, 0, windowWidth, 60)
    rect(0, 0, 5, windowHeight)
    rect(windowWidth - 5, 0, 5, windowHeight)
    rect(0, windowHeight - 5, windowWidth, 5)
    
    rect(1610, 5, 50, 50)
    textAlign(LEFT)
    textSize(15)
    fill(0)
    strokeWeight(0)
    text("point no. " + counter, 1610, 30)
    
    if (shapemode == 'triangle' && counter == 3){
      fill(c)
      stroke(outlinec)
      if (shapeoutline == 0){
        strokeWeight(0)
      }
      else if (shapeoutline == 1){
        strokeWeight(ptslider.value())
      }
      triangle(mousex1, mousey1, mousex2, mousey2, mousex3, mousey3)
      counter = 0
    }
    if (shapemode == 'quad' && counter == 4){
      fill(c)
      stroke(outlinec)
      if (shapeoutline == 0){
        strokeWeight(0)
      }
      else if (shapeoutline == 1){
        strokeWeight(ptslider.value())
      }
      quad(mousex1, mousey1, mousex2, mousey2, mousex3, mousey3, mousex4, mousey4)
      counter = 0
    }
    
    if (shapemode == 'rect' && counter == 2){
      fill(c)
      stroke(outlinec)
      if (shapeoutline == 0){
        strokeWeight(0)
      }
      else if (shapeoutline == 1){
        strokeWeight(ptslider.value())
      }
      if (mousex1 > mousex2 && mousey1 > mousey2){
        rect(mousex2, mousey2, mousex1 - mousex2, mousey1 - mousey2)
      }
      else if (mousex1 > mousex2 && mousey1 < mousey2){
        rect(mousex2, mousey1, mousex1 - mousex2, mousey2 - mousey1)
      }
      else if (mousex1 < mousex2 && mousey1 > mousey2){
        rect(mousex1, mousey2, mousex2 - mousex1, mousey1 - mousey2)
      }
      else if (mousex1 < mousex2 && mousey1 < mousey2){
        rect(mousex1, mousey1, mousex2 - mousex1, mousey2 - mousey1)
      }
      counter = 0
    }
    
    if (shapemode == 'ellipse' && counter == 2){
      fill(c)
      stroke(outlinec)
      if (shapeoutline == 0){
        strokeWeight(0)
      }
      else if (shapeoutline == 1){
        strokeWeight(ptslider.value())
      }
      ellipse(mousex1, mousey1, (dist(mousex1, mousey1, mousex2, mousey2)) * 2, (dist(mousex1, mousey1, mousex2, mousey2)) * 2)
      counter = 0
    }
    
    fill(220)
    strokeWeight(0)
    rect(925, 0, 150, 55)
    rect(330, 15.5, 125, 20)

    strokeWeight(0)
    fill(0)
    textSize(15)
    textAlign(LEFT)
    text("pen thickness: " + ptslider.value(), 930, 18)
    text("eraser thicknesss: " + etslider.value(), 930, 36)
    text("colour opacity: " + opcslider.value(), 335, 33)
    textSize(13)
    text("pen outline thickness: " + potslider.value(), 930, 53)

    stroke(0)
    strokeWeight(1)
    noFill()
    rect(5, 60, windowWidth - 10, windowHeight - 65)

    strokeWeight(0)
    fill(255)
    rect(745, 5, 50, 50, 10)
    strokeWeight(5)
    stroke(231, 185, 179)
    line(755, 15, 785, 45)
    line(755, 45, 785, 15)

    fill(255)
    strokeWeight(0)
    rect(1070, 5, 90, 50, 10)  
    rect(1165, 5, 50, 50, 10)
    rect(1220, 5, 50, 50, 10)
    rect(1275, 5, 50, 50, 10)
    rect(1330, 5, 50, 50, 10)
    rect(1385, 5, 50, 50, 10)
    rect(1440, 5, 50, 50, 10)
    
    stroke(0)
    strokeWeight(1)
    triangle(1280, 10, 1285, 40, 1320, 40)
    rect(1335, 15, 40, 30)
    quad(1390, 10, 1430, 20, 1415, 40, 1400, 30)
    ellipse(1465, 30, 40, 40)
    
    
    if (shapemode == 'none'){
      textSize(15)
      textAlign(CENTER)
      fill(255)
      strokeWeight(1)
      stroke(0)
      rect(1495, 5, 100, 20, 5)
      strokeWeight(0)
      fill(0)
      text('Shape mode off', 1545, 22.5)
    }
    else{
      textSize(15)
      textAlign(CENTER)
      fill(255)
      strokeWeight(0)
      rect(1495, 5, 100, 20, 5)
      strokeWeight(0)
      fill(0)
      text('Shape mode on', 1545, 22.5)
    }
    
    if (shapeoutline == 1){
      textSize(15)
      textAlign(CENTER)
      fill(255)
      strokeWeight(1)
      stroke(0)
      rect(1495, 30, 100, 20, 5)
      strokeWeight(0)
      fill(0)
      text('Outline on', 1545, 47.5)
    }
    else if (shapeoutline == 0){
      textSize(15)
      textAlign(CENTER)
      fill(255)
      strokeWeight(0)
      rect(1495, 30, 100, 20, 5)
      strokeWeight(0)
      fill(0)
      text('Outline off', 1545, 47.5)
    }
    

    strokeWeight(0)
    fill("red")
    textSize(15)
    textAlign(CENTER)
    text("CLEAR ALL", 1115, 30)
    fill("black")
    text("Manual", 1245, 30)

    strokeWeight(5)
    stroke(0)
    line(1190, 10, 1190, 42.5)
    line(1177.5, 25, 1190, 42.5)
    line(1202.5, 25, 1190, 42.5)
    line(1170, 50, 1210, 50)

    strokeWeight(0)

    fill("maroon")
    rect(5, 5, 20, 20, 5)
    fill("red")
    rect(30, 5, 20, 20, 5)
    fill("orange")
    rect(55, 5, 20, 20, 5)
    fill("yellow")
    rect(80, 5, 20, 20, 5)
    fill("lightgreen")
    rect(105, 5, 20, 20, 5)
    fill("green")
    rect(130, 5, 20, 20, 5)
    fill("turquoise")
    rect(155, 5, 20, 20, 5)
    fill("skyblue")
    rect(5, 30, 20, 20, 5)
    fill("blue")
    rect(30, 30, 20, 20, 5)
    fill("navy")
    rect(55, 30, 20, 20, 5)
    fill("purple")
    rect(80, 30, 20, 20, 5)
    fill("violet")
    rect(105, 30, 20, 20, 5)
    fill("white")
    rect(130, 30, 20, 20, 5)
    fill("black")
    rect(155, 30, 20, 20, 5)

    randomColour = color(random(255), random(255), random(255))
    fill(randomColour)
    rect(180, 5, 20, 20, 5)

    if (outlinemode == 0){
      stroke(220)
      strokeWeight(2)
      fill("white")
      rect(220, 5, 50, 50, 10)
      strokeWeight(0)
      fill(0)
      textAlign(CENTER)
      textSize(15)
      text("Outline", 245, 25)
      text("Mode", 245, 40)
    }
    else if (outlinemode == 1){
      stroke(0)
      strokeWeight(2)
      fill("white")
      rect(220, 5, 50, 50, 10)
      strokeWeight(0)
      fill(0)
      textAlign(CENTER)
      textSize(15)
      text("Outline", 245, 25)
      text("Mode", 245, 40)
    }

    fill(255)
    strokeWeight(0)
    rect(460, 5, 50, 50, 10)
    rect(515, 5, 50, 50, 10)
    rect(570, 5, 60, 50, 10)
    rect(635, 5, 50, 50, 10)
    rect(690, 5, 50, 50, 10)
    fill(0)
    textSize(10)
    textAlign(CENTER)
    text("Dotted Line", 485, 30)
    text("Solid Line", 540, 30)
    text("Triangle Line", 600, 30)
    text("Square Line", 660, 30)
    text("AirBrush", 715, 30)
    if (shapemode == "none" && outlinemode == 0 && mouseIsPressed && mode == 0 && mouseX > 5 + ptslider.value() / 2 && pmouseX > 5 + ptslider.value() / 2 && mouseY > 60 + ptslider.value() / 2 && pmouseY > 60 + ptslider.value() / 2 && mouseX < windowWidth - (5 + ptslider.value() / 2) && pmouseX < windowWidth - (5 + ptslider.value() / 2) && mouseY < windowHeight - (5 + ptslider.value() / 2) && pmouseY < windowHeight - (5 + ptslider.value() / 2)){
      stroke(outlinec)
      if (shapeoutline == 1){
        strokeWeight(potslider.value())
      }
      else if (shapeoutline == 0){
        strokeWeight(0)
      }
      fill(c)
      ellipse(mouseX, mouseY, ptslider.value(), ptslider.value())
    }
    else if (shapemode == "none" && outlinemode == 0 && mouseIsPressed && mode == 1 && mouseX > 5 + ptslider.value() / 2 && pmouseX > 5 + ptslider.value() / 2 && mouseY > 60 + ptslider.value() / 2 && pmouseY > 60 + ptslider.value() / 2 && mouseX < windowWidth - (5 + ptslider.value() / 2) && pmouseX < windowWidth - (5 + ptslider.value() / 2) && mouseY < windowHeight - (5 + ptslider.value() / 2) && pmouseY < windowHeight - (5 + ptslider.value() / 2)){
      strokeWeight(ptslider.value())
      stroke(c)
      line(mouseX, mouseY, pmouseX, pmouseY)
    }
    else if ( shapemode == "none" && outlinemode == 0 && mouseIsPressed && mode == 2 && mouseX > 5 + ptslider.value() * 0.86602540378 && pmouseX > 5 + ptslider.value() * 0.86602540378 && mouseY > 60 + ptslider.value() && pmouseY > 60 + ptslider.value() && mouseX < windowWidth - (5 + ptslider.value() * 0.86602540378) && pmouseX < windowWidth - (5 + ptslider.value() * 0.86602540378) && mouseY < windowHeight - (5 + ptslider.value() / 2) && pmouseY < windowHeight - (5 + ptslider.value() / 2)){
      stroke(outlinec)
      if (shapeoutline == 1){
        strokeWeight(potslider.value())
      }
      else if (shapeoutline == 0){
        strokeWeight(0)
      }
      fill(c)
      triangle(mouseX, mouseY - ptslider.value(), mouseX + ptslider.value() * 0.86602540378, mouseY + ptslider.value() / 2, mouseX - ptslider.value() * 0.86602540378, mouseY + ptslider.value() / 2)
    }
    else if (shapemode == "none" && outlinemode == 0 && mouseIsPressed && mode == 3 && mouseX > 5 + ptslider.value() / 2 && pmouseX > 5 + ptslider.value() / 2 && mouseY > 60 + ptslider.value() / 2 && pmouseY > 60 + ptslider.value() / 2 && mouseX < windowWidth - (5 + ptslider.value() / 2) && pmouseX < windowWidth - (5 + ptslider.value() / 2) && mouseY < windowHeight - (5 + ptslider.value() / 2) && pmouseY < windowHeight - (5 + ptslider.value() / 2)){
      stroke(outlinec)
      if (shapeoutline == 1){
        strokeWeight(1)
      }
      else if (shapeoutline == 0){
        strokeWeight(0)
      }
      fill(c)
      square(mouseX - ptslider.value() / 2, mouseY - ptslider.value() / 2, ptslider.value())
    }
    else if (shapemode == "none" && outlinemode == 0 && mouseIsPressed && mode == 4 && mouseX > 5 + ptslider.value() / 2 && pmouseX > 5 + ptslider.value() / 2 && mouseY > 60 + ptslider.value() / 2 && pmouseY > 60 + ptslider.value() / 2 && mouseX < windowWidth - (5 + ptslider.value() / 2) && pmouseX < windowWidth - (5 + ptslider.value() / 2) && mouseY < windowHeight - (5 + ptslider.value() / 2) && pmouseY < windowHeight - (5 + ptslider.value() / 2)){
      strokeWeight(1)
      stroke(c)
      for (let i = 0; i < pow(ptslider.value(), 2) - 1; i++){
        point(random(mouseX - ptslider.value() / 2, mouseX + ptslider.value() / 2), random(mouseY - ptslider.value() / 2, mouseY + ptslider.value() / 2))
      }
    }
    else if (shapemode == "none" && outlinemode == 0 && mouseIsPressed && mode == 5 && mouseX > 5 && pmouseX > 5 && mouseX < windowWidth - 5 && pmouseX < windowWidth - 5 && mouseY > 60 && pmouseY > 60 && mouseY < windowHeight - 5 && pmouseY < windowHeight - 5){
      strokeWeight(etslider.value())
      stroke(220)
      line(mouseX, mouseY, pmouseX, pmouseY)
    }
    
    if (outlinemode == 0){
      if (randomColourMode == 1){
        c = color(random(255), random(255), random(255), opcslider.value());
        colourConfirm = "pink";
      }
    }
    else if (outlinemode == 1){
      if (randomColourMode == 1){
        outlinec = color(random(255), random(255), random(255), opcslider.value())
        colourConfirm = "pink"
      }
    }

    if (colourConfirm == "maroon"){
      stroke(0)
      strokeWeight(2)
      fill("maroon")
      rect(5, 5, 20, 20, 5)
    }
    else {
      stroke(220)
      strokeWeight(2)
      fill("maroon")
      rect(5, 5, 20, 20, 5)
    }

    if (colourConfirm == "red"){
      stroke(0)
      strokeWeight(2)
      fill("red")
      rect(30, 5, 20, 20, 5)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill("red")
      rect(30, 5, 20, 20, 5)
    }

    if (colourConfirm == "orange"){
      stroke(0)
      strokeWeight(2)
      fill("orange")
      rect(55, 5, 20, 20, 5)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill("orange")
      rect(55, 5, 20, 20, 5)
    }

    if (colourConfirm == "yellow"){
      stroke(0)
      strokeWeight(2)
      fill("yellow")
      rect(80, 5, 20, 20, 5)
    }
    else {
      stroke(220)
      strokeWeight(2)
      fill("yellow")
      rect(80, 5, 20, 20, 5)
    }

    if (colourConfirm == "lightgreen"){
      stroke(0)
      strokeWeight(2)
      fill("lightgreen")
      rect(105, 5, 20, 20, 5)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill("lightgreen")
      rect(105, 5, 20, 20, 5)
    }

    if (colourConfirm == "green"){
      stroke(0)
      strokeWeight(2)
      fill("green")
      rect(130, 5, 20, 20, 5)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill("green")
      rect(130, 5, 20, 20, 5)
    }

    if (colourConfirm == "turquoise"){
      stroke(0)
      strokeWeight(2)
      fill("turquoise")
      rect(155, 5, 20, 20, 5)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill("turquoise")
      rect(155, 5, 20, 20, 5)
    }

    if (colourConfirm == "skyblue"){
      stroke(0)
      strokeWeight(2)
      fill("skyblue")
      rect(5, 30, 20, 20, 5)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill("skyblue")
      rect(5, 30, 20, 20, 5)
    }

    if (colourConfirm == "blue"){
      stroke(0)
      strokeWeight(2)
      fill("blue")
      rect(30, 30, 20, 20, 5)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill("blue")
      rect(30, 30, 20, 20, 5)
    }

    if (colourConfirm == "navy"){
      stroke(0)
      strokeWeight(2)
      fill("navy")
      rect(55, 30, 20, 20, 5)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill("navy")
      rect(55, 30, 20, 20, 5)
    }

    if (colourConfirm == "purple"){
      stroke(0)
      strokeWeight(2)
      fill("purple")
      rect(80, 30, 20, 20, 5)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill("purple")
      rect(80, 30, 20, 20, 5)
    }

    if (colourConfirm == "violet"){
      stroke(0)
      strokeWeight(2)
      fill("violet")
      rect(105, 30, 20, 20, 5)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill("violet")
      rect(105, 30, 20, 20, 5)
    }

    if (colourConfirm == "white"){
      stroke(0)
      strokeWeight(2)
      fill("white")
      rect(130, 30, 20, 20, 5)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill("white")
      rect(130, 30, 20, 20, 5)
    }

    if (colourConfirm == "black"){
      stroke(255)
      strokeWeight(2)
      fill("black")
      rect(155, 30, 20, 20, 5)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill("black")
      rect(155, 30, 20, 20, 5)
    }

    if (colourConfirm == "salmon"){
      stroke(0)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(180, 30, 20, 20)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(180, 30, 20, 20)
    }

    if (colourConfirm == "pink"){
      stroke(0)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(180, 5, 20, 20)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(180, 5, 20, 20)
    }

    if (mode == 0){
      stroke(0)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(460, 5, 50, 50, 10)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(460, 5, 50, 50, 10)
    }

    if (mode == 1){
      stroke(0)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(515, 5, 50, 50, 10)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(515, 5, 50, 50, 10)
    }

    if (mode == 2){
      stroke(0)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(570, 5, 60, 50, 10)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(570, 5, 60, 50, 10)
    }

    if (mode == 3){
      stroke(0)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(635, 5, 50, 50, 10)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(635, 5, 50, 50, 10)
    }

    if (mode == 4){
      stroke(0)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(690, 5, 50, 50, 10)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(690, 5, 50, 50, 10)
    }

    if (mode == 5){
      stroke(0)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(745, 5, 50, 50, 10)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(745, 5, 50, 50, 10)
    }

    if (shapemode == "triangle"){
      stroke(0)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(1275, 5, 50, 50, 10)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(1275, 5, 50, 50, 10)
    }

    if (shapemode == "rect"){
      stroke(0)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(1330, 5, 50, 50, 10)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(1330, 5, 50, 50, 10)
    }

    if (shapemode == "quad"){
      stroke(0)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(1385, 5, 50, 50, 10)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(1385, 5, 50, 50, 10)
    }
    
    if (shapemode == "ellipse"){
      stroke(0)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(1440, 5, 50, 50, 10)
    }
    else{
      stroke(220)
      strokeWeight(2)
      fill(0, 0, 0, 0)
      rect(1440, 5, 50, 50, 10)
    }
  }
}

function mousePressed(){
  if (manualstate == 1){
    if (mouseX > 15 && mouseX < 165 && mouseY > 65 && mouseY < 115 && mouseIsPressed){
      manualstate = 0

      stroke(0)
      strokeWeight(1)
      fill(220)
      rect(5, 60, windowWidth - 10, windowHeight - 65)
    }
  }

  if (manualstate == 0){
    if(shapemode == "none" && outlinemode == 0 && mouseX > 1220 && mouseX < 1270 && mouseY > 5 && mouseY < 55 && mouseIsPressed){
      manualstate = 1
    }
    if (outlinemode == 0){
      if (mouseX > 5 &&mouseX < 25 &&mouseY > 5 &&mouseY < 25 &&mouseIsPressed){
        randomColourMode = 0
        c = color(128, 0, 0, opcslider.value())
        colourConfirm = "maroon"
      }
      else if (mouseX > 30 && mouseX < 50 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
        randomColourMode = 0
        c = color(255, 0, 0, opcslider.value())
        colourConfirm = "red"
      }
      else if (mouseX > 55 && mouseX < 75 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
        randomColourMode = 0
        c = color(255, 165, 0, opcslider.value())
        colourConfirm = "orange"
      }
      else if (mouseX > 80 && mouseX < 100 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
        randomColourMode = 0
        c = color(255, 255, 0, opcslider.value())
        colourConfirm = "yellow"
      }
      else if (mouseX > 105 && mouseX < 125 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
        randomColourMode = 0
        c = color(144, 238, 144, opcslider.value())
        colourConfirm = "lightgreen"
      }
      else if (mouseX > 130 && mouseX < 150 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
        randomColourMode = 0
        c = color(0, 128, 0, opcslider.value())
        colourConfirm = "green"
      }
      else if (mouseX > 155 && mouseX < 175 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
        randomColourMode = 0
        c = color(64, 224, 208, opcslider.value())
        colourConfirm = "turquoise"
      }
      else if (mouseX > 5 && mouseX < 25 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        c = color(135, 206, 235, opcslider.value())
        colourConfirm = "skyblue"
      }
      else if (mouseX > 30 && mouseX < 50 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        c = color(0, 0, 255, opcslider.value())
        colourConfirm = "blue"
      }
      else if (mouseX > 55 && mouseX < 75 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        c = color(0, 0, 128, opcslider.value())
        colourConfirm = "navy"
      }
      else if(mouseX > 80 && mouseX < 100 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        c = color(128, 0, 128, opcslider.value())
        colourConfirm = "purple"
      }
      else if (mouseX > 105 && mouseX < 125 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        c = color(238, 130, 238, opcslider.value())
        colourConfirm = "violet"
      }
      else if (mouseX > 130 && mouseX < 150 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        c = color(255, 255, 255, opcslider.value())
        colourConfirm = "white"
      }
      else if (mouseX > 155 && mouseX < 175 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        c = color(0, 0, 0, opcslider.value())
        colourConfirm = "black"
      }
      else if (mouseX > 180 && mouseX < 200 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        c = color(red(colourpicker.value()), green(colourpicker.value()), blue(colourpicker.value()), opcslider.value())
        colourConfirm = "salmon"
      }
      else if (mouseX > 180 && mouseX < 200 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
        randomColourMode = 1
      }
    }

    if (outlinemode == 1){
      if (mouseX > 5 &&mouseX < 25 &&mouseY > 5 &&mouseY < 25 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(128, 0, 0, opcslider.value())
        colourConfirm = "maroon"
      }
      else if (mouseX > 30 && mouseX < 50 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(255, 0, 0, opcslider.value())
        colourConfirm = "red"
      }
      else if (mouseX > 55 && mouseX < 75 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(255, 165, 0, opcslider.value())
        colourConfirm = "orange"
      }
      else if (mouseX > 80 && mouseX < 100 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(255, 255, 0, opcslider.value())
        colourConfirm = "yellow"
      }
      else if (mouseX > 105 && mouseX < 125 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(144, 238, 144, opcslider.value())
        colourConfirm = "lightgreen"
      }
      else if (mouseX > 130 && mouseX < 150 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(0, 128, 0, opcslider.value())
        colourConfirm = "green"
      }
      else if (mouseX > 155 && mouseX < 175 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(64, 224, 208, opcslider.value())
        colourConfirm = "turquoise"
      }
      else if (mouseX > 5 && mouseX < 25 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(135, 206, 235, opcslider.value())
        colourConfirm = "skyblue"
      }
      else if (mouseX > 30 && mouseX < 50 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(0, 0, 255, opcslider.value())
        colourConfirm = "blue"
      }
      else if (mouseX > 55 && mouseX < 75 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(0, 0, 128, opcslider.value())
        colourConfirm = "navy"
      }
      else if(mouseX > 80 && mouseX < 100 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(128, 0, 128, opcslider.value())
        colourConfirm = "purple"
      }
      else if (mouseX > 105 && mouseX < 125 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(238, 130, 238, opcslider.value())
        colourConfirm = "violet"
      }
      else if (mouseX > 130 && mouseX < 150 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(255, 255, 255, opcslider.value())
        colourConfirm = "white"
      }
      else if (mouseX > 155 && mouseX < 175 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(0, 0, 0, opcslider.value())
        colourConfirm = "black"
      }
      else if (mouseX > 180 && mouseX < 200 && mouseY > 30 && mouseY < 50 && mouseIsPressed){
        randomColourMode = 0
        outlinec = color(red(colourpicker.value()), green(colourpicker.value()), blue(colourpicker.value()), opcslider.value())
        colourConfirm = "salmon"
      }
      else if (mouseX > 180 && mouseX < 200 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
        randomColourMode = 1
      }
    }
    if (mouseX > 460 && mouseX < 510 && mouseY > 5 && mouseY < 55 && mouseIsPressed){
      mode = 0
    }
    else if (mouseX > 515 && mouseX < 565 && mouseY > 5 && mouseY < 55 && mouseIsPressed){
      mode = 1
    }
    else if (mouseX > 570 && mouseX < 630 && mouseY > 5 && mouseY < 55 && mouseIsPressed){
      mode = 2
    }
    else if (mouseX > 635 && mouseX < 685 && mouseY > 5 && mouseY < 55 && mouseIsPressed){
      mode = 3
    }
    else if (mouseX > 690 && mouseX < 740 && mouseY > 5 && mouseY < 55 && mouseIsPressed){
      mode = 4
    }
    else if (mouseX > 745 && mouseX < 795 && mouseY > 5 && mouseY < 55 && mouseIsPressed){
      mode = 5
    }
    else if (outlinemode == 0 && mouseX > 1070 && mouseX < 1160 && mouseY > 5 && mouseY < 55 && mouseIsPressed){
      stroke(0)
      strokeWeight(1)
      fill(220)
      rect(5, 60, windowWidth - 10, windowHeight - 65)
    }
    else if (outlinemode == 0 && mouseX > 1165 && mouseX < 1215 && mouseY > 5 && mouseY < 55 && mouseIsPressed){
      savedrawing = canvas.get(5, 60, windowWidth - 10, windowHeight - 65)
      savedrawing.save("Untitled Drawing", "jpg")
    }

    if (outlinemode == 0 && mouseIsPressed && mouseX > 220 && mouseX < 270 && mouseY > 5 && mouseY < 55){
      outlinemode = 1
    }
    else if (outlinemode == 1 && mouseIsPressed && mouseX > 220 && mouseX < 270 && mouseY > 5 && mouseY < 55){
      outlinemode = 0
    }

    if (mouseX > 1275 && mouseX < 1325 && mouseY > 5 && mouseY < 55 && mouseIsPressed){
      counter = 0
      shapemode = "triangle"
    }
    else if (mouseX > 1330 && mouseX < 1380 && mouseY > 5 && mouseY < 55 && mouseIsPressed){
      counter = 0
      shapemode = "rect"
    }
    else if (mouseX > 1385 && mouseX < 1435 && mouseY > 5 && mouseY < 55 && mouseIsPressed){
      counter = 0
      shapemode = "quad"
    }
    else if (mouseX > 1440 && mouseX < 1490 && mouseY > 5 && mouseY < 55 && mouseIsPressed){
      counter = 0
      shapemode = "ellipse"
    }
    else if (mouseX > 1495 && mouseX < 1595 && mouseY > 5 && mouseY < 25 && mouseIsPressed){
      counter = 0
      shapemode ='none'
    }
    
    if (mouseX > 1495 && mouseX < 1595 && mouseY > 30 && mouseY < 50 && mouseIsPressed && shapeoutline == 0){
      shapeoutline = 1
    }
    else if (mouseX > 1495 && mouseX < 1595 && mouseY > 30 && mouseY < 50 && mouseIsPressed && shapeoutline == 1){
      shapeoutline = 0
    }
    
    if (shapemode == 'triangle' && mouseIsPressed && counter == 0 && mouseX > (5 + ptslider.value()) && mouseX < windowWidth - (5 + ptslider.value()) && mouseY > (60 + ptslider.value()) && mouseY < windowHeight - (5 + ptslider.value())){
      mousex1 = mouseX
      mousey1 = mouseY
      counter = 1
    }
    else if (shapemode == 'triangle' && mouseIsPressed && counter == 1 && mouseX > (5 + ptslider.value()) && mouseX < windowWidth - (5 + ptslider.value()) && mouseY > (60 + ptslider.value()) && mouseY < windowHeight - (5 + ptslider.value())){
      mousex2 = mouseX
      mousey2 = mouseY
      counter = 2
    }
    else if (shapemode == 'triangle' && mouseIsPressed && counter == 2 && mouseX > (5 + ptslider.value()) && mouseX < windowWidth - (5 + ptslider.value()) && mouseY > (60 + ptslider.value()) && mouseY < windowHeight - (5 + ptslider.value())){
      mousex3 = mouseX
      mousey3 = mouseY
      counter = 3
    }
    
    if (shapemode == 'quad' && mouseIsPressed && counter == 0 && mouseX > (5 + ptslider.value()) && mouseX < windowWidth - (5 + ptslider.value()) && mouseY > (60 + ptslider.value()) && mouseY < windowHeight - (5 + ptslider.value())){
      mousex1 = mouseX
      mousey1 = mouseY
      counter = 1
    }
    else if (shapemode == 'quad' && mouseIsPressed && counter == 1 && mouseX > (5 + ptslider.value()) && mouseX < windowWidth - (5 + ptslider.value()) && mouseY > (60 + ptslider.value()) && mouseY < windowHeight - (5 + ptslider.value())){
      mousex2 = mouseX
      mousey2 = mouseY
      counter = 2
    }
    else if (shapemode == 'quad' && mouseIsPressed && counter == 2 && mouseX > (5 + ptslider.value()) && mouseX < windowWidth - (5 + ptslider.value()) && mouseY > (60 + ptslider.value()) && mouseY < windowHeight - (5 + ptslider.value())){
      mousex3 = mouseX
      mousey3 = mouseY
      counter = 3
    }
    else if (shapemode == 'quad' && mouseIsPressed && counter == 3 && mouseX > (5 + ptslider.value()) && mouseX < windowWidth - (5 + ptslider.value()) && mouseY > (60 + ptslider.value()) && mouseY < windowHeight - (5 + ptslider.value())){
      mousex4 = mouseX
      mousey4 = mouseY
      counter = 4
    }
    
    if (shapemode == 'rect' && mouseIsPressed && counter == 0 && mouseX > (5 + ptslider.value()) && mouseX < windowWidth - (5 + ptslider.value()) && mouseY > (60 + ptslider.value()) && mouseY < windowHeight - (5 + ptslider.value())){
      mousex1 = mouseX
      mousey1 = mouseY
      counter = 1
    }
    else if (shapemode == 'rect' && mouseIsPressed && counter == 1 && mouseX > (5 + ptslider.value()) && mouseX < windowWidth - (5 + ptslider.value()) && mouseY > (60 + ptslider.value()) && mouseY < windowHeight - (5 + ptslider.value())){
      mousex2 = mouseX
      mousey2 = mouseY
      counter = 2
    }
    
    if (shapemode == 'ellipse' && mouseIsPressed && counter == 0 && mouseX > (5 + ptslider.value()) && mouseX < windowWidth - (5 + ptslider.value()) && mouseY > (60 + ptslider.value()) && mouseY < windowHeight - (5 + ptslider.value())){
      mousex1 = mouseX
      mousey1 = mouseY
      counter = 1
    }
    else if (shapemode == 'ellipse' && mouseIsPressed && counter == 1 && mouseX > (5 + ptslider.value()) && mouseX < windowWidth - (5 + ptslider.value()) && mouseY > (60 + ptslider.value()) && mouseY < windowHeight - (5 + ptslider.value())){
      mousex2 = mouseX
      mousey2 = mouseY
      counter = 2
    }
  }
}

function keyPressed(){
  if (manualstate == 0){
    if (outlinemode == 0 && key == "i"){
      manualstate = 1
    }

    if (shapemode == "none" && outlinemode == 0 && key == "c"){
      stroke(0)
      strokeWeight(1)
      fill(220)
      rect(5, 60, windowWidth - 10, windowHeight - 65)
    }

    if (shapemode == "none" && outlinemode == 0 && key == "l"){
      savedrawing = canvas.get(5, 60, windowWidth - 10, windowHeight - 65)
      savedrawing.save("Untitled Drawing", "jpg")
    } 

    if (key == "m" && mode == 0){
      mode = 1
    }
    else if (key == "m" && mode == 1){
      mode = 2
    }
    else if (key == "m" && mode == 2){
      mode = 3
    }
    else if (key == "m" && mode == 3){
      mode = 4
    }
    else if (key == "m" && mode == 4){
      mode = 5
    }
    else if (key == "m" && mode == 5){
      mode = 0
    }

    if (outlinemode == 0){
      if (keyCode === RIGHT_ARROW && colourConfirm == "maroon"){
        colourConfirm = "red"
        c = color(255, 0, 0, opcslider.value())
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "maroon"){
        colourConfirm = "skyblue"
        c = color(135, 206, 235, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "red"){
        colourConfirm = "orange"
        c = color(255, 165, 0, opcslider.value())
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "red"){
        colourConfirm = "blue"
        c = color(0, 0, 255, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "red"){
        colourConfirm = "maroon"
        c = color(128, 0, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "orange"){
        colourConfirm = "yellow"
        c = color(255, 255, 0, opcslider.value())
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "orange"){
        colourConfirm = "navy"
        c = color(0, 0, 128, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "orange"){
        colourConfirm = "red"
        c = color(255, 0, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "yellow"){
        colourConfirm = "lightgreen"
        c = color(144, 238, 144, opcslider.value())
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "yellow"){
        colourConfirm = "purple";
        c = color(128, 0, 128, opcslider.value());
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "yellow") {
        colourConfirm = "orange"
        c = color(255, 165, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "lightgreen"){
        colourConfirm = "green"
        c = color(0, 128, 0, opcslider.value())
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "lightgreen"){
        colourConfirm = "violet"
        c = color(230, 138, 230, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "lightgreen"){
        colourConfirm = "yellow"
        c = color(255, 255, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "green"){
        colourConfirm = "turquoise"
        c = color(64, 224, 208, opcslider.value())
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "green"){
        colourConfirm = "white"
        c = color(255, 255, 255, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "green"){
         colourConfirm = "lightgreen"
        c = color(144, 238, 144, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "turquoise"){
        colourConfirm = "pink"
        randomColourMode = 1
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "turquoise"){
        colourConfirm = "black"
        c = color(0, 0, 0, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "turquoise"){
        colourConfirm = "green"
        c = color(0, 128, 0, opcslider.value())
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "pink"){
        colourConfirm = "salmon"
        c = color(red(colourpicker.value()), green(colourpicker.value()), blue(colourpicker.value()), opcslider.value())
          randomColourMode = 0
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "pink"){
        colourConfirm = "turquoise"
        c = color(64, 224, 208, opcslider.value())
        randomColourMode = 0
      }
      else if (keyCode === UP_ARROW && colourConfirm == "skyblue"){
        colourConfirm = "maroon"
        c = color(128, 0, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "skyblue"){
        colourConfirm = "blue"
        c = color(0, 0, 255, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "blue"){
        colourConfirm = "skyblue"
        c = color(135, 206, 235, opcslider.value())
      }
      else if (keyCode === UP_ARROW && colourConfirm == "blue"){
        colourConfirm = "red"
        c = color(255, 0, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "blue"){
        colourConfirm = "navy"
        c = color(0, 0, 128, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "navy"){
        colourConfirm = "blue"
        c = color(0, 0, 255, opcslider.value())
      }
      else if (keyCode === UP_ARROW && colourConfirm == "navy"){
        colourConfirm = "orange"
        c = color(255, 165, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "navy"){
        colourConfirm = "purple"
        c = color(128, 0, 128, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "purple"){
        colourConfirm = "navy"
        c = color(0, 0, 128, opcslider.value())
      }
      else if (keyCode === UP_ARROW && colourConfirm == "purple"){
        colourConfirm = "yellow"
        c = color(255, 255, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "purple"){
        colourConfirm = "violet"
        c = color(238, 130, 238, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "violet"){
        colourConfirm = "purple"
        c = color(128, 0, 128, opcslider.value())
      }
      else if (keyCode === UP_ARROW && colourConfirm == "violet"){
        colourConfirm = "lightgreen"
        c = color(144, 238, 144, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "violet"){
        colourConfirm = "white"
        c = color(255, 255, 255, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "white"){
        colourConfirm = "violet"
        c = color(238, 130, 238, opcslider.value())
      }
      else if (keyCode === UP_ARROW && colourConfirm == "white"){
        colourConfirm = "green"
        c = color(0, 128, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "white"){
        colourConfirm = "black"
        c = color(0, 0, 0, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "black"){
        colourConfirm = "white"
        c = color(255, 255, 255, opcslider.value())
      }
      else if (keyCode === UP_ARROW && colourConfirm == "black"){
        colourConfirm = "turquoise"
        c = color(64, 224, 208, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "black"){
        colourConfirm = "salmon"
        c = color(red(colourpicker.value()), green(colourpicker.value()), blue(colourpicker.value()), opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "salmon"){
        colourConfirm = "black"
        c = (0, 0, 0, opcslider.value())
      }
      else if (keyCode === UP_ARROW && colourConfirm == "salmon"){
        colourConfirm = "pink"
        randomColourMode = 1
      }
    }
    
    else if (outlinemode == 1){
      if (keyCode === RIGHT_ARROW && colourConfirm == "maroon"){
        colourConfirm = "red"
        outlinec = color(255, 0, 0, opcslider.value())
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "maroon"){
        colourConfirm = "skyblue"
        outlinec = color(135, 206, 235, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "red"){
        colourConfirm = "orange"
        outlinec = color(255, 165, 0, opcslider.value())
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "red"){
        colourConfirm = "blue"
        outlinec = color(0, 0, 255, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "red"){
        colourConfirm = "maroon"
        outlinec = color(128, 0, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "orange"){
        colourConfirm = "yellow"
        outlinec = color(255, 255, 0, opcslider.value())
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "orange"){
        colourConfirm = "navy"
        outlinec = color(0, 0, 128, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "orange"){
        colourConfirm = "red"
        outlinec = color(255, 0, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "yellow"){
        colourConfirm = "lightgreen"
        outlinec = color(144, 238, 144, opcslider.value())
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "yellow"){
        colourConfirm = "purple";
        outlinec = color(128, 0, 128, opcslider.value());
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "yellow") {
        colourConfirm = "orange"
        outlinec = color(255, 165, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "lightgreen"){
        colourConfirm = "green"
        outlinec = color(0, 128, 0, opcslider.value())
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "lightgreen"){
        colourConfirm = "violet"
        outlinec = color(230, 138, 230, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "lightgreen"){
        colourConfirm = "yellow"
        outlinec = color(255, 255, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "green"){
        colourConfirm = "turquoise"
        outlinec = color(64, 224, 208, opcslider.value())
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "green"){
        colourConfirm = "white"
        outlinec = color(255, 255, 255, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "green"){
        colourConfirm = "lightgreen"
        outlinec = color(144, 238, 144, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "turquoise"){
        colourConfirm = "pink"
        randomColourMode = 1
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "turquoise"){
        colourConfirm = "black"
        outlinec = color(0, 0, 0, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "turquoise"){
        colourConfirm = "green"
        outlinec = color(0, 128, 0, opcslider.value())
      }
      else if (keyCode === DOWN_ARROW && colourConfirm == "pink"){
        colourConfirm = "salmon"
        outlinec = color(red(colourpicker.value()), green(colourpicker.value()), blue(colourpicker.value()), opcslider.value())
          randomColourMode = 0
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "pink"){
        colourConfirm = "turquoise"
        outlinec = color(64, 224, 208, opcslider.value())
        randomColourMode = 0
      }
      else if (keyCode === UP_ARROW && colourConfirm == "skyblue"){
        colourConfirm = "maroon"
        outlinec = color(128, 0, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "skyblue"){
        colourConfirm = "blue"
        outlinec = color(0, 0, 255, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "blue"){
        colourConfirm = "skyblue"
        outlinec = color(135, 206, 235, opcslider.value())
      }
      else if (keyCode === UP_ARROW && colourConfirm == "blue"){
        colourConfirm = "red"
        outlinec = color(255, 0, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "blue"){
        colourConfirm = "navy"
        outlinec = color(0, 0, 128, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "navy"){
        colourConfirm = "blue"
        outlinec = color(0, 0, 255, opcslider.value())
      }
      else if (keyCode === UP_ARROW && colourConfirm == "navy"){
        colourConfirm = "orange"
        outlinec = color(255, 165, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "navy"){
        colourConfirm = "purple"
        outlinec = color(128, 0, 128, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "purple"){
        colourConfirm = "navy"
        outlinec = color(0, 0, 128, opcslider.value())
      }
      else if (keyCode === UP_ARROW && colourConfirm == "purple"){
        colourConfirm = "yellow"
        outlinec = color(255, 255, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "purple"){
        colourConfirm = "violet"
        outlinec = color(238, 130, 238, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "violet"){
        colourConfirm = "purple"
        outlinec = color(128, 0, 128, opcslider.value())
      }
      else if (keyCode === UP_ARROW && colourConfirm == "violet"){
        colourConfirm = "lightgreen"
        outlinec = color(144, 238, 144, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "violet"){
        colourConfirm = "white"
        outlinec = color(255, 255, 255, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "white"){
        colourConfirm = "violet"
        outlinec = color(238, 130, 238, opcslider.value())
      }
      else if (keyCode === UP_ARROW && colourConfirm == "white"){
        colourConfirm = "green"
        outlinec = color(0, 128, 0, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "white"){
        colourConfirm = "black"
        outlinec = color(0, 0, 0, opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "black"){
        colourConfirm = "white"
        outlinec = color(255, 255, 255, opcslider.value())
      }
      else if (keyCode === UP_ARROW && colourConfirm == "black"){
        colourConfirm = "turquoise"
        outlinec = color(64, 224, 208, opcslider.value())
      }
      else if (keyCode === RIGHT_ARROW && colourConfirm == "black"){
        colourConfirm = "salmon"
        outlinec = color(red(colourpicker.value()), green(colourpicker.value()), blue(colourpicker.value()), opcslider.value())
      }
      else if (keyCode === LEFT_ARROW && colourConfirm == "salmon"){
        outlinecolourConfirm = "black"
        c = (0, 0, 0, opcslider.value())
      }
      else if (keyCode === UP_ARROW && colourConfirm == "salmon"){
        colourConfirm = "pink"
        randomColourMode = 1
      }
    }
    if (key == "w"){
      penthickness = ptslider.value()
      penthickness = penthickness + 1
      ptslider.value(penthickness)
    }
    else if (key == "s"){
      penthickness = ptslider.value()
      penthickness = penthickness - 1
      ptslider.value(penthickness)
    }
    else if (key == "d"){
      eraserthickness = etslider.value()
      eraserthickness = eraserthickness + 1
      etslider.value(eraserthickness)
    }
    else if (key == "a"){
      eraserthickness = etslider.value()
      eraserthickness = eraserthickness - 1
      etslider.value(eraserthickness)
    }
    if (key == "z"){
      opacity = opcslider.value()
      opacity = opacity - 5
      opcslider.value(opacity)
    }
    else if (key == "x"){
      opacity = opcslider.value()
      opacity = opacity + 5
      opcslider.value(opacity)
    }
    if (key == "e"){
      pot = potslider.value()
      pot = pot - 1
      potslider.value(pot)
    }
    else if (key == "r"){
      pot = potslider.value()
      pot = pot + 1
      potslider.value(pot)
    }
    
    if (keyCode === SHIFT && outlinemode == 1){
      outlinemode = 0
    }
    else if (keyCode === SHIFT && outlinemode == 0){
      outlinemode = 1
    }
    
    if (key == "o" && shapeoutline == 0){
      shapeoutline = 1
    }
    else if (key == "o" && shapeoutline == 1){
      shapeoutline = 0
    }
    
    if (key == "p" && shapemode == 'none'){
      shapemode = 'triangle'
      counter = 0
    }
    else if (key == "p" && shapemode == 'triangle'){
      shapemode = 'rect'
      counter = 0
    }
    else if (key == "p" && shapemode == 'rect'){
      shapemode = 'quad'
      counter = 0
    }
    else if (key == "p" && shapemode == 'quad'){
      shapemode = 'ellipse'
      counter = 0
    }
    else if (key == "p" && shapemode == 'ellipse'){
      shapemode = 'triangle'
      counter = 0
    }
    
    if (key == "0"){
      shapemode = 'none'
      counter = 0
    }
  }
}
//End of Code