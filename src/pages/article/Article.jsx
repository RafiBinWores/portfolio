import { articles } from "../../constants";

function Article() {
  return (
    <div className="bg-gradient-to-b from-primary-700 to bg-primary-600">
        <div className="container px-3 pt-20 pb-20 mx-auto font-workSans lg:pt-60">
            {/* section title */}
        <div className="flex flex-col items-center justify-between py-10 md:flex-row lg:pb-[50px]">
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
        </div>


        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-2.5 ">
          {articles.map((article) => (
            <div
              key={article.id}
              className="p-4 rounded-xl bg-primary-600 h-[536px] border border-primary-300 shadow-custom-green"
            >
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
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Article