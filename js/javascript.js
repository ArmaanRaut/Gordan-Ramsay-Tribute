// All the captions are put into an array caption.
var caption = [
  '“My gran could do better! And she’s dead!”',
  '“For what we are about to eat, may the Lord make us truly not vomit.”',
  '“You’re getting your knickers in a twist! Calm down!”',
  '“This lamb is so undercooked, it’s following Mary to school!”',
  '“This pizza is so disgusting, if you take it to Italy you’ll get arrested.”',
  '“There’s enough garlic in here to kill every vampire in Europe.”',
  '“This is a really tough decision…’cause you’re both crap.”',
  'After trying Hawaiian pizza: “This isn’t a pizza, this is a mistake. This is an Italian tragedy.”',
  '“Why did the chicken cross the road? Because you didn’t F***ing cook it!”',
  '“You put so much ginger in this, it’s a Weasley.”'
]

// vatiable c initialized with the value 0
var c = 0;

// function newCap() created for the captions
function newCap(){

  // condition for sequential displaying of the captions
  // if conditon to revert back to the first caption when the list of caption is over
  if(c==9)
  {
    c=0;
  }
  else{
    c +=1;
  }

  // For displaying the caption from the array caption
  document.getElementById('img-caption').innerHTML = caption[c];
}