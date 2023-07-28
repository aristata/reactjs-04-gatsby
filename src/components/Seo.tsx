import React from "react";

interface Props {
  title: string;
}

export default function Seo({ title }: Props) {
  return <title>{title} | Aristata online store 🏟</title>;
}
