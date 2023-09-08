export function Flex({
  children,
  styles,
}: {
  children: JSX.Element | Array<JSX.Element>;
  styles?: React.CSSProperties;
}) {
  const mergedStyles = { ...(styles ? styles : {}), display: "flex" };

  return <div style={mergedStyles}>{children}</div>;
}
