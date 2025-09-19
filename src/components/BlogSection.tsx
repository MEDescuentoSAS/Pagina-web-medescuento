import { Card } from "@/components/ui/card";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/Galeria/fotos1.jpg",
    },
    {
      id: 2,
      image: "/Galeria/fotos2.jpg",
    },
    {
      id: 3,
      image: "/Galeria/fotos3.jpg",
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-accent text-white px-8 py-4 rounded-full mb-8">
            <h2 className="text-2xl font-bold">FOTOS</h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Mira todo lo nuevo y las proyecciones que tiene MEDescuento
          </p>
        </div>

        {/* Blog Cards solo con imágenes */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={`Imagen ${post.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;