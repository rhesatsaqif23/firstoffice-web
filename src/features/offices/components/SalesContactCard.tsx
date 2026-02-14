import Image from "next/image";
import { Contact } from "../types/officeSpace.types";

export default function SalesContactCard({ contact }: { contact: Contact }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-4">
        <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <div className="w-full h-full relative">
            <Image
              src={contact.photo}
              alt={contact.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="font-bold">{contact.name}</p>
          <p className="text-sm leading-[21px]">{contact.role}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <a href="#">
          <Image
            src="/assets/images/icons/call-green.svg"
            className="w-10 h-10"
            width={40}
            height={40}
            alt="icon"
          />
        </a>
        <a href="#">
          <Image
            src="/assets/images/icons/chat-green.svg"
            className="w-10 h-10"
            width={40}
            height={40}
            alt="icon"
          />
        </a>
      </div>
    </div>
  );
}
