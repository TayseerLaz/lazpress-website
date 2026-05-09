import Link from "next/link";
import type { Metadata } from "next";
import { isAuthed } from "@/lib/auth";
import "./admin.css";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authed = await isAuthed();

  return (
    <div className="admin-shell">
      <header className="admin-top">
        <Link href="/admin" className="admin-brand">
          LAZ Press <span className="pill">Admin</span>
        </Link>
        {authed && (
          <form action="/admin/logout" method="POST">
            <button className="admin-link" type="submit">
              Sign out
            </button>
          </form>
        )}
      </header>
      <div className="admin-main">{children}</div>
    </div>
  );
}
