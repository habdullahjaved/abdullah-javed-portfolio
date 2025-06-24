import Image from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  image: string; // screenshot
  logo?: string; // optional logo
  url: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  logo,
  url,
}: ProjectProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
    >
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={800}
          height={500}
          className="w-full object-cover"
        />

        {/* {logo && (
          <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow">
            <Image src={logo} alt={`${title} Logo`} width={40} height={40} />
          </div>
        )} */}
      </div>

      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold group-hover:text-green-600 transition">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </a>
  );
}
