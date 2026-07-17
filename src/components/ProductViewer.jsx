import React from "react";

function ProductViewer() {
  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>
	{/* controls */}
      <div className="controls">
        <p className="info">MacbookPro 16" in space Black</p>
		{/* color and size controls */}
        <div className="flex-center gap-5 mt-5">
			{/* color control */}
          <div className="color-control">
				<div className="bg-neutral-300"/>
				<div className="bg-neutral-900"/>
          </div>
		  {/* size control */}
		  <div className="size-control">
			<div><p>14"</p></div>
			<div><p>16"</p></div>
		  </div>
        </div>
      </div>
	{/* 3d canvas */}
	<p className="text-white text-4xl">Render canvas</p>
	
    </section>
  );
}

export default ProductViewer;
