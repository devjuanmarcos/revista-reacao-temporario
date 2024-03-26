"use client";

import React from "react";

interface BreadcrumbNoticiaProps {
  breadcrumb: string;
  href: string;
}

export default function BreadcrumbNoticia({ breadcrumb, href }: BreadcrumbNoticiaProps) {
  return (
    <li className="inline-flex items-center">
      <a href={href} className="text-rev-cinza-150 hover:text-rev-brand-300">
        {breadcrumb}
      </a>
      <span className="mr-1 h-auto text-rev-cinza-150">/</span>
    </li>
  );
}
