export default function Home({ data }) {
  console.log(data.photos[0].id)
  return <div>{data.photos[0].id}</div>;
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/home");

  const data = await res.json();

  return {
    props: { data },
  };
}
