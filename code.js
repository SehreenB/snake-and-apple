var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["76ce6fda-aec4-4830-92bd-60c6b0f388e9","253c1f02-d2b8-4f2a-b613-f0746aadf605","4aec1d73-e2c3-40f7-b404-568d5a0c3e5b","e4ac4d3b-39e1-437c-b0f7-678abc164994","2ba05f05-9030-42c5-9e10-20908ae18490","ee6fea9f-9d6b-49e4-91fe-85bbda6d2bc0","7ba48f9d-7f73-4cf2-bfff-41f368913809","b3841ea7-6f47-4c0e-b9ae-6facb09c0ab3"],"propsByKey":{"76ce6fda-aec4-4830-92bd-60c6b0f388e9":{"name":"apple.png_1","sourceUrl":"assets/v3/animations/WACfFoyYAertcD3Ogw2O_OXWHQgPRJvstCcgqmdv3Ds/76ce6fda-aec4-4830-92bd-60c6b0f388e9.png","frameSize":{"x":452,"y":452},"frameCount":1,"looping":true,"frameDelay":4,"version":"NhXRJT5DCXzDalvPJzpXEacKUcUrvqH2","loadedFromSource":true,"saved":true,"sourceSize":{"x":452,"y":452},"rootRelativePath":"assets/v3/animations/WACfFoyYAertcD3Ogw2O_OXWHQgPRJvstCcgqmdv3Ds/76ce6fda-aec4-4830-92bd-60c6b0f388e9.png"},"253c1f02-d2b8-4f2a-b613-f0746aadf605":{"name":"snake_right","sourceUrl":null,"frameSize":{"x":597,"y":418},"frameCount":6,"looping":true,"frameDelay":12,"version":"0n0Fw2HBR1q2GHpMK.yOMUThm6PejvVA","loadedFromSource":true,"saved":true,"sourceSize":{"x":1194,"y":1254},"rootRelativePath":"assets/253c1f02-d2b8-4f2a-b613-f0746aadf605.png"},"4aec1d73-e2c3-40f7-b404-568d5a0c3e5b":{"name":"background.png_1","sourceUrl":"assets/v3/animations/WACfFoyYAertcD3Ogw2O_OXWHQgPRJvstCcgqmdv3Ds/4aec1d73-e2c3-40f7-b404-568d5a0c3e5b.png","frameSize":{"x":480,"y":320},"frameCount":1,"looping":true,"frameDelay":4,"version":"WFnziFCApU2mHDosuJTVA5a29GiHow9Y","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":320},"rootRelativePath":"assets/v3/animations/WACfFoyYAertcD3Ogw2O_OXWHQgPRJvstCcgqmdv3Ds/4aec1d73-e2c3-40f7-b404-568d5a0c3e5b.png"},"e4ac4d3b-39e1-437c-b0f7-678abc164994":{"name":"snake_down","sourceUrl":null,"frameSize":{"x":418,"y":597},"frameCount":6,"looping":true,"frameDelay":12,"version":"TZw_N70W2X9OCrsGUxHaWO5I4G3iJT5Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":1254,"y":1194},"rootRelativePath":"assets/e4ac4d3b-39e1-437c-b0f7-678abc164994.png"},"2ba05f05-9030-42c5-9e10-20908ae18490":{"name":"snake_up","sourceUrl":null,"frameSize":{"x":418,"y":597},"frameCount":6,"looping":true,"frameDelay":12,"version":"0tSJ.yqgVAG1D57L8KgnDavYPOdO2VZX","loadedFromSource":true,"saved":true,"sourceSize":{"x":1254,"y":1194},"rootRelativePath":"assets/2ba05f05-9030-42c5-9e10-20908ae18490.png"},"ee6fea9f-9d6b-49e4-91fe-85bbda6d2bc0":{"name":"snake_left","sourceUrl":null,"frameSize":{"x":597,"y":418},"frameCount":6,"looping":true,"frameDelay":12,"version":"H4i0x5COtabCPe8EV1388SHD.ncZC1AQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":1194,"y":1254},"rootRelativePath":"assets/ee6fea9f-9d6b-49e4-91fe-85bbda6d2bc0.png"},"7ba48f9d-7f73-4cf2-bfff-41f368913809":{"name":"poison.png_1","sourceUrl":"assets/v3/animations/WACfFoyYAertcD3Ogw2O_OXWHQgPRJvstCcgqmdv3Ds/7ba48f9d-7f73-4cf2-bfff-41f368913809.png","frameSize":{"x":615,"y":405},"frameCount":1,"looping":true,"frameDelay":4,"version":"VY.82vK3.kt6vAm3UNLGx2KoKr_K.iDV","loadedFromSource":true,"saved":true,"sourceSize":{"x":615,"y":405},"rootRelativePath":"assets/v3/animations/WACfFoyYAertcD3Ogw2O_OXWHQgPRJvstCcgqmdv3Ds/7ba48f9d-7f73-4cf2-bfff-41f368913809.png"},"b3841ea7-6f47-4c0e-b9ae-6facb09c0ab3":{"name":"serveButton","sourceUrl":"assets/v3/animations/WACfFoyYAertcD3Ogw2O_OXWHQgPRJvstCcgqmdv3Ds/b3841ea7-6f47-4c0e-b9ae-6facb09c0ab3.png","frameSize":{"x":512,"y":91},"frameCount":1,"looping":true,"frameDelay":4,"version":"W.XZ5ISLrcoq9J.YYr51bztdGWikXdvL","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":91},"rootRelativePath":"assets/v3/animations/WACfFoyYAertcD3Ogw2O_OXWHQgPRJvstCcgqmdv3Ds/b3841ea7-6f47-4c0e-b9ae-6facb09c0ab3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var serve = 0;
var play = 1;

var gameState = "serve"

var snake;
var grass;

var applesGroup;
var poisonsGroup;

var score = 0;

var serveButton;

function setup() {
  
  
    createCanvas(400, 400)

    grass = createSprite(200, 200, 400, 400);
    grass.setAnimation("background.png_1");
    grass.scale = 1.5;
    grass.visible = false

    snake = createSprite(200, 120, 50, 100);
    snake.setAnimation("snake_right");
    snake.scale = 0.3;

    serveButton = createSprite(240, 200, 50, 50)
    serveButton.setAnimation("serveButton")
    serveButton.scale = 0.9
    serveButton.visible = true


    applesGroup = new Group();
    poisonsGroup = new Group();

}




function draw() {
  
    background("lightgreen");
    
    if (gameState === "serve") {

        grass.visible = true
        serveButton.visible = true
        snake.scale = 0.18;

    if (keyDown("space")) {
          gameState = "play"
        }

    }



    if (gameState === "play") {
        serveButton.visible = false


        if (keyDown(RIGHT_ARROW)) {
            snake.x = snake.x + 3;
            snake.setAnimation("snake_right")
        }

        if (keyDown(LEFT_ARROW)) {
            snake.x = snake.x - 3;
            snake.setAnimation("snake_left")
        }

        if (keyDown(UP_ARROW)) {
            snake.y = snake.y - 3;
            snake.setAnimation("snake_up")
        }

        if (keyDown(DOWN_ARROW)) {
            snake.y = snake.y + 3;
            snake.setAnimation("snake_down");
        }

        if (applesGroup.isTouching(snake)) {

            applesGroup.destroyEach();
            score = score + 1;

        }

        if (poisonsGroup.isTouching(snake)) {
            poisonsGroup.destroyEach();
            score = score - 1;
        }

        if (score >= 5) {
            snake.scale = 0.2;
        }
        if (score >= 10) {
            snake.scale = 0.4;
        }
        if (score >= 15) {
            snake.scale = 0.6;
        }

        spawnApples();
        spawnPoison();
    }


    createEdgeSprites();
    snake.collide(edges);

    drawSprites();


    if (gameState == "play") {
        fill("white")
        textSize(20);
        text("Score: " + score, 160, 30);
    }



    if (gameState == "serve") {
        fill("white")
        textSize(15);
        text("Use the arrow keys to feed apples to the snake.", 45, 360);
        text("DON'T Touch The Poison!", 115, 380);
    }

}

function spawnApples() {

    if (frameCount % 100 === 0) {
        var apple = createSprite(200, 300);
        apple.setAnimation("apple.png_1");
        apple.scale = 0.1;
        apple.x = Math.round(random(50, 350));
        apple.y = Math.round(random(150, 350));

        applesGroup.add(apple);
    }
}

function spawnPoison() {

    if (frameCount % 200 === 0) {
        var poison = createSprite(200, 200);
        poison.setAnimation("poison.png_1");
        poison.scale = 0.1;
        poison.x = Math.round(random(50, 350));
        poison.y = Math.round(random(150, 350));
        poisonsGroup.setLifetimeEach(20)

        poisonsGroup.add(poison);
    }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
