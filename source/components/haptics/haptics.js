const SHORT_VIBRATION_MS = 100;
const MEDIUM_VIBRATION_MS = 200;
const LONG_VIBRATION_MS = 300;

export function doFeedbackVibrations() {
    console.log("Feedback vibration");
    window.navigator.vibrate(SHORT_VIBRATION_MS);
}

export function doWarningVibrations() {
    console.log("Warning vibration");
    window.navigator.vibrate([MEDIUM_VIBRATION_MS, SHORT_VIBRATION_MS, LONG_VIBRATION_MS]);
}

let activeEditing = false;

const deleteAllBtn = document.getElementById('delete-all-btn');
const newLogBtn = document.getElementById('new-note-btn');
const editBtn = document.getElementById('edit-btn');

editBtn.addEventListener('activeEdit', () => {
    // if user clicks edit button, now in edit mode
    activeEditing = true;
    doFeedbackVibrations(); // quick feedback vibration
});

editBtn.addEventListener('deactiveEdit', () => {
    // if user clicks cancel button, now NOT in edit mode
    activeEditing = false;
});

document.addEventListener('openLog', () => {
    // if user clicks on a daily log component while not editing, do a quick vibration for feedback
    if (!activeEditing) {
        doFeedbackVibrations(); // quick feedback vibration
    }
});

deleteAllBtn.addEventListener('click', () => {
    // If user clicks the delete all button, we do a warning vibration
    doWarningVibrations();
})

newLogBtn.addEventListener('click', () => {
    // If user clicks on the button to create a new log, we do a quick vibration for feedback
    doFeedbackVibrations();
})

document.addEventListener('saveLog', () => {
    // If user saves a log, we do a quick vibration for feedback
    doFeedbackVibrations();
})