import Link from "next/link";
import { livvic } from "@/app/layout";
import Section from "../Section/Section";
import Image from "next/image";

export default function Header() {
  return (
    <header className='bg-violet-light'>
      <Section className='flex flex-col text-center items-center justify-between lg:text-left lg:flex-row  gap-10'>
        <div>
          <h1 className='text-white text-4xl mb-12 lg:mb-[10rem] font-bold'>
            ALISON NAILS
          </h1>
          <div className='mb-6'>
            <h2 className='text-aquamarine text-7xl max-w-2xl'>
              Date un poco de mimos
            </h2>
            <p className={`text-white text-2xl mb-12 ${livvic.className}`}>
              Relájate, recuéstate, ¡te arreglaremos las uñas!
            </p>
            <Link
              href=''
              className={`block mx-auto w-fit transition-colors bg-white text-violet-light px-14 py-3 font-semibold hover:bg-pink-normal hover:text-white lg:mx-0 ${livvic.className}`}
            >
              AGENDAR CITA
            </Link>
          </div>
        </div>
        <div className='p-2 h-fit border-2 rounded-[6rem] border-aquamarine overflow-hidden'>
          <Image
            src='/nails_header.png'
            alt='Fotografía de una mano con las uñas arregladas'
            width='400'
            height='400'
          />
        </div>
      </Section>
    </header>
  );
}
