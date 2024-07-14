import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat
        dolore harum nam, mollitia at officia pariatur aut molestias voluptas
        iure natus voluptatem aliquam, nisi tenetur, sequi ad dignissimos
        repellendus ea id! Corrupti.
      </p>
      <Outlet />
    </div>
  );
}
