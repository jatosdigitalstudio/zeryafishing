import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Feature from '@/components/Feature';
import About from '@/components/About';
import Brand from '@/components/Brand';
import Blogs from '@/components/Blogs';
import Review from '@/components/Review';
import CTA from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <About />
      <Brand />
      <Review />
      <Blogs />
      <CTA />
      <Footer />
    </>
  );
}
