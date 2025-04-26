interface ItemProps {
  title: string;
  image: string;
}

export default function Item({ title, image }: ItemProps) {
  if (!title || !image) {
    console.error("Item component is missing required props: title or image.");
    return null; // Return nothing if props are missing
  }

  return (
    <div className="item border p-4 rounded shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-auto mb-2 object-cover rounded"
      />
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
  );
}