// Server component: emits one or more JSON-LD schemas as
// <script type="application/ld+json"> tags. Pass `schemas` as an array
// even for a single entry to keep the call sites uniform.
export default function JsonLd({ schemas }: { schemas: object[] }) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify is safe here because the schema objects are
          // built from static catalog content, never raw user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
