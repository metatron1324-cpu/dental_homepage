import { CLINIC } from "@/lib/clinic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function StructuredData() {
  const dentistSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: CLINIC.name,
    description: CLINIC.tagline,
    url: SITE_URL,
    telephone: CLINIC.phone,
    email: CLINIC.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.address,
      addressCountry: "KR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    medicalSpecialty: ["Dentistry", "OralAndMaxillofacialSurgery"],
    priceRange: "$$",
    foundingDate: `${CLINIC.since}-01-01`,
    founder: {
      "@type": "Person",
      name: CLINIC.doctor.name,
      jobTitle: CLINIC.doctor.title,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
    />
  );
}
