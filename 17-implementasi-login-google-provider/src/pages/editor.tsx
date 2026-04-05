import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function EditorPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    // Jika belum login atau bukan editor, redirect
    if (!session || session.user?.role !== "editor") {
      router.replace("/auth/login");
    }
  }, [session, status, router]);

  if (!session || session.user?.role !== "editor") {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Halaman Khusus Editor</h1>
      <p>Selamat datang, {session.user?.fullname || session.user?.email}!</p>
      <p>Hanya user dengan role <b>editor</b> yang bisa mengakses halaman ini.</p>
    </div>
  );
}
