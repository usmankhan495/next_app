 const TestPage=({
  params,
}: {
  params: { domain: string };
})=>{
  console.log('params: ',params);
  return(
    <div>
      <h1>Test Page {params.domain}</h1>
    </div>
  )
}

export default TestPage;