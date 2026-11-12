"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type DemoStep = "place" | "event" | "success";

const places = [
  { name: "Hà Giang", note: "Đường đèo · văn hoá vùng cao", position: "left-[34%] top-[23%]" },
  { name: "Huế", note: "Di sản · nhịp sống ven sông", position: "left-[52%] top-[47%]" },
  { name: "Cần Thơ", note: "Sông nước · vị miền Tây", position: "left-[39%] top-[79%]" },
] as const;

export function ExplorerDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<DemoStep>("place");
  const [selectedPlace, setSelectedPlace] = useState<(typeof places)[number]>(places[1]);
  const openerRef = useRef<HTMLButtonElement>(null);

  function closeDemo() {
    setIsOpen(false);
    setStep("place");
    window.setTimeout(() => openerRef.current?.focus(), 0);
  }

  useEffect(() => {
    if (!isOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeDemo();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <>
      <button
        ref={openerRef}
        type="button"
        onClick={() => {
          setIsOpen(true);
          setStep("place");
        }}
        className="roam-primary-button group"
      >
        Xem Roam vận hành{" "}
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-teal-950/55 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeDemo();
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-title"
            className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-[#f7faf8] shadow-2xl"
          >
            <header className="flex items-center justify-between border-b border-teal-950/10 px-5 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-xl bg-teal-950 text-xs font-bold text-white">
                  R
                </span>
                <div>
                  <p id="demo-title" className="text-sm font-bold">
                    Roam Explorer
                  </p>
                  <p className="text-[10px] font-bold tracking-[0.14em] text-teal-700 uppercase">
                    Demo giao diện
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Đóng demo"
                onClick={closeDemo}
                className="grid size-9 place-items-center rounded-full border border-teal-950/15 text-lg transition hover:bg-teal-950 hover:text-white"
              >
                ×
              </button>
            </header>
            <div className="grid min-h-[32rem] lg:grid-cols-[1.05fr_.95fr]">
              <div className="relative hidden overflow-hidden bg-[#dcebea] p-7 lg:block">
                <div className="map-grid absolute inset-0 opacity-80" />
                <Image
                  src="/vietnam-map.svg"
                  alt=""
                  aria-hidden="true"
                  width={560}
                  height={560}
                  className="absolute inset-0 m-auto h-[88%] w-auto opacity-70 mix-blend-multiply"
                />
                {places.map((place) => (
                  <button
                    key={place.name}
                    type="button"
                    onClick={() => {
                      setSelectedPlace(place);
                      setStep("place");
                    }}
                    className={
                      "demo-marker " +
                      place.position +
                      (selectedPlace.name === place.name ? " demo-marker-active" : "")
                    }
                    aria-label={"Chọn " + place.name}
                  >
                    <span>{place.name}</span>
                  </button>
                ))}
                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/85 px-4 py-3 text-xs font-medium text-teal-950 shadow-lg backdrop-blur">
                  <span className="mr-2 inline-block size-2 rounded-full bg-[#c7ef2d]" />
                  Chạm vào một điểm để bắt đầu
                </div>
              </div>
              <div className="flex flex-col p-6 sm:p-8">
                <div className="mb-auto">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#e1f2b0] px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-teal-950 uppercase">
                      Dữ liệu minh hoạ
                    </span>
                    <span className="text-xs font-bold text-teal-950/45">
                      {step === "place" ? "01 / 03" : step === "event" ? "02 / 03" : "03 / 03"}
                    </span>
                  </div>
                  {step === "place" ? (
                    <>
                      <p className="mt-10 text-xs font-bold tracking-[0.14em] text-teal-700 uppercase">
                        Bạn đang khám phá
                      </p>
                      <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-medium tracking-[-0.05em]">
                        {selectedPlace.name}
                      </h2>
                      <p className="mt-4 max-w-sm leading-7 text-teal-950/65">
                        {selectedPlace.note}. Roam kết nối một điểm đến với điều đang diễn ra ở đó.
                      </p>
                      <div className="mt-8 flex gap-2">
                        <span className="rounded-full border border-teal-950/10 px-3 py-1.5 text-xs font-bold">
                          Địa điểm
                        </span>
                        <span className="rounded-full border border-teal-950/10 px-3 py-1.5 text-xs font-bold">
                          Câu chuyện
                        </span>
                        <span className="rounded-full border border-teal-950/10 px-3 py-1.5 text-xs font-bold">
                          Sự kiện
                        </span>
                      </div>
                    </>
                  ) : null}
                  {step === "event" ? (
                    <>
                      <p className="mt-10 text-xs font-bold tracking-[0.14em] text-teal-700 uppercase">
                        Local pulse · {selectedPlace.name}
                      </p>
                      <h2 className="mt-3 max-w-md font-[family-name:var(--font-display)] text-4xl font-medium tracking-[-0.045em]">
                        Một hoạt động để chuyến đi có thêm người đồng hành.
                      </h2>
                      <article className="mt-7 rounded-2xl border border-teal-950/10 bg-[#edf5f2] p-5">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-xs font-bold text-teal-700">HOẠT ĐỘNG MINH HOẠ</p>
                            <h3 className="mt-2 text-lg font-bold">
                              Dạo chậm, kể chuyện địa phương
                            </h3>
                          </div>
                          <span className="rounded-full bg-[#c7ef2d] px-2.5 py-1 text-[10px] font-bold">
                            12 chỗ
                          </span>
                        </div>
                        <p className="mt-4 text-sm leading-6 text-teal-950/65">
                          Cuối tuần · nhóm nhỏ · mở lời cho những người cùng tò mò.
                        </p>
                        <div className="mt-5 flex -space-x-2">
                          <span className="grid size-7 place-items-center rounded-full border-2 border-white bg-[#f2b99a] text-[9px] font-bold">
                            MA
                          </span>
                          <span className="grid size-7 place-items-center rounded-full border-2 border-white bg-[#8bc5c0] text-[9px] font-bold">
                            LN
                          </span>
                          <span className="grid size-7 place-items-center rounded-full border-2 border-white bg-[#e0c979] text-[9px] font-bold">
                            +8
                          </span>
                        </div>
                      </article>
                    </>
                  ) : null}
                  {step === "success" ? (
                    <div className="mt-16">
                      <span className="grid size-14 place-items-center rounded-2xl bg-[#c7ef2d] text-2xl">
                        ✓
                      </span>
                      <p className="mt-8 text-xs font-bold tracking-[0.14em] text-teal-700 uppercase">
                        Sẵn sàng kết nối
                      </p>
                      <h2 className="mt-3 max-w-md font-[family-name:var(--font-display)] text-4xl font-medium tracking-[-0.045em]">
                        Yêu cầu tham gia đã sẵn sàng.
                      </h2>
                      <p className="mt-4 max-w-sm leading-7 text-teal-950/65">
                        Trong sản phẩm thật, bạn sẽ được xác nhận sau khi người tạo hoạt động duyệt
                        yêu cầu.
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="mt-9 flex flex-wrap gap-3">
                  {step === "place" ? (
                    <button
                      type="button"
                      onClick={() => setStep("event")}
                      className="roam-primary-button"
                    >
                      Xem sự kiện mẫu <span aria-hidden="true">→</span>
                    </button>
                  ) : null}
                  {step === "event" ? (
                    <button
                      type="button"
                      onClick={() => setStep("success")}
                      className="roam-primary-button"
                    >
                      Tham gia hoạt động <span aria-hidden="true">→</span>
                    </button>
                  ) : null}
                  {step === "success" ? (
                    <button type="button" onClick={closeDemo} className="roam-primary-button">
                      Quay lại khám phá
                    </button>
                  ) : null}
                  {step !== "success" ? (
                    <button
                      type="button"
                      onClick={closeDemo}
                      className="rounded-full px-5 py-3 text-sm font-bold text-teal-950/65 hover:text-teal-950"
                    >
                      Để sau
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
