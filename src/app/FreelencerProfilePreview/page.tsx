// "use client";
// import Image from "next/image";

// export default function FreelencerProfilePreview({
//   name,
//   imageUrl,
//   bio,
//   skills = [],
//   experience,
//   projectTitle,
//   projectDescription,
//   techStacks = [],
//   degree,
//   school,
//   graduationYear,
//   language,
// }: any) {
//   return (
//     <div className="mt-10 p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-8 text-indigo-500">Profile Preview</h2>

//       <div className="space-y-8">
//         <div className="flex items-center">
//           {imageUrl && (
//             <Image
//               src={imageUrl}
//               alt={name}
//               width={100}
//               height={100}
//               className="rounded-full border-2 border-indigo-500 mr-6"
//             />
//           )}
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
//             <p className="text-gray-600 mt-2">{bio}</p>
//           </div>
//         </div>

//         <div className="border-t pt-4">
//           <h4 className="text-lg font-semibold text-gray-800 mb-2">
//             Skills & Experience
//           </h4>
//           <p className="text-gray-600">
//             <span className="font-semibold">Skills:</span> {Array.isArray(skills) ? skills.join(", ") : skills}
//           </p>
//           <p className="text-gray-600 mt-1">
//             <span className="font-semibold">Experience:</span> {experience} years
//           </p>
//         </div>

//         <div className="border-t pt-4">
//           <h4 className="text-lg font-semibold text-gray-800 mb-2">
//             Work Experience
//           </h4>
//           <p className="text-gray-600">
//             <span className="font-semibold">Project Title:</span> {projectTitle}
//           </p>
//           <p className="text-gray-600 mt-1">
//             <span className="font-semibold">Description:</span> {projectDescription}
//           </p>
//           <p className="text-gray-600 mt-1">
//             <span className="font-semibold">Tech Stacks:</span> {Array.isArray(techStacks) ? techStacks.join(", ") : techStacks}
//           </p>
//         </div>

//         <div className="border-t pt-4">
//           <h4 className="text-lg font-semibold text-gray-800 mb-2">Education</h4>
//           <p className="text-gray-600">
//             <span className="font-semibold">Degree:</span> {degree}
//           </p>
//           <p className="text-gray-600 mt-1">
//             <span className="font-semibold">School:</span> {school}
//           </p>
//           <p className="text-gray-600 mt-1">
//             <span className="font-semibold">Graduation Year:</span> {graduationYear}
//           </p>
//         </div>

//         <div className="border-t pt-4">
//           <h4 className="text-lg font-semibold text-gray-800 mb-2">
//             Preferred Language
//           </h4>
//           <p className="text-gray-600">{language}</p>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";
import Image from "next/image";

export default function FreelencerProfilePreview({
  name,
  imageUrl,
  bio,
  skills = [],
  experience,
  projectTitle,
  projectDescription,
  techStacks = [],
  degree,
  school,
  graduationYear,
  language,
}: any) {
  return (
    <div className="mt-10 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-8 text-indigo-600 tracking-tight">
        Profile Preview
      </h2>

      <div className="space-y-8">
        <div className="flex items-center">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={name}
              width={120}
              height={120}
              className="rounded-full border-4 border-indigo-500 mr-6 shadow-md transition-transform duration-200 transform hover:scale-105"
            />
          )}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
            <p className="text-gray-700 mt-3">{bio}</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Skills & Experience
          </h4>
          <p className="text-gray-700">
            <span className="font-semibold">Skills:</span> {Array.isArray(skills) ? skills.join(", ") : skills}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Experience:</span> {experience} years
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Work Experience
          </h4>
          <p className="text-gray-700">
            <span className="font-semibold">Project Title:</span> {projectTitle}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Description:</span> {projectDescription}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Tech Stacks:</span> {Array.isArray(techStacks) ? techStacks.join(", ") : techStacks}
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">Education</h4>
          <p className="text-gray-700">
            <span className="font-semibold">Degree:</span> {degree}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">School:</span> {school}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Graduation Year:</span> {graduationYear}
          </p>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Preferred Language
          </h4>
          <p className="text-gray-700">{language}</p>
        </div>
      </div>
    </div>
  );
}
