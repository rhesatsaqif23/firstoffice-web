import { OfficeSpace } from "../types/officeSpace.types";

export const officeSpaces: OfficeSpace[] = [
  {
    id: 1,
    title: "GoWork Jakarta",
    slug: "gowork-jakarta",
    price: 18560000,
    duration: "20 days",
    location: "Jakarta Pusat",
    rating: 4.5,
    address: "Dekat gedung BWA HQ di Jakarta no 102939",
    image: "/assets/images/thumbnails/thumbnails-1.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-2.png",
      "/assets/images/thumbnails/thumbnail-details-3.png",
    ],
    tags: ["Popular"],
    about:
      "Whether you need quiet private space away from distractions or collaborate in person...",
    features: [
      "Global Event",
      "Privacy",
      "Free Move",
      "Sustainibility",
      "Extra Snacks",
      "Compact",
    ],
    isFullyBooked: true,
    salesContacts: [
      {
        name: "Masayoshi",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Fuji Oivina",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Pakuwon City Center Surabaya",
    slug: "pakuwon-city-center-surabaya",
    price: 11650000,
    duration: "15 days",
    location: "Surabaya",
    rating: 4.8,
    address: "Dekat gedung BWA HQ di Surabaya no 102939",
    image: "/assets/images/thumbnails/thumbnails-2.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-2.png",
      "/assets/images/thumbnails/thumbnail-details-3.png",
    ],
    tags: ["Cheaper"],
    about:
      "Whether you need quiet private space away from distractions or collaborate in person...",
    features: ["Global Event", "Privacy", "Extra Snacks", "Compact"],
    isFullyBooked: false,
    salesContacts: [
      {
        name: "Rinda",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Amara Oivina",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-2.png",
      },
      {
        name: "Ikuza Oivina",
        role: "Sales Manager",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
  },
];
