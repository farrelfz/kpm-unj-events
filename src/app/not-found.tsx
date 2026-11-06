import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 text-6xl font-bold text-slate-900">404</h1>
      <p className="mb-8 text-lg text-slate-600">
        Halaman tidak ditemukan. Mungkin Anda mencari salah satu event kami?
      </p>
      <div className="flex gap-4">
        <Link href="/castle" className="rounded-xl bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800">
          CASTLE
        </Link>
        <Link href="/skill" className="rounded-xl border border-slate-200 px-6 py-3 font-medium text-slate-700 hover:bg-slate-50">
          SKILL
        </Link>
        <Link href="/expo" className="rounded-xl border border-slate-200 px-6 py-3 font-medium text-slate-700 hover:bg-slate-50">
          EXPO
        </Link>
      </div>
      <Link href="/" className="mt-6 text-sm text-slate-500 hover:text-primary">
        ← Kembali ke beranda
      </Link>
    </main>
  );
}
