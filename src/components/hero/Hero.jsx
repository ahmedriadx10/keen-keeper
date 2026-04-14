import { IoMdAdd } from "react-icons/io";

const Hero = () => {
  return (
    <section className="">

      <div className="text-center space-y-4">

<h2 className="text-5xl font-bold text-(--primaryContent)">Friends to keep close in your life</h2>
<p className="text-(--textColor) max-w-xl mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>

<div><button className="btn bg-(--primaryColor) text-white"><IoMdAdd />Add a Friend</button></div>
      </div>
      

{/* stats */}
<div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10 border-b border-[#E9E9E9]">

<div className="rounded-lg shadow text-center space-y-2 p-8 bg-base-100">
  <h6 className="text-(--primaryColor) font-semibold text-[32px]">8</h6>
  <span className="text-lg text-(--textColor)">Total Friends</span>
</div>
<div className="rounded-lg shadow text-center space-y-2 p-8 bg-base-100">
  <h6 className="text-(--primaryColor) font-semibold text-[32px]">8</h6>
  <span className="text-lg text-(--textColor)">Total Friends</span>
</div>
<div className="rounded-lg shadow text-center space-y-2 p-8 bg-base-100">
  <h6 className="text-(--primaryColor) font-semibold text-[32px]">8</h6>
  <span className="text-lg text-(--textColor)">Total Friends</span>
</div>
<div className="rounded-lg shadow text-center space-y-2 p-8 bg-base-100">
  <h6 className="text-(--primaryColor) font-semibold text-[32px]">8</h6>
  <span className="text-lg text-(--textColor)">Total Friends</span>
</div>

</div>

    </section>
  );
};

export default Hero;