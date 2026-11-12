import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";

const modules = [
  [
    "01",
    "Khám phá địa phương",
    "Bản đồ, bộ lọc và những địa điểm có chiều sâu hơn một chiếc ghim.",
  ],
  [
    "02",
    "Câu chuyện bản địa",
    "Lịch sử, văn hoá và nguồn tham khảo đáng tin cậy ngay tại nơi bạn đến.",
  ],
  ["03", "Nhịp sống địa phương", "Lễ hội, workshop và những điều đang diễn ra quanh bạn."],
  ["04", "Góc nhìn cộng đồng", "Đánh giá, hình ảnh và ghi chép từ những người đã thật sự đi."],
  ["05", "Đi cùng nhau", "Tạo hoặc tham gia một hoạt động, rồi gặp người cùng sở thích."],
] as const;

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
        <div className="mx-auto max-w-[1440px]">
          <nav aria-label="Điều hướng chính" className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
            >
              <Mark />
              <span className="text-sm font-bold tracking-[0.18em] uppercase">{brand.name}</span>
            </Link>
            <div className="hidden items-center gap-7 text-sm font-medium text-teal-950/70 md:flex">
              <a href="#kham-pha">Khám phá</a>
              <a href="#tinh-nang">Tính năng</a>
              <a href="#cong-dong">Cộng đồng</a>
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
              <h1 className="max-w-3xl font-[family-name:var(--font-editorial)] text-5xl leading-[.94] tracking-[-0.055em] sm:text-7xl lg:text-[clamp(4.8rem,8vw,8.6rem)]">
                Đi xa hơn <br />
                một địa điểm.
              </h1>
              <p className="mt-8 max-w-lg text-base leading-7 text-teal-950/70 sm:text-lg">
                Roam kết nối bản đồ, câu chuyện địa phương và những người cùng muốn bước ra ngoài.
                Để mỗi lần đi, bạn hiểu thêm một vùng đất.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#kham-pha"
                  className="group inline-flex items-center gap-3 rounded-full bg-teal-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-teal-800"
                >
                  Khám phá Việt Nam{" "}
                  <span className="transition-transform group-hover:translate-y-0.5">↓</span>
                </a>
                <a
                  href="#tinh-nang"
                  className="text-sm font-bold underline decoration-teal-950/30 underline-offset-6"
                >
                  Roam có gì?
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="absolute -inset-5 rotate-3 rounded-[2.5rem] bg-[#c5ddd8]" />
              <div className="relative aspect-[1.15/1] overflow-hidden rounded-[2.3rem] bg-teal-900">
                <Image
                  src="/images/hero-vietnam.jpg"
                  alt="Vịnh với núi đá vôi và những con thuyền"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 48vw"
                  className="object-cover"
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="kham-pha"
        className="scroll-mt-8 bg-[#dcebea] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-teal-700 uppercase">
              01 — Bản đồ là điểm bắt đầu
            </p>
            <h2 className="mt-5 max-w-md font-[family-name:var(--font-editorial)] text-5xl leading-[.98] tracking-[-0.045em] sm:text-6xl">
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
          <div className="relative mx-auto flex aspect-[1.22/1] w-full max-w-2xl items-center justify-center overflow-hidden rounded-[2.5rem] border border-teal-950/10 bg-[#edf5f2]">
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
          </div>
        </div>
      </section>

      <section id="tinh-nang" className="scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-6 border-b border-teal-950/15 pb-10 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-teal-700 uppercase">
                02 — Một chuyến đi có nhiều lớp
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-editorial)] text-5xl leading-none tracking-[-0.045em] sm:text-6xl">
                Tất cả những gì bạn cần
                <br />
                để trải nghiệm một nơi.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-teal-950/65">
              Roam đưa các mảnh thông tin rời rạc về cùng một nhịp: khám phá, hiểu, kết nối và lên
              đường.
            </p>
          </div>
          <div className="grid divide-y divide-teal-950/15 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-5 lg:divide-x">
            {modules.map(([number, title, description]) => (
              <article
                key={number}
                className="group py-8 pr-6 md:px-6 md:first:pl-0 lg:min-h-72 lg:px-5 lg:first:pl-0"
              >
                <p className="text-xs font-bold text-teal-600">{number}</p>
                <h3 className="mt-14 text-lg leading-6 font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-teal-950/65">{description}</p>
                <span className="mt-7 inline-block text-teal-700">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-950 px-5 py-20 text-[#eff7f4] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-[2.2rem] bg-[#0c403f] p-7 sm:p-10">
            <p className="text-xs font-bold tracking-[0.18em] text-teal-200 uppercase">
              03 — Không chỉ nhìn, mà còn hiểu
            </p>
            <h2 className="mt-7 max-w-2xl font-[family-name:var(--font-editorial)] text-5xl leading-[.98] tracking-[-0.045em] sm:text-6xl">
              Sau một địa điểm là một câu chuyện để mang về.
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <article className="overflow-hidden rounded-2xl bg-[#17605d]">
                <div className="relative aspect-[1.25/1]">
                  <Image
                    src="/images/culture-vietnam.jpg"
                    alt="Cảnh thiên nhiên và kiến trúc ven nước"
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold text-teal-200">CÂU CHUYỆN BẢN ĐỊA</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Những lớp văn hoá gắn với chính nơi bạn đang đứng.
                  </p>
                </div>
              </article>
              <article className="overflow-hidden rounded-2xl bg-[#17605d]">
                <div className="relative aspect-[1.25/1]">
                  <Image
                    src="/images/food-vietnam.jpg"
                    alt="Cầu Vàng trong khung cảnh núi"
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold text-teal-200">TRẢI NGHIỆM ĐỊA PHƯƠNG</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Từ ẩm thực đến những điều chỉ người bản xứ mới kể.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-[2.2rem] border border-white/15 p-7 sm:p-10">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-teal-200 uppercase">
                Nguồn, không phải lời đồn
              </p>
              <p className="mt-7 text-2xl leading-9 text-white/85">
                Nội dung văn hoá trên Roam được thiết kế để luôn đi cùng ngữ cảnh và nguồn tham
                khảo.
              </p>
            </div>
            <a
              href="https://vietnam.travel/vi/place-to-go/"
              target="_blank"
              rel="noreferrer"
              className="mt-12 inline-flex items-center justify-between border-t border-white/20 pt-5 text-sm font-bold hover:text-teal-200"
            >
              Tham khảo Cổng thông tin Du lịch Việt Nam <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section id="cong-dong" className="scroll-mt-8 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-teal-700 uppercase">
                04 — Có người cùng lên đường
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-editorial)] text-5xl leading-[.98] tracking-[-0.045em] sm:text-6xl">
                Một trải nghiệm hay hơn khi được chia sẻ.
              </h2>
              <p className="mt-7 max-w-md leading-7 text-teal-950/70">
                Xem đánh giá của người đi trước, tìm hoạt động hợp gu, hoặc mở lời cho chuyến đi mà
                bạn không muốn đi một mình.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-[2rem] bg-[#e7b873] p-7 text-[#3b2b15]">
              <p className="text-xs font-bold tracking-[0.14em] uppercase">Local pulse</p>
              <div className="mt-20">
                <p className="text-4xl">✦</p>
                <h3 className="mt-5 text-2xl font-bold tracking-tight">
                  Đừng lỡ nhịp sống ở nơi bạn đến.
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#3b2b15]/75">
                  Lễ hội, triển lãm, workshop và hoạt động cộng đồng — xem theo địa phương và thời
                  gian.
                </p>
              </div>
            </article>
            <article className="rounded-[2rem] bg-[#c2ddd5] p-7">
              <p className="text-xs font-bold tracking-[0.14em] text-teal-800 uppercase">
                Community activities
              </p>
              <div className="mt-20">
                <p className="text-4xl">↗</p>
                <h3 className="mt-5 text-2xl font-bold tracking-tight">Có hẹn, có hành trình.</h3>
                <p className="mt-3 text-sm leading-6 text-teal-950/70">
                  Tạo một hoạt động, ghi rõ thời gian và nơi chốn, rồi gặp người muốn đi cùng bạn.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-5 pb-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px] rounded-[2.5rem] bg-[#bce0df] px-7 py-16 sm:px-12 sm:py-20 lg:flex lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-teal-700 uppercase">
              Roam — sắp ra mắt
            </p>
            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-editorial)] text-5xl leading-[.96] tracking-[-0.05em] sm:text-7xl">
              Việt Nam rộng lắm.
              <br />
              Đi cho tới nơi.
            </h2>
          </div>
          <a
            href="#kham-pha"
            className="mt-9 inline-flex rounded-full bg-teal-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-teal-800 lg:mt-0"
          >
            Xem bản đồ Việt Nam
          </a>
        </div>
      </section>
    </main>
  );
}
