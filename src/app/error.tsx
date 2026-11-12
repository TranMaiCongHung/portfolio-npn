"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h2 className="mb-4 text-2xl font-bold">Đã xảy ra lỗi!</h2>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        {error.message || "Vui lòng thử lại sau."}
      </p>
      <button
        onClick={() => reset()}
        className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Thử lại
      </button>
    </div>
  );
}

