type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    // Define all the possible slug values for static generation
    return [
        { slug: 'first-post' },
        { slug: 'second-post' },
        { slug: 'Test' },
        // Add all other slugs you need
    ];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return { title: `Post: ${slug}` };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return (
      <>
        <h1>Slug: {slug}</h1>
        <p>longho</p>
        <p>Welcome to Hue</p>
      </>
  );
}
