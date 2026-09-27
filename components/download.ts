// Google Play store link — PLACEHOLDER. Swap for the real store URL at launch.
export const PLAY_STORE_URL = '#';

// All three below use GitHub's evergreen "latest release" asset URL:
// https://github.com/<owner>/<repo>/releases/latest/download/<asset-name>
// GitHub redirects this straight to the current latest release's matching
// asset and serves it with Content-Disposition: attachment, so the browser
// downloads the file immediately — no landing page, no manual updates here
// as long as the CI-published asset filenames stay the same across releases.
const RELEASES_BASE = 'https://github.com/Chandan-GS/Echo/releases';

// Android APK, built by the "Build Android APK" job in build-and-release.yml.
export const DOWNLOAD_URL = `${RELEASES_BASE}/latest/download/Echo-1.0.0.apk`;

// macOS .dmg (built/uploaded separately from CI).
export const MAC_DOWNLOAD_URL = `${RELEASES_BASE}/latest/download/Echo-1.0.0-macos.dmg`;

// Windows build, zipped by the "Build Windows App" job in build-and-release.yml.
export const WINDOWS_DOWNLOAD_URL = `${RELEASES_BASE}/latest/download/Echo-windows.zip`;

// Releases page, kept for anywhere we want to link to the full list instead
// of a single-platform direct download.
export const DESKTOP_DOWNLOAD_URL = RELEASES_BASE;

export const OPEN_DOWNLOAD_EVENT = 'echo:open-download';

/** Fire the event that opens the install-help modal (client-side only). */
export function openDownloadModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(OPEN_DOWNLOAD_EVENT));
  }
}
