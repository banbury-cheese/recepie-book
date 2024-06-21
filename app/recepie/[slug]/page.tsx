import { fullRecepie } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

async function getData(slug: string) {
  const query = `
      *[_type == 'recepie' && slug.current == "${slug}"]| order(_createdAt asc){
      name,
      "currentSlug": slug.current,
      duration,
      difficulty,
      chef,
      content,
      mainImage,
      images
    }[0]
  `;

  const data = await client.fetch(query);

  return data;
}

export default async function Recepiee({
  params,
}: {
  params: { slug: string };
}) {
  const recepie: fullRecepie = await getData(params.slug);

  console.log(recepie);

  return (
    <div className="recepie">
      <p>
        <b>
          {recepie.chef}, {recepie.name}
        </b>{" "}
        | {recepie.duration} - <i>{recepie.difficulty}</i>
      </p>
      <br />
      {/* <p>
        {recepie.duration} - <i>{recepie.difficulty}</i>
      </p> */}
      <div className="recepieContent width-constrained">
        <PortableText value={recepie.content} />
      </div>
      <div className="recepieContent__images width-constrained">
        {recepie.images.map((image: any, idx: number) => (
          <Link
            href={urlFor(image).url()}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              key={idx}
              width="500"
              height="500"
              alt="recepieImage"
              src={urlFor(image).url()}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export const revalidate = 60;
