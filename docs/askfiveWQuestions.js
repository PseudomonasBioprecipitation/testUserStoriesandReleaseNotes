// script.js

function generateUserStory() {
    const who = document.getElementById('who').value;
    const when = document.getElementById('when').value;
    const where = document.getElementById('where').value;
    const what = document.getElementById('what').value;
    const why = document.getElementById('why').value;

    const userStory = `As ${who} ${when} ${where}, I want ${what} because ${why}.`;
    document.getElementById('userStoryOutput').textContent = userStory;
}
