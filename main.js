$(function () {
  const jobInput = $('#job-input');
  const placeInput = $('#place-input');
  const sillyWordInput = $('#sillyWord-input');
  const funnyInput = $('#funny-input');
  const sent = $('#sentence');
  var nounDisplay = "";
  var verbDisplay = "";
  var adjDisplay = "";
  var adverbDisplay = "";
  $('#first').click(function () {
    jobDisplay = jobInput.val();
  });
  $('#second').click(function () {
    placeDisplay = placeInput.val();
  });
  $('#third').click(function () {
    sillyWordDisplay = sillyWordInput.val();
  });
  $('#fourth').click(function () {
    funnyDisplay = funnyInput.val();
    sent.text("Dr. Harleen Frances Quinzel is depicted as having been a " + jobDisplay + " at " + placeDisplay + " and was assigned to treat the inmate, " + sillyWordDisplay + ". She eventually falls in love with the Joker and becomes his lover and accomplice. She follows suit in the Joker's clown-themed, criminal antics and adopts the name Harley Quinn, Harley also refers to the Joker as Mistah J and her nickname is" + funnyDisplay + ". ")
  });

});