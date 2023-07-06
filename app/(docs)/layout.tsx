import Link from "next/link";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1">{children}</div>
    </div>
  );
}
