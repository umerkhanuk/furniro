import Image from "next/image"
import blog1 from "../public/blog1.png"
import blog2 from "../public/blog2.png"
import blog3 from "../public/blog3.png"


const BlogPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 p-10">
      <div className="lg:w-2/3 space-y-10">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={blog1}
            alt="Millennial design"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
              <span>Admin</span>
              <span>14 Oct 2022</span>
                <span> Wood</span>

            </div>
            <h2 className="text-xl font-semibold mb-4">Going all-in with millennial design</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Mauris vitae ultricies leo integer malesuada nunc.
            </p>

            <button className="text-yellow-600 font-semibold hover:underline">Read more</button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={blog2}
            alt="Decorating ideas"
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
              <span>Admin</span>
                <span>14 Oct 2022</span>
                <span> Handmade</span>
             </div>

            <h2 className="text-xl font-semibold mb-4">Exploring new ways of decorating</h2>
            
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Mauris vitae ultricies leo integer malesuada nunc.
            </p>
            <button className="text-yellow-600 font-semibold hover:underline">Read more</button>
          </div>

        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={blog3}
            alt="Millennial design"
             className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
              <span>Admin</span>
              <span>14 Oct 2022</span>
              <span> Wood</span>
            </div>

            <h2 className="text-xl font-semibold mb-4">Handmade pieces that took time to make</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Mauris vitae ultricies leo integer malesuada nunc.
            </p>
            <button className="text-yellow-600 font-semibold hover:underline">Read more</button>
          </div>
        </div>

      </div>


      <aside className="lg:w-1/3 space-y-10">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-6">Categories</h3>
          <ul className="space-y-4">
            <li className="flex justify-between text-gray-600">
              <span>Crafts</span> <span>2</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>Design</span> <span>8</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>Handmade</span> <span>7</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>Interior</span> <span>1</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>Wood</span> <span>6</span>
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-6">Recent Posts</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
            <Image
            src={blog3}
                alt="Post thumbnail"
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div>
                <p className="text-gray-800 font-medium">Going all-in with millennial design</p>
                <span className="text-gray-500 text-sm">03 Aug 2022</span>
              </div>
            </li>
            <li className="flex items-start">
                <Image
                 src={blog3}
                alt="Post thumbnail"
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div>
                <p className="text-gray-800 font-medium">Exploring new ways of decorating</p>
                <span className="text-gray-500 text-sm">03 Aug 2022</span>
              </div>
            </li>
            <li className="flex items-start">
               <Image
               src={blog3}
                alt="Post thumbnail"
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div>
                <p className="text-gray-800 font-medium">Handmade pieces that took time to make</p>
                <span className="text-gray-500 text-sm">03 Aug 2022</span>
              </div>
            </li>
            <li className="flex items-start">
                 <Image
                 src={blog3}
                alt="Post thumbnail"
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div>
                <p className="text-gray-800 font-medium">Modern home in Milan</p>
                <span className="text-gray-500 text-sm">03 Aug 2022</span>
              </div>
            </li>
            <li className="flex items-start">
            <Image
              src={blog3}
                alt="Post thumbnail"
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div>
                <p className="text-gray-800 font-medium">Colorful office redesign</p>
                <span className="text-gray-500 text-sm">03 Aug 2022</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default BlogPage;
