// Central legal values for the privacy & terms pages.
export const PENDING = false; // client legal details confirmed (2026-07-09)

// Client legal entity acting as Data Controller (a client product, not Designli).
export const COMPANY_NAME = "Buck Hub LLC";

// Where data-deletion / GDPR requests go.
export const CONTACT_EMAIL = "Brandi.Heffner@gmail.com";

// Registered business address for the data-controller block.
export const BUSINESS_ADDRESS = "440 35 Rd, Palisade, CO 81526";

// --- Finalized values ---
export const PRODUCT_NAME = "Buck Hub";
export const EFFECTIVE_DATE = "2026-06-19";
export const AGE_OF_CONSENT = "18";
export const APP_TYPE = "Free"; // waitlist phase
export const PLATFORM = "Web App"; // waitlist phase

// Third-party services actually in use during the waitlist phase.
export const THIRD_PARTY_PRIVACY = [
  { name: "PostHog", url: "https://posthog.com/privacy" },
  { name: "Vercel", url: "https://vercel.com/legal/privacy-policy" },
];
export const THIRD_PARTY_TERMS = [
  { name: "PostHog", url: "https://posthog.com/terms" },
  { name: "Vercel", url: "https://vercel.com/legal/terms" },
];
