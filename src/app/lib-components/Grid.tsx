export function Grid({
  children,
  styles,
}: {
  children: JSX.Element | Array<JSX.Element>;
  styles?: React.CSSProperties;
}) {
  const mergedStyles = { ...(styles ? styles : {}), display: "grid" };

  return <div style={mergedStyles}>{children}</div>;
}
