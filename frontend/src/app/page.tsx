import DiceContent from "@/components/DiceContent";
import PlanesContainer from "@/components/PlanesContainer";
import Image from "next/image";

export default function Home() {
 

  return (   
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there <i className="ss ss-hop ss-6x"></i></h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <DiceContent />
            
            <PlanesContainer />

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
        </div>
      </div>
    </main>
  );
}
