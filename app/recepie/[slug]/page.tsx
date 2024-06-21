export default function Recepiee({ params }: { params: { slug: string } }) {
  return <div className="recepie">{params.slug}</div>;
}
