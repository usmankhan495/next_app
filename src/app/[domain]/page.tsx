import { layouts } from '@/constant/layouts';

const HomePage = async ({ params }: { params: { domain: string } }) => {
  const tenant = 'jimmy';

  const Home = layouts.home[tenant];

  return (
    <div>
      <p>Test Page {params.domain}</p>
      <Home />
    </div>
  );
};

export default HomePage;
