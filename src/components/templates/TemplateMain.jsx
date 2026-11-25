import React from "react";

const TemplateMain = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
	      <aside className="bg-black text-white">
		      <div className="text-center p-2 text-md">LOGO</div>
	        <nav>
	          sidebar
	        </nav> 
	      </aside>
	      <main className="bg-red-100">{children}</main>
      </div>      
    </>
  );
};

export default TemplateMain;
