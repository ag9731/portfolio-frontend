import React, { useState } from "react";
import ProjectsComponent from "./AdminComponents/ProjectsComponent";
import SkillComponent from "./AdminComponents/SkillComponent";
import ExperienceComponent from "./AdminComponents/ExperienceComponent";
import TestimonialsComponent from "./AdminComponents/TestimonialsComponent";
import ViewProjects from "./AdminComponents/ViewProjects";

const AdminDashboard = () => {
  const adminMenu = [
    {
      menuName: "Projects",
      component: <ProjectsComponent />,
    },
    {
      menuName: "All Projects",
      component: <ViewProjects/>
    },
    {
      menuName: "Skills",
      component: <SkillComponent />,
    },
    {
      menuName: "Experience",
      component: <ExperienceComponent />,
    },
    {
      menuName: "Testimonials",
      component: <TestimonialsComponent />,
    },
  ];
  console.log(adminMenu);
  const [selectedComponent, setSelectedComponent] = useState(
    adminMenu[0].component
  );

  // const handleComponentsChange = (e) => {};

  return (
    <div className="main flex w-full">
      <div className="sidebar bg-amber-200 w-[20%]">
        <ul className="flex flex-col gap-8 p-4">
          {adminMenu.map((menuItem, index) => {
            return (
              <>
                <div key={index}>
                  <li
                    className="border-2 p-3 cursor-pointer"
                    onClick={() => setSelectedComponent(menuItem.component)}
                  >
                    {menuItem.menuName}
                  </li>
                </div>
              </>
            );
          })}
        </ul>
      </div>
      <div className="w-[70%]">
        {selectedComponent}
      </div>
    </div>
  );
};

export default AdminDashboard;
