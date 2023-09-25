import { layouts } from '@/constant/layouts';

export default function AboutPage({ params }: { params: { domain: string } }) {
  // get this tenant tenant from BE based on domain
  const tenant = null;
  const About = layouts.about[tenant || 'jimmy'];

  return (
    <div>
      Test about {params.domain}
      <About />
    </div>
  );
}
