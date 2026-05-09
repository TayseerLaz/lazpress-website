import { revalidatePath } from "next/cache";
import { requireAuth } from "@/lib/auth";
import { listEnquiries, deleteEnquiry } from "@/lib/enquiries";

export const dynamic = "force-dynamic";

async function deleteAction(formData: FormData): Promise<void> {
  "use server";
  const id = String(formData.get("id") ?? "");
  if (id) {
    await deleteEnquiry(id);
    revalidatePath("/admin");
  }
}

function formatWhen(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default async function AdminDashboard() {
  await requireAuth();
  const enquiries = await listEnquiries();

  const last24h = enquiries.filter(
    (e) => Date.now() - new Date(e.createdAt).getTime() < 24 * 60 * 60 * 1000,
  ).length;
  const last7d = enquiries.filter(
    (e) => Date.now() - new Date(e.createdAt).getTime() < 7 * 24 * 60 * 60 * 1000,
  ).length;
  const sources = new Set(enquiries.map((e) => e.source)).size;

  return (
    <>
      <h1>
        Enquiries <span className="it">·</span>
      </h1>
      <p className="meta">All submissions ordered by most recent</p>

      <div className="admin-stats">
        <div className="admin-stat">
          <div className="lbl">Total</div>
          <div className="val">{enquiries.length}</div>
        </div>
        <div className="admin-stat">
          <div className="lbl">Last 24 h</div>
          <div className="val">{last24h}</div>
        </div>
        <div className="admin-stat">
          <div className="lbl">Last 7 d</div>
          <div className="val">{last7d}</div>
        </div>
        <div className="admin-stat">
          <div className="lbl">Sources</div>
          <div className="val">{sources}</div>
        </div>
      </div>

      <table className="enq-table">
        <thead>
          <tr>
            <th style={{ width: 160 }}>When</th>
            <th style={{ width: 110 }}>Source</th>
            <th style={{ width: 240 }}>Email</th>
            <th>Details</th>
            <th style={{ width: 90 }}></th>
          </tr>
        </thead>
        <tbody>
          {enquiries.length === 0 ? (
            <tr>
              <td className="empty" colSpan={5}>
                No enquiries yet — they&apos;ll show here as soon as someone hits the
                quote form.
              </td>
            </tr>
          ) : (
            enquiries.map((e) => (
              <tr key={e.id}>
                <td className="when">{formatWhen(e.createdAt)}</td>
                <td>
                  <span className={`badge ${e.source}`}>{e.source}</span>
                </td>
                <td className="email">
                  {e.email ? <a href={`mailto:${e.email}`}>{e.email}</a> : "—"}
                </td>
                <td className="details">
                  {e.product && (
                    <div>
                      <strong>{e.product}</strong>
                      {e.quantity ? ` × ${e.quantity}` : ""}
                    </div>
                  )}
                  {(e.paper || e.finish) && (
                    <div className="dim">
                      {[e.paper, e.finish].filter(Boolean).join(" · ")}
                    </div>
                  )}
                  {e.name && <div className="dim">From: {e.name}</div>}
                  {e.message && <div className="msg">{e.message}</div>}
                  {(e.ip || e.userAgent) && (
                    <div className="meta-row">
                      {e.ip || "—"} · {(e.userAgent || "").slice(0, 60)}
                      {e.userAgent && e.userAgent.length > 60 ? "…" : ""}
                    </div>
                  )}
                </td>
                <td>
                  <form action={deleteAction}>
                    <input type="hidden" name="id" value={e.id} />
                    <button className="del" type="submit">
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
