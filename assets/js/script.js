// ===DOM VARIABLES===
var linkedinToggleEl = $('#linkedin');
var linkedinShowEl = $('#collapse-linkedin');
var githubToggleEl = $('#github');
var githubShowEl = $('#collapse-github');

// ===JS VARIABLES===
var showLinkedin = false;
var showGithub = false;

// ===FUNCTION DEFINITIONS===
function toggleLinkedin() {
    if(showLinkedin === false) {
        showLinkedin = true;
        linkedinToggleEl.attr('aria-expanded', 'true');
        linkedinShowEl.addClass('show');
    } else {
        showLinkedin = false;
        linkedinToggleEl.attr('aria-expanded', 'false');
        linkedinShowEl.removeClass('show');
    }
}

function toggleGithub() {
    if(showGithub === false) {
        showGithub = true;
        githubToggleEl.attr('aria-expanded', 'true');
        githubShowEl.addClass('show');
    } else {
        showGithub = false;
        githubToggleEl.attr('aria-expanded', 'false');
        githubShowEl.removeClass('show');
    }
}

// ===EVENT LISTENERS===
linkedinToggleEl.on('click', toggleLinkedin);

githubToggleEl.on('click', toggleGithub);