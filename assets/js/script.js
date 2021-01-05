// ===DOM VARIABLES===
var linkedinToggleEl = $("#linkedin");
var linkedinShowEl = $("#collapse-linkedin");
var githubToggleEl = $("#github");
var githubShowEl = $("#collapse-github");
var resumeToggleEl = $("#resume");
var resumeShowEl = $("#collapse-resume");

// ===JS VARIABLES===
var showLinkedin = false;
var showGithub = false;
var showResume = false;

// ===FUNCTION DEFINITIONS===
function toggleLinkedin() {
  if (showLinkedin === false) {
    showLinkedin = true;
    linkedinToggleEl.attr("aria-expanded", "true");
    linkedinShowEl.addClass("show");
  } else {
    showLinkedin = false;
    linkedinToggleEl.attr("aria-expanded", "false");
    linkedinShowEl.removeClass("show");
  }

  showGithub = false;
  githubToggleEl.attr("aria-expanded", "false");
  githubShowEl.removeClass("show");

  showResume = false;
  resumeToggleEl.attr("aria-expanded", "false");
  resumeShowEl.removeClass("show");
}

function toggleGithub() {
  if (showGithub === false) {
    showGithub = true;
    githubToggleEl.attr("aria-expanded", "true");
    githubShowEl.addClass("show");
  } else {
    showGithub = false;
    githubToggleEl.attr("aria-expanded", "false");
    githubShowEl.removeClass("show");
  }

  showLinkedin = false;
  linkedinToggleEl.attr("aria-expanded", "false");
  linkedinShowEl.removeClass("show");

  showResume = false;
  resumeToggleEl.attr("aria-expanded", "false");
  resumeShowEl.removeClass("show");
}

function toggleResume() {
  if (showResume === false) {
    showResume = true;
    resumeToggleEl.attr("aria-expanded", "true");
    resumeShowEl.addClass("show");
  } else {
    showResume = false;
    resumeToggleEl.attr("aria-expanded", "false");
    resumeShowEl.removeClass("show");
  }
  showLinkedin = false;
  linkedinToggleEl.attr("aria-expanded", "false");
  linkedinShowEl.removeClass("show");

  showGithub = false;
  githubToggleEl.attr("aria-expanded", "false");
  githubShowEl.removeClass("show");
}

// ===EVENT LISTENERS===
linkedinToggleEl.on("click", toggleLinkedin);

githubToggleEl.on("click", toggleGithub);

resumeToggleEl.on("click", toggleResume);
