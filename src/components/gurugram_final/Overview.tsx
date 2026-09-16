type OperatingModelProps = {
  showCta?: boolean;
};

const OperatingModel = ({ showCta = true }: OperatingModelProps) => {
  return (
    <section className="bg-white py-12 px-4 sm:py-20 sm:px-6" id="overview">
      <div className="w-full max-w-[720px] lg:max-w-[80%] mx-auto text-center">
        <h2 className="text-[#022158] 
                  font-black
                  text-[34px]
                  sm:text-[48px]
                  md:text-[64px]
                  xl:text-[42px]
                  leading-[0.94]">
          AI is no longer an experimentation agenda. It is becoming an operating model.
        </h2>

        <p className="mt-6 sm:mt-8 text-blue-950/80 text-[15px] sm:text-base md:text-lg leading-relaxed">
          AI Innovation Summit brings together the technology leaders responsible for making that transition happen inside large enterprises: CIOs, CTOs, CDOs, CISOs, AI leaders and transformation heads.
        </p>

        <p className="mt-5 mb-0 sm:mt-6 sm:mb-8 text-blue-950/80 text-[15px] sm:text-base md:text-lg leading-relaxed">
          Across one day, the conversation moves beyond AI demos and pilots to the harder questions of deployment, governance, security, infrastructure, organisational readiness and enterprise-scale execution.
        </p>


      </div>
    </section>
  );
};

export default OperatingModel;