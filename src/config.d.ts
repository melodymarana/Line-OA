export {};

declare global {
  interface Window {
    config?: {
      VITE_LIFF_ID: string;
      VITE_BUGSNAG_API_KEY: string;
      VITE_BUGSNAG_RELEASE_STAGE: string;
    };
  }
}
