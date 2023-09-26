import { layouts } from '@/constant/layouts';

async function getData(domain:string) {
  // eslint-disable-next-line no-console
  console.log('getData',  domain)
  const res = await fetch(`https://blazorstagingapi.azurewebsites.net/api/Config?URL=${domain}`) 
  if (!res.ok) {
  //  This will activate the closest `error.js` Error Boundary
  return {}
 }
 
  return res.json();
}
 

export default async function HomePage({ params }: { params: { domain: string } }) {
  // BE
  const tenant = 'jimmy';

  const data=await getData('https://'+params.domain+'/');
  // eslint-disable-next-line no-console
  console.log('bot config ',data)

  const Home = layouts.home[tenant];

  return (
    <div>
      <p>Test Page version 1.1 {params.domain} {JSON.stringify(data)}</p>
      <Home />
    </div>
  );
};


