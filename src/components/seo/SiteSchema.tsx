import Script from "next/script";

export function SiteSchema() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "ConstructionBusiness",
        "@id": "https://adonaiengineeringltd.com/#organization",
        "name": "Adonai Engineering And Construction Ltd",
        "url": "https://adonaiengineeringltd.com",
        "logo": "https://adonaiengineeringltd.com/logo.jpg",
        "description": "Professional engineering and construction company in Ghana delivering disciplined, high-quality construction solutions across buildings, estate developments, and supporting infrastructure.",
        "foundingDate": "2021",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ho",
            "addressRegion": "Volta Region",
            "addressCountry": "GH"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "6.5933",
            "longitude": "0.5456"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+233-24-862-9946",
            "email": "enquiries@adonaiengineeringltd.com",
            "contactType": "customer service",
            "areaServed": "GH",
            "availableLanguage": "en"
        },
        "founder": {
            "@type": "Person",
            "name": "Rev. Dr. Bright Adonai",
            "jobTitle": "Founder & CEO"
        },
        "memberOf": {
            "@type": "Organization",
            "name": "Adonai Estate Limited"
        },
        "parentOrganization": {
            "@type": "Organization",
            "name": "Adonai Estate Limited",
            "url": "https://adonaiengineeringltd.com"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Engineering and Construction Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Building Construction",
                        "description": "Residential, commercial, hospitality, and institutional building construction"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Estate Development",
                        "description": "Integrated estate development construction for developers and property companies"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Civil Works",
                        "description": "Roads, drainage, earthworks, and utility infrastructure"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Project Management",
                        "description": "Construction project management and execution support"
                    }
                }
            ]
        },
        "areaServed": {
            "@type": "Country",
            "name": "Ghana"
        },
        "knowsAbout": [
            "Building Construction",
            "Estate Development",
            "Civil Works",
            "Project Management",
            "Construction in Ghana",
            "Infrastructure Development"
        ]
    };

    return (
        <Script
            id="schema-org-global"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
    );
}
