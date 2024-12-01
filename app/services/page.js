// Import React Icons
import { FaSearch, FaLaptopCode, FaPenNib, FaBullhorn, FaFacebookF, FaGoogle } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Service1 from "@/components/Service1";
import Service2 from "@/components/Service2";
import Service3 from "@/components/Service3";
import Service4 from "@/components/Service4";
import Service5 from "@/components/Service5";
import Service6 from "@/components/Service6";

const services = [
  {
    id: 1,
    title: "SEO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    bgColor: "bg-blue-100",
    icon: <FaSearch className="text-blue-500 w-6 h-6" />, 
    link:"services/seo"
  },
  {
    id: 2,
    title: "Website Designing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    bgColor: "bg-white",
    icon: <CgWebsite className="text-blue-500 w-6 h-6" />, // Web Design Icon
    link:"services/website-designing"
  },
  {
    id: 3,
    title: "Logo Designing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    bgColor: "bg-blue-100",
    icon: <FaPenNib className="text-blue-500 w-6 h-6" />, // Logo Design Icon
    link:"services/logo-designing"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    bgColor: "bg-white",
    icon: <FaBullhorn className="text-blue-500 w-6 h-6" />, // Marketing Icon
    link:"services/digital-marketing"
  },
  {
    id: 5,
    title: "Social Media Marketing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    bgColor: "bg-blue-100",
    icon: <FaFacebookF className="text-blue-500 w-6 h-6" />, // Social Media Icon
    link:"services/social-media-marketing"
  },
  {
    id: 6,
    title: "Google Ads",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    bgColor: "bg-white",
    icon: <FaGoogle className="text-blue-500 w-6 h-6" />, // Google Ads Icon
    link:"services/google-ads"
  },
];

const ServicesSection = () => {
  return (
    <>
    <section className="py-32 md:py-36 pb-20 md:pb-20 px-6 md:px-20 lg:px-40">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
          Choose Best <span className="text-blue-500">Service</span>
        </h2>
        <p className="mt-4 text-gray-600">
          It is a long established fact that a reader will be distracted by the
          of a page when looking at its distribution layout.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className={`p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300 relative ${service.bgColor}`}
          >
            {/* Icon Section */}
            <div className="w-12 h-12 flex items-center justify-center border-blue-500 border-2 bg-white rounded-lg shadow-md">
              {service.icon}
            </div>

            {/* Title and Description */}
            <h3 className="mt-4 text-xl font-bold text-black">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600">{service.description}</p>

            {/* Learn More Link */}
            <a
              href={service.link}
              className="mt-4 inline-block text-blue-500 font-medium border-b-2 border-blue-500 hover:text-black hover:border-black"
            >
              Learning more →
            </a>
          </div>
        ))}
      </div>
    </section>
    <Service1/>
    <Service2/>
    <Service3/>
    <Service4/>
    <Service5/>
    <Service6/>
    </>
  );
};

export default ServicesSection;
