// "use client"



// import { useRouter} from 'next/navigation'
// import { useSearchParams } from 'next/navigation';
// import { AboutJimmy } from "@/components/layouts/jimmy/about";

// export async function generateMetadata({
//   params,
// }: {
//   params: { domain: string; slug: string };
// }) {
//   const { domain, slug } = params;

//   console.log('domain: ',params);
//   // const data = await getPostData(domain, slug);
//   // if (!data) {
//   //   return null;
//   // }
//   // const { title, description } = data;

//   return {
//     title:"Chat with Jimmy Falon",
//     description:'Chat with Jimmy Falon',
//     openGraph: {
//       title:"Chat with Jimmy Falon",
//       description:'Chat with Jimmy Falon',
//     },
//     twitter: {
//       card: "summary_large_image",
//       title:"Chat with Jimmy Falon",
//       description:'Chat with Jimmy Falon',
//       creator: "@vercel",
//     },
//   };
// }

export default function About({
  params,
}: {
  params: { domain: string };
}) {

  // const router = useRouter();
  // const searchParams = useSearchParams()
  // const headersList=headers();
  // const domain=headersList.get('tenant'); // to get domain
  // headersList.get('next-url');

  // console.log('useRouter: ',domain);
  // const { tenant: resolvedTenant } = router;
  return (
    <div>
      Test about {params.domain}
    </div>
  )
}