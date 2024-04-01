import Dice from "@/components/Dice";
import Image from "next/image";

export default function Home() {
  return (   
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <div>

          <Dice />

          </div>
            <div className="stack">
              <div className="text-center border border-base-content card w-36 bg-base-100">
                <div className="card-body">
                  
                </div>
              </div> 
              <div className="text-center border border-base-content card w-36 bg-base-100">
                <div className="card-body">

                </div>
              </div> 
              <div className="text-center border border-base-content card w-36 bg-base-100">
                <div className="card-body">C</div>
              </div>
            </div>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </main>
  );
}
