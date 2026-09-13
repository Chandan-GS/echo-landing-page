// Google Play store link — PLACEHOLDER. Swap for the real store URL at launch.
export const PLAY_STORE_URL = '#';

// The current Android download (sideload) destination, shown in the install modal.
export const DOWNLOAD_URL =
  'https://drive.google.com/drive/folders/16ARlmi1jQfeSJIzxgc9KR_qaepR7KMLA?usp=sharing';

export const OPEN_DOWNLOAD_EVENT = 'echo:open-download';

/** Fire the event that opens the install-help modal (client-side only). */
export function openDownloadModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(OPEN_DOWNLOAD_EVENT));
  }
}
