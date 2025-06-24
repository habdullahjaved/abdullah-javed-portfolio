import Link from "next/link";
import React from "react";
type Props = {
  href: string;
  label: string;
};

const LinkComponent = ({ href, label }: Props) => {
  return <Link href={href}>{label}</Link>;
};

export default LinkComponent;
