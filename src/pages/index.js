import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Infos from '../components/Infos/Infos';
import InfosTwo from '../components/InfosTwo/Infos';
import Listing from '../components/Listing/Listing';
import { InfosData, InfosDataTwo } from '../data/InfosData';
import { SliderData } from '../data/SliderData';

export default function Home() {
  return (
    <>
      <Hero Slides={SliderData} />
      <Infos infosData={InfosData} />
      <Listing />
      <Features />
      <InfosTwo infosData={InfosDataTwo} />
    </>
  );
}
