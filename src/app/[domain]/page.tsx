import { layouts } from '@/constant/layouts';

async function getData(domain:string) {
  const res = await fetch(`https://blazorstagingapi.azurewebsites.net/api/Config?URL=${domain}/`)
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

const HomePage = async ({ params }: { params: { domain: string } }) => {
  // BE
  const tenant = 'jimmy';

  const data=await getData(params.domain);
  // eslint-disable-next-line no-console
  console.log('bot config ',data)

  const Home = layouts.home[tenant];

  return (
    <div>
      <p>Test Page {params.domain} {JSON.stringify(data)}</p>
      <Home />
    </div>
  );
};



export default HomePage;
