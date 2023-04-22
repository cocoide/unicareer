const Header = () => {
    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex flex-row justify-between items-center py-2 px-10 w-full border-b border-gray-200">
                {/* Service Name*/}
                <div className="text-primary font-bold text-2xl"
                >Unicareer</div>
                {/* Avatar Button*/}
                <div className="bg-gray-200 h-10 w-10 rounded-full shadow-sm" />
            </div>
        </div>
    )
}
export default Header