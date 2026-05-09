/**
 * Top of the page — four-stripe CMYK signal bar.
 * Pure decorative, server-rendered.
 */
export function CmykRule() {
  return (
    <div className="cmykrule" aria-hidden="true">
      <div className="c" />
      <div className="m" />
      <div className="y" />
      <div className="k" />
    </div>
  );
}
