const SHORT_VIBRATION_MS = 50;
const MEDIUM_VIBRATION_MS = 150;
const LONG_VIBRATION_MS = 300;

export function doFeedbackVibrations() {
    console.log("Feedback vibration");
    window.navigator.vibrate(SHORT_VIBRATION_MS);
}

export function doWarningVibrations() {
    window.navigator.vibrate([MEDIUM_VIBRATION_MS, MEDIUM_VIBRATION_MS, LONG_VIBRATION_MS]);
}