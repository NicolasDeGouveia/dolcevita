import Hero from '../components/Hero/Hero';
import Listing from '../components/Listing/Listing';
import { SliderDataTwo } from '../data/SliderData';

export default function Travels() {
  return (
    <>
      <Hero Slides={SliderDataTwo} />
      <Listing />
    </>
  );
}
