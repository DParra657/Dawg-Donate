interface ItemProps {
  title: string;
  image: string;
}

export default function Item({ title, image }: ItemProps) {
  if (!title || !image) {
    console.error("Item component is missing required props: title or image.");
    return null; // Return nothing if props are missing
  }

  // Fallback image if the image is not available or not valid
  const placeholderImage = "/placeholder.png"; // Or any default image you prefer

  // Ensure that image starts with base64 format or is a valid URL
  const isBase64Image = image.startsWith('data:image');
  const imgSrc = isBase64Image ? image : placeholderImage;

  return (
    <div className="item border p-4 rounded shadow-md">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-auto mb-2 object-cover rounded"
        onError={(e) => e.currentTarget.src = placeholderImage} // Fallback in case the image fails to load
      />
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
    </div>
  );
}
