var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["00e46d60-0468-4c14-80ff-ef7cec4baec2","41fb2270-4145-4ce8-bba4-76626683adec","d9adb0af-672d-4cb1-91d4-c2a258a4b4a5","ca758cbe-d5ac-49eb-922f-e965a725b9db","548785ac-f8db-46ba-b891-1bf162fa3109","abd59bbd-c70f-4dec-abf3-37bf0edfaf36"],"propsByKey":{"00e46d60-0468-4c14-80ff-ef7cec4baec2":{"name":"carrot","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/00e46d60-0468-4c14-80ff-ef7cec4baec2.png","frameSize":{"x":17,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"T6yD4I.yA6M9HrSe6ooi_5U9Pri_Nvac","loadedFromSource":true,"saved":true,"sourceSize":{"x":17,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/00e46d60-0468-4c14-80ff-ef7cec4baec2.png"},"41fb2270-4145-4ce8-bba4-76626683adec":{"name":"brinjal","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/41fb2270-4145-4ce8-bba4-76626683adec.png","frameSize":{"x":25,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"G2.3ZzmtIb4fM.pXWVdX6LVuwS6xj2e.","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/41fb2270-4145-4ce8-bba4-76626683adec.png"},"d9adb0af-672d-4cb1-91d4-c2a258a4b4a5":{"name":"capcisum","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/d9adb0af-672d-4cb1-91d4-c2a258a4b4a5.png","frameSize":{"x":27,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"p9xI.2AJsW.xbBJ9SWyTRE2jY1l4BwZ1","loadedFromSource":true,"saved":true,"sourceSize":{"x":27,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/d9adb0af-672d-4cb1-91d4-c2a258a4b4a5.png"},"ca758cbe-d5ac-49eb-922f-e965a725b9db":{"name":"orange","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/ca758cbe-d5ac-49eb-922f-e965a725b9db.png","frameSize":{"x":35,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"rHX46dF8qRbTQrt7Tu2dySjEo3yJBDHe","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/ca758cbe-d5ac-49eb-922f-e965a725b9db.png"},"548785ac-f8db-46ba-b891-1bf162fa3109":{"name":"tomato","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/548785ac-f8db-46ba-b891-1bf162fa3109.png","frameSize":{"x":39,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"yzdqjQBd8fMyoSkr5.vHQajWYEWPmd0y","loadedFromSource":true,"saved":true,"sourceSize":{"x":39,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/548785ac-f8db-46ba-b891-1bf162fa3109.png"},"abd59bbd-c70f-4dec-abf3-37bf0edfaf36":{"name":"onion","sourceUrl":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/abd59bbd-c70f-4dec-abf3-37bf0edfaf36.png","frameSize":{"x":25,"y":43},"frameCount":1,"looping":true,"frameDelay":4,"version":"WFpLLHBi7Hw1r_AMTKDk2ve4K.2cP8Vo","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":43},"rootRelativePath":"assets/v3/animations/8OUdxH2YQ3Iwb5WYxPW70l5yhN6iiLEuMKi6B00DTWc/abd59bbd-c70f-4dec-abf3-37bf0edfaf36.png"}}};
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

for (var i = 50; i < 400; i=i+50) 
{
  var tomate = createSprite(i, 50, 20, 20);
tomate.setAnimation("tomato");

  }

 for (var i = 50; i < 400; i=i+50) 
{
  var cenoura = createSprite(i, 100, 20, 20);

cenoura.setAnimation("carrot");

  }
 
for (var i = 50; i < 400; i=i+50) 
{
  var beringela = createSprite(i, 150, 20, 20);

beringela.setAnimation("brinjal");


  }

for (var i = 50; i < 400; i=i+50) 
{
  var capcisum = createSprite(i, 200, 20, 20);
capcisum.setAnimation("capcisum");

  }

for (var i = 50; i < 400; i=i+50) 
{
  var cebola = createSprite(i, 250, 20, 20);
cebola.setAnimation("onion");

  }




function draw() {
  drawSprites()
  
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
