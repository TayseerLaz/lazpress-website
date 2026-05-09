import { redirect } from "next/navigation";
import { isAuthed } from "@/lib/auth";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await isAuthed()) {
    redirect("/admin");
  }
  const sp = await searchParams;
  const errored = sp.error === "1";

  return (
    <div className="admin-login">
      <form action="/admin/login/submit" method="POST">
        <h1>Sign in</h1>
        <span className="pill">LAZ Press · Admin</span>

        {errored && <div className="error">Invalid username or password.</div>}

        <label htmlFor="lp-user">Username</label>
        <input
          id="lp-user"
          name="username"
          type="text"
          autoComplete="username"
          required
          autoFocus
        />

        <label htmlFor="lp-pass">Password</label>
        <input
          id="lp-pass"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />

        <button type="submit">Sign in →</button>
      </form>
      <div className="footer-note">Authorized personnel only · Session expires in 12 h</div>
    </div>
  );
}
