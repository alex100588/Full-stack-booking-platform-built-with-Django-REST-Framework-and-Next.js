
const ReservationSidebar = () => {
  return (
    <div className="p-6 col-span-2 rounded-xl border border-gray-300 shadow">
        <h2 className="p-1">price 200 lei</h2>
        <div className="mb-6 p-3 border border-gray-200">
            <label htmlFor="guests">Guests</label>
            <select className="w-full ml-1 text-sm" name="" id="guests">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
            </select>
        </div>

        <div className="w-full mb-6 bg-gray-700 cursor-pointer py-6 text-center text-white hover:bg-gray-600">
            Book
        </div>
        <div className="mb-4 px-2 flex justify-between align-center">
            <p>200 * 4 nights</p>
            <p>800 lei</p>
        </div>
        <div className="mb-4 px-2 flex justify-between align-center">
            <p>Tva</p>
            <p>20 lei</p>
        </div>
        <hr />
        <div className="mt-4 px-2 flex justify-between align-center">
            <p>Total</p>
            <p>820 lei</p>
        </div>
    </div>
  )
}

export default ReservationSidebar