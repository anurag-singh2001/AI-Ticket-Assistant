// import { Inngest } from "inngest";

// export const inngest = new Inngest({ id: "ticketing-system" });

import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "ticketing-system",
  eventKey: process.env.INNGEST_EVENT_KEY,
  apiBaseUrl: process.env.INNGEST_API_BASE_URL || "https://api.inngest.com",
});
