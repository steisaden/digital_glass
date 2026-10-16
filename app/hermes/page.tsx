import type { Metadata } from "next";
import Link from "next/link";
import { PublicInfoShell } from "../public-info";
import styles from "../public-info.module.css";

const canonical = "https://www.stephendottech.pro/hermes";

export const metadata: Metadata = {
  title: "Hermes Desktop (Personal)",
  description:
    "App information for Hermes Desktop (Personal), Stephen's personal AI assistant.",
  alternates: { canonical },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function HermesInformationPage() {
  return (
    <PublicInfoShell title="Hermes Desktop (Personal)" updated="October 15, 2026">
      <p className={styles.lede}>
        Hermes Desktop (Personal) is a personal AI assistant operated by its owner. When the owner
        authorizes Google access, Hermes can help read and process Gmail messages and Google Calendar
        information in response to the owner’s requests.
      </p>

      <Link className={styles.privacyLink} href="/privacy">
        Read the privacy policy
      </Link>

      <div className={styles.notice}>
        This is an informational page for one personal Hermes installation. It is not a public
        account service: visitors do not sign in here or connect their Google accounts through this
        website.
      </div>

      <h2>What the assistant can do</h2>
      <ul>
        <li>
          <strong>Gmail:</strong> search messages, retrieve message headers and snippets, read a
          selected message’s full text body, send a new email or reply, and add or remove message
          labels using the installed Google Workspace commands.
        </li>
        <li>
          <strong>Google Calendar:</strong> list calendars and events, search or review event
          details, suggest times, respond to invitations, and create, update, or delete events
          through Google’s configured Calendar MCP service. These tools are part of Google Workspace’s
          Developer Preview, which requires enrollment; availability and access depend on the
          owner’s OAuth permissions.
        </li>
      </ul>
      <p>
        The installed Google Workspace OAuth setup also requests Drive, read-only Contacts, Google
        Sheets, and Google Docs scopes. The associated commands include Drive search and file
        operations, Contacts listing, Sheets reads and edits, and Docs reads and edits. Those
        requested permissions are broader than Gmail and Calendar alone; Google access remains
        conditional on the owner’s authorization and the scopes actually granted.
      </p>
      <p>
        The Google Workspace commands currently expose label changes rather than a message-delete
        command. The OAuth <code>gmail.modify</code> scope itself is broader than that specific
        command. Google Calendar MCP’s available operations depend on the tools offered by that
        service and the permissions granted by the owner.
      </p>

      <h2>How it works</h2>
      <p>
        When the owner asks Hermes to use Google data, the relevant results are returned to the
        assistant so it can answer or complete that task. Depending on the request, that information
        may be included in the configured model provider’s prompt or a delegated task. Google access
        is not available unless the owner authorizes the relevant OAuth connection.
      </p>
      <p>
        Hermes is instructed to ask for the owner’s confirmation before sending email or creating or
        deleting calendar events. That instruction is not a technical lock in the underlying
        commands, so this page does not guarantee that every available write operation is blocked
        until confirmation.
      </p>

    </PublicInfoShell>
  );
}
