interface ItemProps {
    title: string;
    image: string;
  }
  
  export default function Item({ title, image }: ItemProps) {
    return (
      <div className="item border p-4">
        <img src={image} alt={title} className="w-full h-auto mb-2" />
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    );
  }
