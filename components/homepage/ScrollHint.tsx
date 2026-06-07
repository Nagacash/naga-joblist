export function ScrollHint() {
  return (
    <div className="landing-scroll-hint mt-10 sm:mt-12" aria-hidden="true">
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
        Keep scrolling
      </span>
      <span className="landing-scroll-hint-line" />
    </div>
  );
}
