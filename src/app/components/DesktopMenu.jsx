import Navigation from "@/app/components/Navigation"

export default function DesktopMenu({ data }) {
    return (
        <div className="space-y-4 text-gray-700 hidden lg:block">
            <Navigation data={data} />
        </div>
    )
}
