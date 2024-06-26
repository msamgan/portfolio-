export default function Categories({service}) {
    return <div className="w-full">
        {service.categories.map((category, index) => (
            <div key={index} className="rounded-md p-3 text-gray-900">
                <div className="mt-6 mb-2">
                    <h2 className="text-xl font-semibold tracking-wide">{category.name}</h2>
                </div>
                <p className="text-gray-800 font-light leading-7">{category.description}</p>
            </div>
        ))}
    </div>
}