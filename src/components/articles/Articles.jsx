import { FiArrowUpRight } from "react-icons/fi";
import { articles } from "../../constants";

function Articles() {
  return (
    <section
      className="bg-gradient-to-b from-primary-700 to bg-primary-600 lg:pt-[100px] lg:pb-[160px] pb-[60px]"
      id="articles"
    >
      <div className="container px-3 mx-auto font-workSans">
        {/* section title */}
        <div className="flex flex-col items-center justify-between py-10 md:flex-row lg:pb-[100px]">
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-anton text-4xl lg:text-[72px] lg:leading-[80px] text-primary-300">
              My Latest Articles
            </h3>
            <p className="text-white font-workSans text-sm lg:text-lg lg:leading-[26px] max-w-[740px]">
              Our content strategy based on audience feedback and performance
              metrics, you can get compelling articles that resonate with your
              audience and drive meaningful results for your business.
            </p>
          </div>
          {/* Real all button */}
          <div className="text-lg font-bold text-white rounded-md bg-gradient-to-r from-primary-300 to-primary-600 p-0.5 hidden lg:block">
            <a
              href=""
              className="items-center gap-6 px-5 py-3 text-lg font-bold text-white rounded md:flex font-urbanist bg-primary-600"
            >
              Read all Articles <FiArrowUpRight />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-2.5 ">

          {articles.map((article) => (
            <div key={article.id} className="p-4 rounded-xl bg-primary-600 h-[536px] border border-primary-300 shadow-custom-green">
            <img
              src={article.image}
              alt={article.name}
              className="h-[230px] w-full object-cover rounded-t-lg"
            />

            <div className="mt-2.5 text-white space-y-3">
              <p className="font-bold uppercase font-urbanist leading-[23px]">
              {article.created_at}
              </p>
              <h3 className="font-anton text-[31px] leading-[38px]">
              {article.name}
              </h3>
              <p className="font-medium font-urbanist leading-[23px]">
              {article.description}
              </p>

              <a
                href=""
                className="inline-flex items-center gap-3 px-3 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out transform rounded-md lg:font-medium lg:px-5 lg:py-3 lg:text-xl bg-gradient-to-r from-primary-600 to-primary-300 hover:scale-105 hover:bg-gradient-to-r hover:from-primary-300 hover:to-primary-600 font-workSans text-[15px]"
              >
                Read More
                <FiArrowUpRight />
              </a>
            </div>
          </div>
          ))}

        </div>

        {/* Small and medium device read all article button */}
        <div className="flex items-end justify-center mt-10 lg:hidden">
          <div className="text-lg font-bold text-white rounded-md bg-primary-300 p-0.5 ">
          <a href="" className="flex items-center w-auto gap-6 px-5 py-3 text-lg font-bold text-white rounded md:flex font-urbanist bg-primary-600">Read all Articles <FiArrowUpRight /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
