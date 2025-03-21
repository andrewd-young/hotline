interface ListingCardProps {
  title: string
  price: number
  imageUrl: string
  isNew?: boolean
  location: string
  id: string
}

const ListingCard = ({
  title,
  price,
  imageUrl,
  isNew = false,
  location,
  id
}: ListingCardProps) => {
  return (
    <a href={`/offering/${id}`}>
    <div className="max-w-sm">
      {/* Image Container */}
      <div className="aspect-[3/4] mb-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-1">
        <div className="flex items-baseline gap-2">
          {isNew && (
            <span className="text-sm italic">New!</span>
          )}
          <h2 className="font-normal">{title}</h2>
        </div>
        <div className="text-sm text-gray-600">
          {location}
        </div>
        <div className="font-normal">
          ${price}
        </div>
      </div>
    </div>
    </a>
  )
}

export default ListingCard 