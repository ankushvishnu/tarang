import COLORS from '../constants/colors';
import SectionHeader from '../components/ui/SectionHeader';
import PRODUCTS from '../data/products';

export default function ProductsSection() {
  return (
    <section
      id="products"
      style={{
        padding: "100px 32px",
        background: "rgba(255,255,255,0.35)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader eyebrow="Our Collection" title="What We Sell" />

        <div
          className="products-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
        >
          {PRODUCTS.map((product) => (
            <a
              key={product.name}
              href="https://vyaparapp.in/store/tarangmusicals"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover product-card"
              style={{
                background: "rgba(255,255,255,0.75)",
                border: product.highlighted
                  ? "1px solid rgba(174,156,238,0.45)"
                  : "1px solid rgba(174,156,238,0.2)",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: product.highlighted
                  ? "0 8px 32px rgba(174,156,238,0.18)"
                  : "0 4px 16px rgba(174,156,238,0.08)",
                cursor: "pointer",
                textDecoration: "none",
                display: "block",
              }}
            >
              {/* Image */}
              <div style={{
                width: "100%", height: 200,
                overflow: "hidden",
                position: "relative",
                background: "rgba(174,156,238,0.08)",
              }}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="product-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 50%, rgba(45,27,105,0.35) 100%)",
                }} />
              </div>

              {/* Text */}
              <div style={{ padding: "24px 24px 28px" }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 22, fontWeight: 600,
                  color: COLORS.dark,
                  marginBottom: 8,
                  letterSpacing: "0.04em",
                }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: 14, color: COLORS.textLight, lineHeight: 1.7, margin: 0 }}>
                  {product.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
