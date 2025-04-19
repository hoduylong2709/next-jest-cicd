type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return { title: `Post: ${slug}` };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return (
      <>
        <h1>Slug: {slug}</h1>
        <p>long ho</p>
        <p>Welcome to Hue</p>
      </>
  );
}
