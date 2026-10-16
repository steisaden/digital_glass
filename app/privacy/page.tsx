import type { Metadata } from "next";
import { PublicInfoShell } from "../public-info";
import styles from "../public-info.module.css";

const canonical = "https://www.stephendottech.pro/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — Hermes Desktop (Personal)",
  description:
    "Privacy and Google data practices for Stephen's personal Hermes Desktop assistant.",
  alternates: { canonical },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function HermesPrivacyPage() {
  return (
    <PublicInfoShell title="Privacy Policy for Hermes Desktop (Personal)" updated="October 15, 2026">
      <p className={styles.lede}>
        This policy describes how the owner’s personal Hermes installation handles Google data when
        the owner authorizes and asks Hermes to use it. The pages on this website are informational;
        they do not sign in to Google or receive Gmail messages or Calendar events.
      </p>

      <h2>Google data and permissions</h2>
      <p>
        The installed Google Workspace OAuth setup script requests the following scopes. Google may
        grant fewer scopes if the owner chooses a partial grant; actual access is limited by the
        permissions Google grants and by the tools enabled in Hermes.
      </p>
      <ul className={styles.scopeList}>
        <li><code>https://www.googleapis.com/auth/gmail.readonly</code> — search and read Gmail messages, including message metadata and full message text when requested.</li>
        <li><code>https://www.googleapis.com/auth/gmail.send</code> — send email and replies.</li>
        <li><code>https://www.googleapis.com/auth/gmail.modify</code> — modify Gmail messages; the bundled command currently exposes adding and removing labels.</li>
        <li><code>https://www.googleapis.com/auth/calendar</code> — broad access to see, edit, share, and permanently delete calendars and events the authorized Google account can access. The bundled commands expose a narrower set of operations; the scope itself is broader.</li>
        <li><code>https://www.googleapis.com/auth/drive</code> — broad Drive access; bundled commands can search, read, upload, download, share, and trash or delete files.</li>
        <li><code>https://www.googleapis.com/auth/contacts.readonly</code> — read Contacts.</li>
        <li><code>https://www.googleapis.com/auth/spreadsheets</code> — read and edit Sheets through the bundled commands.</li>
        <li><code>https://www.googleapis.com/auth/documents</code> — read and edit Docs through the bundled commands.</li>
      </ul>
      <p>
        These are the scopes requested by the installed script, not a claim that all have been
        granted. The reviewed Hermes profile had no Google Workspace token stored. It has the Google
        Calendar MCP endpoint configured, but no Calendar MCP OAuth token was found. Google’s MCP
        flow documents read scopes such as{" "}
        <code>calendar.calendarlist.readonly</code>, <code>calendar.events.freebusy</code>, and
        <code>calendar.events.readonly</code>; event-write tools can require <code>calendar</code> or
        <code>calendar.events</code>. The exact scope requested and granted by this separate
        connection must be checked in the owner’s Google consent flow; this policy does not claim an
        actual grant. The service’s documented tools can list and search calendars/events, read event
        details, suggest times, respond to invitations, and create, update, or delete events. See{" "}
        <a href="https://developers.google.com/workspace/calendar/api/v3/reference/mcp">
          Google’s Calendar MCP tool reference
        </a> and{" "}
        <a href="https://developers.google.com/workspace/guides/configure-mcp-servers">
          Google’s MCP setup guide
        </a>.
      </p>

      <h2>How Google data is used and shared</h2>
      <p>
        When the owner asks Hermes to search or read email, the matching message metadata, snippets,
        or requested message body is returned to Hermes. Calendar requests may include event titles,
        dates and times, locations, descriptions, attendee or invitation information, and calendar
        identifiers, depending on the requested operation. The returned information is placed in the
        assistant’s conversation context so the configured model can process the request.
      </p>
      <p>
        The primary model provider configured for this profile is OpenAI Codex. A delegated-model
        route using Abacus RouteLLM is also configured; if a task containing Google-derived
        information is delegated, that information may be sent through that route to a downstream
        model. The downstream model may vary. The local Hermes configuration does not establish
        provider-side retention periods or deletion behavior, so no provider-side retention or
        training-use guarantee is made here. The providers’ own terms and privacy policies govern
        their handling of information they receive.
      </p>
      <p>
        Calendar MCP requests are sent to Google’s hosted Calendar MCP service at{" "}
        <code>calendarmcp.googleapis.com</code>, and Gmail/Calendar API requests are sent to Google.
        Other MCP servers do not receive Google data as a blanket export; they may receive it if the
        owner or assistant includes it in a specific tool request.
      </p>

      <h2>Local storage and retention</h2>
      <p>
        Hermes stores conversation history and tool results in its local profile directory, including
        the canonical SQLite database at <code>HERMES_HOME/state.db</code>. Gateway transcripts may
        also be written under <code>HERMES_HOME/sessions/</code>. This can include email or Calendar
        details returned during a conversation. Automatic session pruning is enabled in the reviewed
        profile; the configured default is to prune eligible ended sessions after 90 days of
        inactivity. Open sessions are not pruned by that age-based cleanup. Pinned sessions and
        separately exported or copied files may remain longer.
      </p>
      <p>
        If the owner connects Google Workspace, the OAuth token and client-secret file are stored
        locally in <code>HERMES_HOME/google_token.json</code> and
        <code>HERMES_HOME/google_client_secret.json</code>. Hermes stores remote MCP OAuth tokens under
        <code>HERMES_HOME/mcp-tokens/</code>. These credentials remain until revoked or removed. The
        policy makes no claim that local files are encrypted at rest or that operating-system backups
        are disabled.
      </p>
      <p>
        Hermes can also write local operational logs. The reviewed configuration does not enable the
        dedicated tool-call log mode, but this review does not establish the content or retention of
        every error or system log. No claim is made that all logs are free of Google-derived data.
        Provider-side and any owner-created backup/export retention are outside the local session
        pruning period described above.
      </p>

      <h2>Messages, Calendar changes, and revocation</h2>
      <p>
        Hermes’s Google Workspace instructions tell it to get the owner’s explicit confirmation
        before sending email or creating or deleting Calendar events. This is an assistant-level
        instruction, not a technical enforcement in the underlying CLI or remote MCP tools. Those
        tools expose write operations, and this installation cannot guarantee that every email or
        Calendar change is technically blocked until confirmation.
      </p>
      <p>
        Google’s MCP security guidance warns that email and event text can contain indirect
        prompt-injection instructions. The owner should treat retrieved content as untrusted and
        review assistant suggestions before acting on them; this page does not claim a technical
        prompt-injection filter.
      </p>
      <p>
        The owner can revoke Google authorization from the Google Account’s third-party access
        settings. The Google Workspace setup script also provides a revoke command that revokes and
        deletes its local OAuth token; its separately stored OAuth client-secret file must be removed
        separately if desired. For Calendar MCP, revoke the Google authorization and remove the
        corresponding local token files under <code>HERMES_HOME/mcp-tokens/</code>. Deleting local
        credentials alone does not necessarily revoke a token already issued by Google.
      </p>
      <p>
        This is a personal-use disclosure for the owner’s Hermes Desktop instance, not a promise that
        Google, model providers, or other services retain or delete their copies on the same schedule
        as local Hermes session history.
      </p>
    </PublicInfoShell>
  );
}
