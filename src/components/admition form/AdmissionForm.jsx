// // components/AdmissionForm.js
// import { useState } from 'react';

// export default function AdmissionForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     grade: '',
//     parentName: '',
//     email: '',
//     phone: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here, you can send data to a server, for example.
//   };

//   return (
//     <form onSubmit={handleSubmit} className="md:container mx-auto px-5 mt-5 ">
//       <div className="p-2 mb-4 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200">
//         <label className="block text-sm font-medium text-gray-600">First Name:</label>
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="p-2 mb-4 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200">
//         <label className="block text-sm font-medium text-gray-600">Last Name:</label>
//         <input
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">Date of Birth:</label>
//         <input
//           type="date"
//           name="dateOfBirth"
//           value={formData.dateOfBirth}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">Grade:</label>
//         <input
//           type="text"
//           name="grade"
//           value={formData.grade}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">Parent's Name:</label>
//         <input
//           type="text"
//           name="parentName"
//           value={formData.parentName}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-600">Phone:</label>
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           className="w-full p-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }
