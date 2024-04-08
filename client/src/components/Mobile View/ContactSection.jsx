/* eslint-disable react/prop-types */

const ContactSection = ({ showAllUser , user }) => {
  console.log(showAllUser)
  return (
    <div>
      {
      showAllUser.map(({userInfo:{email,fullName,userId , img}}) => {
        // Use parentheses for conditional rendering
        return user.id  != userId ? (
          <div
            className="cursor-pointer flex items-center px-4 py-4 border-b"
            key={userId}
          >
            <img src={img} className="h-16 w-16 rounded-full" alt="h" />
            <div className="accountInfo ml-6 text-white">
              <h1 className="text-lg text-black">{fullName}</h1>
              <h2 className="text-sm font-light text-black">{email}</h2>
            </div>
            <hr />
          </div>
        ):
        null
      })}
    </div>
  )
}

export default ContactSection