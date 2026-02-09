'use client';
import { SlideLeft, SlideRight, SlideUp, Hovering } from "@/app/components/Animations";
import Image from "next/image";

const Cards = [
  {
    id: "1",
    name: "Secure Access",
    img: "/Vault/kf1.png",
    description: "Access your documents securely from any device with our user-friendly interface.",
  },
  {
    id: "2",
    name: "Mobile Uploads",
    img: "/Vault/mobileuploads.png",
    description: "Easily upload documents from your mobile device with our dedicated app."
  },
  {
    id: "3",
    name: "Advanced Encryption",
    img: "/Vault/advancedencryption.png",
    description:
      "Benefit from industry-leading encryption standards to protect your sensitive information.",
  },
];

export const KeyFeatures = () => {
  return (
    <section className="relative w-full flex items-center justify-center py-24 px-6">
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center text-center">

        <SlideLeft>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-(--text-primary)">
            Key Features
          </h2>
        </SlideLeft>

        <SlideRight>
          <p className="text-lg sm:text-xl mb-14 text-(--text-primary)">
            Vault offers a range of features to ensure your documents are safe and accessible.
          </p>
        </SlideRight>

        <SlideUp>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center">
            {Cards.map((card) => (
              <Hovering key={card.id}>
                <div
                  className="
                    bg-(--card-bg)
                    rounded-2xl
                    p-6  w-screen md:max-w-[400px] h-[380px]
                    flex flex-col gap-2 items-center  text-left ">
                  {/* Image */}
                  <Image
                    src={card.img}
                    alt={card.name}
                    width={400}
                    height={130}
                    className="object-contain mb-3"
                  />
                  {/* Title */}
                  <h3 className="text-(--text-primary) font-bold text-2xl md:text-[18px] ">
                    {card.name}
                  </h3>
                  {/* Description */}
                  <p className="text-(--text-secondary) text-lg md:text-[15px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Hovering>
            ))}
          </div>
        </SlideUp>

      </div>
    </section>
  );
};
