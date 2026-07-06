import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { Navigation } from '@/components/navigation';
import { Projects } from '@/components/projects';
import { Services } from '@/components/services';
import { Skills } from '@/components/skills';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
