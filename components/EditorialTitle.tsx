export function EditorialTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-8 sm:mb-12">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#789b78]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-editorial text-[clamp(3.25rem,15vw,8.5rem)] font-black uppercase leading-[0.78] text-[#0b4d2c]">
        {title}
      </h2>
    </div>
  );
}
