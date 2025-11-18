import { useState } from "react";

const Gallery = () => {
  // Placeholder image data - in production, these would be real images
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    alt: `INNOFEST ${2024 - (i % 3)} Event Photo ${i + 1}`,
    category: ["competition", "workshop", "cultural"][i % 3],
  }));

  const [filter, setFilter] = useState("all");

  const filteredImages = filter === "all" 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Relive the memories from past editions of INNOFEST
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "competition", "workshop", "cultural"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? "bg-primary text-primary-foreground glow-primary"
                  : "glass-effect hover:bg-primary/10"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="glass-effect rounded-lg overflow-hidden hover:glow-primary transition-all duration-300 group cursor-pointer">
                <div className="relative aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-muted-foreground text-sm mb-2">Image Placeholder</p>
                    <p className="font-display text-primary">{image.alt}</p>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
