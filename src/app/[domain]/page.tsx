import { layouts } from '@/constant/layouts';

async function getData(domain:string) {
  // eslint-disable-next-line no-console
  console.log('getData',  domain)
  const res = await fetch(`https://blazorstagingapi.azurewebsites.net/api/Config?URL=https://next-app-two-ruddy.vercel.app/`)
 
  if (!res.ok) {
  //  This will activate the closest `error.js` Error Boundary
  return {}
 }
 
  return res.json();
}
 

export default async function HomePage({ params }: { params: { domain: string } }) {
  // BE
  const tenant = 'jimmy';

  const data=await getData(params.domain);
  // eslint-disable-next-line no-console
  console.log('bot config ',data)

  const Home = layouts.home[tenant];

  return (
    <div>
      <p>Test Page {params.domain} </p>
      <Home />
    </div>
  );
};


