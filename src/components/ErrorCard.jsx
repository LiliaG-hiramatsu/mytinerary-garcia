export default function ErrorCard() {
    return (
        <div className="w-full min-h-screen bg-[url('/pageNotFound.jpg')] bg-cover flex justify-center">
            <div className="my-80 text-center text-gray-300">
                <h1 className="text-[48px] font-semibold">404 Error</h1>
                <p className="text-[24px]">City not found, please try another city.</p>
            </div>
        </div>
    )
}
