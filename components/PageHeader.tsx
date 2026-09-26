export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="mb-10 border-b border-line pb-8">
      <p className="kicker">{kicker}</p>
      <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl">
        {title}
      </h1>
      <p className="prose-measure mt-4 text-lg text-muted">{lede}</p>
    </header>
  );
}
