import { HomeProps } from "../interfaces/api";

export default function Home({ data }: HomeProps) {
  if (!data.photos) return <div>request failed</div>;
  return <div>{data.photos[0].id}</div>;
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:3000/api/home");

    const data = await res.json();

    return {
      props: { data },
    };
  } catch (error) {
    console.error("Fetch error:", error);

    return {
      props: {
        data: {},
      },
    };
  }
}
