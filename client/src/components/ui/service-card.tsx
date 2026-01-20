import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  isExternal?: boolean;
  featured?: boolean;
}

export function ServiceCard({ title, description, icon, href, isExternal, featured }: ServiceCardProps) {
  const CardContent = (
    <>
      <div className="service-icon-box">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="service-card group"
      >
        {CardContent}
      </a>
    );
  }

  return (
    <Link href={href}>
      <div className="service-card group">
        {CardContent}
      </div>
    </Link>
  );
}
