export default function Schedule(){
    return(
        <div className="px-10 bg-white">
            <div className="py-10 ">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">SCHEDULES</h2>
  <p className="text-center text-gray-600 mb-8">
    Select the best plan that fits your needs and start learning today!
  </p>
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300 text-center">
      <thead>
        <tr>
          <th className="border border-gray-300 bg-red-600 text-white py-3 px-4">Time</th>
          <th className="border border-gray-300 bg-blue-600 text-white py-3 px-4">Monday</th>
          <th className="border border-gray-300 bg-blue-600 text-white py-3 px-4">Tuesday</th>
          <th className="border border-gray-300 bg-blue-600 text-white py-3 px-4">Wednesday</th>
          <th className="border border-gray-300 bg-blue-600 text-white py-3 px-4">Thursday</th>
          <th className="border border-gray-300 bg-blue-600 text-white py-3 px-4">Friday</th>
          <th className="border border-gray-300 bg-blue-600 text-white py-3 px-4">Saturday</th>
          <th className="border border-gray-300 bg-blue-600 text-white py-3 px-4">Sunday</th>
        </tr>
      </thead>
      <tbody>
        {[
          "8am-9am",
          "10am-11am",
          "1pm-2pm",
          "3pm-5pm",
          "7pm-9pm",
        ].map((time) => (
          <tr key={time}>
            <td className="border border-gray-300 bg-red-100 text-red-600 py-3 px-4 font-semibold">
              {time}
            </td>
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <td
                  key={index}
                  className="border border-gray-300 bg-gray-100 py-3 px-4"
                ></td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        </div>
    )
}