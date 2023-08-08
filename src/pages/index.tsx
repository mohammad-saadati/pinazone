import { HomeProps } from "../interfaces/api";

export default function Home({ data }: HomeProps) {
  console.log(data);
  if (!data) return <div>request failed</div>;
  if(data.length === 0) return <div>No data available</div>
  return <div>{data[0]?.id}</div>;
}

// export async function getStaticProps() {
  // try {
  //   const res = await fetch("https://fake-api-roan.vercel.app/photos", {});
  //   const data = await res.json();
  //   console.log("***", data);

  //   return {
  //     props: { data },
  //   };
  // } catch (error) {
  //   console.error("Fetch error:", error);

  //   return {
  //     props: {
  //       data: {},
  //     },
  //   };
  // }
// }
