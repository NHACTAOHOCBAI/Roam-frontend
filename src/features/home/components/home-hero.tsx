import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";
import { brand } from "@/config/brand";
import { ExplorerDemo } from "./explorer-demo";

function Mark() {
  return (
    <span
      aria-hidden="true"
      className="grid size-9 place-items-center rounded-full bg-teal-950 text-xs font-bold text-white"
    >
      R
    </span>
  );
}

export function HomeHero() {
  return (
    <main className="overflow-hidden bg-[#f4f7f4] text-teal-950">
      <section className="border-b border-teal-950/10 px-5 pt-7 pb-14 sm:px-8 lg:px-12 lg:pb-20">
        <ScrollReveal className="mx-auto max-w-[1440px]">
          <nav aria-label="Điều hướng chính" className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
            >
              <Mark />
              <span className="text-sm font-bold tracking-[0.18em] uppercase">{brand.name}</span>
            </Link>
            <div className="hidden items-center gap-7 text-sm font-medium text-teal-950/70 md:flex">
              <a className="nav-link" href="#kham-pha">
                Khám phá
              </a>
              <a className="nav-link" href="#tinh-nang">
                Tính năng
              </a>
              <a className="nav-link" href="#cong-dong">
                Cộng đồng
              </a>
            </div>
            <a
              href="#kham-pha"
              className="rounded-full border border-teal-950/15 px-4 py-2 text-xs font-bold tracking-wide transition hover:bg-teal-950 hover:text-white"
            >
              Mở bản đồ
            </a>
          </nav>

          <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1.03fr_.97fr] lg:items-end">
            <div className="pb-1">
              <p className="mb-7 flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-teal-700 uppercase">
                <span className="h-px w-9 bg-teal-700" />
                Khám phá Việt Nam theo cách riêng
              </p>
              <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[.94] font-semibold tracking-[-0.055em] sm:text-7xl lg:text-[clamp(4.8rem,8vw,8.6rem)]">
                Đi xa hơn <br />
                một địa điểm.
              </h1>
              <p className="mt-8 max-w-lg text-base leading-7 text-teal-950/70 sm:text-lg">
                Roam kết nối bản đồ, câu chuyện địa phương và những người cùng muốn bước ra ngoài.
                Để mỗi lần đi, bạn hiểu thêm một vùng đất.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <ExplorerDemo />
                <a
                  href="#tinh-nang"
                  className="text-sm font-bold underline decoration-teal-950/30 underline-offset-6"
                >
                  Roam có gì?
                </a>
              </div>
            </div>
            <div className="group relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="absolute -inset-5 rotate-3 rounded-[2.5rem] bg-[#c5ddd8]" />
              <div className="relative aspect-[1.15/1] overflow-hidden rounded-[2.3rem] bg-teal-900">
                <Image
                  src="/images/hero-vietnam.jpg"
                  alt="Vịnh với núi đá vôi và những con thuyền"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 48vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/45 via-transparent to-transparent" />
                <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between text-white">
                  <p className="max-w-40 text-sm leading-5">
                    Những điểm đến đáng nhớ bắt đầu bằng một cái nhìn sâu hơn.
                  </p>
                  <span className="rounded-full border border-white/35 bg-black/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] uppercase backdrop-blur">
                    Việt Nam
                  </span>
                </div>
                <div className="float-slow absolute -top-3 -left-3 rounded-2xl bg-white px-3 py-2.5 text-teal-950 shadow-xl">
                  <p className="text-[9px] font-bold tracking-[0.12em] text-teal-700 uppercase">
                    Đang có trên Roam
                  </p>
                  <p className="mt-1 text-xs font-bold">Chạm bản đồ · tìm trải nghiệm</p>
                </div>
                <div className="float-delayed absolute top-10 -right-3 rounded-2xl border border-white/60 bg-[#c7ef2d] px-3 py-2 text-xs font-bold text-teal-950 shadow-xl">
                  ✦ Local pulse
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section
        id="kham-pha"
        className="scroll-mt-8 bg-[#dcebea] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <ScrollReveal
          className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center"
          delay={80}
        >
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-teal-700 uppercase">
              01 — Bản đồ là điểm bắt đầu
            </p>
            <h2 className="mt-5 max-w-md font-[family-name:var(--font-display)] text-5xl leading-[.98] font-medium tracking-[-0.045em] sm:text-6xl">
              Mỗi tỉnh thành là một lời mời đi sâu hơn.
            </h2>
            <p className="mt-7 max-w-md leading-7 text-teal-950/70">
              Từ một nơi muốn đến, bạn có thể chạm vào trải nghiệm, câu chuyện và những hoạt động
              đang chờ. Không chỉ biết “đi đâu”, mà còn biết vì sao nơi đó đáng để dừng lại.
            </p>
            <div className="mt-8 border-l-2 border-teal-700 pl-4 text-sm leading-6 text-teal-950/70">
              Dữ liệu văn hoá được biên soạn và gắn nguồn từ các cơ quan du lịch, địa phương cùng tư
              liệu đáng tin cậy.
            </div>
          </div>
          <div className="relative mx-auto flex aspect-[1.22/1] w-full max-w-2xl items-center justify-center overflow-hidden rounded-[2.5rem] border border-teal-950/10 bg-[#edf5f2] shadow-[0_24px_60px_-35px_rgba(9,70,68,.5)]">
            <div className="map-grid absolute inset-0 opacity-70" />
            <Image
              src="/vietnam-map.svg"
              alt="Bản đồ Việt Nam"
              width={590}
              height={590}
              className="relative z-10 h-[82%] w-auto object-contain opacity-85 mix-blend-multiply"
            />
            <div className="map-pin top-[25%] left-[48%]">
              <span>Hà Giang</span>
            </div>
            <div className="map-pin top-[47%] left-[52%]">
              <span>Huế</span>
            </div>
            <div className="map-pin top-[69%] left-[46%]">
              <span>Đà Lạt</span>
            </div>
            <div className="map-pin top-[82%] left-[39%]">
              <span>Cần Thơ</span>
            </div>
            <p className="absolute bottom-5 left-6 z-10 text-xs font-bold tracking-[0.14em] text-teal-950/50 uppercase">
              Toàn quốc — vô vàn lối đi
            </p>
            <div className="absolute right-5 bottom-5 z-20 hidden w-44 rounded-2xl bg-white p-3 shadow-xl sm:block">
              <p className="text-[9px] font-bold tracking-[0.12em] text-teal-700 uppercase">
                Gợi ý hôm nay
              </p>
              <p className="mt-1.5 text-xs leading-5 font-bold">
                Chọn một nơi, Roam mở cả hành trình.
              </p>
              <div className="mt-3 flex -space-x-2">
                <span className="grid size-6 place-items-center rounded-full border-2 border-white bg-[#f2b99a] text-[8px]">
                  M
                </span>
                <span className="grid size-6 place-items-center rounded-full border-2 border-white bg-[#8bc5c0] text-[8px]">
                  L
                </span>
                <span className="grid size-6 place-items-center rounded-full border-2 border-white bg-[#e0c979] text-[8px]">
                  +9
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section id="tinh-nang" className="scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <ScrollReveal className="mx-auto max-w-[1440px]" delay={80}>
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.18em] text-teal-700 uppercase">
              02 — Một chuyến đi có nhiều lớp
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-[.98] font-medium tracking-[-0.045em] sm:text-6xl">
              Một nơi. Năm lớp trải nghiệm.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-teal-950/65">
              Roam nối các điều thường nằm rời rạc thành một hành trình tự nhiên.
            </p>
          </div>
          <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-teal-950/10 bg-[#e8f2ee] p-5 sm:p-8 lg:min-h-[32rem]">
            <div className="absolute inset-x-14 top-1/2 hidden border-t border-dashed border-teal-950/25 lg:block" />
            <p className="mb-3 text-xs font-bold text-teal-950/55 sm:hidden">Vuốt để xem thêm →</p>
            <ol className="relative flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto pr-5 pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pr-0 sm:pb-0 lg:min-h-[calc(32rem-4rem)] lg:grid-cols-5 lg:items-center [&::-webkit-scrollbar]:hidden">
              <li className="min-w-[15.5rem] snap-center rounded-2xl bg-white p-4 shadow-[0_14px_30px_-24px_rgba(9,70,68,.8)] transition-shadow duration-300 hover:shadow-[0_20px_35px_-22px_rgba(9,70,68,.45)] sm:min-w-0 lg:-translate-y-12">
                <span className="text-[10px] font-bold tracking-[0.14em] text-teal-700 uppercase">
                  01 · khám phá
                </span>
                <div className="mt-5 flex h-20 items-end gap-1 rounded-xl bg-[#d4ebe6] p-3">
                  <span className="h-4 w-4 rounded-full bg-teal-700" />
                  <span className="h-7 w-7 rounded-full bg-[#c7ef2d]" />
                  <span className="h-5 w-5 rounded-full bg-teal-500" />
                </div>
                <p className="mt-3 text-sm font-bold">Chạm vào bản đồ</p>
              </li>
              <li className="min-w-[15.5rem] snap-center rounded-2xl border border-teal-950/10 bg-[#f9fbf8] p-4 transition-shadow duration-300 hover:shadow-[0_20px_35px_-22px_rgba(9,70,68,.3)] sm:min-w-0 lg:translate-y-7">
                <span className="text-[10px] font-bold tracking-[0.14em] text-teal-700 uppercase">
                  02 · câu chuyện
                </span>
                <p className="mt-5 border-l-2 border-[#c7ef2d] pl-3 text-sm leading-5 font-bold">
                  Đọc một lát cắt của nơi bạn đến.
                </p>
                <div className="mt-4 h-1.5 w-3/4 rounded bg-teal-950/10" />
                <div className="mt-2 h-1.5 w-1/2 rounded bg-teal-950/10" />
              </li>
              <li className="min-w-[15.5rem] snap-center rounded-2xl bg-teal-950 p-4 text-white shadow-[0_20px_35px_-22px_rgba(9,70,68,.9)] transition-shadow duration-300 hover:shadow-[0_24px_42px_-20px_rgba(9,70,68,.8)] sm:min-w-0 lg:-translate-y-5">
                <span className="text-[10px] font-bold tracking-[0.14em] text-[#c7ef2d] uppercase">
                  03 · cộng đồng
                </span>
                <div className="mt-5 flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-full bg-[#f2b99a] text-[10px] text-teal-950">
                    MA
                  </span>
                  <div>
                    <p className="text-xs font-bold">“Đáng để đi chậm.”</p>
                    <p className="mt-1 text-[10px] text-white/60">Góc nhìn từ người đi trước</p>
                  </div>
                </div>
              </li>
              <li className="min-w-[15.5rem] snap-center rounded-2xl bg-[#c7ef2d] p-4 text-teal-950 transition-shadow duration-300 hover:shadow-[0_20px_35px_-22px_rgba(9,70,68,.35)] sm:min-w-0 lg:translate-y-11">
                <span className="text-[10px] font-bold tracking-[0.14em] uppercase">
                  04 · local pulse
                </span>
                <p className="mt-5 text-sm font-bold">Có gì đang diễn ra?</p>
                <div className="mt-3 flex gap-2">
                  <span className="rounded-lg bg-white/60 px-2 py-1 text-[10px] font-bold">T7</span>
                  <span className="rounded-lg bg-white/60 px-2 py-1 text-[10px] font-bold">CN</span>
                </div>
              </li>
              <li className="min-w-[15.5rem] snap-center rounded-2xl border border-teal-950/10 bg-white p-4 transition-shadow duration-300 hover:shadow-[0_20px_35px_-22px_rgba(9,70,68,.3)] sm:min-w-0 lg:-translate-y-7">
                <span className="text-[10px] font-bold tracking-[0.14em] text-teal-700 uppercase">
                  05 · cùng đi
                </span>
                <p className="mt-5 text-sm font-bold">Gặp đúng người đồng hành.</p>
                <div className="mt-4 flex -space-x-2">
                  <span className="size-7 rounded-full border-2 border-white bg-[#8bc5c0]" />
                  <span className="size-7 rounded-full border-2 border-white bg-[#e0c979]" />
                  <span className="grid size-7 place-items-center rounded-full border-2 border-white bg-teal-950 text-[9px] text-white">
                    +6
                  </span>
                </div>
              </li>
            </ol>
          </div>
        </ScrollReveal>
      </section>

      <section className="border-y border-teal-950/10 bg-[#f8faf5] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <ScrollReveal className="mx-auto max-w-[1440px]" delay={80}>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-teal-700 uppercase">
                03 — Không chỉ nhìn, mà còn hiểu
              </p>
              <h2 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-5xl leading-[.98] font-medium tracking-[-0.045em] sm:text-6xl">
                Một nơi luôn có câu chuyện phía sau.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-teal-950/65">
              Reader view đưa ngữ cảnh và nguồn tham khảo về cùng một chỗ.
            </p>
          </div>
          <article className="group mt-12 grid overflow-hidden rounded-[2rem] border border-teal-950/10 bg-white shadow-[0_24px_60px_-44px_rgba(9,70,68,.6)] lg:grid-cols-[10rem_1fr_18rem]">
            <aside className="border-b border-teal-950/10 p-5 lg:border-r lg:border-b-0">
              <p className="text-[10px] font-bold tracking-[0.14em] text-teal-700 uppercase">
                Roam reader
              </p>
              <div className="mt-12 space-y-4 text-xs font-bold text-teal-950/45">
                <p className="text-teal-950">Câu chuyện</p>
                <p>Địa điểm</p>
                <p>Ghi chú</p>
              </div>
              <div className="mt-16 rounded-xl bg-[#e8f2ee] p-3 text-[10px] leading-4 text-teal-950/65">
                Tất cả nội dung được gắn với vị trí và nguồn tham khảo.
              </div>
            </aside>
            <div className="p-5 sm:p-8">
              <p className="text-[10px] font-bold tracking-[0.14em] text-teal-700 uppercase">
                Câu chuyện minh hoạ · 6 phút đọc
              </p>
              <h3 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-4xl leading-[1.02] font-medium tracking-[-0.045em]">
                Đi chậm để nghe một vùng đất kể chuyện.
              </h3>
              <div className="relative mt-7 aspect-[2.1/1] overflow-hidden rounded-xl">
                <Image
                  src="/images/culture-vietnam.jpg"
                  alt="Cảnh quan và kiến trúc ven nước"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                />
              </div>
              <p className="mt-6 max-w-xl text-sm leading-7 text-teal-950/65">
                Một lớp thông tin ngắn, một địa điểm trên bản đồ và những nguồn để người đọc tự đi
                sâu hơn.
              </p>
            </div>
            <aside className="border-t border-teal-950/10 bg-[#edf5f2] p-5 lg:border-t-0 lg:border-l">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold tracking-[0.14em] text-teal-700 uppercase">
                  Nguồn tham khảo
                </p>
                <span className="rounded-full bg-[#c7ef2d] px-2 py-1 text-[9px] font-bold">
                  DEMO
                </span>
              </div>
              <div className="mt-7 border-l-2 border-teal-700 pl-3">
                <p className="text-xs font-bold">Cổng thông tin du lịch</p>
                <p className="mt-1 text-[11px] leading-5 text-teal-950/60">
                  Nguồn chính thức được hiển thị ngay bên cạnh nội dung.
                </p>
              </div>
              <div className="mt-5 border-l-2 border-teal-950/20 pl-3">
                <p className="text-xs font-bold">Tư liệu địa phương</p>
                <p className="mt-1 text-[11px] leading-5 text-teal-950/60">
                  Dùng để đối chiếu bối cảnh văn hoá.
                </p>
              </div>
            </aside>
          </article>
        </ScrollReveal>
      </section>

      <section id="cong-dong" className="scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <ScrollReveal className="mx-auto max-w-[1440px]" delay={80}>
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.18em] text-teal-700 uppercase">
              04 — Có người cùng lên đường
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-5xl leading-[.98] font-medium tracking-[-0.045em] sm:text-6xl">
              Một cuộc hẹn, trước khi là một chuyến đi.
            </h2>
          </div>
          <article className="group mt-12 grid overflow-hidden rounded-[2rem] bg-teal-950 text-white shadow-[0_24px_60px_-35px_rgba(9,70,68,.55)] lg:grid-cols-[.92fr_1.08fr]">
            <div className="relative min-h-72 lg:min-h-full">
              <Image
                src="/images/culture-vietnam.jpg"
                alt="Khung cảnh ven nước cho một buổi dạo chậm"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent" />
              <p className="absolute right-6 bottom-6 left-6 text-sm leading-6 text-white/90 sm:max-w-xs">
                Những cuộc gặp nhỏ để biết một nơi từ người đang sống ở đó.
              </p>
            </div>
            <div className="flex flex-col p-7 sm:p-12">
              <p className="text-xs font-bold tracking-[0.16em] text-[#c7ef2d] uppercase">
                Cuối tuần này · Huế
              </p>
              <h3 className="mt-8 max-w-xl font-[family-name:var(--font-display)] text-4xl leading-[1.02] font-medium tracking-[-0.045em] sm:text-5xl">
                Dạo bên sông Hương, nghe thành phố kể chuyện.
              </h3>
              <p className="mt-6 max-w-lg text-base leading-7 text-white/70">
                Một buổi đi bộ chậm qua những con đường quen, với vài câu chuyện về nếp sống và ký
                ức của Huế.
              </p>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-5 text-sm text-white/75">
                <span>Thứ bảy · 16:30</span>
                <span>90 phút</span>
                <span>Nhóm tối đa 8 người</span>
              </div>
              <a
                href="#kham-pha"
                className="mt-10 inline-flex w-fit items-center gap-3 border-b border-[#c7ef2d] pb-2 text-sm font-bold text-[#c7ef2d] transition hover:gap-5"
              >
                Xem các điểm hẹn khác <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </ScrollReveal>
      </section>

      <section className="px-5 pb-5 sm:px-8 lg:px-12">
        <ScrollReveal
          className="mx-auto flex max-w-[1440px] flex-col gap-8 border-t border-teal-950/15 py-14 sm:py-16 lg:flex-row lg:items-end lg:justify-between"
          delay={80}
        >
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-teal-700 uppercase">Roam</p>
            <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-[1.02] font-medium tracking-[-0.045em] sm:text-5xl">
              Bắt đầu bằng một nơi bạn đang tò mò.
            </h2>
          </div>
          <a
            href="#kham-pha"
            className="inline-flex w-fit items-center gap-3 border-b border-teal-950 pb-2 text-sm font-bold transition hover:gap-5"
          >
            Khám phá bản đồ Việt Nam <span aria-hidden="true">→</span>
          </a>
        </ScrollReveal>
      </section>
    </main>
  );
}
