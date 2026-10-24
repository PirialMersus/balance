import Link from "next/link";

export default function RootNotFound() {
  return (
    <div className="bg-[#1A2019] text-[#F5F2E9] min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-md text-center">
        <span className="font-serif italic text-7xl md:text-8xl text-[#B87557] block mb-4">
          404
        </span>
        <h1 className="font-serif italic text-3xl md:text-4xl text-white mb-4">
          Страница не найдена
        </h1>
        <p className="text-[#828A73] text-sm md:text-base leading-relaxed mb-8">
          Запрашиваемый адрес не существует. Перейдите на главную страницу студии горячей йоги Balance в Одессе.
        </p>
        <Link
          href="/ru"
          className="inline-block px-8 py-4 bg-[#B87557] hover:bg-[#D4793A] text-white text-xs uppercase tracking-widest font-medium transition-colors"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
