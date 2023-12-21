const { useRouter } = require("next/router");

const Blog = () => {
  const { query } = useRouter();
  const { id } = query;
  console.log(id)
  return (
    <>
      <h1>{id?.map((x)=><span key={x}>{x}</span>)}Blog</h1>
    </>
  );
};

export default Blog;
