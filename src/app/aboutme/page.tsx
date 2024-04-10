import { ContactMe } from '@/components';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32">
      <section className="flex flex-col items-center gap-5">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white text-center">
          About Me
        </h1>

        <div className="dark:bg-black bg-white max-w-lg dark:text-white text-xl p-5 font-thin flex flex-col items-center rounded-lg border-2 gap-5 m-1 font-serif">
          <Image
            src="https://avatars.githubusercontent.com/u/38688596?s=96&v=4"
            alt="joey's image"
            className="rounded-full border-blue-500 border-4"
            width={96}
            height={96}
          />
          <p>
            Greetings! I'm Y.Darwin, a dedicated Full Stack Developer
            specializing in backend engineering, where I channel my passion for
            crafting robust and scalable solutions
          </p>
          <p>
            I've been diving into coding since January 2023, and honestly, it
            feels like my happy place. Learning how stuff comes together in the
            IT world gives me a real dopamine hit that I love.
          </p>
          <p>
            If you think I could be a good fit for any opportunities, please
            feel free to email me, which you can find in the contact section.
          </p>
        </div>
      </section>
      <ContactMe />
    </main>
  );
}
