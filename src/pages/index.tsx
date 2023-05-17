export default function Home({ data: [] }) {
  return <div>data</div>;
}

export async function getStaticProps() {
  const data = await fetch("api/posts");

  return {
    props: { data },
  };
}
