import { Container, Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui";
import { SectionTitle } from "@/components/common";
import { ProjectList, sampleProjects } from "@/features/projects";
import { siteConfig } from "@/config";
import { CheckCircle2, Layers, Cpu, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-zinc-200 bg-white py-20 sm:py-28 dark:border-zinc-800 dark:bg-black">
          <Container className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-800/40 dark:bg-emerald-950/40 dark:text-emerald-300">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Project Blueprint Đã Triển Khai Thành Công
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Kiến trúc chuẩn Feature-Driven & Clean Architecture trên nền tảng
              Next.js 15+ App Router, TypeScript, Tailwind CSS và Zod.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full shadow-sm">
                Khám Phá Dự Án
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Xem Tài Liệu Cấu Trúc
              </Button>
            </div>
          </Container>
        </section>

        {/* Architecture Highlights */}
        <section id="architecture" className="py-16 sm:py-20">
          <Container>
            <SectionTitle
              title="Cột Mốc Kiến Trúc Chuẩn"
              subtitle="Hệ thống phân tầng rõ ràng giúp mở rộng quy mô dễ dàng, tối ưu khả năng tái sử dụng và kiểm thử."
              align="center"
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">Feature-Driven Design</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Đóng gói từng module nghiệp vụ trong{" "}
                  <code>src/features/</code> với đầy đủ components, hooks,
                  services, types và public API.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">Atomic UI Primitives</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Tách bạch UI và nghiệp vụ với Class Variance Authority (CVA),
                  Tailwind CSS và Lucide Icons sẵn sàng tái sử dụng.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold">
                  Type-Safe & Zod Validation
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Kiểm soát biến môi trường, định dạng DTO và schema dữ liệu
                  chặt chẽ từ gốc với Zod & TypeScript Strict Mode.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Feature Projects Showcase */}
        <section
          id="features"
          className="border-t border-zinc-200 bg-white py-16 sm:py-20 dark:border-zinc-800 dark:bg-black"
        >
          <Container>
            <SectionTitle
              title="Dự Án Tiêu Biểu"
              subtitle="Module nghiệp vụ mẫu được tổ chức độc lập trong src/features/projects."
            />
            <ProjectList projects={sampleProjects} />
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
