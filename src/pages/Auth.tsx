import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

type Mode = "signin" | "signup";

export default function Auth() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [busy, setBusy] = useState(false);
  const [sentConfirmation, setSentConfirmation] = useState(false);

  useEffect(() => {
    if (!authLoading && user) navigate("/", { replace: true });
  }, [user, authLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { display_name: displayName || email.split("@")[0] },
          },
        });
        if (error) throw error;
        setSentConfirmation(true);
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back!");
        navigate("/", { replace: true });
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  };

  const handleGoogle = async () => {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error("Google sign-in failed. Please try again.");
      setBusy(false);
      return;
    }
    if (result.redirected) return;
    navigate("/", { replace: true });
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-background to-background" aria-hidden />

      <div className="relative w-full max-w-md rounded-lg bg-black/75 backdrop-blur-sm border border-white/10 p-7 sm:p-10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
        <button
          onClick={() => navigate("/")}
          className="font-display text-2xl font-black tracking-[0.18em] text-primary uppercase mb-7 inline-block transition-transform hover:scale-105"
        >
          Stream
        </button>

        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-6">
          {mode === "signin" ? "Sign In" : "Create your account"}
        </h1>

        {sentConfirmation ? (
          <div className="space-y-4">
            <p className="text-sm text-foreground/80">
              We sent a confirmation link to <span className="text-foreground font-medium">{email}</span>. Open it to
              finish creating your account, then come back and sign in.
            </p>
            <button
              onClick={() => {
                setSentConfirmation(false);
                setMode("signin");
              }}
              className="text-sm text-primary hover:underline"
            >
              Back to sign in
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {mode === "signup" && (
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  className="w-full rounded bg-white/10 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/70 focus:bg-white/[0.14] transition-colors"
                />
              )}
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                autoComplete="email"
                className="w-full rounded bg-white/10 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/70 focus:bg-white/[0.14] transition-colors"
              />
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete={mode === "signin" ? "current-password" : "new-password"}
                className="w-full rounded bg-white/10 border border-white/10 px-4 py-3 text-sm outline-none focus:border-primary/70 focus:bg-white/[0.14] transition-colors"
              />
              <button
                type="submit"
                disabled={busy}
                className="w-full rounded bg-primary text-primary-foreground font-semibold py-3 text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_28px_-6px_hsl(var(--primary)/0.6)] disabled:opacity-60 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {busy && <Loader2 className="w-4 h-4 animate-spin" />}
                {mode === "signin" ? "Sign In" : "Sign Up"}
              </button>
            </form>

            <div className="flex items-center gap-3 my-5">
              <span className="h-px flex-1 bg-white/15" />
              <span className="text-xs uppercase tracking-wider text-foreground/50">or</span>
              <span className="h-px flex-1 bg-white/15" />
            </div>

            <button
              onClick={handleGoogle}
              disabled={busy}
              className="w-full rounded bg-white/10 border border-white/15 py-3 text-sm font-medium transition-all duration-300 hover:bg-white/[0.18] hover:scale-[1.02] disabled:opacity-60 flex items-center justify-center gap-2.5"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden>
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.57c2.08-1.92 3.27-4.74 3.27-8.09Z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.76c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84A11 11 0 0 0 12 23Z" />
                <path fill="#FBBC05" d="M5.85 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.67-2.84Z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 0 0-9.82 6.05l3.67 2.84C6.71 7.29 9.14 5.38 12 5.38Z" />
              </svg>
              Continue with Google
            </button>

            <p className="mt-6 text-sm text-foreground/60">
              {mode === "signin" ? "New to Stream?" : "Already have an account?"}{" "}
              <button
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                className="text-foreground font-medium hover:underline"
              >
                {mode === "signin" ? "Sign up now" : "Sign in"}
              </button>
            </p>
          </>
        )}
      </div>
    </main>
  );
}
