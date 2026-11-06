export const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mx-auto mb-16 max-w-2xl text-center">
    <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
    <p className="text-lg text-slate-600">{subtitle}</p>
  </div>
);
