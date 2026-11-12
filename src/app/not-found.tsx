import Link from "next/link";
import { ROUTES } from "@/constants";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl font-extrabold text-zinc-900 dark:text-zinc-100">
        404
      </h1>
      <h2 className="mt-2 text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
        Không tìm thấy trang
      </h2>
      <p className="mt-2 max-w-md text-zinc-600 dark:text-zinc-400">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
      </p>
      <Link
        href={ROUTES.HOME}
        className="mt-6 inline-flex items-center rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      >
        Trở về Trang chủ
      </Link>
    </div>
  );
}
