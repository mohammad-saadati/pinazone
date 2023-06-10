export default function post({}) {
  return <div></div>;
}

export async function getStaticPaths() {
  const res = await fetch("https://fake-api-roan.vercel.app/postsIDs");
  const posts = await res.json();

  const paths = posts.map((post) => ({ params: { id: post.toString() } }));

  return {
    // if paths is an empty array, fallback has to be 'blocking' to load pages on demand
    paths,
    // if set to false, just initial paths will be served and others will be 404
    // if set to true, new client requested paths are csr for the first itme and ssr for future requests
    // if set to 'blocking' new paths will be ssr even for the first time
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return { props: { data: {} } };
}
