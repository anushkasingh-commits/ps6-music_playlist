export default function formatDuration(seconds) {
    const minutes = Math.floor(seconds/60)
    const secs = seconds % 60

    const paddedSecs = secs < 10 ? '0' + secs : secs
    return minutes + ':' + paddedSecs
}